var fruits = ["Mango", "Apple", "Pineapple", "Banana"];

console.log(fruits);
document.getElementById("array").innerHTML = "Array is " + fruits;
document.getElementById("first_el").innerHTML = "First Element Is " + fruits[0];
document.getElementById("third_el").innerHTML = "Third Element Is " + fruits[2];
console.log("First Element is ", fruits[0]);

console.log("Third Element is ",fruits[2]);

document.getElementById("length").innerHTML = "Length is " + fruits.length;

var array_val = "";

for( var i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
    array_val = array_val + fruits[i] + "<br>";
}

document.getElementById("array2").innerHTML = array_val;


fruits.push("Potato");

var array_val1 = "";

for( var i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
    array_val1 = array_val1 + fruits[i] + "<br>";
}

document.getElementById("array3").innerHTML = array_val1;


document.getElementById("array_s").innerHTML = fruits.sort();

document.getElementById("array_r").innerHTML = fruits.reverse();



array_num = [100,17,200,3,5,8,13,21,34,555,89];
max_num = Math.max.apply(Math,array_num);
min_num = Math.min.apply(Math,array_num);
console.log("Max number in the list [100,17,200,3,5,8,13,21,34,555,89] is ",max_num);
console.log("Min number in the list [100,17,200,3,5,8,13,21,34,555,89] is ",min_num);