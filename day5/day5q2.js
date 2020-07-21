class User{
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.courses =[];
    }
    login(){
        console.log(`${this.name} has logged in`);
    }
    logout(){
        console.log(`${this.name} has logged out`);
    }
    }


class Moderator extends User {
    constructor(name,age,email,luCoins){
        super(name,age,email);
        this.luCoins = 0;
        
    }
        
    addcoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
    }
    removecoins(){
        this.luCoins--;
        console.log(`${this.name} has ${this.luCoins} coins`);
    }
}

 
class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }
    deleteCourse(user,course){
            user.courses.pop(course);
            console.log(user);
      
    }
}

let user1 = new User('pooja',25,'pooja123@gmail.com')
user1.login();
user1.logout();
let user2 = new User('akash',28,'akashl@gmail.com') 
let mod = new Moderator('krishna',25,'krishna123@gmail.com')
mod.addcoins();
mod.addcoins(); 
mod.removecoins();
let ad = new Admin('lalita',30,'lalita65@gmail.com')
let users = [user1,user2,mod,ad];
users.forEach(element =>{
    console.log(element);
});
ad.addCourse(user1,'java');
ad.addCourse(user2,'HTML');
ad.deleteCourse(user2);
