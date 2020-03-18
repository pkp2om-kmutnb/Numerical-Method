import React from '../../node_modules/react';
import Input from './Input';
const Form = (props) => {
    return (
        <div className="secant">
            <table className="NavBodySize">
                <div class="container">
                    <div class="d-flex justify-content-center h-100">
                        <div class="card">
                            <div class="card-header">
                                <h3>{ " Editor "}</h3>
                            </div>
                            <div class="card-body">
                                <form onSubmit={props.handler}>

                                    <div class="input-group form-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fas fa-hashtag"></i></span>
                                        </div>
                                        <Input name="id"
                                            placeholder="ID"
                                            handleChange={props.handleChange}
                                            value={props.Userinfo.id} />
                                    </div>
                                    <div class="input-group form-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fas fa-user-circle"></i></span>
                                        </div>
                                        <Input name="username"
                                            placeholder="username"
                                            handleChange={props.handleChange}
                                            value={props.Userinfo.username} />
                                    </div>
                                    <div class="input-group form-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fas fa-envelope"></i></span>

                                        </div>
                                        <Input name="email"
                                            placeholder="email"
                                            handleChange={props.handleChange}
                                            value={props.Userinfo.email} />
                                    </div>

                                    <div class="input-group form-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fas fa-key"></i></span>
                                        </div>
                                        <Input name="password"
                                            placeholder="password"
                                            handleChange={props.handleChange}
                                            value={props.Userinfo.password}
                                        />
                                    </div>

                                    <div class="input-group form-group">
                                        <div class="col-xs-4 shift">
                                            <button type="submit" className="btn float-center login_btn">Submit</button>
                                        </div>
                                        <div class="col-xs-4 shift">
                                            <a class="btn float-center login_btn " href="./Home" role="button">Home</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </table>
        </div>

    )
}

export default Form;