

// var x = 5
// if (true) {
//     var x = 16
// }
// console.log(x)

// let arr = ["I", "go", "home","for","my","region"];

// delete arr.splice(0,3,"Azer","Baycan");
// console.log(arr)

// let arr = ["I", "study", "JavaScript"];

// // from index 2
// // delete 0
// // then insert "complex" and "language"
// arr.splice(2, 0, "complex", "language");

// console.log( arr );

// let arr = [1,2,5]
// arr.splice(-1,0,3,4)
// console.log(arr)

// ["Bilbo","gilbert","nazgul"].forEach((item,index,array)=>{
//     alert(`${item} is at index ${index} in ${array}`)
// })

// let arr = [1, 0, false];

// alert( arr.indexOf(0) ); // 1
// alert( arr.indexOf(false) ); // 2
// alert( arr.indexOf(null) ); // -1

// alert( arr.includes(1) );

// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];

//   let user = users.find(item => item.id == 3);

//   alert(user.name);

// let users = [
//     { id: 1, name: "john" },
//     { id: 2, name: "pete" },
//     { id: 3, name: "marry" }
// ];
// let someUsers = users.filter(item => item.id < 2);
// alert(someUsers.length)

// let lengs = ['Azer','Tariyel','Bagdaguluuun'].map(item=>item.length)
// alert(lengs)

// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }
// let arr = [4, 56, -1, 105, -45, 0, 14]
// arr.sort(compareNumeric)
// alert(arr)

// [1, -15, 2, 0, 5, 8].sort(function (a, b) {
//     alert(a + '<' + b)
//     return a - b
// })


// function compareNumeric(a,b){
//     if (a>b) return 1;
//     if (a==b) return 0;
//     if (a<b) return -1;
// }
// let arr=[3,0,56,105,343434,-12412,-214,-12,45]
// arr.sort(compareNumeric)
// alert(arr)

// let arr = [1, 15, 2]
// arr.sort(function (a, b) { return a - b; })
// alert(arr)

// let contries = ['Baku', 'Ankara', 'Moskow','edirne','istanbul','danimarka']
// alert(contries.sort((a, b) => a.localeCompare(b)))


// let reverseNumbers=[9,8,7,6,5,4,3,2,1,0];
// reverseNumbers.reverse();
// console.log(reverseNumbers)

// let names = 'Bilbo, Gandalf, Nazgul';

// let arr = names.split(', ');

// for (let name of arr) {
//   alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
// }


// let arr = [3, 4, 10, 3, 80];
// let result = arr.reduce((a, b) => a + b)
// alert(result)

