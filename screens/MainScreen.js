import React, { useState } from 'react'
import { CalculatorContext } from "../components/Context.js"
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import MainScreenRow from '../components/MainScreenRow'
import MainScreenCalculator from '../components/MainScreenCalculator'
import CalculateButton from '../components/CalculateButton'
import Clear from '../components/ClearButton'
import Line from '../components/HorizontalRule'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: '#fff',
        // justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 40,
    },
    text: {
        color: 'black',
        fontSize: 19,
        fontFamily: 'Helvetica',
        marginVertical: 10,
    },
    img: {
        width: 100,
        height: 100,
    }
})

const MainScreen = ({ navigation, screen }) => {
    const [hourlyWage, setHourlyWage] = useState(0)
    const [priceExpense, setPriceExpense] = useState(0)
    const [calculator, setCalculator] = useState({ days: 0, hours: 0, mins: 0 })
    const [label, setLabel] = useState("")

    const wageState = [hourlyWage, setHourlyWage]
    const expenseState = [priceExpense, setPriceExpense]
    const calculatorState = [calculator, setCalculator]
    const labelState = [label, setLabel]

    return (
        <CalculatorContext.Provider value={{
            wageState: wageState,
            expenseState: expenseState,
            labelState: labelState,
            calculatorState: calculatorState
        }}>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("WelcomeScreen") }}>
                    <Image
                        style={{ marginLeft: 330 }}
                        source={require('../res/images/informationCircle.png')} />
                </TouchableOpacity>
                <MainScreenRow
                    text={"Hourly Wage"}
                    word={wageState}
                    dummyText={"$ 0.00"}
                    keyboard={"numeric"}
                    width={20} />
                <Line />
                <MainScreenRow
                    text={"Price of Expense"}
                    word={expenseState}
                    dummyText={"$ 0.00"}
                    keyboard={"numeric"}
                    width={20} />
                <Line />
                <MainScreenRow
                    text={"Label"}
                    word={labelState}
                    dummyText={"New item"}
                    keyboard={"default"}
                    width={20} />
                <Line />
                <CalculateButton
                    text={"Calculate"}
                    word={calculatorState} />
                <Clear />
                <Text style={styles.text}>
                    {label} costs
                </Text>
                <MainScreenCalculator />
                <Text style={styles.text}>
                    of your life to earn.
                </Text>
                <Image
                    source={require('../res/images/calculatingImage.png')}
                />
            </View>
        </CalculatorContext.Provider>
    )
}

MainScreen.defaultProps = {

}

export default MainScreen;
