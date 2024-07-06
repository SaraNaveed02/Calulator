import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
    type:'number',
    name:'num1',
    message:'please enter your first number'
},
{
    type:'number',
    name:'num2',
    message:'please enter your second number'
},
{
    type:'list',
    name:'operator',
message:'please enter the operator',
choices:['+','-','*','/']    
}
]);
    
//let {operator,num1,num2}=answer;
if (answer.operator === '+'){
    console.log('Your answer is', answer.num1 + answer.num2)
   // console.log(`the answer is ${answer.num1} ${answer.operator} ${answer.num2}=${answer.num1 + answer.num2}`)
}
else if (answer.operator === '*'){
    console.log('Your answer is', answer.num1 * answer.num2)
   // console.log(`the answer is ${answer.num1} ${answer.operator} ${answer.num2}=${answer.num1 * answer.num2}`)
}
else if (answer.operator === '/'){
    console.log('Your answer is', answer.num1 / answer.num2)
   // console.log(`the answer is ${answer.num1} ${answer.operator} ${answer.num2}=${answer.num1 + answer.num2}`)
}
else if (answer.operator === '-'){
    console.log('Your answer is', answer.num1 - answer.num2)
   // console.log(`the answer is ${answer.num1} ${answer.operator} ${answer.num2}=${answer.num1 + answer.num2}`)
}


else{
    console.log('please enter the corrcet operator')
}