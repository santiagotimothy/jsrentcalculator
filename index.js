const Calculator = require('./lib/calculator.js')

// Assuming that 1 month = 4 weeks
function calculateRent(weeklyCost, monthlyBudget) {

    const calculator = new Calculator(weeklyCost, monthlyBudget)
    return calculator.calculate()
}

function printOutput() {
    var rent = calculateRent(parseInt(process.argv[2]), process.argv[3])
    var output = `Fornightly: ${rent.fortnightly}
Monthly: ${rent.monthly}
Yearly: ${rent.yearly}
Can Survive: ${rent.canSurvive}
`

    console.log(output)
}

printOutput()