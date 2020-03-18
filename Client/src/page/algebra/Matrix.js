import React from 'react';
import '../../App.css';
import algeMom from './mom';
import Cookies from 'universal-cookie';
import TableLG from '../../Component/TableLG';
import { create, all } from 'mathjs'

const math = create(all)
const cookies = new Cookies();
class cramer extends algeMom {

    findSolution = () => {
        if (this.props.fname == "gaussEliminate")
            this.gaussEliminate(this.state.matrix)
        else if (this.props.fname == "cramer")
            this.cramer(this.state.matrix)
        else if (this.props.fname == "LU Decomposition")
            this.lu(this.state.matrix)
        else if (this.props.fname == "gaussJordan")
            this.jordan(this.state.matrix)
        else
            this.gaussEliminate(this.state.matrix)
    }

    handleCheck = (event) => {
        if (event.target.checked) {
            this.serach(parseInt(this.props.id))
        }
        this.setState({ rememberMe: event.target.checked });

    };

    gaussEliminate = (A) => {
        var n = A.length
        var B = new Array(n);
        for (var k = 0; k < n; k++) {
            B[k] = A[k][n]
        }
        for (var k = 0; k < n; k++) {
            for (var i = k + 1; i < n; i++) {
                var factor = A[i][k] / A[k][k];
                for (var j = k; j < n; j++) {
                    A[i][j] = A[i][j] - factor * A[k][j];
                }
                B[i] = B[i] - factor * B[k];
            }
        }
        var x = new Array(n);
        x[n - 1] = Math.round((B[n - 1] / A[n - 1][n - 1]) * 100) / 100;;
        for (let i = n - 2; i >= 0; i--) {
            var sum = B[i];
            for (let j = i + 1; j < n; j++) {
                sum = sum - A[i][j] * x[j];
            }
            x[i] = Math.round((sum / A[i][i]) * 100) / 100;
        }
        if (n == 3) {
            this.state.items.push({ x1: x[0], x2: x[1], x3: x[2] })
        } else if (n == 4) {
            this.state.items.push({ x1: x[0], x2: x[1], x3: x[2], x4: x[3] })
        } else {
            this.state.items.push({ x1: x[0], x2: x[1] })
        }
        this.setState({ items: this.state.items })
    }


    cramer = (A) => {
        var n = A.length
        var B = new Array(n);
        for (var k = 0; k < n; k++) {
            B[k] = A[k][n]
        }
        var counter = 0;
        var x = [];
        var gfg2 = new Array(n);
        for (var i = 0; i < n; i++) {
            gfg2[i] = new Array(n);
        }
        for (var i = 0; i < this.state.n; i++) {
            for (var j = 0; j < this.state.n; j++) {
                gfg2[i][j] = A[i][j]
            }
        }
        while (counter != this.state.n) {
            var transformMatrix = JSON.parse(JSON.stringify(A));
            var gfg = new Array(n);
            for (var i = 0; i < n; i++) {
                gfg[i] = new Array(n);
            }
            for (var i = 0; i < this.state.n; i++) {
                for (var j = 0; j < this.state.n; j++) {
                    if (j == counter) {
                        transformMatrix[i][j] = B[i]
                        break;
                    }
                }
            }
            for (var i = 0; i < this.state.n; i++) {
                for (var j = 0; j < this.state.n; j++) {
                    gfg[i][j] = transformMatrix[i][j]
                }
            }
            x.push(Math.round(math.det(gfg)) / Math.round(math.det(gfg2)))
            counter++;
        }
        if (n == 3) {
            this.state.items.push({ x1: x[0], x2: x[1], x3: x[2] })
        } else if (n == 4) {
            this.state.items.push({ x1: x[0], x2: x[1], x3: x[2], x4: x[3] })
        } else {
            this.state.items.push({ x1: x[0], x2: x[1] })
        }
        this.setState({ items: this.state.items })
       
    }

