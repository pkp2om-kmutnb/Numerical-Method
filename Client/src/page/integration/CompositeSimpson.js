import React, { Component } from 'react';
import mom from './mom.js';
import Menubar from '../../Component/Menubar';
import TableFunction from '../../Component/TableOneAns';
import Cookies from 'universal-cookie';
import Login from '../Secure/login';

const cookies = new Cookies();
var I, exact, error;
class Composite_Simpson extends mom {

  showAnswer = () => {
    this.composite_simpson(this.state.a, this.state.b, this.state.n)
  }

  composite_simpson(a, b, n) {
    var h = (b - a) / n
    I = (h / 3) * (this.func(a) + this.func(b) + 4 * this.summationFunction(1, n, 2 * h) + 2 * this.summationFunction(2, n, 2 * h))
    exact = this.exactIntegrate(a, b)
    error = Math.abs((exact - I) / exact) * 100
    this.state.items.push({ ans: exact })
    this.setState({ items: this.state.items })

  }

  render() {
    return (
      <div className="bisec">
        {this.renderAuthen(cookies.get('username')) ?
          <table className="NavBodyImg2">
            {/* MENU BOX*/}
            <Menubar title="Bisection" />
            {/* Descip BOX*/}
            <div className="myfontstye NavBoxText">
              <h2>Composite Trapezoidal Rule</h2>
            </div>
            {/* INPUT BOX*/}
            <div class="form-group">
              <form action="" class="form-group" onSubmit={this.handleSummit}>
                <div class="col-xs-4 NavBox3">
                  <label for="ex1">Function </label>
                  <input type="text" class="form-control" id="ex1" placeholder="Ex. 2x^3-x^2+2" onChange={e => { this.setState({ fx: e.target.value }) }} value={this.state.fx} />
                </div>
                <div class="form-group row ">
                  <div class="col-xs-4 NavBox2">
                  </div>
                  <div class="col-xs-4 NavBox2">
                    <label for="ex2">Lower bound</label>
                    <input class="form-control floatNumber" id="ex2" type="Number" onChange={e => { this.setState({ a: e.target.value }) }} value={this.state.a} />
                  </div>
                  <div class="col-xs-4 NavBox2">
                    <label for="ex3">Upper bound </label>
                    <input class="form-control floatNumber" id="ex3" type="Number" onChange={e => { this.setState({ b: e.target.value }) }} value={this.state.b} />
                  </div>
                  <div class="col-xs-4 NavBox2">
                    <label for="ex4">N</label>
                    <input class="form-control floatNumber" id="ex4" type="Number" onChange={e => { this.setState({ n: e.target.value }) }} value={this.state.n} />
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

                </div>
              }
            </table>
          </table>
          : <Login />}
      </div>
    );
  }
}
export default Composite_Simpson;