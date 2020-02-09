class Calculator {

    constructor(weeklyRent, monthlyBudget) {
        this.weeklyRent = weeklyRent
        this.monthlyBudget = monthlyBudget
    }

    calculateMonthly(weekly) {

        return weekly * 4
    }
    
    calculateYearly(monthly) {
    
        return monthly * 12
    }
    
    calculateFortnightly(weekly) {
        
        return weekly * 2
    }

    calculateCanSurvive(monthlyCalculated, monthlyBudget) {

        var canSurvive = "NO CLUE"
        if (monthlyBudget != null && monthlyBudget != undefined) {
            const formatted = parseInt(monthlyBudget)
            canSurvive = (formatted < monthlyCalculated ? "NO" : "YES")
        }
        return canSurvive
    }

    calculate() {

        var output = {}
        output.monthly = this.calculateMonthly(this.weeklyRent)
        output.fortnightly = this.calculateFortnightly(this.weeklyRent)
        output.yearly = this.calculateYearly(output.monthly)
        output.canSurvive = this.calculateCanSurvive(output.monthly, this.monthlyBudget)
        return output
    }
}

module.exports = Calculator
