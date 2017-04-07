/*jshint esversion: 6 */

const chai = require('chai');
const expect = chai.expect;
const fact = require('../app.js');

describe('Factorial function', () => {

  it('should be function', () => {
    expect(fact).to.be.a('function');
  });

});

describe('Data entered', () => {

  it('the argument should be a single positive (or equal to 0) number', () => {
    expect(fact.bind(null,6,8,"test")).to.throw("Pass a single argument !!!");
    expect(fact.bind(null,"a")).to.throw("Pass a number !!!");
    expect(fact.bind(null,-5)).to.throw("Pass a number greater than 0");
  });

});

describe('Calculing accurately', () => {


  it('should calculate accurately the factorial of 0 and 1', () => {
   expect(fact(0)).to.be.equal(1);
   expect(fact(1)).to.be.equal(1);
    });

  it('should calculate accurately the factorial of any positive numbers', () => {
   expect(fact(5)).to.be.equal(120);
   expect(fact(6)).to.be.equal(720);
   expect(fact(10)).to.be.equal(3628800);
   expect(fact(15)).to.be.equal(1307674368000);
    });


});
