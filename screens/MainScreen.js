import React, { useState } from 'react'
import { CalculatorContext } from "../components/Context.js"
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import MainScreenCalculator from '../components/MainScreenCalculator'
import CalculateButton from '../components/CalculateButton'
import Clear from '../components/ClearButton'
import Line from '../components/HorizontalRule'
import CalculatingImage from '../svg/CalculatingImage'
import InformationCircle from '../svg/InformationCircle'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 15,
        paddingBottom: 35,
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
        alignItems: 'center',
        width: 200, // 358
        marginLeft: 20,
    },
    rowText: {
        color: 'black',
        fontSize: 26,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input1: {
        color: 'black',
        fontSize: 23,
        fontFamily: 'Courier New',
        backgroundColor: '#E2CFE9',
        marginTop: 15,
        paddingRight: 15,
        alignSelf: 'flex-end',
        width: 150, // 150 
        height: 50, // 20

    },
    input2: {
        color: 'black',
        fontSize: 23,
        fontFamily: 'Courier New',
        backgroundColor: '#E2CFE9',
        marginTop: 15,
        paddingRight: 15,
        alignSelf: 'flex-end',
        width: 150, // 150 
        height: 50, // 20 

    },
    input3: {
        color: 'black',
        fontSize: 23,
        fontFamily: 'Courier New',
        backgroundColor: '#E2CFE9',
        marginTop: 15,
        paddingRight: 15,
        alignSelf: 'flex-end',
        width: 240, // 243
        height: 50, // 20

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
        <CalculatorContext.Provider value={{
            wageState: wageState,
            expenseState: expenseState,
            labelState: labelState,
            calculatorState: calculatorState
        }}>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("WelcomeScreen") }}>
                    <InformationCircle style={{ marginLeft: 330 }} />
                </TouchableOpacity>
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
                                {"Hourly Wage        $"}
                            </Text>
                        </View>
                    </Text>
                    <TextInput
                        style={styles.input1}
                        placeholder={"0.00"}
                        keyboardType={"numeric"}
                        placeholderTextColor="black"
                        autoCompleteType='off'
                        autoCorrect={false}
                        autoFocus={false}
                        keyboardDismissMode='none'
                        blurOnSubmit={true}
                        textAlign="right"
                        clearButtonMode="never"
                        value={hourlyWage}
                        onChangeText={v => setHourlyWage(v)}
                    />
                </View>
                <Line />
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
                                    paddingRight: 2,
                                }}
                            >
                                {"Price of Expense  $ "}
                            </Text>
                        </View>
                    </Text>
                    <TextInput
                        style={styles.input2}
                        placeholder={"0.00"}
                        keyboardType={"numeric"}
                        placeholderTextColor="black"
                        autoCompleteType='off'
                        autoCorrect={false}
                        autoFocus={false}
                        keyboardDismissMode='none'
                        blurOnSubmit={true}
                        textAlign="right"
                        clearButtonMode="never"
                        value={priceExpense}
                        onChangeText={v => setPriceExpense(v)}
                    />
                </View>
                <Line />
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
                                    paddingRight: 46, // 46
                                }}
                            >
                                {"Label"}
                            </Text>
                        </View>
                    </Text>
                    <TextInput
                        style={styles.input3}
                        placeholder={"New Item"}
                        keyboardType={"default"}
                        placeholderTextColor="black"
                        autoCompleteType='off'
                        autoCorrect={false}
                        autoFocus={false}
                        keyboardDismissMode='none'
                        blurOnSubmit={true}
                        textAlign="right"
                        clearButtonMode="never"
                        value={label}
                        onChangeText={v => setLabel(v)}
                    />
                </View>
                <CalculateButton
                    text={"Calculate"}
                    word={calculatorState} />
                <Clear />
                <Text style={styles.text}>
                    <Text style={{fontWeight: 'bold'}}>{label}</Text> costs
                </Text>
                <MainScreenCalculator />
                <Text style={styles.text}>
                    of your life to earn.
                </Text>
                {/* Update #6: Added new SVG image */}
                <CalculatingImage />
            </View>
        </CalculatorContext.Provider>
    )
}

MainScreen.defaultProps = {

}

export default MainScreen;
