import '../../App.css';
import { Component } from 'react';
import TestcaseAPI from '../../TestcaseAPI';
import Axios from 'axios'


class mom extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "",
      n: "",
      func1: "",
      func2: "",
      func3: "",
      func4: "",
      func5: "",
      func6: "",
      func7: "",
      func8: "",
      func9: "",
      func10: "",
      func11: "",
      func12: "",
      func13: "",
      func14: "",
      func15: "",
      func16: "",
      func17: "",
      func18: "",
      func19: "",
      func20: "",
      items: [],
      matrix: [[]],
      TestCase: [],
      rememberMe: false
    };
  }

  serach(index) {
    if (this.state.n == "2") {
      TestcaseAPI.getTestcase().then(data => {
        if (data == "ok") {
          TestcaseAPI.getTestcaseId(9).then(data => {
            if (data[0] != '<') {
              var Data = JSON.parse(data)
              Data = Data.response[0].datas[0]
              this.setState({ func1: Data.x1 })
              this.setState({ func2: Data.x2 })
              this.setState({ func3: Data.x3 })
              this.setState({ func4: Data.x4 })
              this.setState({ func5: Data.x5 })
              this.setState({ func6: Data.x6 })
              console.log("Successful")
            } else {
              this.serach_on_git(index)
            }

          });
        } else {
          this.serach_on_git(index)
        }
      });
    } else if (this.state.n == "3") {
      TestcaseAPI.getTestcase().then(data => {
        if (data == "ok") {
          TestcaseAPI.getTestcaseId(10).then(data => {
            if (data[0] != '<') {
              var Data = JSON.parse(data)
              Data = Data.response[0].datas[0]
              this.setState({ func1: Data.x1 })
              this.setState({ func2: Data.x2 })
              this.setState({ func3: Data.x3 })
              this.setState({ func4: Data.x4 })
              this.setState({ func5: Data.x5 })
              this.setState({ func6: Data.x6 })
              this.setState({ func7: Data.x7 })
              this.setState({ func8: Data.x8 })
              this.setState({ func9: Data.x9 })
              this.setState({ func10: Data.x10 })
              this.setState({ func11: Data.x11 })
              this.setState({ func12: Data.x12 })
              console.log("Successful")
            } else {
              this.serach_on_git(index)
            }

          });
        } else {
          this.serach_on_git(index)
        }
      });
    } else {
      TestcaseAPI.getTestcase(11).then(data => {
        if (data == "ok") {
          TestcaseAPI.getTestcaseId(11).then(data => {
            if (data[0] != '<') {
              var Data = JSON.parse(data)
              Data = Data.response[0].datas[0]
              this.setState({ func1: Data.x1 })
              this.setState({ func2: Data.x2 })
              this.setState({ func3: Data.x3 })
              this.setState({ func4: Data.x4 })
              this.setState({ func5: Data.x5 })
              this.setState({ func6: Data.x6 })
              this.setState({ func7: Data.x7 })
              this.setState({ func8: Data.x8 })
              this.setState({ func9: Data.x9 })
              this.setState({ func10: Data.x10 })
              this.setState({ func11: Data.x11 })
              this.setState({ func12: Data.x12 })
              this.setState({ func13: Data.x13 })
              this.setState({ func14: Data.x14 })
              this.setState({ func15: Data.x15 })
              this.setState({ func16: Data.x16 })
              this.setState({ func17: Data.x17 })
              this.setState({ func18: Data.x18 })
              this.setState({ func19: Data.x19 })
              this.setState({ func20: Data.x20 })
              console.log("Successful")
            } else {
              this.serach_on_git(index)
            }

          });
        } else {
          this.serach_on_git(index)
        }
      });

    }
  }

  wait = (ms) => {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  renderAuthen(cookie) {
    try {
      return cookie.length != '' ? 1 : 0
    } catch (e) {
      console.log('error');
    }
  }

  handleSummit = (event) => {
    event.preventDefault();
    this.Answer();
  };

  fix_point = (x) => {
    return Math.round((x) * 100) / 100
  }

  output = (x) => {
    if (this.state.n == 3) {
      this.state.items.push({ x1: Math.round(x[0]).toFixed(6), x2: Math.round(x[1]).toFixed(6), x3: Math.round(x[2]).toFixed(6) })
    } else if (this.state.n == 4) {
      this.state.items.push({ x1: Math.round(x[0]).toFixed(6), x2: Math.round(x[1]).toFixed(6), x3: Math.round(x[2]).toFixed(6), x4: Math.round(x[3]).toFixed(6) })
    } else {
      this.state.items.push({ x1: Math.round(x[0]).toFixed(6), x2: Math.round(x[1]).toFixed(6) })
    }
    this.setState({ items: this.state.items })
  }

  Answer = () => {

    if (this.state.n == 2) {
      let matrix = new Array(2);
      for (let i = 0; i < 2; i++) {
        matrix[i] = new Array(3);
      }

      matrix[0][0] = parseInt(this.state.func1)
      matrix[0][1] = parseInt(this.state.func2)
      matrix[0][2] = parseInt(this.state.func3)

      matrix[1][0] = parseInt(this.state.func4)
      matrix[1][1] = parseInt(this.state.func5)
      matrix[1][2] = parseInt(this.state.func6)
      this.state.matrix = matrix
      this.setState({ matrix: this.state.matrix })

    } else if (this.state.n == 3) {
      let matrix = new Array(3);
      for (let i = 0; i < 3; i++) {
        matrix[i] = new Array(4);
      }
      matrix[0][0] = parseInt(this.state.func1)
      matrix[0][1] = parseInt(this.state.func2)
      matrix[0][2] = parseInt(this.state.func3)
      matrix[0][3] = parseInt(this.state.func4)

      matrix[1][0] = parseInt(this.state.func5)
      matrix[1][1] = parseInt(this.state.func6)
      matrix[1][2] = parseInt(this.state.func7)
      matrix[1][3] = parseInt(this.state.func8)

      matrix[2][0] = parseInt(this.state.func9)
      matrix[2][1] = parseInt(this.state.func10)
      matrix[2][2] = parseInt(this.state.func11)
      matrix[2][3] = parseInt(this.state.func12)
      this.state.matrix = matrix
      this.setState({ matrix: this.state.matrix })

    } else if (this.state.n == 4) {
      let matrix = new Array(4);
      for (let i = 0; i < 4; i++) {
        matrix[i] = new Array(5);
      }
      matrix[0][0] = parseInt(this.state.func1)
      matrix[0][1] = parseInt(this.state.func2)
      matrix[0][2] = parseInt(this.state.func3)
      matrix[0][3] = parseInt(this.state.func4)
      matrix[0][4] = parseInt(this.state.func5)

      matrix[1][0] = parseInt(this.state.func6)
      matrix[1][1] = parseInt(this.state.func7)
      matrix[1][2] = parseInt(this.state.func8)
      matrix[1][3] = parseInt(this.state.func9)
      matrix[1][4] = parseInt(this.state.func10)

      matrix[2][0] = parseInt(this.state.func11)
      matrix[2][1] = parseInt(this.state.func12)
      matrix[2][2] = parseInt(this.state.func13)
      matrix[2][3] = parseInt(this.state.func14)
      matrix[2][4] = parseInt(this.state.func15)

      matrix[3][0] = parseInt(this.state.func16)
      matrix[3][1] = parseInt(this.state.func17)
      matrix[3][2] = parseInt(this.state.func18)
      matrix[3][3] = parseInt(this.state.func19)
      matrix[3][4] = parseInt(this.state.func20)
      this.state.matrix = matrix
      this.setState({ matrix: this.state.matrix })

    }
    if(this.state.n < 5 && this.state.n > 1)
      this.findSolution()
    else 
      alert("Please Enter Size of Matrix 2-4")
  }

  findSolution = () => {
  }

  serach_on_git(id) {

    if (this.state.n == "2") {
      Axios.get(url1).then(result => {
        console.log(result.data[0].linear[id])
        this.setState({ func1: result.data[0].linear[id].x1 })
        this.setState({ func2: result.data[0].linear[id].x2 })
        this.setState({ func3: result.data[0].linear[id].x3 })
        this.setState({ func4: result.data[0].linear[id].x4 })
        this.setState({ func5: result.data[0].linear[id].x5 })
        this.setState({ func6: result.data[0].linear[id].x6 })
      })
    } else if (this.state.n == "3") {
      Axios.get(url2).then(result => {
        console.log(result.data[0].linear[id])
        this.setState({ func1: result.data[0].linear[id].x1 })
        this.setState({ func2: result.data[0].linear[id].x2 })
        this.setState({ func3: result.data[0].linear[id].x3 })
        this.setState({ func4: result.data[0].linear[id].x4 })
        this.setState({ func5: result.data[0].linear[id].x5 })
        this.setState({ func6: result.data[0].linear[id].x6 })
        this.setState({ func7: result.data[0].linear[id].x7 })
        this.setState({ func8: result.data[0].linear[id].x8 })
        this.setState({ func9: result.data[0].linear[id].x9 })
        this.setState({ func10: result.data[0].linear[id].x10 })
        this.setState({ func11: result.data[0].linear[id].x11 })
        this.setState({ func12: result.data[0].linear[id].x12 })
      })
    } else {
      Axios.get(url3).then(result => {
        console.log(result.data[0].linear[id])
        this.setState({ func1: result.data[0].linear[id].x1 })
        this.setState({ func2: result.data[0].linear[id].x2 })
        this.setState({ func3: result.data[0].linear[id].x3 })
        this.setState({ func4: result.data[0].linear[id].x4 })
        this.setState({ func5: result.data[0].linear[id].x5 })
        this.setState({ func6: result.data[0].linear[id].x6 })
        this.setState({ func7: result.data[0].linear[id].x7 })
        this.setState({ func8: result.data[0].linear[id].x8 })
        this.setState({ func9: result.data[0].linear[id].x9 })
        this.setState({ func10: result.data[0].linear[id].x10 })
        this.setState({ func11: result.data[0].linear[id].x11 })
        this.setState({ func12: result.data[0].linear[id].x12 })
        this.setState({ func13: result.data[0].linear[id].x13 })
        this.setState({ func14: result.data[0].linear[id].x14 })
        this.setState({ func15: result.data[0].linear[id].x15 })
        this.setState({ func16: result.data[0].linear[id].x16 })
        this.setState({ func17: result.data[0].linear[id].x17 })
        this.setState({ func18: result.data[0].linear[id].x18 })
        this.setState({ func19: result.data[0].linear[id].x19 })
        this.setState({ func20: result.data[0].linear[id].x20 })
      })
    }
  }
}

export default mom;
var url1 = 'https://raw.githubusercontent.com/pkp2om-kmutnb/Data-Provider/master/Linear%20Algebra%202D.json'
var url2 = 'https://raw.githubusercontent.com/pkp2om-kmutnb/Data-Provider/master/Linear%20Algebra%203D.json'
var url3 = 'https://raw.githubusercontent.com/pkp2om-kmutnb/Data-Provider/master/Linear%20Algebra%204D.json'