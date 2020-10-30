function isNumericValue(item) {
    return !isNaN(item) & item !== ''
}

function isValidItem(item) {
    const operators = ['+', '-', '*', '/']
    return isNumericValue(item) || operators.includes(item)
}

function performCalculation(calculationSteps) {
    switch (calculationSteps[1]) {
        case '+':
            return Number(calculationSteps[0]) + Number(calculationSteps[2])
        case '-':
            return Number(calculationSteps[0]) - Number(calculationSteps[2])
        case '*':
            return Number(calculationSteps[0]) * Number(calculationSteps[2])
        case '/':
            return Number(calculationSteps[0]) / Number(calculationSteps[2])
        default:
            return NaN
    }
}

function calculate(incoming) {
    let calculationSteps = []

    incoming.forEach((item) => {
        if (isValidItem(item)) {
            calculationSteps.push(item)
        }
    })

    if (calculationSteps.length !== 3) return NaN


    return performCalculation(calculationSteps)
}

module.exports = calculate





