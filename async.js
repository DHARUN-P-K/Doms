

// asynchronous function
function hello (){
    console.log("hai ");
}


setTimeout(()=> console.log("hello i am javascript"),5000)
let count=0;
let timer = setInterval(()=>{
    count++;
console.log("hello world");
if(count>5){
    clearInterval(timer)
}},2000);

console.log("welcome");

callback 



function doTask(taskName,callback){
    console.log(`Starting  ${taskName}...`);
    setTimeout(()=>{
        console.log(`${taskName}completed!`);
        callback();
    },5000);
    }
doTask("yessss",()=>{
    console.log("nooooooooo");





});
// call back Hell-nested callback logic
promises
let order = new Promise((resolve,reject)=>{
    let isOverWorking = true;
    setTimeout(()=>{
        if(isOverWorking){
            resolve("order is ready");
        }else{
            reject("Order delay");
        }
    },3000);
});
order
.then((message)=> console.log("success:",message))
.catch((error)=>{
    console.log("Error:",error);
});




function orderFuction(){
    let order = new Promise((resolve,reject)=>{
    let isOverWorking = false;
    setTimeout(()=>{
        if(isOverWorking){
            resolve("order is ready");
        }else{
            reject("Order delay");
        }
    },3000);
});
return order;
}


async function orderFood(){
    try{
    const orderStatus = await orderFuction();
    console.log(orderStatus);}
    catch(error){
        console.log(`Error:${error}`);
    }
}

orderFood();



// try catch()
try{
    let name= y;
    console.log(name)
}catch(error){
    console.log(`Error:${error}`);
}finally{
    console.log("task completed");
}