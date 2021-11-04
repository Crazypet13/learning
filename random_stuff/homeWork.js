const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("gimme a number ", function(firstNumber){
    rl.question("gimme another one ", function(secondNumber){
      rl.question("what do you want to do? pick one + - * /", function(muvelet){
       let eredmeny = [];
       firstNumber = parseInt(firstNumber)
       secondNumber = parseInt(secondNumber)
       switch (muvelet){
        case "+":eredmeny.push(firstNumber+secondNumber);break;
        case "-":eredmeny.push(firstNumber-secondNumber);break;
        case "*":eredmeny.push(firstNumber*secondNumber);break;
        case "/":eredmeny.push(firstNumber/secondNumber);break;
        }
        console.log(eredmeny)
        rl.close();
      });
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
