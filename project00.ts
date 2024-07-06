import inquirer from "inquirer";
type num = {
        userguess:number
}
const num=Math.floor(Math.random());
const answer:num= await inquirer.prompt([
    {
        type:"number",
        name:"userguess",
        message:"write your guess"
    }
])
const {userguess} =answer
if (userguess === num){
    console.log("your guess is correct")
}
else {
    console.log("PLEASE TRY AGAIN")
}