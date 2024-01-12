//1
// let a = prompt("sonni yozing");

// if (a % 3 == 0 && a % 5 == 0) {
//   console.log("fizzbuzz");
// }
// else if (a % 5 == 0) {
//   console.log("buzz")
// } else if (a % 3 == 0) {
//   console.log("fizz");
// }
// else if (a % 3 != 0 && a % 5 != 0 && a > 0) {
//   a = -a;
//   console.log(a);
// } else if (a % 3 != 0 && a % 5 != 0) {
//   console.log(Math.abs(a));
// } else if (a == 0) {
//   console.log("10");
// }

//2

// let w = prompt("w necha");
// let h = prompt("h necha"); 

// if (w > h) {
//   console.log(true + " " + "bu manzara");
// }else  {
//   console.log(false + " " + "bu manzara emas");
// }

// function name(width,height) {
//   return width > height
// }

// console.log( name(100,200));

//3

// function name(a,b) {
//    a > b ? a: b
// }
// console.log(name(7,5));

//4

// let a = 10

// for (let i = 1; i <= a; i++) {
//   if (i % 2 == 0) {
//     console.log(i + " juft");
//   }else if (i % 2 == 1) {
//     console.log(i +  " tog'");
//   }
// }

//5

// let kirit = prompt("sonnnn");

// if (kirit >= 90) {
//   alert("A");
// }else if (kirit >= 80) {
//   alert("B")
// }
// else if (kirit >= 70) {
//   alert("C")
// }
// else if (kirit >= 60) {
//   alert("D")
// }else if (kirit >= 50) {
//   alert("E")
// }


//6

// let a = "khaki";
// let b = "red";

//     a = b;
//     b = a;

//   console.log(a);
//   console.log(b);


//              sayt

///      let 


let root = document.getElementById("root");
let register = document.querySelector(".registercard");
let ismi = document.getElementById("ismi");
let yoshi = document.getElementById("yoshi");
let turm = document.getElementById("turm");
let h1 = document.createElement("h1");
let h2 = document.createElement("h1");
let h3 = document.createElement("h1");
let s = document.querySelector(".s");
let q = document.querySelector(".q");
let salom = document.getElementById("salom");
var selectElement = document.getElementById("opt1");
var selectedOption = selectElement.options[selectElement.selectedIndex];
var selectedValue = selectedOption.value;
let numbe = document.getElementById("not");
let note = document.getElementById("note");


s.addEventListener("click", function() {
  var token = "6608236968:AAElFyJg_qtugiJ7c3CdxlPhGQEs0RcnylY"; 
  var chat_id  = -1002115614125;  
  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${"ismi" + "-" +  ismi.value}; ${"yoshi" + "-" +  yoshi.value};  Togarak vaqti-${selectedValue};  ${"qaysi kurs kerak" + "-" +  turm.value};  ${"Telefon Raqami" + "-" +  numbe.value};    ${"Fikri"+ "-" +note.value}`

  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();
  salom.innerText = "Qabul qilindi javobimizni kuting";
  salom.style.fontFamily = "sans-serif"
  ismi.value = "";
  yoshi.value = "";
  turm.value = "";
  numbe.value = "";
  note.value = "";
  h1.innerHTML = `😀ismiz:${ismi.value}`;
  if (ismi.value === "") {
    h1.innerHTML = "";
  }
  h2.innerText = `🏆yosh: ${yoshi.value}`;
  if (yoshi.value === "") {
    h2.innerHTML = "";
  }
  if (turm.value === "") {
    h3.innerHTML = "";
  }
});

q.addEventListener("click", function() {
  salom.innerText = "Bekor qilindi";
  salom.style.fontFamily = "sans-serif"
  ismi.value = "";
  yoshi.value = "";
  turm.value = "";
  if (ismi.value === "") {
    h1.innerHTML = "";
  }
  h2.innerText = `🏆yosh: ${yoshi.value}`;
  if (yoshi.value === "") {
    h2.innerHTML = "";
  }
  if (turm.value === "") {
    h3.innerHTML = "";
  }
});





