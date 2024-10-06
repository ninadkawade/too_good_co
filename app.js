//var a=12;



//jitna bhi data ya intermediate data hota hai
//unhe kahi to store karna padta hai uske liyea heap memory hotu hai\
//1+2+3+4+5+6=
//1+2=3 this ans is stored in heap memory  3+3=6 this also ans stored in heap memory and at last final ans is being print  

//execition context matlab jab bhi hum fun chaleyenga fun apna ek khud ka ek imaginary container baneyga 
//jisme uski 3 cheeje hogi
//1) variable
//2) fun inside that parent fun
//3)lexical enviorment of that fun 

//execution contex is container where fun code is executed and 
//created when fun is called 

//how to copy reference value
var a=[1,2,3,4,5];

var b=[...a]; //this ... is spread operator this copy the value of array a in array b
b.pop();  //b=1,2,3,4

var obj={name:"harsh"};
var copyobj={...obj};

//js mein khuch bhi likho wo mainly do prakar mein se kisi ek prakar 
//ko belong karti hai
//falsy value ye hai =0 false undefined null NaN document.all
//falsy ko chode ke baki sab truthy value hoti hai

if(7){  //7 truthy value  isliyea hey print hoga
  // agar yaha pe 0 hota to hello print hota
  console.log("hey");
}else{
  console.log("hello")
}

// foreach loop srf array pe chalta hai matlab ki jab bhi tumhara paas ek array ho ,tab use 
//uss mein kaun aata hai foreach loop

//for each kabhi bhi apak ke array me change nahi karta vo
//aapko changes karke deta hai array ki temporary copy par
var a=[1,22,33,43,56,45,76,42,24,6]

a.forEach(function(val){
  console.log(val+2);
})

//object par loop karna eke liyea hota for in loop

var obj={
  name:"harsh",
  age:12,
  city:'sinnar'
}

for(var key in obj){
  console.log(key,obj[key]);
}


//callback
//aisa code jo baad me chalta hai use hum ek function dedeta hai
//ke jab complete hojaana to ye function chala dena ,aur wo
//function jo hum dete hai wo ek normal fnc hi hota hai aur use kahte hai callback fnc

setTimeout(function(){
  console.log("2 sec baad ")
},2000)

//first class fnc
//js me ek concept hai jiska matlab hota hai ke aap fnc ko use
//kar sakte ho as a value

function abcd(a){
  a();
}

abcd(function(){console.log("hello");})