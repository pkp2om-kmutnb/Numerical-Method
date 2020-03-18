import React from '../../node_modules/react';
import '../App.css';
import { Component } from '../../node_modules/react';
import UserinfoAPI from '../UserinfoAPI';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
var cookie = cookies.get('username')
class Menubar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      page: ""

    };
  }



  renderUserinfoTable(id) {
    if (this.state.Userinfos.length > 0) {
      return (
        this.state.Userinfos[id].username
      );
    }
    return null;
  }

  renderSearch(page) {
    let page_name = ["Bisection", "Graphical", "False Position", "One Point Itration", "Newton Raphson",
      "Secant", "Cramer's Rule", "Gauss Eliminate", "LU Decomposition", "Cholesky Decomposition", "Gauss Jordan", "Jacobi Iteration", "Gauss-Sidel Iteration", "Conjugate Gradient"]

    let page_index = ["/bisec", "/Graph", "/falsePosition", "/onepoint", "/newtonRaphson", "/secant",
      "/cramer", "/gaussEliminate", "/LU", "/cholesky", "/gaussJordan", "/Jacobi", "/GaussSidel", "/Conjugate"]

    for (let i = 0; i < page_name.length; i++) {
      if (page.toLowerCase() === page_name[i].toLowerCase()) {
        window.history.pushState(page_name[i], page_name[i], page_index[i])
        break
      }
    }
  }


  render() {
    return (
      <div id="Menubar">
        <nav class="navbar navbar-dark bg textalign" >
          <a class="navbar-brand" href="./Home">{this.props.title}</a>

          <div className="ml-auto slice">
            {cookie}
          </div>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class={this.props.title === "Home" ? "nav-item active" : "nav-item"}>
                <a class="nav-link" href="./Home">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Root of Equations
                    </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class={this.props.title === "Graphical" ? "dropdown-item active" : "dropdown-item"} href="./Graph">Graphical</a>
                  <a class={this.props.title === "Bisection" ? "dropdown-item active" : "dropdown-item"} href="./bisec">Bisection</a>
                  <a class={this.props.title === "False Position" ? "dropdown-item active" : "dropdown-item"} href="./falsePosition">False Position</a>
                  <a class={this.props.title === "One Point Itration" ? "dropdown-item active" : "dropdown-item"} href="./onepoint">One Point Itration</a>
                  <a class={this.props.title === "Newton Raphson" ? "dropdown-item active" : "dropdown-item"} href="./newtonRaphson">Newton Raphson</a>
                  <a class={this.props.title === "Secant" ? "dropdown-item active" : "dropdown-item"} href="./secant">Secant</a>
                </div>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="./Algebraic" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Linear Algebraic
                    </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class={this.props.title === "Cramer's Rule" ? "dropdown-item active" : "dropdown-item"} href="./cramer">Cramer's Rule</a>
                  <a class={this.props.title === "Gauss Eliminate" ? "dropdown-item active" : "dropdown-item"} href="./gaussEliminate">Gauss Eliminate</a>
                  <a class={this.props.title === "Gauss Jordan" ? "dropdown-item active" : "dropdown-item"} href="./gaussJordan">Gauss Jordan</a>
                  <a class={this.props.title === "LU Decomposition" ? "dropdown-item active" : "dropdown-item"} href="./LU">LU Decomposition</a>
              
                </div>
              </li>


              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="./Algebraic" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Integration
                    </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class={this.props.title === "Composite Simpson Rule" ? "dropdown-item active" : "dropdown-item"} href="./CompositeSimpson">Composite Simpson</a>
                  <a class={this.props.title === "Composite Trapzoidal Rule" ? "dropdown-item active" : "dropdown-item"} href="./CompositeTrapzoidal">Composite Trapzoidal</a>
                </div>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="./Algebraic" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Differentiation
                    </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class={this.props.title === "Composite Simpson Rule" ? "dropdown-item active" : "dropdown-item"} href="./Backwardh">Backward First Degree</a>
                  <a class={this.props.title === "Composite Trapzoidal Rule" ? "dropdown-item active" : "dropdown-item"} href="./Backwardh2">Backward Second Degree</a>
                  <a class={this.props.title === "Composite Simpson Rule" ? "dropdown-item active" : "dropdown-item"} href="./Centralh">Central First Degree</a>
                  <a class={this.props.title === "Composite Trapzoidal Rule" ? "dropdown-item active" : "dropdown-item"} href="./Centralh2">Central Second Degree</a>
                  <a class={this.props.title === "Composite Simpson Rule" ? "dropdown-item active" : "dropdown-item"} href="./Forwardh">Forward First Degree</a>
                  <a class={this.props.title === "Composite Trapzoidal Rule" ? "dropdown-item active" : "dropdown-item"} href="./Forwardh2">Forward Second Degree</a>
                </div>
              </li>
              {cookie == 'admin' ?
                <div>
                  {/* <li class="nav-item">
                    <a class="nav-link" href="http://localhost:3001/webcam_face_detection">FaceAPI</a>
                  </li>*/}
                  <li class="nav-item">
                    <a class="nav-link" href="http://localhost:3000/admin">admin</a>
                  </li>
                </div>
                : ""}
             {/* <li class="nav-item">
                <a class="nav-link" href="./logout">Logout</a>
              </li>*/}
            </ul>

            <form class="form-inline my-2 my-lg-0" onSubmit={() => this.renderSearch(this.state.page)} action="" >
              <input class="form-control mr-sm-2" type="search" placeholder="Ex. bisection" aria-label="Search" onChange={e => { this.setState({ page: e.target.value }) }}
                value={this.state.page} />
              <button class="btn btn-primary" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>

    );
  }
}

export default Menubar;
