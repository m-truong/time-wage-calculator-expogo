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
    text2: <Text>In the United States, <Text style={styles.bold}>58.3%</Text> of workers are hourly.</Text>,
    text3: <Text>As of March 2021, the federal minimum wage is still <Text style={styles.bold}>$7.25/hr</Text>.</Text>,
    text4: <Text>In support for the <Text style={styles.boldUnderline}>Fight for $15</Text>, this calculator was created to put in perspective of how everyday items may not seem like a luxury until you consider the amount of time spent working for it.</Text>
}