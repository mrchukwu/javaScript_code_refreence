 //
 // const p = new Promise((resolve, reject)=>{
 //    return  resolve("P");
 // })
 //
 // async function demo(){
 //    const a = await p;
 //    console.log(a);
 // }
 //
 // demo();

 //working with async

 const api_url = "http://ggol.com";

// async function fetchData(){
//     const awaitData = api_url;
//     const getData = awaitData;
//     console.log(getData);
// }
//
// fetchData().catch((err)=> console.error(err));

 // const obj = {
 //     name: "John",
 //     printName:function() {
 //         console.log(this.name);
 //     }
 // }
 // obj.printName();
 //
 // const obj2 = {
 //     name: "Ken",
 // }
 //
 // obj.printName.call(obj2)


 // const obj2 = {
 //     a: 20,
 //     x: function (){
 //         const y = () => {
 //             console.log(this);
 //         }
 //         y();
 //     }
 // }
 // obj2.x();


 const person1 = {
     firstname: "kennedy",
     lastname: "chukwu",

     printFullname: function (career, placeOfWork) {
         console.log(`${this.firstname} ${this.lastname} is a ${career} and works at ${placeOfWork}`);
     }
 }

person1.printFullname("software engineer")

 const person2 = {
     firstname: "June",
     lastname: "Ifebe",
 }

 // using the "this" call() method, we pass arguments individually in a comma seperated way.
 person1.printFullname.call(person2, "fashion designer", "Tuta");

 //using apply we pass arguments in an aarray format
 person1.printFullname.apply(person2, ["fashion designer", "Tuta"]);


const val = null;
const v = val ?? "nothing";

console.log(v)



