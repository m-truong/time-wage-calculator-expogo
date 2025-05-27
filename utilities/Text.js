import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold',
    },
    boldUnderline: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    }
})

export const text = {
    text1: <Text>How much are things really worth?</Text>,
    text2: <Text>
    In the US, approximately <Text style={styles.bold}>80.5 million</Text> workers, aged 16 and over, are paid on an hourly basis. </Text>,
    text3: <Text>As of January 26th, 2025, the federal minimum wage was raised from <Text style={styles.bold}>$7.25/hr</Text> to <Text style={styles.bold}>$15.00/hr</Text>. This significant improvement marks a milestone in the <Text style={styles.boldUnderline}>Fight for $15</Text> movement for income equality for low-wage workers.</Text>,
    text4: <Text>In support of raising the minimum wage for low-wage workers, this calculator app helps demnstrate how everyday items, which may not seem like a luxury, are very difficult to save for when working an hourly-wage!</Text>,
    text5: <Text>Click the button below to use the Time-Wager Calulator App </Text>
}