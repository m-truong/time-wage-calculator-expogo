import React, { useContext } from 'react'
import { CalculatorContext } from "./Context.js"
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    btn: {
        // Tip: Use alignSelf
        alignSelf: 'flex-end',
        marginTop: 5,
        marginRight: 10,
    },
    btnText: {
        color: 'black',
        textDecorationLine: 'underline',
        fontSize: 16,
        fontFamily: 'Helvetica',
        textAlign: 'center',
    }
})

const ClearButton = () => {
    const { wageState, expenseState, labelState, calculatorState } = useContext(CalculatorContext)
    const [hourlyWage, setHourlyWage] = wageState
    const [priceExpense, setPriceExpense] = expenseState
    const [label, setLabel] = labelState
    const [calculator, setCalculatorState] = calculatorState

    const clearStateHandler = () => {
        setHourlyWage(() => 0)
        setPriceExpense(() => 0)
        setLabel(() => "")
        setCalculatorState(() => { return { days: 0, hours: 0, mins: 0 } })
    }

    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={clearStateHandler}
        >
            <Text style={styles.btnText}>Clear</Text>
        </TouchableOpacity>
    )
}

ClearButton.defaultProps = {

}

export default ClearButton;
