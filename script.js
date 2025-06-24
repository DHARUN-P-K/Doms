console.log("print")
console.warn("warning")
console.error("error")
console.table([{name:"Alice"},{name:"Bob"}]);
console.debug()
console.time("loop");
for(let i =0;i< 10000;i++){}
console.timeEnd("loop");


//eval()fucnction
const x =10;
const y = 20;
const res = eval(x+y);
console.log(res)

//stict nodes
"use strict";
let a = 10;
b=20;
console.log(a+b);


//&& guard quantity
let a = (1>2) && 5;


