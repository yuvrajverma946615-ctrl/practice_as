// //  const promise = new Promise((resolve, reject) => {
// //  let success = true;

// //  if (success) {
// //     resolve("task is completed");
// //   } else {
// //      reject("task is not completed");
// //   }
// // });

// // // // // //  function app() {
// // // // // //   fetch('https://api.freeapi.app/api/v1/public/randomproducts/product/random')
// // // // // //   .then((response)=> response.json()

// // // // // // ).then(console.log).catch(error =>console.log(error))}
// // // // // // app()

// // // // // // async

// // // // // // function greet (){
// // // // // //   console.log("hello");

// // // // // // }
// // // // // //  function app(callback) {

// // // // // //     callback();

// // // // // // }
// // // // // // greet();

// // // // // // function getName(callback) {
// // // // // //   setTimeout(() => {
// // // // // //     callback("Yuvraj Verma");
// // // // // //   },3000);
// // // // // // }
// // // // // // getName((name)=>{
// // // // // //   console.log("hello" + name);
// // // // // // });

// // // // // // // asychronous callback
// // // // // // function number(callback) {
// // // // // //   setTimeout(() => {
// // // // // //     callback(5);
// // // // // //   }, 3000);
// // // // // // }

// // // // // // function square(number) {
// // // // // //   console.log(number * number);
// // // // // // }

// // // // // // number(square);
// // // // // // const students = ["Yuvraj", 80, "rohit", 70];
// // // // // // for (let student of students) {
// // // // // //    for(let i = 0; i< students.length; i++){
// // // // // //     console.log(student);
// // // // // //    }
// // // // // //   }

//   function login (username, password,callback) {
//     setTimeout(() => {
//       if (username === "Yuvraj" && password === "123"){

//         callback(null, "You got damm right");
//       } else{

//         callback("You fu**d up ", null);
//       }
//     },3000);
//   }
//   login ("rohit", "456", (err, msg) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(msg);
//     }
//   });

// // // // function login(username, password, callback) {
// // // //   setTimeout(() => {
// // // //     if (username === "Yuvraj" && password === "123") {
// // // //       console.log("You got damm right");
// // // //       callback(null, {
// // // //         userId: 101,
// // // //         username: "Yuvraj",
// // // //       });
// // // //     } else {
// // // //       callback("You fu**d up ", null);
// // // //     }
// // // //   }, 2000);
// // // // }

// // // // //get user deta
// // // // function getUserData(userId, callback) {
// // // //   setTimeout(() => {
// // // //     if (userId === 101) {
// // // //       console.log("User data fetched successfully");
// // // //       callback(null, {
// // // //         name: "Yuvraj Verma",
// // // //         email: "yuvraj@example.com",
// // // //         City: "Bihar",
// // // //       });
// // // //     } else {
// // // //       callback("User not found", null);
// // // //     }
// // // //   }, 2000);
// // // // }

// // // // // get order
// // // // function getOrder(userId, callback) {
// // // //   setTimeout(() => {
// // // //     if (userId === 101) {
// // // //       console.log("Order received successfully");
// // // //       callback(null, {
// // // //         OrderId: 1001,

// // // //         ProductId: 102,
// // // //       });
// // // //     } else {
// // // //       callback("Order not found", null);
// // // //     }
// // // //   }, 2000);
// // // // }

// // // // // get product
// // // // function getProduct(productId, callback) {
// // // //   setTimeout(() => {
// // // //     if (productId === 102) {
// // // //       console.log("product  recieved");
// // // //       callback(null, {
// // // //         productName: "Laptop",
// // // //         price: 50000,
// // // //       });
// // // //     } else {
// // // //       callback("product not found", null);
// // // //     }
// // // //   }, 2000);
// // // // }

// // // // // payment

// // // // function makePayment(amount, callback) {
// // // //   setTimeout(() => {
// // // //     if (amount <= 50000) {
// // // //       console.log(" Payment successful");

// // // //       callback(null, "Payment ID: PAY123");
// // // //     } else {
// // // //       callback("Payment failed", null);
// // // //     }
// // // //   }, 2000);
// // // // }

// // // // login("Yuvraj", "123", (err, user) => {
// // // //   if (err) {
// // // //     console.error(err);
// // // //   } else {

// // // //     getUserData(user.userId, (err, userData) => {
// // // //       if (err) {
// // // //         console.error(err);
// // // //       } else {
// // // //         console.log(userData);
// // // //       }
// // // //     });

// // // //      getOrder(user.userId, (err, order) =>{
// // // //       if(err){
// // // //         console.error(err);
// // // //       } else {
// // // //         console.log(order);
// // // //       }
// // // //      });

// // // //      getProduct(102,(err,product)=>{
// // // //       if(err){
// // // //         console.error(err);
// // // //       } else {
// // // //         console.log(product);
// // // //       }
// // // //     });
// // // //     makePayment(50000, (err, payment) => {
// // // //       if (err) {
// // // //         console.log(err);
// // // //       } else {
// // // //         console.log(payment);
// // // //       }
// // // //     });

// // // //   }

// // // // });

// // // //promise

// // // function getData(){
// // //   return new Promise((resolve,reject) => {
// // //     setTimeout(() => {
// // //       const user= {
// // //         name: "Yuvraj",
// // //         age : 20
// // //       };
// // //       resolve(user);
// // //     }, 2000);

// // //       });
// // //   }

// // //   getData().then((user) => {
// // //     console.log("User data fetched successfully");
// // //     console.log(user);
// // //   });
// // //   console.log("Fetching user data...");

// // function app(){
// //   const promise = new Promise((resolve,reject) => {
// //  (fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10'))
// //  .then ((response) => {
// //    return response.json();
// //  })
// //  .then ((data) =>{
// //   resolve(data);
// //  })

// //  .catch((error) => {
// //   reject(error);
// //  });

// // });
// // return promise;
// // }

// //     app()
// //     .then((data) => {
// //       console.log("Data fetched successfully");
// //       console.log(data);
// //     })
// //     .catch((error) => {
// //       console.error("Error fetching data:", error);
// // 

// // function getUser(userId) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       if (userId === 2) {
// //         resolve({
// //           Name: "Yuvraj verma",
// //           id: 2,
// //           email: "yuvraj@example.com",
// //         });
// //       } else {
// //         reject("user not found");
// //       }
// //     }, 2000);
// //   });
// // }

// // function getOrders(userId) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       if (userId === 2) {
// //         resolve([
// //           {
// //             id: 102,
// //             amount: 500,
// //             product: "shoes",
// //           },
// //           {
// //             id: 103,
// //             amount: 1000,
// //             product: "headphones",
// //           },
// //         ]);

// //       } else {
// //         reject("user not found");
// //       }
// //     }, 1000);
// //   });
// // }

// // function calculateTotal(orders) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       if (orders && orders.length > 0) {
// //         const total = orders.reduce((sum, order) => sum + order.amount, 0);
// //         resolve(total);
// //       } else {
// //         reject("no orders available");
// //       }
// //     }, 1000);
// //   });
// // }

// // getUser(2)
// //   .then((user) => {
// //     console.log("user:", user);
// //     return getOrders(user.id);
// //   })
// //   .then((order) => {
// //     console.log("order:", order);
// //     return calculateTotal(order);
// //   })
// //   .then((total) => {
// //     console.log("total:", total);
// //   })
// //   .catch((error) => {
// //     console.log("Error:", error);
// //   });




let str1= "hello"

let str2 = str1.replace("hello","Yuvraj");

console.log(str2)


console.log("2" +  4 + "2");
console.log("1" * 10 /  2);