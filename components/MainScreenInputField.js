import React, { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    input: {
        color: 'black',
        fontSize: 23,
        fontFamily: 'Courier New',
        backgroundColor: '#E2CFE9',
        // Tip: Need '100%' width to expand inputField to container 
        width: '100%',
        // Note: Need '100%' height so that 'textInput' component stretches vertically; but needed to decrease 
        height: '80%',
        // add margin to push input down
        marginTop: 15,
        paddingRight: 15,
    },
})

const MainScreenInputField = ({ word, dummyText, keyboard, width }) => {
    const [state, setState] = word;
    const [tempVal, setTempVal] = useState(0);
    return (
        <View style={{
            flex: 3,
            alignSelf: 'flex-end',
            width: width,
            height: 20,
            // debugging borders+
            // borderStyle: 'solid',
            // borderColor: 'black',
            // borderWidth: 1,
        }}>
            <TextInput
                style={styles.input}
                placeholder={dummyText}
                keyboardType={keyboard}
                placeholderTextColor="black"
                autoCompleteType='off'
                autoCorrect={false}
                autoFocus={true} 
                keyboardDismissMode='none'
                blurOnSubmit={false}
                textAlign="right"
                clearButtonMode="never"
                value={state}
                onChangeText={v => setState(v)}
            />
        </View>
    )
}

MainScreenInputField.defaultProps = {

}

export default MainScreenInputField;