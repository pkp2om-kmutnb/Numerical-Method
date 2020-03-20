import React, { Component } from 'react';
import mom from './mom.js';
import Menubar from '../../Component/Menubar';
import TableFunction from '../../Component/TableOneAns';
import Cookies from 'universal-cookie';
import Login from '../Secure/login';


const cookies = new Cookies();
var y;
class Backwardh extends mom {

    showAnswer = () => {
        if (this.props.id == 1)
            this.backwardh(this.state.x, this.state.h, this.state.degree)
        else if (this.props.id == 1)
            this.backwardh2(this.state.x, this.state.h, this.state.degree)
        else if (this.props.id == 1)
            this.centralh(this.state.x, this.state.h, this.state.degree)
        else if (this.props.id == 1)
            this.centralh2(this.state.x, this.state.h, this.state.degree)
        else if (this.props.id == 1)
            this.forwardh(this.state.x, this.state.h, this.state.degree)
        else
            this.forwardh2(this.state.x, this.state.h, this.state.degree)

    }

    backwardh(x, h, degree) {
        if (degree == 1)
            y = (this.func(x) - this.func(x - (1 * h))) / h
        else if (degree == 2)
            y = (this.func(x) - 2 * this.func(x - (1 * h)) + this.func(x - (2 * h))) / Math.pow(h, 2)
        else if (degree == 3)
            y = (this.func(x) - 3 * this.func(x - (1 * h)) + 3 * this.func(x - (2 * h)) - this.func(x - (3 * h))) / Math.pow(h, 3)
        else
            y = (this.func(x) - 4 * this.func(x - (1 * h)) + 6 * this.func(x - (2 * h)) - 4 * this.func(x - (3 * h)) + this.func(x - (4 * h))) / Math.pow(h, 4)

        this.state.items.push({ ans: y.toFixed(6) })
        this.setState({ items: this.state.items })
    }
    backwardh2(x, h, degree) {
        if (degree == 1)
            y = (3 * this.func(x) - 4 * this.func(x - (1 * h)) + this.func(x - (2 * h))) / (2 * h)
        else if (degree == 2)
            y = (2 * this.func(x) - 5 * this.func(x - (1 * h)) + 4 * this.func(x - (2 * h)) - this.func(x - (3 * h))) / Math.pow(h, 2)
        else if (degree == 3)
            y = (5 * this.func(x) - 18 * this.func(x - (1 * h)) + 24 * this.func(x - (2 * h)) - 14 * this.func(x - (3 * h)) - this.func(x - (3 * h))) / (2 * Math.pow(h, 3))
        else if (degree == 4)
            y = (3 * this.func(x) - 14 * this.func(x - (1 * h)) + 26 * this.func(x - (2 * h)) - 24 * this.func(x - (3 * h)) + 11 * this.func(x - (4 * h)) - 2 * this.func(x - (5 * h))) / Math.pow(h, 4)

        this.state.items.push({ ans: y.toFixed(6) })
        this.setState({ items: this.state.items })

    }
    centralh(x, h, degree) {
        if (degree == 1)
            y = (this.func(x + (1 * h)) - this.func(x - (1 * h))) / (2 * h)
        else if (degree == 2)
            y = (this.func(x + (1 * h)) - 2 * this.func(x) + this.func(x - (1 * h))) / Math.pow(h, 2)
        else if (degree == 3)
            y = (this.func(x + (2 * h)) - 2 * this.func(x + (1 * h)) + 2 * this.func(x - (1 * h)) - this.func(x - (2 * h))) / (2 * Math.pow(h, 3))
        else if (degree == 4)
            y = (this.func(x + (2 * h)) - 4 * this.func(x + (1 * h)) + 6 * this.func(x) - 4 * this.func(x - (1 * h)) + this.func(x - (2 * h))) / Math.pow(h, 4)

        this.state.items.push({ ans: y.toFixed(6) })
        this.setState({ items: this.state.items })

    }
    centralh2(x, h, degree) {
        if (degree == 1)
            y = (-this.func(x + (2 * h)) + 8 * this.func(x + (1 * h)) - 8 * this.func(x - (1 * h)) + this.func(x - (2 * h))) / (12 * h)
        else if (degree == 2)
            y = (-this.func(x + (2 * h)) + 16 * this.func(x + (1 * h)) - 30 * this.func(x) + 16 * this.func(x - (1 * h)) - this.func(x - (2 * h))) / (12 * Math.pow(h, 2))
        else if (degree == 3)
            y = (-this.func(x + (3 * h)) + 8 * this.func(x + (2 * h)) - 13 * this.func(x + (1 * h)) + 13 * this.func(x - (1 * h)) - 8 * this.func(x - (2 * h)) + this.func(x - (3 * h))) / (8 * Math.pow(h, 3))
        else if (degree == 4)
            y = (-this.func(x + (3 * h)) + 12 * this.func(x + (2 * h)) - 39 * this.func(x + (1 * h)) + 56 * this.func(x) - 39 * this.func(x - (1 * h)) + 12 * this.func(x - (2 * h)) + this.func(x - (3 * h))) / (6 * Math.pow(h, 4))


        this.state.items.push({ ans: y.toFixed(6) })
        this.setState({ items: this.state.items })

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

        this.state.items.push({ ans: y.toFixed(6) })
        this.setState({ items: this.state.items })

    }
    forwardh2(x, h, degree) {
        if (degree == 1)
            y = (-this.func(x + (2 * h)) + 4 * this.func(x + (1 * h)) - 3 * this.func(x)) / (2 * h)
        else if (degree == 2)
            y = (-this.func(x + (3 * h)) + 4 * this.func(x + (2 * h)) - 5 * this.func(x + (1 * h)) + 2 * this.func(x)) / Math.pow(h, 2)
        else if (degree == 3)
            y = (-3 * this.func(x + (4 * h)) + 14 * this.func(x + (3 * h)) - 24 * this.func(x + (2 * h)) + 18 * this.func(x + (1 * h)) - 5 * this.func(x)) / (2 * Math.pow(h, 3))
        else if (degree == 4)
            y = (-2 * this.func(x + (5 * h)) + 11 * this.func(x + (4 * h)) - 24 * this.func(x + (3 * h)) + 26 * this.func(x + (2 * h)) - 14 * this.func(x + (1 * h)) + 3 * this.func(x)) / Math.pow(h, 4)

        this.state.items.push({ ans: y.toFixed(6) })
        this.setState({ items: this.state.items })

    }
    render() {
        return (
            <div className="bisec">
                {this.renderAuthen(cookies.get('username')) ?
                    <table className="NavBodyImg2">
                        {/* MENU BOX*/}
                        <Menubar title="Backward First Degree" />
                        {/* Descip BOX*/}
                        <div className="myfontstye NavBoxText">
                            <h2>Backward First Degree</h2>
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
                                    <TableFunction n="1" items={this.state.items} />
                                </div>
                            }
                        </table>
                    </table>
                    : <Login />}
            </div>
        );
    }
}
export default Backwardh;