import React, { Component } from 'react';
import { create, all } from 'mathjs'
import Axios from 'axios'
import TestcaseAPI from '../../dataAPI';
const math = create(all)

class mom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fx: "",
            x: "",
            h: "",
            degree: "",
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

    renderAuthen(cookie) {
        try {
            return cookie.length != '' ? 1 : 0
        } catch (e) {
            console.log('error');
        }
    }

    serach() {
        TestcaseAPI.getTestcase().then(data => {
            if (data == "ok") {
                TestcaseAPI.getTestcaseId(8).then(data => {
                    if (data[0] != '<') {
                        var Data = JSON.parse(data)
                        Data = Data.response[0].datas[0]
                        this.setState({ fx: Data.fx })
                        this.setState({ x: Data.x })
                        this.setState({ h: Data.h })
                        this.setState({ degree: Data.degree })
                        console.log("Successful")
                    } else {
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
            console.log(result.data[0])
            this.setState({ fx: result.data[0].diff[0].fx })
            this.setState({ x: result.data[0].diff[0].x })
            this.setState({ h: result.data[0].diff[0].h })
            this.setState({ degree: result.data[0].diff[0].degree })
        })
    }

    func(X) {
        var expr = math.compile(this.state.fx);
        let scope = { x: parseFloat(X) };
        return expr.eval(scope);
    }

    handleSummit = (event) => {
        event.preventDefault();
        this.Answer(JSON.stringify(this.state))
    };

    Answer = (json) => {
        const obj = JSON.parse(json);
        this.state.a = parseFloat(obj.a);
        this.state.h = parseFloat(obj.h);
        this.state.degree = parseFloat(obj.degree);
        this.showAnswer()
    }

    showAnswer = () => {
    }

   

}
export default mom;
var url = 'https://raw.githubusercontent.com/SlayerHACK/hacker/master/diff.json'