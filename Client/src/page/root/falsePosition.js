import React from 'react';
import '../../App.css';
import Menubar from '../../Component/Menubar';
import rootMom from './mom';
import TableFunction from '../../Component/TableFunction';
import Cookies from 'universal-cookie';
import Login from '../Secure/login';
import Chart_graph from '../../Component/chart';
const cookies = new Cookies();
class falsePosition extends rootMom {

  showAnswer = () => {
    this.false_position(this.state.a, this.state.b, this.state.mitr, this.state.eps)
  }
  handleCheck = event => {
    if (event.target.checked) {
      this.serach(2)
    }
    this.setState({ rememberMe: event.target.checked });

  };

  handleCheckSave = (event) => {
    if (event.target.checked) {
      this.saveThis(3)
    }
    this.setState({ rememberMeSvae: event.target.checked });
  };

  false_position(xl, xr, mitr, eps) {
    var xi = 0;
    var epsilon = 0;
    var counter = 0;
    do {
      xi = (xl * this.func(xr) - xr * this.func(xl)) / (this.func(xr) - this.func(xl));
      if (this.func(xi) * this.func(xr) < 0) {
        epsilon = this.error(xi, xr);
        xl = xi;
      }
      else {
        epsilon = this.error(xi, xl);
        xr = xi;
      }
      this.state.items.push({
        n: counter, xL: xl.toFixed(6), xR: xr.toFixed(6), xM: xi.toFixed(6), fxL: this.func(xl).toFixed(6),
        fxR: this.func(xr).toFixed(6), fxM: this.func(xi).toFixed(6), fn: this.func(counter), acc: epsilon
      })
      counter++;
    } while (Math.abs(epsilon) > eps && counter < mitr);
    this.setState({ items: this.state.items })

  }



  render() {
    return (
      <div className="falsePosition">
        {this.renderAuthen(cookies.get('username')) ?
          <table className="NavBodyImg2">
            <Menubar title="False Position" />

            <div className="myfontstye NavBoxText">
              <h2 >False-Position method</h2>
              <p>
                differs from the bisection method only in the choice it makes for subdividing the interval at each iteration.<br />  </p>
            </div>
            {/* INPUT BOX*/}
            <div class="form-group">
              <form action="" class="form-group" onSubmit={this.handleSummit}>
                <div class="col-xs-4 NavBox3">
                  <label for="ex1">Function </label>
                  <input type="text" class="form-control" id="ex1" placeholder="Ex. x^3-x^2+2 " onChange={e => { this.setState({ equ: e.target.value }) }} value={this.state.equ} />
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
                <div class="slice NavBox2">
                <input type="checkbox" checked={this.state.rememberMeSave}
                  onChange={this.handleCheckSave} />Save 
					      </div>
            </div>
            <table>
              {this.state.items == "" ? " " :
                <div class="myfontstye3">
                  <TableFunction items={this.state.items} />
                  {cookies.set('temp', 'true', { path: '/falsePosition' })}
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

export default falsePosition;
