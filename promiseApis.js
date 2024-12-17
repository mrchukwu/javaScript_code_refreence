//Promise APIs
//promise.all()
//promise.allSettled()
//promise.race()
//promise.any()

const p1 = new Promise(function(resolve, reject){
    setTimeout(()=> resolve("P1 success"), 3000);
})

const p2 = new Promise(function(resolve, reject){
    setTimeout(()=> reject("P2 fail"), 1000);
    // setTimeout(()=> resolve("P2 success"), 1000);
})

const p3 = new Promise(function(resolve, reject){
    setTimeout(()=> resolve("P3 success"), 2000);
})

Promise.any([p1, p2, p3]).then(result=>{
    console.log(result);
}).catch(err=>{console.error(err)});