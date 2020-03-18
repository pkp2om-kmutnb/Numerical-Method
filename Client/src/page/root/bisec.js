import React from 'react';
import '../../App.css';
import Menubar from '../../Component/Menubar';
import rootMom from './mom';
import TableFunction from '../../Component/TableFunction';
import Chart_graph from '../../Component/chart';
import Cookies from 'universal-cookie';
import Login from '../Secure/login';

const cookies = new Cookies();
var algebra = require('algebra.js');
var Fraction = algebra.Fraction;
var Expression = algebra.Expression;
var Equation = algebra.Equation;

class bisec extends rootMom {
  constructor(props) {
    super(props)
    if (cookies.get('temp') == 'true') {
      //this.wait(4000)
      { cookies.set('temp', 'false', { path: '/bisec' }) }
    }
  }
  showAnswer = () => {
    this.bisection(this.state.a, this.state.b, this.state.mitr, this.state.eps)

  }
  bisection = (a, b, mitr, eps) => {
    let counter = 0
    var c = a;
    c = (a + b) / 2;
    let fc = this.func(c)
    let fa = this.func(a)
    let fb = this.func(b)
    this.state.items.push({ n: counter, xL: a, xR: b, xM: c, fxL: fa, fxR: fb, fxM: fc, fn: this.func(counter) })
    counter++
    if (fc * fa < 0) b = c
    else a = c
    fc = this.func(c)
    fa = this.func(a)
    fb = this.func(b)
    this.state.items.push({ n: counter, xL: a, xR: b, xM: c, fxL: fa, fxR: fb, fxM: fc, fn: this.func(counter) })
    counter++
    while (counter < mitr) {
      c = (a + b) / 2;
      let fcnew = this.func(c)
      fa = this.func(a)
      fb = this.func(b)
      if (c == 0 || fcnew == 0) break
      else if (fcnew * fa < 0) b = c
      else a = c
      let accuraccy = this.error(fcnew, fc)
      this.state.items.push({ n: counter, xL: a, xR: b, xM: c, fxL: fa, fxR: fb, fxM: fcnew, acc: accuraccy, fn: this.func(counter) })
      counter++
      fc = fcnew
      if (Math.abs(fcnew - fa) < eps)  break
      counter++
    }
    this.setState({ items: this.state.items })
  }

  handleCheck = (event) => {
    if (event.target.checked) {
      this.serach(0)
    }
    this.setState({ rememberMe: event.target.checked });
  };

  render() {
    return (
      <div className="bisec">
        {this.renderAuthen(cookies.get('username')) ?
          <table className="NavBodyImg2">
            {/* MENU BOX*/}
            <Menubar title="Bisection" />
            {/* Descip BOX*/}
            <div className="myfontstye NavBoxText">
              <h2 >
                Bisection method</h2>
              <p>
                An algorithm for finding roots which retains that prior estimate for which the function value has opposite sign from the function value at the current best estimate of the root. <br />In this way, the method of false position keeps the root bracketed  <br />              </p>
            </div>
            {/* INPUT BOX*/}
            <div class="form-group">
              <form action="" class="form-group" onSubmit={this.handleSummit}>
                <div class="col-xs-4 NavBox3">
                  <label for="ex1">Function </label>
                  <input type="text" class="form-control" id="ex1" placeholder="Ex. 2x^3-x^2+2" onChange={e => { this.setState({ equ: e.target.value }) }} value={this.state.equ} />
                </div>
                <div class="form-group row ">
                  <div class="col-xs-4 NavBox2">
                  </div>
                  <div class="col-xs-4 NavBox2">
                    <label for="ex2">Startpoint values a</label>
                    <input class="form-control floatNumber" id="ex2" type="Number" onChange={e => { this.setState({ a: e.target.value }) }} value={this.state.a} />
                  </div>
                  <div class="col-xs-4 NavBox2">
                    <label for="ex3">Startpoint values b </label>
                    <input class="form-control floatNumber" id="ex3" type="Number" onChange={e => { this.setState({ b: e.target.value }) }} value={this.state.b} />
                  </div>
                  <div class="col-xs-4 NavBox2">
                    <label for="ex4">Epsilon</label>
                    <input class="form-control floatNumber" id="ex4" type="Number" onChange={e => { this.setState({ eps: e.target.value }) }} value={this.state.eps} />
                  </div>
                  <div class="col-xs-4 NavBox2">
                    <label for="ex5">Maximum Iterations</label>
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
                  {cookies.set('temp', 'true', { path: '/bisec' })}
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

export default bisec;
