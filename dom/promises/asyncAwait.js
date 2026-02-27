// //async await 
// function getData (dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     })
// }

// async function getAllData(){
//     console.log("getting data 1...");
//     await getData(1);
//         console.log("getting data 2...");
//     await getData(2);
//         console.log("getting data 3...");
//     await getData(3);
//         console.log("getting data 4...");
//     await getData(4);
//     console.log("success")
// }
// getAllData().then((result) => {
//     console.log(result)
// })

// async function newFnx() {
//     console.log("hello");
// }===================================================================================================

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("I am giving u a weather data")
//             resolve("Hey ")
            
//         }, 3000);
        
//     })
    
// }
// // async function getweatherdata() {
// //     await api();
    
// // }
// api.then((result) => {
//     console.log(result);
    
// })

// (async function () {
//     await api();
    
    
// })();
// ==============================================================================================================

async function harry( ) {
let delhiWeather = new Promise((resolve, reject) => {
setTimeout(() => {
resolve("27 Deg")
}, 1000)

})

let bangaloreWeather = new Promise((resolve, reject) => {
setTimeout(() => {
resolve("21 Deg")

}, 2000)
})
delhiWeather. then(alert)
delhiWeather. then(alert)
I}

console. log("Welcome to weather control room")
harry()