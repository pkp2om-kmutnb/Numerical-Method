import React from 'react';
import '../../App.css';
//import { Component } from 'react';
import Menubar from '../../Component/Menubar';
import rootMom from './mom';
import TableFunction from '../../Component/TableFunction2';
import Cookies from 'universal-cookie';
import Login from '../Secure/login';
import Chart_graph from '../../Component/chart';
const cookies = new Cookies();
var algebra = require('algebra.js');
var Equation = algebra.Equation;
class Graph extends rootMom {
  showAnswer = () => {
    this.graph(this.state.a, this.state.b, this.state.mitr)
  }

  handleCheck = event => {
    if (event.target.checked) {
      this.serach(1)
    }
    this.setState({ rememberMe: event.target.checked });
    
  };


  graph = (xl, xr, mitr) => {
    let dis = (xr - xl) / mitr * 1.0
    for (let counter = 1; counter < mitr; counter++) {
      let temp = xl
      xl += dis
      this.state.items.push({ n: counter, xM: temp.toFixed(6), fxM: this.func(xl).toFixed(6) ,fn: this.func(counter) , acc : this.error(xl,temp).toFixed(6)})
    }
    this.setState({ items: this.state.items })
  }

  render() {
    return (
      <div className="Graph">
         {this.renderAuthen(cookies.get('username'))?
        <table className="NavBodyImg2">
          <Menubar title="Graphical" />
          <div className="myfontstye NavBoxText">
            <h2 >Graphical Method</h2>
            <p>
              Graphical method, or Geometric method, allows solving simple linear programming problems intuitively and visually. <br />This method is limited to two or three problems decision variables since it is not possible to graphically   <br />             </p>
          </div>

          {/* INPUT BOX*/}
          <div class="form-group">
            <form action="" class="form-group" onSubmit={this.handleSummit}>
              <div class="col-xs-4 NavBox3">
                <label for="ex1">Function 1</label>
                <input type="text" class="form-control" id="ex1" placeholder="Ex. 1/4 * x + 5/4" onChange={e => { this.setState({ equ: e.target.value }) }} value={this.state.equ} />
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
                  <label for="ex5">Maximum Iterations(1-100)</label>
                  <input class="form-control floatNumber" id="ex5" type="Number" onChange={e => { this.setState({ mitr: e.target.value }) }} value={this.state.mitr} />
                </div>
                <div class="col-xs-4 NavBox2">
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
                {cookies.set('temp', 'true', { path: '/Graph' })}
                <Chart_graph items={this.state.items}/>
              </div>
            }
          </table>
        </table>
         :<Login/>}
      </div>
    );
  }
}

export default Graph;
