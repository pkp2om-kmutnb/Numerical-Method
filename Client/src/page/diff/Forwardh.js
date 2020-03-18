import React, { Component } from 'react';
import math from 'mathjs';
import mom from './mom.js';
import Menubar from '../../Component/Menubar';
import TableFunction from '../../Component/TableOneAns';
import Cookies from 'universal-cookie';
import Login from '../Secure/login';

const cookies = new Cookies();
var y;
class Forwardh extends mom {


  showAnswer = () => {
    this.forwardh(this.state.x, this.state.h, this.state.degree)
  }
  forwardh(x, h, degree) {
    if (degree == 1)
      y = (this.func(x + (1 * h)) - this.func(x)) / h
    else if (degree == 2)
      y = (this.func(x + (2 * h)) - 2 * this.func(x + (1 * h)) + this.func(x)) / Math.pow(h, 2)
    else if (degree == 3)
      y = (this.func(x + (3 * h)) - 3 * this.func(x + (2 * h)) + 3 * this.func(x + (1 * h)) - this.func(x)) / Math.pow(h, 3)
    else if (degree == 4)
      y = (this.func(x + (4 * h)) - 4 * this.func(x + (3 * h)) + 6 * this.func(x + (2 * h)) - 4 * this.func(x + (1 * h)) + this.func(x)) / Math.pow(h, 4)

    this.state.items.push({ ans: y })
    this.setState({ items: this.state.items })

  }


  render() {
    return (
      <div className="bisec">
        {this.renderAuthen(cookies.get('username')) ?
          <table className="NavBodyImg2">
            {/* MENU BOX*/}
            <Menubar title="Forwardh First Degree" />
            {/* Descip BOX*/}
            <div className="myfontstye NavBoxText">
              <h2>Forwardh First Degree</h2>
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
                    <label for="ex2">x</label>
                    <input class="form-control floatNumber" id="ex2" type="Number" onChange={e => { this.setState({ x: e.target.value }) }} value={this.state.x} />
                  </div>
                  <div class="col-xs-4 NavBox2">
                    <label for="ex3">h </label>
                    <input class="form-control floatNumber" id="ex3" type="Number" onChange={e => { this.setState({ h: e.target.value }) }} value={this.state.h} />
                  </div>
                  <div class="col-xs-4 NavBox2">
                    <label for="ex4">Degree</label>
                    <input class="form-control floatNumber" id="ex4" type="Number" onChange={e => { this.setState({ degree: e.target.value }) }} value={this.state.degree} />
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
export default Forwardh;