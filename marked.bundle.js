'use strict';
var marked = require('marked');
console.log(marked('*Jooo*'));

window.marked = marked;
window.helloFn = () => {console.log('Hello mans');}