function calculate(Arr) {
    var Arr = []
    var operand ('+', '-', '/', '*')
    //add function to loop thru array 
    for (let i = 0; i <= Arr.length; i++)
        //add function to treat string as a number to calculate 
        //add function  to treat NULL as 0 and use to calculate 
        //add function/statement to ignore empty value and undefined statement and use remaining value to calculate 
        //add function/statement to ignore non-numeric values to calculate 
        //add function statement to return NaN if values do not represent operation


        Let num1 = Arr[1]
    let num2 = Arr[2]


    switch (Arr) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "NaN"
    }
}
module.exports = calculate