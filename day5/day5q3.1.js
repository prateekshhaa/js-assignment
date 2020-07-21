fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response=>response.json()
.then(data=>console.log(data)))

fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'Post',
    body: JSON.stringify({
        userId:254,
        title:"Some Title",
        body:'lorem ipsum',

    })
}).then(response=>response.json()
.then(data=>console.log(data)))

async function fetchJokes(){
    const response=await fetch('https://api.chucknorris.io/jokes/random');
    const data=await response.json();
    console.log(data);
}
fetchJokes();

let obj1 = {
    name:'divya',
    age:24,
    canDrive:true,

}
console.log(obj1);
let str =JSON.stringify(obj1);
console.log(str)

let strobj = JSON.parse(str);
console.log(strobj)