    lu = (A) => {
        var n = A.length
        var B = new Array(n);
        for (var k = 0; k < n; k++) {
            B[k] = A[k][n]
        }
        var x = [];
        var gfg2 = new Array(n);
        for (var i = 0; i < n; i++) {
            gfg2[i] = new Array(n);
        }
        for (var i = 0; i < this.state.n; i++) {
            for (var j = 0; j < this.state.n; j++) {
                gfg2[i][j] = A[i][j]
            }
        }
        var decompose = math.lusolve(gfg2, B)
        for (var i = 0; i < decompose.length; i++) {
            x.push(Math.round(decompose[i]));
        }
        if (n == 3) {
            this.state.items.push({ x1: x[0], x2: x[1], x3: x[2] })
        } else if (n == 4) {
            this.state.items.push({ x1: x[0], x2: x[1], x3: x[2], x4: x[3] })
        } else {
            this.state.items.push({ x1: x[0], x2: x[1] })
        }
        this.setState({ items: this.state.items })
    }

    jordan = (A) => {
        var n = A.length
        var B = new Array(n);
        for (var k = 0; k < n; k++) {
            B[k] = A[k][n]
        }
        if (A[0][0] === 0) { 
            var tempRow = JSON.parse(JSON.stringify(A[0]));
            var tempColumn = B[0];
            A[0] = A[1];
            A[1] = tempRow;
            B[0] = B[1];
            B[1] = tempColumn;
        }
        for (var k = 0; k < n; k++) {
            for (var i = k + 1; i < n; i++) {
                var factor = A[i][k] / A[k][k];
                for (var j = k; j < n; j++) {
                    A[i][j] = A[i][j] - factor * A[k][j];
                }
                B[i] = B[i] - factor * B[k];

            }
        }
        for (k = n - 1; k >= 0; k--) {
            for (i = k; i >= 0; i--) {
                if (i === k) {
                    factor = 1 / A[i][k];
                    for (j = 0; j < n; j++) {
                        A[i][j] = A[i][j] * factor;
                    }
                    B[i] = B[i] * factor;
                }
                else {
                    factor = A[i][k] / A[k][k];
                    for (j = 0; j < n; j++) {
                        A[i][j] = A[i][j] - factor * A[k][j];
                    }
                    B[i] = B[i] - factor * B[k];
                }
            }
        }
        var x = [];
        for (i = 0; i < n; i++) {
            x.push(B[i]);
        }
        if (n == 3) {
            this.state.items.push({ x1: x[0], x2: x[1], x3: x[2] })
        } else if (n == 4) {
            this.state.items.push({ x1: x[0], x2: x[1], x3: x[2], x4: x[3] })
        } else {
            this.state.items.push({ x1: x[0], x2: x[1] })
        }
        this.setState({ items: this.state.items })
    }


