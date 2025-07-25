
// let arr = [1 , 2 , 3 , 4]
// let arr1 = arr.slice()
// console.log(arr1)

// let arr2 = [ "raja " ,"rani" ,"maharsi"]
// arr2.push( "rakesh" )
// console.log(arr2)
// arr2.shift(2)
// console.log(arr2)

// arr3 =["bapun" ,"sima" ,"raju"]
// console.log(arr3.length)
// console.log(arr3[2])
// loop in array
// let arr2 = [ "raja " ,"rani" ,"maharsi"]
// for( i = 0;  i <arr2.length; i++){
//     console.log(arr2[2]);
// }
// usein the arr for of loops and for in loops
// let a = [1, 2 , 3 , 4] 
// for( let v of a){
//     console.log(v)
// }
let a = [1, 2 , 3 , 4] 
let sum = 0;
for(let v of a){
    sum += v 
}
 let average = sum/a.length
console.log(`average mark is ${average}`)
// qs 
let items =[ 30 ,120,320,360 ]
let i = 0
for( let v of items){
    let off = v/10
    items [i ] = items[i]-off
    console.log(`the item value = ${items[i]}`)
    i++
}
// array methods in js 
// push add the array in the end
let brand =[ " allensoly", "jockey"]
brand.push("saree" , "tshirt")
console.log(brand)
//pop deleted the arry in the last
let bike =["royal enfild" , "ymhaa" ,"hunda"]
// bike.pop()
let not = bike.pop()
console.log(`the bike deleted the end of ${not}`)
//to string() convert array to string
let marks = [1, 2, 3,]
console.log(marks.toString())
// concant join multiple arrys and return
let odiahero = ["sidhant" , "anubhav", "babushan"]
let odiaheroin = ["archita" , "sita"]
let total = odiaheroin.concat(odiahero)
console.log(total)
// unshift () add to start & return reverse of push
let family =[" bapa" , "maa" ,"nani"]
family.unshift("bou")
// shift ()  // reverse of pop
let num = [1,2,3,4]
let num1 = num.shift()
console.log(num1)
// slice method
let arr = [ 1, 2, 3,4,5]
console.log( arr.slice(1,3))
// splice method
let arr1 =[3,4,5,6,7,8,9 ]
console.log( arr1.splice(3 ,1,4,5))
//task 1
let company = ["bloom" ,"microsoft","ubar" ,"google" , "ibm" ,"netflix"]
  company.shift()
 console.log(company)
 company.splice(1 , 1,"ola")
console.log(company)
company.push("amazon")
console.log(company)

// let arr3 = [ 1,2,3,4]
// let sum3 = arr3[0]+arr3[1]+arr3[2]+arr3[3]
// console.log(sum3)
let arr3 = [1,2,3,4]
let sum3 = 0;
for( let v of arr3){
   

}
console.log(sum)// the out put is 10
