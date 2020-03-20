import React, { Component } from 'react';
import Menubar from '../../Component/Menubar';
import TableFunction from '../../Component/TableOneAns';
import Cookies from 'universal-cookie';
import math from 'mathjs';
import mom from './mom.js';
import Login from '../Secure/login';
import Template from './template';
const cookies = new Cookies();

var y;
class Forwardh2 extends mom {

 
  render() {
    return (
      <div className="bisec">
        <Template id={5} name="Forward Second Degree"/>
      </div>
    );
  }
}
export default Forwardh2;