// /// Define three example functions

// // function first(){
// //     console.log(1)
// // }
// // function second(){
// //     console.log(2)
// // }
// // function third(){
// //     console.log(3)
// // }

// // //Execute the functions
// // first()
// // second()
// // third()

// ///Define three example functions,
// //but one of them contains asynchronous code

// // function first(){
// //     console.log(1)
// // }

// // ///Asynchronous code it mean NOT be execute emidiatly
// // function second(){
// //     setTimeout(()=>{
// //         console.log(2)
// //     },0)
// // }
// // function third(){
// //     console.log(3)
// // }
// // //Execute the functions
// // first()
// // second()
// // third()


// ////Callback functon when another function is a parametr for first
// function first() {
//   console.log(1)
// }
// function second(callback) {
//   setTimeout(() => {
//     console.log(2)

//     callback()
//   }, 0)
// }
// function third() {
//   console.log(3)
// }

// first()
// second(third)


// ///Why we use promises

// function callBackHell(){
//     setTimeout(()=>{
//         console.log(1)
//         setTimeout(()=>{
//             console.log(2)
//             setTimeout(()=>{
//                 console.log(3)
//             },500)
//         },2000)
//     },1000)
// }

///Promises
// promise initialize ,promise should be successful or faul
const promise= new Promise((resolve,reject)=>{

})
console.log(promise)

 const promise2 = new Promise((resolve,reject)=>{
    resolve('promise resolved status')
 })
 console.log(promise2)

 /// consuming the promise

 promise2.then((response)=>{console.log(response)})

 const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('Resolving an asynchronous request!'),2000)
 })
 console.log(promise3)

 promise3.then((response)=>{console.log(response)})