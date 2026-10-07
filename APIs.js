fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() => {
    console.log("Request completed");
  });
  
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",

  headers: {
    "Content-Type": "application/json"
  },

  body: JSON.stringify({
    title: "my first post",
    body: "this is first post",
    userId: 1
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))
.finally(() => {
  console.log("Data created");
});


fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response => response.json())
.then(oldData => {
  console.log("OLD DATA:");
  console.log(oldData);


  return fetch("https://jsonplaceholder.typicode.com/posts/1",{
method:"DELETE",

headers:{
  "Content-Type": "application/json"
},

body: JSON.stringify({
  id: 2,
  title: "Updated Post",
  body:"This is my updated post",
  userId: 2
})
  });
})
.then(response => response.json())
.then(newData => {
  console.log("NEW DATA:");
  console.log(newData);
})
.catch(error => console.log(error));






  


