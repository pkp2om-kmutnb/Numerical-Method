import React from 'react';
import '../../App.css';
//import { Component } from 'react';
import Menubar from '../../Component/Menubar';
import rootMom from './mom';
import TableFunction from '../../Component/TableFunction2';
import Cookies from 'universal-cookie';
import databases from '../Secure/databases';
import Login from '../Secure/login';
import Chart_graph from '../../Component/chart';

const cookies = new Cookies();
class secant extends rootMom {

  showAnswer = () => {
    this.secant(this.state.a, this.state.b, this.state.mitr, this.state.eps)
  }
  handleCheck = event => {
    if (event.target.checked) {
      this.serach(5)
    }
    this.setState({ rememberMe: event.target.checked });
  };

  secant(x0, x1, mitr, eps) {
    var x = [], y = 0, epsilon = 0;
    var counter = 1, i = 1;
    x.push(x0);
    x.push(x1);
    this.state.items.push({ n: counter, xM: x0, fxM: this.func(x0), fn: this.func(counter) })
    counter++;
    this.state.items.push({ n: counter, xM: x1, fxM: this.func(x1), fn: this.func(counter) })
    counter++;
    do {
      y = x[i] - (this.func(x[i]) * ((x[i] - x[i - 1]))) / (this.func(x[i]) - this.func(x[i - 1]));
      x.push(y);
      epsilon = this.error(y, x[i]);
      this.state.items.push({ n: counter, xM: y.toFixed(6), fxM: this.func(y).toFixed(6), fn: this.func(counter), acc: Math.abs(epsilon).toFixed(6) })
      counter++;
      i++;
    } while (Math.abs(epsilon) > eps && counter < mitr);
    this.setState({ items: this.state.items })
  }
  handleCheckSave = (event) => {
    if (event.target.checked) {
      this.saveThis(5)
    }
    this.setState({ rememberMeSvae: event.target.checked });
  };

  render() {
    return (
      <div className="secant">
        {this.renderAuthen(cookies.get('username')) ?
          <table className="NavBodyImg2">
            <Menubar title="Secant" />
            <div className="myfontstye NavBoxText">
              <h2 >Secant method</h2>
              <p>
                secant method is a root-finding algorithm that uses a succession of roots of secant lines to better approximate a root of a function f. The secant method can be thought of as a finite-difference approximation of Newton's method.   <br />              </p>
            </div>
            {/* INPUT BOX*/}
            <div class="form-group">
              <form action="" class="form-group" onSubmit={this.handleSummit}>
                <div class="col-xs-4 NavBox3">
                  <label for="ex1">Function </label>
                  <input type="text" class="form-control" id="ex1" placeholder="Ex. x^7-1000 = 0 " onChange={e => { this.setState({ equ: e.target.value }) }} value={this.state.equ} />
                </div>
                <div class="form-group row ">
                  <div class="col-xs-4 NavBox2">
                  </div>
                  <div class="col-xs-4 NavBox2">
                    <label for="ex2">xL</label>
                    <input class="form-control floatNumber" id="ex2" type="Number" onChange={e => { this.setState({ a: e.target.value }) }} value={this.state.a} />
                  </div>
                  <div class="col-xs-4 NavBox2">
                    <label for="ex3">xR </label>
                    <input class="form-control floatNumber" id="ex3" type="Number" onChange={e => { this.setState({ b: e.target.value }) }} value={this.state.b} />
                  </div>
                  <div class="col-xs-4 NavBox2">
                    <label for="ex3">Epsilon</label>
                    <input class="form-control floatNumber" id="ex4" type="Number" onChange={e => { this.setState({ eps: e.target.value }) }} value={this.state.eps} />
                  </div>
                  <div class="col-xs-4 NavBox2">
                    <label for="ex3">Maximum Iterations(1-100)</label>
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
                <div class="slice NavBox2">
                <input type="checkbox" checked={this.state.rememberMeSave}
                  onChange={this.handleCheckSave} />Save
					      </div>
            </div>
            <table>
              {this.state.items == "" ? " " :
                <div class="myfontstye3">
                  <TableFunction items={this.state.items} />
                  {cookies.set('temp', 'true', { path: '/secant' })}
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



export default secant;
