
///////////*****************Destructuring values from an array/object and assigning them to variables.******************************** */

/////////////////////**********Destructuring ka matlab hai value ko variable mein extract/assign karna.
// /////////////////********** Uske baad tum us variable ko console.log() karke dekh sakte ho.****** */

// const user = {
//     id: 1,
//     name: "Yuvraj verma",
//     email: "yuvraj.verma@example.com",
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         country: "USA",

       

//     }
// };

// const { name, email, address: { city } } = user;
// console.log(name);
// console.log(email);
// console.log(city);




// const user = {
//     name: "Yuvraj verma",
// };

// const { name, age = 21 } = user;
// console.log(user);

// const array =[ "yuvraj", "rohan", "sachin"];

// const [first, third] = array;
// console.log(third, first);

// const arr =[ "yuvraj", "rohan", "sachin"];

// const [first, ...remaining] = arr;
// console.log(first, remaining);


// const user ={
//     name: "Yuvraj verma",
//     age: 21,
//     email:"yuvraj.verma@example.com",
// };

// const { name,... otherdetails } = user;
// console.log(name, otherdetails);



const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method:"POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify({
        name: "Yuvraj verma",
        email: "yuvraj.verma@example.com",
        password: "password123"
    })
});

const data = await response.json();

const { name, password, ...otherDetails } = data;



console.log(name);
    console.log(password);
    console.log(otherDetails);

    