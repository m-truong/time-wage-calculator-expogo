/* TODO #1: DON'T PROP DRILL - ADD CODE TO MAIN SCREEN */
/* TODO #2: DON'T WRAP INSIDE PARENT <VIEW> to WITH THE STYLES */

import React, { useState } from 'react'
import { CalculatorContext } from "../components/Context.js"
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
// import MainScreenRow from '../components/MainScreenRow'
import MainScreenCalculator from '../components/MainScreenCalculator'
import CalculateButton from '../components/CalculateButton'
import Clear from '../components/ClearButton'
import Line from '../components/HorizontalRule'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: '#fff',
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
    },
    label: {
        flex: 1,
        alignSelf: 'baseline',
        justifyContent: 'center',
        // debugging borders
        // borderStyle: 'solid',
        // borderColor: 'black',
        // borderWidth: 1,
    },
    row: {
        flex: 1,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: 358,
        marginLeft: 20,
        // debugging borders
        // borderStyle: 'solid',
        // borderColor: 'black',
        // borderWidth: 1,
    },
    rowText: {
        color: 'black',
        fontSize: 26,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        color: 'black',
        fontSize: 23,
        fontFamily: 'Courier New',
        backgroundColor: '#E2CFE9',
        // Tip: Need '100%' width to expand inputField to container 
        // width: '100%',
        // Note: Need '100%' height so that 'textInput' component stretches vertically; but needed to decrease 
        // height: '80%',
        // add margin to push input down
        marginTop: 15,
        paddingRight: 15,
        // flex: 3,
                    alignSelf: 'flex-end',
                    // width: 150,
                    // height: 20,
    },
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
        // Note: Passed down as 'Context' and as
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
                {/* <MainScreenRow
                    text={"Hourly Wage          $"}
                    word={wageState}
                    dummyText={"0.00"}
                    keyboard={"numeric"}
                    width={150}
                    padding={9}
                /> */}
                <View style={styles.row}>
                    <Text style={styles.rowText}>
                        <View style={styles.label}>
                            <Text
                                style={{
                                    color: 'black',
                                    fontSize: 20,
                                    fontFamily: 'Helvetica',
                                    paddingTop: 14,
                                    paddingLeft: 14,
                                    paddingRight: 9,
                                }}
                            >
                                {"Hourly Wage          $"}
                            </Text>
                        </View>
                        {/* Insert <TextInput> here */}
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder={"0.00"}
                        keyboardType={"numeric"}
                        placeholderTextColor="black"
                        autoCompleteType='off'
                        autoCorrect={false}
                        autoFocus={true}
                        keyboardDismissMode='none'
                        blurOnSubmit={false}
                        textAlign="right"
                        clearButtonMode="never"
                        value={hourlyWage}
                        onChangeText={v => setHourlyWage(v)}
                    />
                </View>
                <View style={{
                    flex: 3,
                    alignSelf: 'flex-end',
                    width: 150,
                    height: 20,
                    // debugging borders+
                    // borderStyle: 'solid',
                    // borderColor: 'black',
                    // borderWidth: 1,
                }}>
                </View>
                <Line />
                {/* <MainScreenRow
                    text={"Price of Expense    $ "}
                    word={expenseState}
                    dummyText={"0.00"}
                    keyboard={"numeric"}
                    width={150}
                    padding={2}
                /> */}
                <View style={styles.label}>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 20,
                            fontFamily: 'Helvetica',
                            paddingTop: 14,
                            paddingLeft: 14,
                            paddingRight: 2,
                        }}
                    >
                        {"Price of Expense    $ "}
                    </Text>
                </View>
                <Line />
                {/* <MainScreenRow
                    text={"Label"}
                    word={labelState}
                    dummyText={"New item"}
                    keyboard={"default"}
                    width={243}
                    padding={46}
                /> */}
                <View style={styles.label}>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 20,
                            fontFamily: 'Helvetica',
                            paddingTop: 14,
                            paddingLeft: 14,
                            paddingRight: 46,
                        }}
                    >
                        {"Label"}
                    </Text>
                </View>
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
