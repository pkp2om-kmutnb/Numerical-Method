import React from 'react';
import UserinfoTable from '../../Component/UserinfoTable';
import Form from '../../Component/Form';
import Message from '../../Component/Message';
import UserinfoAPI from '../../UserinfoAPI';
import Menubar from '../../Component/Menubar';
var Crypto = require('crypto-js')

class App extends React.Component {
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
        let Check_Duplicate_Uesr = false
        var str = this.state.Userinfo.email;
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        var isExis = regex.test(str);
        for (var i = 0; i < this.state.Userinfos.length; i++) {
            if (this.state.Userinfo.username === JSON.parse(JSON.stringify(this.state.Userinfos[i].username)) || this.state.Userinfo.username.length > 6 || !isExis) {
                //alert("Unable to add User")
                this.setState({ message: false });
                this.resetForm();
                Check_Duplicate_Uesr = true;
                break
            }
        }
        if (!Check_Duplicate_Uesr) {
            this.state.Userinfo.password = Crypto.SHA256(this.state.Userinfo.username + this.state.Userinfo.password).toString()
            const postData = await UserinfoAPI.createUserinfo(this.state.Userinfo);
            const message = postData.message;
            if (message.msgError) {
                this.setState({ message: false });
            }
            else {
                const data = await UserinfoAPI.getUserinfos();
                this.setState({ message: true });
            }
            this.resetForm();
        }
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
            <Form isEditForm={this.state.isEditForm}
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
    renderMessageClassName = (message) => {
        let className = "alert ";
        if (message == false)
            className = className + "alert-danger";
        else
            className = className + "alert-success";
        className = className + " text-center";
        return className;
    }


    render() {
        return (
            <div>
               <table className="NavBodyImg">
                    <div class="container">
                    {/*this.renderMessage()*/}
                    {this.state.message !== "" ?
                        <div className={this.renderMessageClassName(this.state.message)} role="alert">
                            {this.state.message ? "Successfully Added User" : "Unable to add User"}
                        </div>
                        : ""}
                    {this.renderForm()}
                    </div>
                </table>
            </div>
        )
    }
}

export default App;