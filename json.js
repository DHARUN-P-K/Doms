const jsObject ={
    name:"money",
    age:33,
    display:function(){
        console.log("helo");

    },
};
//javascript object notation json
let jsonObject={
    "name": "mon",
    "age": 3,
};

//methods 
let stringJSON = JSON.stringify(jsObject);
console.log(stringJSON);
console.log(typeof stringJSON);

let normalJSON=JSON.stringify(jsObject);
console.log(stringJSON);
console.log(typeof normalJSON);


//local stroage

localStorage.setItem("user name", "Martin Luthor");
let item  =localStorage.getItem("username");
console.log(item);


// localStorage.removeItem("user name", "Martin Luthor");
// let item2  =localStorage.getItem("username");
// console.log(item2);

sessionStorage.setItem("user name", "Martin Luthor")