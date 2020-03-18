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
  constructor(props) {
    super(props)
    if(cookies.get('temp')=='true'){
      //this.wait(4000)
      {cookies.set('temp', 'false', { path: '/falsePosition' })}
     }
  }
  showAnswer = () => {
    this.falsePos(this.state.a,this.state.b,this.state.mitr,this.state.eps)
  }
  handleCheck = event => {
    if (event.target.checked) {
      this.serach(2)
    }
    this.setState({ rememberMe: event.target.checked });
  };


  falsePos = (a,b,mitr,eps) => {
    let co = a * 1.0;
    let i = 0
    let fa =this.func(a)
    let fb =this.func(b)
    let fc =this.func(co)
    let fn = this.func(i)
    this.state.items.push({ n: i, xL: a, xR: b, xM: co, fxL: fa, fxR: fb, fxM: fc,fn:fn})
    i++
    
    let cn = (a * fb - b * fa) / (fb - fa);
    if (fc * fa < 0)
      a = cn
    else
      b = cn
    fa =this.func(a)
    fb =this.func(b)
    fc =this.func(co)
    fn = this.func(i)
    this.state.items.push({ n: i, xL: a, xR: b, xM: co, fxL: fa, fxR: fb, fxM: fc,fn:fn})
    i++

    while (i < mitr) {
      fa =this.func(a)
      fb =this.func(b)
      if (fb - fa === 0)
        break
      cn = ((a * fb) - (b * fa)) / (fb - fa);
      fc =this.func(cn)
      if (fc * fa < 0)
        a = cn
      else
        b = cn
      let accuraccy = this.error(cn,co)
      if (accuraccy < eps)
        break
      co=cn
      //console.log(c)
      fn = this.func(i)
      this.state.items.push({ n: i , xL: a, xR: b, xM: co, fxL: fa, fxR: fb, fxM: fc, acc: accuraccy,fn:fn })
      i++
    }
    this.setState({ items: this.state.items })
    
  }

  render() {
    return (
      <div className="falsePosition">
         {this.renderAuthen(cookies.get('username'))?
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
                {cookies.set('temp', 'true', { path: '/falsePosition' })}
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

export default falsePosition;
