import React, { Component } from 'react';
import mom from './mom.js';
import Menubar from '../../Component/Menubar';
import TableFunction from '../../Component/TableOneAns';
import Cookies from 'universal-cookie';
import Login from '../Secure/login';
import Template from './template';

const cookies = new Cookies();
class Composite_Simpson extends mom {


  render() {
    return (
      <div className="bisec">
       <Template id={2} name="Composite Simpson Rule" message="Simpson's rule is a method for numerical integration, the numerical approximation of definite integrals.
Simpson's rule also corresponds to the three-point Newton-Cotes quadrature rule."/>
      </div>
    );
  }
}
export default Composite_Simpson;