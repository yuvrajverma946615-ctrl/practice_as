// const user = {
//   Name:"Yuvraj",
//   age: 20,
//   greet (){
//     console.log(`name is ${this.Name} and age is ${this.age}`);
//   }
// }

// // user.greet ();

// const account = {
//   name: "Yuvraj",
//   balance: 10000,

//   deposit(amount) {
//     this.balance = this.balance + amount;
//     console.log(`₹${amount} deposited`);
//     console.log(`Current balance: ₹${this.balance}`);
//   },

//   withdraw(amount) {
//     if (amount <= this.balance) {
//       this.balance = this.balance - amount;
//       console.log(`₹${amount} withdrawn`);
//       console.log(`Remaining balance: ₹${this.balance}`);
//     } else {
//       console.log("Insufficient balance");
//     }
//   }
// };

// account.deposit(2000);
// account.withdraw(3000);

    

const shoppingCArt = {
    items:[],
    totalPrice: 0,

    addItem(name, price){
        this.items.push({
            name: name,
            price: price
        });
        this.totalPrice = this.totalPrice + price;
        console.log("added : ");
        console.log(`${name} : ₹${price}`);

      items.forEach((item) => {
        console.log(`Item: ${item.name}, Price: ₹${item.price}`);
      }
        
    )}
};
     
  shoppingCArt.addItem("Laptop", 50000);
        


   