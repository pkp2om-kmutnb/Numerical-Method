import React from 'react';
import '../../App.css';
import Menubar from '../../Component/Menubar';
import rootMom from './mom';
import TableFunction from '../../Component/TableFunction2';
import Chart_graph from '../../Component/chart';
import {
  atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
} from 'mathjs';
import Cookies from 'universal-cookie';
import Login from '../Secure/login';
const cookies = new Cookies();
var algebra = require('algebra.js');
class newtonRaphson extends rootMom {
  
  showAnswer = () => {
    this.newton(this.state.a, this.state.mitr, this.state.eps)
  }

  handleCheck = event => {
    if (event.target.checked) {
      this.serach(4)
    }
    this.setState({ rememberMe: event.target.checked });
    
  };

  newton = (a, mitr, eps) => {
    var xold = a;
    var xnew = 0;
    var epsilon = 0;
    var counter = 0;
    do {
      xnew = xold - (this.func(xold) / this.funcDiff(xold));
      epsilon = this.error(xnew, xold)
      this.state.items.push({ n: counter, fn: this.func(counter), acc: Math.abs(epsilon).toFixed(6), xM: xold.toFixed(6), fxM: xnew.toFixed(6) })
      counter++;
      xold = xnew;
    } while (Math.abs(epsilon) > eps && counter < mitr);
    this.setState({ items: this.state.items })

  }

  render() {
    return (
      <div className="newtonRaphson">
        {this.renderAuthen(cookies.get('username')) ?
          <table className="NavBodyImg2">
            <Menubar title="Newton Raphson" />
            <div className="myfontstye NavBoxText">
              <h2 >Newton-Raphson method</h2>
              <p>
                The Newton-Raphson method uses an iterative process to approach one root of a function.<br />             </p>
            </div>
            {/* INPUT BOX*/}
            <div class="form-group">
              <form action="" class="form-group" onSubmit={this.handleSummit}>
                <div class="col-xs-4 NavBox3">
                  <label for="ex1">Function </label>
                  <input type="text" class="form-control" id="ex1" placeholder="Ex. x^3-2*x-2" onChange={e => { this.setState({ equ: e.target.value }) }} value={this.state.equ} />
                </div>
                <div class="form-group row ">
                  <div class="col-xs-4 NavBox2">
                  </div>
                  <div class="col-xs-4 NavBox2">
                    <label for="ex2">Start value</label>
                    <input class="form-control floatNumber" id="ex2" type="Number" onChange={e => { this.setState({ a: e.target.value }) }} value={this.state.a} />
                  </div>
                  <div class="col-xs-4 NavBox2">
                    <label for="ex4">Epsilon</label>
                    <input class="form-control floatNumber" id="ex4" type="Number" onChange={e => { this.setState({ eps: e.target.value }) }} value={this.state.eps} />
                  </div>
                  <div class="col-xs-4 NavBox2">
                    <label for="ex5">Maximum Iterations(1-100)</label>
                    <input class="form-control floatNumber" id="ex5" type="Number" onChange={e => { this.setState({ mitr: e.target.value }) }} value={this.state.mitr} />
                  </div>
                </div>
                <div class="input-group">
                  <div class="NavBox2">
                    <label for="ex6"></label>
                    <button type="submzit" class="btn btn-primary" >Excute</button>
                  </div>


                </div>
              </form>
              <div class="slice NavBox2">
                <input type="checkbox" checked={this.state.rememberMe}
                  onChange={this.handleCheck} />Auto
					      </div>
            </div>
            <table>
              {this.state.items == "" ? " " :
                <div class="myfontstye3">
                  <TableFunction items={this.state.items} />
                  {cookies.set('temp', 'true', { path: '/newtonRaphson' })}
                  <Chart_graph items={this.state.items} />
                </div>
              }
            </table>
          </table>
          : <Login />}
      </div>
    );
  }
}

export default newtonRaphson;
