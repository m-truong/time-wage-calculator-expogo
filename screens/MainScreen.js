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
        justifyContent: 'space-around',
        alignItems: 'center',
        // Note: White background color 
        backgroundColor: '#fff',
        // Note: padding for all sides of MainScreen
        padding: 15,
        paddingBottom: 35,
    },
    text: {
        color: 'black',
        fontSize: 19,
        fontFamily: 'Helvetica',
        marginVertical: 10,
    },
    row: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignContent: '',
        // alignItems: 'flex-start',
        // alignSelf: 'flex-start',
        width: 330, // 358
        // height: 70,
        // Don't use margin-Left
        // marginLeft: 20,
        // lineHeight: 30,
        paddingTop: 5,
        // debugging borders
        // borderStyle: 'solid',
        // borderColor: 'black',
        // borderWidth: 1,
    },
    // Note: Delete this cause not USED
    rowText: {
        color: 'blue',
        fontSize: 26,
        // height: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    label: {
        // flex: 1,
        // alignSelf: 'baseline',
        // justifyContent: 'center',

        // // debugging borders
        // borderStyle: 'solid',
        // borderColor: 'black',
        // borderWidth: 1,
    },
    input1: {
        color: 'black',
        fontSize: 23,
        fontFamily: 'Courier New',
        
        backgroundColor: '#E2CFE9',
        // marginTop: 15,
        paddingRight: 15,
        alignSelf: 'center',
        // alignSelf: 'center',
        width: 110, // 150 
        height: 35, // 20
        // // debugging borders
        // borderStyle: 'solid',
        // borderColor: 'black',
        // borderWidth: 1,

    },
    input2: {
        color: 'black',
        fontSize: 23,
        fontFamily: 'Courier New',
        backgroundColor: '#E2CFE9',
        // marginTop: 15,
        paddingRight: 15,
        alignSelf: 'center',
        width: 110, // 150 
        height: 35, // 20 
        // // debugging borders
        // borderStyle: 'solid',
        // borderColor: 'black',
        // borderWidth: 1,

    },
    input3: {
        color: 'black',
        fontSize: 23,
        fontFamily: 'Courier New',
        backgroundColor: '#E2CFE9',
        // marginTop: 15,
        paddingRight: 15,
        alignSelf: 'center',
        width: 200, // 243
        height: 35, // 20
        // // debugging borders
        // borderStyle: 'solid',
        // borderColor: 'black',
        // borderWidth: 1,
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
                {/* Note: requires applying 'flex property to all flex-children */}
                <TouchableOpacity style={{ flex: 1.6 }}
                    onPress={() => { navigation.navigate("WelcomeScreen") }}>
                    <InformationCircle style={{ marginLeft: 310 }} />
                </TouchableOpacity>
                <View style={styles.row}>
                    {/* <Text style={styles.rowText}> */}
                    <View>
                        <Text
                            style={{
                                color: 'black',
                                fontSize: 20,
                                fontFamily: 'Helvetica',
                                lineHeight: 20,
                                paddingTop: 14,
                                paddingLeft: 2,
                                // paddingRight: 9,
                                // borderStyle: 'solid',
                                // borderColor: 'black',
                                // borderWidth: 1,
                            }}
                        >
                            {"Hourly Wage               $"}
                        </Text>
                    </View>
                    {/* </Text> */}
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
                    {/* <Text style={styles.rowText}> */}
                    <View>
                        <Text
                            style={{
                                color: 'black',
                                fontSize: 20,
                                fontFamily: 'Helvetica',
                                lineHeight: 20,
                                paddingTop: 14,
                                paddingLeft: 2,
                                paddingRight: 2,
                                // borderStyle: 'solid',
                                // borderColor: 'black',
                                // borderWidth: 1,
                            }}
                        >
                            {"Price of Expense         $"}
                        </Text>
                    </View>
                    {/* </Text> */}
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
                    {/* <Text style={styles.rowText}> */}
                    <View>
                        <Text
                            style={{
                                color: 'black',
                                fontSize: 20,
                                fontFamily: 'Helvetica',
                                lineHeight: 20,

                                paddingTop: 14, // 14
                                paddingLeft: 2,
                                paddingRight: 46, // 46
                                // borderStyle: 'solid',
                                // borderColor: 'black',
                                // borderWidth: 1,
                            }}
                        >
                            {"Label"}
                        </Text>
                    </View>
                    {/* </Text> */}
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
                    <Text style={{ fontWeight: 'bold' }}>{label}</Text> costs
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
