import inquirer from "inquirer";
//Asking Question from users through Inquirer
let answers = await inquirer.prompt([
    {message: "Enter First number", type: "number", name: "firstnumber"},
    {message: "Enter Second number", type: "number", name: "Secondnumber"},
    {
        message: "select one operation to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction","Multiplication","Division"],
    },
]);
//conditional statement If-Else
if(answers.operator === "Addition"){
    console.log(answers.firstnumber + answers.Secondnumber)
}
else if(answers.operator === "subtraction"){
    console.log(answers.firstnumber - answers.Secondnumber)
}
else if(answers.operator === "Multiplication"){
    console.log(answers.firstnumber * answers.Secondnumber)
} 
else if(answers.operator === "Division"){
    console.log(answers.firstnumber / answers.Secondnumber)
}
else{
    console.log("Invalid input")
}