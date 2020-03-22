import '../../App.css';
import { Component } from 'react';
import Login from '../Secure/login';
import Axios from 'axios'
import TestcaseAPI from '../../TestcaseAPI';
import { create, all } from 'mathjs'
const math = create(all)
var algebra = require('algebra.js');
class mom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      equ: "",
      a: "",
      b: "",
      eps: "",
      mitr: "",
      items: [],
      TestCase: [],
      rememberMe: false,
      rememberMeSvae: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


  serach(index) {
    TestcaseAPI.getTestcase().then(data => {
      if (data == "ok") {
        TestcaseAPI.getTestcaseId(index).then(data => {
          if (data[0] != '<') {
            var Data = JSON.parse(data)
            Data = Data.response[0].datas[0]
            this.setState({ a: Data.xL })
            this.setState({ b: Data.xR })
            this.setState({ eps: Data.Epsilon })
            this.setState({ mitr: Data.Maximum_Iterations })
            this.setState({ equ: Data.Root })
            console.log("Successful")
          } else {
            this.serach_on_git(index)
          }
        });
      } else {
        this.serach_on_git(index)
        console.log("Never Give up")
      }
    });
  }

  evil = (fn) => {
    return new Function('return ' + fn)();
  }

  error(xnew, xold) {
    return Math.abs((xnew - xold) / xnew);
  }

  funcDiff(X) {
    var eqution = math.derivative(this.state.equ, 'x');
    let scope = { x: parseFloat(X) };
    return eqution.eval(scope);
  }

  func = (X) => {
    var eqution = math.compile(this.state.equ);
    let scope = { x: parseFloat(X) };
    return eqution.eval(scope);
  }

  serach_on_git(id) {
    Axios.get(url).then(result => {
      this.setState({ a: result.data[0].root[id].xL })
      this.setState({ b: result.data[0].root[id].xR })
      this.setState({ eps: result.data[0].root[id].Epsilon })
      this.setState({ mitr: result.data[0].root[id].Maximum_Iterations })
      this.setState({ equ: result.data[0].root[id].Root })
    })
  }

  renderAuthen(cookie) {
    try {
      return cookie.length != '' ? 1 : 0
    } catch (e) {
      console.log('error');
    }
  }

  wait = (ms) => {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  handleSummit = (event) => {
    event.preventDefault();
    this.Answer(JSON.stringify(this.state))
  };

  Answer = (json) => {
    const obj = JSON.parse(json);
    if(obj.mitr <= 100 && obj.mitr > 0){
      this.state.a = parseFloat(obj.a);
      this.state.b = parseFloat(obj.b);
      this.state.eps = parseFloat(obj.eps);
      this.state.mitr = parseInt(obj.mitr);
      let exp = new algebra.parse(this.state.equ);
      let temp = exp.toString()
      this.state.equ = temp
      this.showAnswer()
    }else{
      alert("Plese Enter Maximum Iterations 1-100")
    }
    
  }

  showAnswer = () => {
  }

  saveThis = (id) => {
    if(id == 1){
      var TestCase = [{  
        index :"0" ,name_type : "root", name_method:"bisection" , 
        datas:[{ Root : this.state.equ, xL : this.state.a, xR : this.state.b , Epsilon:this.state.equ.eps, Maximum_Iterations : this.state.mitr }]
        }]
        TestcaseAPI.createTestcase(TestCase)
    }else if(id == 2){
      var TestCase = [{  
        index :"1" ,name_type : "root", name_method:"Graphical" , 
        datas:[{ Root : this.state.equ, xL : this.state.a, xR : this.state.b , Epsilon:this.state.equ.eps, Maximum_Iterations : this.state.mitr }]
        }]
        TestcaseAPI.createTestcase(TestCase)
    }else if(id == 3){
      var TestCase = [{  
        index :"2" ,name_type : "root", name_method:"FalsePosition" , 
        datas:[{ Root : this.state.equ, xL : this.state.a, xR : this.state.b , Epsilon:this.state.equ.eps, Maximum_Iterations : this.state.mitr }]
        }]
        TestcaseAPI.createTestcase(TestCase)
    }else if(id == 4){
      var TestCase = [{  
        index :"3" ,name_type : "root", name_method:"OnePointItration" , 
        datas:[{ Root : this.state.equ, xL : this.state.a, xR : this.state.b , Epsilon:this.state.equ.eps, Maximum_Iterations : this.state.mitr }]
        }]
        TestcaseAPI.createTestcase(TestCase)
    }else if(id == 5){
      var TestCase = [{  
        index :"4" ,name_type : "root", name_method:"NewtonRaphson" , 
        datas:[{ Root : this.state.equ, xL : this.state.a, xR : this.state.b , Epsilon:this.state.equ.eps, Maximum_Iterations : this.state.mitr }]
        }]
        TestcaseAPI.createTestcase(TestCase)
    }else if(id == 6){
      var TestCase = [{  
        index :"5" ,name_type : "root", name_method:"Secant" , 
        datas:[{ Root : this.state.equ, xL : this.state.a, xR : this.state.b , Epsilon:this.state.equ.eps, Maximum_Iterations : this.state.mitr }]
        }]
        TestcaseAPI.createTestcase(TestCase)
    }
    
}


}
export default mom;
var url = 'https://raw.githubusercontent.com/pkp2om-kmutnb/Data-Provider/master/Root%20of%20Equation.json'
