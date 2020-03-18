import React, { Component } from 'react';
import math from 'mathjs';
import mom from './mom.js';
import Menubar from '../../Component/Menubar';
import TableFunction from '../../Component/TableOneAns';
import Cookies from 'universal-cookie';
import Login from '../Secure/login';
import Template from './template';
const cookies = new Cookies();
var y;
class CentralH extends mom {

  render() {
    return (
      <div className="bisec">
        <Template id={3}/>
      </div>
    );
  }
}
export default CentralH;