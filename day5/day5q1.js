let arr = [1,2,3,4,5,6];
arr.forEach((el)=>{
    console.log(el)
})

let odd = arr.filter(el=>el%2!==0);
console.log(odd)
let cube = arr.filter(el=>el%2!==0).map(el=>el**3);
console.log(cube);
