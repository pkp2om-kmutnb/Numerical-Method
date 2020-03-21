import React, { Component } from 'react';
import { create, all } from 'mathjs'
import Axios from 'axios'
import TestcaseAPI from '../../TestcaseAPI';
const math = create(all)

var Algebrite = require('algebrite')
class mom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fx: "",
            a: "",
            b: "",
            n: "",
            items: [],
            showOutput: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    handleCheck = (event) => {
        if (event.target.checked) {
            this.serach()
        }
    };

    serach() {
        TestcaseAPI.getTestcase().then(data => {
            if (data == "ok") {
                TestcaseAPI.getTestcaseId(6).then(data => {
                    
                    if(data[0]!='<'){
                        var Data =  JSON.parse(data)
                        Data = Data.response[0].datas[0]
                        this.setState({ fx: Data.fx })
                        this.setState({ a: Data.a })
                        this.setState({ b: Data.b })
                        this.setState({ n: Data.n })
                        console.log("Successful")
                      }else{
                        this.serach_on_git()
                      }
                });
            } else {
                this.serach_on_git()
            }
        });
    }
    serach_on_git() {
        Axios.get(url).then(result => {
            this.setState({ fx: result.data[0].simpson[0].fx })
            this.setState({ a: result.data[0].simpson[0].a })
            this.setState({ b: result.data[0].simpson[0].b })
            this.setState({ n: result.data[0].simpson[0].n })
        })
    }

 

    handleSummit = (event) => {
        event.preventDefault();
        this.Answer(JSON.stringify(this.state))
    };

    Answer = (json) => {
        const obj = JSON.parse(json);
        this.state.a = parseFloat(obj.a);
        this.state.b = parseFloat(obj.b);
        this.state.n = parseFloat(obj.n);
        this.showAnswer()
    }

    showAnswer = () => {
    }

    renderAuthen(cookie) {
        try {
            return cookie.length != '' ? 1 : 0
        } catch (e) {
            console.log('error');
        }
    }


    Integrate(a, b) {
        var expr = math.compile(Algebrite.integral(Algebrite.eval(this.state.fx)).toString())
        return expr.eval({ x: b }) - expr.eval({ x: a })

    }

    sum(start, n, h) {
        var sum = 0
        var counter = h
        for (var i = start; i < n; i += 2) {
            sum += this.func(counter)
            counter += 2 * h
        }
        return sum
    }

    func(X) {
        var expr = math.compile(this.state.fx);
        let scope = { x: parseFloat(X) };
        return expr.eval(scope);
    }

    


}
export default mom;
var url = 'https://raw.githubusercontent.com/pkp2om-kmutnb/Data-Provider/master/Integration.json'