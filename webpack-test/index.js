import { addHtmlToRoot2, addHtmlToRoot3 } from './test1';
const test2File = require('./test2');
import TestClass from './test3';
const TestClass2 = require('./test4');

const addHtmlToRoot1 = () => {
  const h1 = document.createElement('h1');
  h1.innerText = 'Webpack test !';
  document.getElementById('root1').appendChild(h1);
}

document.addEventListener('DOMContentLoaded', function() {
  addHtmlToRoot1();
  addHtmlToRoot2('This is Root2');
  addHtmlToRoot3('This is Root3');
  test2File.default('This is Root4'); // require 로 가져온 경우 .default 써줘야 함

  const t = new TestClass('Test');
  t.log();

  const t2 = new TestClass2.default('Test2');
  t2.log();

});