import React from 'react';
import './App.css';
import Axios from 'axios'
import TestcaseAPI from './TestcaseAPI';
import { create, all } from 'mathjs'



class mom extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         message: ""
      };
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
   }

   handleSummit = (event) => {
      event.preventDefault();
      var TestCase = [{  
      index :"0" ,name_type : "root", name_method:"bisection" , 
      datas:[{ Root : "2x^3-x^2+2", xL : "-2", xR : "2", Epsilon: "0.01", Maximum_Iterations : "12" }]
      }]
      console.log(TestCase)
      TestcaseAPI.createTestcase(TestCase)
   };

   handleCheck = (event) => {
      if (event.target.checked) {
         var TestCase = [this.state.message]
         console.log(TestCase)
         TestcaseAPI.createTestcase(TestCase)
      }
      this.setState({ rememberMe: event.target.checked });
   };


   render() {
      return (
         <div className="bisec">
            <div class="slice NavBox2">
               <form action="" class="form-group" onSubmit={this.handleSummit}>
                  <div class="col-xs-4 NavBox3">
                     <label for="ex1">Enter Json </label>
                     <input type="text" class="form-control" id="ex1" onChange={e => { this.setState({ message: e.target.value }) }} value={this.state.message} />
                  </div>
                  <div class="form-group row ">
                  </div>
                  <div class="input-group">
                     <div class="NavBox2">
                        <label for="ex6"></label>
                        <button type="submzit" class="btn btn-primary" >Excute</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      );
   }

}

export default mom;
//UserinfoAPI.createUserinfo(this.state.Userinfo)