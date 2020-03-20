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
        //separate AX=B
        let n = A.length
        let B = new Array(n);
        for (let k = 0; k < n; k++)
            B[k] = A[k][n]

        //solve
        for (let k = 0; k < n; k++) {
            for (let i = k + 1; i < n; i++) {
                let temp = A[i][k] / A[k][k]
                for (let j = k; j < n; j++) {
                    A[i][j] -= temp * A[k][j]
                }
                B[i] -= temp * B[k]
            }
        }
        //answer 
        let answer = new Array(n)
        answer[n-1] = Math.round((B[n-1] / A[n-1][n-1]) * 100) / 100
        for (let i = n - 2; i >= 0; i--) {
            let sum = B[i];
            for (let j = i + 1; j < n; j++) {
                sum -= A[i][j] * answer[j]
            }
            answer[i] = sum / A[i][i]
        }
        this.output(answer)
    }


    cramer = (matrix) => {
        //separate AX=B
        let n = matrix.length
        let B = new Array(n);
        for (let k = 0; k < n; k++)
            B[k] = matrix[k][n]
        let A = new Array(n);
        for (let i = 0; i < n; i++)
            A[i] = new Array(n);
        for (let i = 0; i < this.state.n; i++)
            for (let j = 0; j < this.state.n; j++)
                A[i][j] = matrix[i][j]

        //solve
        let answer = [];
        let col = 0;
        while (col != this.state.n) {
            let Matrix = JSON.parse(JSON.stringify(matrix));
            // insert B to A 
            for (let i = 0; i < this.state.n; i++) {
                for (let j = 0; j < this.state.n; j++) {
                    if (j == col) {
                        Matrix[i][j] = B[i]
                        break;
                    }
                }
            }
            //copy to Ax_transpose
            let A_transpose = new Array(n);
            for (let i = 0; i < n; i++)
                A_transpose[i] = new Array(n);
            for (let i = 0; i < this.state.n; i++)
                for (let j = 0; j < this.state.n; j++)
                    A_transpose[i][j] = Matrix[i][j]

            //find determinant
            answer.push(Math.round(math.det(A_transpose)) / Math.round(math.det(A)))
            col++;
        }
        this.output(answer)

    }

    lu = (matrix) => {
        //separate AX=B
        let n = matrix.length
        let B = new Array(n);
        for (let k = 0; k < n; k++)
            B[k] = matrix[k][n]
        let A = new Array(n);
        for (let i = 0; i < n; i++)
            A[i] = new Array(n);
        for (let i = 0; i < this.state.n; i++)
            for (let j = 0; j < this.state.n; j++)
                A[i][j] = matrix[i][j]

        //solve
        let decompose = math.lusolve(A, B)
        //answer
        let answer = [];
        for (let i = 0; i < decompose.length; i++) {
            answer.push(decompose[i])
        }
        this.output(answer)
    
    }

    jordan = (matrix) => {
        //separate AX=B
        let n = matrix.length
        let B = new Array(n);
        for (let k = 0; k < n; k++) {
            B[k] = matrix[k][n]
        }
        //Eliminate forward
        for (let k = 0; k < n; k++) {
            for (let i = k + 1; i < n; i++) {
                let temp = matrix[i][k] / matrix[k][k];
                for (let j = k; j < n; j++) {
                    matrix[i][j] -= temp * matrix[k][j];
                }
                B[i] -= temp * B[k];
            }
        }
        //Eliminate backward
        for (let k = n - 1; k >= 0; k--) {
            for (let i = k; i >= 0; i--) {
                if (i === k) {
                    let temp = 1 / matrix[i][k];
                    for (let j = 0; j < n; j++) {
                        matrix[i][j] *= temp;
                    }
                    B[i] *= temp;
                }
                else {
                    let temp = matrix[i][k] / matrix[k][k];
                    for (let j = 0; j < n; j++) {
                        matrix[i][j] -= temp * matrix[k][j];
                    }
                    B[i] -= temp * B[k];
                }
            }
        }
        //answer
        let answer = [];
        for (let i = 0; i < n; i++) {
            answer.push(B[i]);
        }
        this.output(answer)
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
