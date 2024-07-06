import inquirer from "inquirer";
const num = Math.floor(Math.random());
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userguess",
        message: "write your guess"
    }
]);
const { userguess } = answer;
if (userguess === num) {
    console.log("your guess is correct");
}
else {
    console.log("PLEASE TRY AGAIN");
}
