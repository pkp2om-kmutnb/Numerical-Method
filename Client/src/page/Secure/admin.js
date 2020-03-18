import React from 'react';
import UserinfoTable from '../../Component/UserinfoTable';
import FormEditor from '../../Component/FormEditor';
import Message from '../../Component/Message';
import UserinfoAPI from '../../UserinfoAPI';
import Cookies from 'universal-cookie';
import Menubar from '../../Component/Menubar';
const cookies = new Cookies();

class admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Userinfos: [],
            isEditForm: false,
            Userinfo: {
                id: "",
                username: "",
                password: "",
                email: ""
            },
            message: ""
        };

        this.deleteHandler = this.deleteHandler.bind(this);
        this.addHandler = this.addHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showEditForm = this.showEditForm.bind(this);
    }

    componentDidMount() {
        UserinfoAPI.getUserinfos().then(data => {
            console.log(data);
            this.setState({ Userinfos: data.response })
        });
    }

    resetForm() {
        this.setState({
            Userinfo: {
                id: "",
                username: "",
                password: "",
                email: ""
            }
        });
    }

    handleChange(e) {
        this.setState({
            Userinfo: {
                ...this.state.Userinfo,
                [e.target.name]: e.target.value
            }
        });
    }

    showEditForm(Userinfo) {
        this.setState({ isEditForm: true, Userinfo: Userinfo });
    }

    async deleteHandler(id) {
        const deleteData = await UserinfoAPI.deleteUserinfo(id);
        const message = deleteData.message;
        if (message.msgError) {
            this.setState({ message });
        }
        else {
            const data = await UserinfoAPI.getUserinfos();
            this.setState({ message, Userinfos: data.response })
        }
    }

    async updateHandler(e) {
        e.preventDefault();
        const updateData = await UserinfoAPI.updateUserinfo(this.state.Userinfo);
        const message = updateData.message;
        if (message.msgError) {
            this.setState({ message });
        }
        else {
            const data = await UserinfoAPI.getUserinfos();
            this.setState({ message, Userinfos: data.response })
        }
        this.setState({ isEditForm: false });
        this.resetForm();
    }

    async addHandler(e) {
        e.preventDefault();
        const postData = await UserinfoAPI.createUserinfo(this.state.Userinfo);
        const message = postData.message;
        if (message.msgError) {
            this.setState({ message });
        }
        else {
            const data = await UserinfoAPI.getUserinfos();
            this.setState({ message, Userinfos: data.response });
        }
        this.resetForm();
    }

    renderUserinfoTable() {
        if (this.state.Userinfos.length > 0) {
            return (
                <UserinfoTable Userinfos={this.state.Userinfos}
                    deleteHandler={this.deleteHandler}
                    showEditForm={this.showEditForm} />
            );
        }
        return null;
    }

    renderForm() {
        return (
            <FormEditor isEditForm={this.state.isEditForm}
                Userinfo={this.state.Userinfo}
                handleChange={this.handleChange}
                handler={!this.state.isEditForm ? this.addHandler : this.updateHandler} />
        );
    }

    renderMessage() {
        if (this.state.message === "")
            return null;
        return (
            <Message message={this.state.message} />
        );
    }
    render() {
        return (
            <div className="secant">
                <Menubar title="Admin"/>
                <table className="NavBody">
                    <div class="container">
                        {cookies.get('username') == "admin" ?
                            <div className="NavBody row">
                                <div className="col"></div>
                                <div className="col-10">
                                    {this.renderUserinfoTable()}
                                    {this.renderForm()}
                                </div>
                                <div className="col"></div>
                            </div>
                            : ""}
                    </div>
                </table>
            </div>
        )
    }
}

export default admin;