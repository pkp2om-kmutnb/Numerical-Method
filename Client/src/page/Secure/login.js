import React from 'react';
import UserinfoTable from '../../Component/UserinfoTable';
import UserinfoAPI from '../../UserinfoAPI';
import Cookies from 'universal-cookie';
import Menubar from '../../Component/Menubar';
const cookies = new Cookies();
var Crypto = require('crypto-js')
class login extends React.Component {
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
            message: "",
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

    Answer = (json) => {
        const obj = JSON.parse(json);
        var check = false
        for (var i = 0; i < this.state.Userinfos.length; i++) {
            if (obj.username === JSON.parse(JSON.stringify(this.state.Userinfos[i].username))) {
                var chiperText = Crypto.SHA256(obj.username + obj.password).toString()
                if (chiperText === JSON.parse(JSON.stringify(this.state.Userinfos[i].password))) {
                    this.setState({ message: true })
                    cookies.set('username', obj.username, { path: '/' });
                    cookies.set('temp', 'false', { path: '/' });
                    window.history.pushState('Home', 'Home', '/Home');
                    check = true
                }
            }
        }
        if (!check) {
            this.setState({ message: false })
        }
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
            <div className="secant">
                <table className="NavBodyImg">
                    <div class="container">
                        {this.state.message !== "" ?
                            <div className={this.renderMessageClassName(this.state.message)} role="alert">
                                {this.state.message ? "Login Success." : "Login fail."}
                            </div>
                            : ""}
                        <div class="d-flex justify-content-center h-100">

                            <div class="card">

                                <div class="card-header">

                                    <h3>Sign In</h3>
                                    <div class="d-flex justify-content-end social_icon">
                                        <span><a class="fab fa-facebook-square" href="https://www.facebook.com/login.php?next=https%3A%2F%2Fdevelopers.facebook.com%2Fapps"></a></span>
                                        <span><i class="fab fa-google-plus-square"></i></span>
                                        <span><i class="fab fa-twitter-square"></i></span>

                                    </div>
                                </div>

                                <div class="card-body">
                                    <form onSubmit={() => this.Answer(JSON.stringify(this.state))} action="" >
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="username" onChange={e => { this.setState({ username: e.target.value }) }} />

                                        </div>
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-key"></i></span>
                                            </div>
                                            <input type="password" class="form-control" placeholder="password" onChange={e => { this.setState({ password: e.target.value }) }}
                                                value={this.state.password} />

                                        </div>
                                        <div class="row align-items-center remember">
                                            <input type="checkbox" />Remember Me
					                        </div>
                                        <div class="form-group">
                                            <input type="submit" value="Login" class="btn float-right login_btn " />
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer">
                                    <div class="d-flex justify-content-center links">
                                        Don't have an account?<a href="./register">Sign Up</a>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <a href="./register">Forgot your password?</a>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>

                </table>
            </div>
        )
    }
}

export default login;