    render() {
        return (
            <table>
                {/* INPUT BOX*/}
                <div class="form-group">
                    <div class="col-xs-4 NavBox2 ">
                        <label class="ml-auto slice" for="n">Size of Matrix</label>
                        <input class="ml-auto slice" id="n" type="Number" onChange={e => { this.setState({ n: e.target.value }) }} value={this.state.n} />
                    </div>
                    {this.state.n == "3" ?
                        <form action="" class="form-group" onSubmit={this.handleSummit}>
                            <div class="form-group row">
                                <div class="col-xs-4 NavBox2">
                                </div>
                                <div class="col-xs-4 NavBox2 ">
                                    <label class="navCenter" for="ex1">X</label>
                                    <input class="form-control floatNumber" id="ex1" type="Number" onChange={e => { this.setState({ func1: e.target.value }) }} value={this.state.func1} />
                                </div>
                                <div class="col-xs-4 NavBox2">
                                    <label class="navCenter" for="ex2">Y</label>
                                    <input class="form-control floatNumber" id="ex2" type="Number" onChange={e => { this.setState({ func2: e.target.value }) }} value={this.state.func2} />
                                </div>
                                <div class="col-xs-4 NavBox2">
                                    <label class="navCenter" for="ex3">Z</label>
                                    <input class="form-control floatNumber" id="ex3" type="Number" onChange={e => { this.setState({ func3: e.target.value }) }} value={this.state.func3} />
                                </div>
                                <div class="col-xs-4 NavBox2">
                                    <label class="navCenter" for="ex4">R</label>
                                    <input class="form-control floatNumber" id="ex4" type="Number" onChange={e => { this.setState({ func4: e.target.value }) }} value={this.state.func4} />
                                </div>
                                <div class="col-xs-4 NavBox2">
                                </div>

                            </div>
                            <div class="form-group row ">
                                <div class="col-xs-4 NavBox2">
                                </div>
                                <div class="col-xs-4 NavBox2">

                                    <input class="form-control floatNumber" id="ex5" type="Number" onChange={e => { this.setState({ func5: e.target.value }) }} value={this.state.func5} />
                                </div>
                                <div class="col-xs-4 NavBox2">

                                    <input class="form-control floatNumber" id="ex6" type="Number" onChange={e => { this.setState({ func6: e.target.value }) }} value={this.state.func6} />
                                </div>
                                <div class="col-xs-4 NavBox2">

                                    <input class="form-control floatNumber" id="ex7" type="Number" onChange={e => { this.setState({ func7: e.target.value }) }} value={this.state.func7} />
                                </div>
                                <div class="col-xs-4 NavBox2">

                                    <input class="form-control floatNumber" id="ex8" type="Number" onChange={e => { this.setState({ func8: e.target.value }) }} value={this.state.func8} />
                                </div>
                                <div class="col-xs-4 NavBox2">
                                </div>

                            </div>
                            <div class="form-group row ">
                                <div class="col-xs-4 NavBox2">
                                </div>
                                <div class="col-xs-4 NavBox2">

                                    <input class="form-control floatNumber" id="ex9" type="Number" onChange={e => { this.setState({ func9: e.target.value }) }} value={this.state.func9} />
                                </div>
                                <div class="col-xs-4 NavBox2">

                                    <input class="form-control floatNumber" id="ex10" type="Number" onChange={e => { this.setState({ func10: e.target.value }) }} value={this.state.func10} />
                                </div>
                                <div class="col-xs-4 NavBox2">

                                    <input class="form-control floatNumber" id="ex11" type="Number" onChange={e => { this.setState({ func11: e.target.value }) }} value={this.state.func11} />
                                </div>
                                <div class="col-xs-4 NavBox2">

                                    <input class="form-control floatNumber" id="ex12" type="Number" onChange={e => { this.setState({ func12: e.target.value }) }} value={this.state.func12} />
                                </div>
                                <div class="col-xs-4 NavBox2">
                                </div>

                            </div>
                            <div class="col-xs-4 NavBox2">
                                <button type="submit" class="btn btn-primary" onChange={this.handleSubmit}>Excute</button>
                            </div>
                            <div class="slice NavBox2">
                                <input type="checkbox" checked={this.state.rememberMe}
                                    onChange={this.handleCheck} />Auto
                            </div>
                        </form>
                        : this.state.n == "2" ?
                            <form action="" class="form-group" onSubmit={this.handleSummit}>
                                <div class="form-group row">
                                    <div class="col-xs-4 NavBox2">
                                    </div>
                                    <div class="col-xs-4 NavBox2 ">
                                        <label class="navCenter" for="ex1">X</label>
                                        <input class="form-control floatNumber" id="ex1" type="Number" onChange={e => { this.setState({ func1: e.target.value }) }} value={this.state.func1} />
                                    </div>
                                    <div class="col-xs-4 NavBox2">
                                        <label class="navCenter" for="ex2">Y</label>
                                        <input class="form-control floatNumber" id="ex2" type="Number" onChange={e => { this.setState({ func2: e.target.value }) }} value={this.state.func2} />
                                    </div>

                                    <div class="col-xs-4 NavBox2">
                                        <label class="navCenter" for="ex4">R</label>
                                        <input class="form-control floatNumber" id="ex3" type="Number" onChange={e => { this.setState({ func3: e.target.value }) }} value={this.state.func3} />
                                    </div>
                                    <div class="col-xs-4 NavBox2">
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <div class="col-xs-4 NavBox2">
                                    </div>
                                    <div class="col-xs-4 NavBox2">
                                        <input class="form-control floatNumber" id="ex4" type="Number" onChange={e => { this.setState({ func4: e.target.value }) }} value={this.state.func4} />
                                    </div>
                                    <div class="col-xs-4 NavBox2">
                                        <input class="form-control floatNumber" id="ex5" type="Number" onChange={e => { this.setState({ func5: e.target.value }) }} value={this.state.func5} />
                                    </div>
                                    <div class="col-xs-4 NavBox2">
                                        <input class="form-control floatNumber" id="ex6" type="Number" onChange={e => { this.setState({ func6: e.target.value }) }} value={this.state.func6} />
                                    </div>
                                    <div class="col-xs-4 NavBox2">
                                    </div>
                                </div>
                                <div class="col-xs-4 NavBox2">
                                    <button type="submit" class="btn btn-primary" >Excute</button>
                                </div>
                                <div class="slice NavBox2">
                                    <input type="checkbox" checked={this.state.rememberMe}
                                        onChange={this.handleCheck} />Auto
                                    </div>
                            </form>


                            : this.state.n == "4" ?
                                <form action="" class="form-group" onSubmit={this.handleSummit}>
                                    <div class="form-group row">
                                        <div class="col-xs-4 NavBox2">
                                        </div>
                                        <div class="col-xs-4 NavBox2 ">
                                            <label class="navCenter" for="ex1">W</label>
                                            <input class="form-control floatNumber" id="ex1" type="Number" onChange={e => { this.setState({ func1: e.target.value }) }} value={this.state.func1} />
                                        </div>
                                        <div class="col-xs-4 NavBox2">
                                            <label class="navCenter" for="ex2">X</label>
                                            <input class="form-control floatNumber" id="ex2" type="Number" onChange={e => { this.setState({ func2: e.target.value }) }} value={this.state.func2} />
                                        </div>
                                        <div class="col-xs-4 NavBox2">
                                            <label class="navCenter" for="ex3">Y</label>
                                            <input class="form-control floatNumber" id="ex3" type="Number" onChange={e => { this.setState({ func3: e.target.value }) }} value={this.state.func3} />
                                        </div>
                                        <div class="col-xs-4 NavBox2">
                                            <label class="navCenter" for="ex13">Z</label>
                                            <input class="form-control floatNumber" id="ex4" type="Number" onChange={e => { this.setState({ func4: e.target.value }) }} value={this.state.func4} />
                                        </div>
                                        <div class="col-xs-4 NavBox2">
                                            <label class="navCenter" for="ex4">R</label>
                                            <input class="form-control floatNumber" id="ex5" type="Number" onChange={e => { this.setState({ func5: e.target.value }) }} value={this.state.func5} />
                                        </div>
                                        <div class="col-xs-4 NavBox2">
                                        </div>

                                    </div>
                                    <div class="form-group row ">
                                        <div class="col-xs-4 NavBox2">
                                        </div>
                                        <div class="col-xs-4 NavBox2">
                                            <input class="form-control floatNumber" id="ex6" type="Number" onChange={e => { this.setState({ func6: e.target.value }) }} value={this.state.func6} />
                                        </div>
                                        <div class="col-xs-4 NavBox2">
                                            <input class="form-control floatNumber" id="ex7" type="Number" onChange={e => { this.setState({ func7: e.target.value }) }} value={this.state.func7} />
                                        </div>
                                        <div class="col-xs-4 NavBox2">
                                            <input class="form-control floatNumber" id="ex8" type="Number" onChange={e => { this.setState({ func8: e.target.value }) }} value={this.state.func8} />
                                        </div>
                                        <div class="col-xs-4 NavBox2">

                                            <input class="form-control floatNumber" id="ex9" type="Number" onChange={e => { this.setState({ func9: e.target.value }) }} value={this.state.func9} />
                                        </div>
                                        <div class="col-xs-4 NavBox2">

                                            <input class="form-control floatNumber" id="ex10" type="Number" onChange={e => { this.setState({ func10: e.target.value }) }} value={this.state.func10} />
                                        </div>
                                        <div class="col-xs-4 NavBox2">
                                        </div>

                                    </div>
                                    <div class="form-group row ">
                                        <div class="col-xs-4 NavBox2">
                                        </div>
                                        <div class="col-xs-4 NavBox2">

                                            <input class="form-control floatNumber" id="ex11" type="Number" onChange={e => { this.setState({ func11: e.target.value }) }} value={this.state.func11} />
                                        </div>
                                        <div class="col-xs-4 NavBox2">

                                            <input class="form-control floatNumber" id="ex12" type="Number" onChange={e => { this.setState({ func12: e.target.value }) }} value={this.state.func12} />
                                        </div>
                                        <div class="col-xs-4 NavBox2">

                                            <input class="form-control floatNumber" id="ex13" type="Number" onChange={e => { this.setState({ func13: e.target.value }) }} value={this.state.func13} />
                                        </div>
                                        <div class="col-xs-4 NavBox2">

                                            <input class="form-control floatNumber" id="ex14" type="Number" onChange={e => { this.setState({ func14: e.target.value }) }} value={this.state.func14} />
                                        </div>
                                        <div class="col-xs-4 NavBox2">

                                            <input class="form-control floatNumber" id="ex15" type="Number" onChange={e => { this.setState({ func15: e.target.value }) }} value={this.state.func15} />
                                        </div>
                                        <div class="col-xs-4 NavBox2">
                                        </div>
                                    </div>

                                    <div class="form-group row ">
                                        <div class="col-xs-4 NavBox2">
                                        </div>
                                        <div class="col-xs-4 NavBox2">

                                            <input class="form-control floatNumber" id="ex16" type="Number" onChange={e => { this.setState({ func16: e.target.value }) }} value={this.state.func16} />
                                        </div>
                                        <div class="col-xs-4 NavBox2">

                                            <input class="form-control floatNumber" id="ex17" type="Number" onChange={e => { this.setState({ func17: e.target.value }) }} value={this.state.func17} />
                                        </div>
                                        <div class="col-xs-4 NavBox2">

                                            <input class="form-control floatNumber" id="ex18" type="Number" onChange={e => { this.setState({ func18: e.target.value }) }} value={this.state.func18} />
                                        </div>
                                        <div class="col-xs-4 NavBox2">

                                            <input class="form-control floatNumber" id="ex19" type="Number" onChange={e => { this.setState({ func19: e.target.value }) }} value={this.state.func19} />
                                        </div>
                                        <div class="col-xs-4 NavBox2">

                                            <input class="form-control floatNumber" id="ex20" type="Number" onChange={e => { this.setState({ func20: e.target.value }) }} value={this.state.func20} />
                                        </div>
                                        <div class="col-xs-4 NavBox2">
                                        </div>
                                    </div>
                                    <div class="col-xs-4 NavBox2">
                                        <button type="submit" class="btn btn-primary" >Excute</button>
                                    </div>
                                    <div class="slice NavBox2">
                                        <input type="checkbox" checked={this.state.rememberMe}
                                            onChange={this.handleCheck} />Auto
                                         </div>
                                </form>
                                :
                                " "
                    }
                    <div class="col-xs-4 NavBox2">
                        <table>
                            {this.state.items == "" ? " " :
                                <div class="myfontstye3">
                                    <TableLG n={this.state.n} items={this.state.items} />
                                </div>
                            }
                        </table>
                    </div>
                </div>

            </table>

        );
    }
}

export default cramer;
