/* TODO: [DONE] Having issues adding spacing between <Label> and <InputField>! */
/* TODO: [DONE] Center $$$ sign */
/* TODO: Get keyboard to stay up */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import MainScreenInputField from './MainScreenInputField'
import MainScreenLabel from './MainScreenLabel'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'flex-start',
        // flexDirection is 'row'
        flexDirection: 'row',
        // This causes the inputs to align to the right
        justifyContent: 'flex-end',
        // alignItems: 'flex-start',
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
        // justifyContent: 'center',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sign: {
        marginTop: 5,
    }
})

const MainScreenRow = ({ text, word, width, dummyText, keyboard, padding}) => {
    return (
        // Tip: Both components need to be nested inside <Text> component to display inline
        <View style={styles.container}>
            {/* TODO: Having issues adding spacing between <Label> and <InputField>! */}
            <Text style={styles.text}>
                <MainScreenLabel
                    text={text}
                    word={word} 
                    padding={padding}
                    />
                {/* <Text style={styles.sign}>
                    {"$"}
                </Text> */}
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