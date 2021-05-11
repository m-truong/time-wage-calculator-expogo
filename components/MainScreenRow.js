/* TODO: Get keyboard to stay up */

import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import MainScreenInputField from './MainScreenInputField'
import MainScreenLabel from './MainScreenLabel'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        // This causes the inputs to align to the right
        justifyContent: 'flex-end',
        width: 358,
        marginLeft: 20,
        // padding: 5,
        // debugging borders
        // borderStyle: 'solid',
        // borderColor: 'black',
        // borderWidth: 1,
    },
    text: {
        color: 'black',
        fontSize: 26,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sign: {
        marginTop: 5,
    }
})

const MainScreenRow = ({ text, word, width, dummyText, keyboard, padding }) => {
    return (
        // Tip: Both components need to be nested inside <Text> component to display inline
        <View style={styles.container}>
            <Text style={styles.text}>
                <MainScreenLabel
                    text={text}
                    word={word}
                    padding={padding}
                />
                <MainScreenInputField
                    word={word}
                    width={width}
                    dummyText={dummyText}
                    keyboard={keyboard} />
            </Text>
        </View>
    )
}

MainScreenRow.defaultProps = {

}

export default MainScreenRow;