import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    // container: {
    //     flex: 3,
    //     alignSelf: 'flex-end',
    //     // paddingHorizontal: 120,
    //     // paddingVertical: 15,
    //     width: 150,
    //     // height: 20,
    //     // debugging borders
    //     borderStyle: 'solid',
    //     borderColor: 'black',
    //     borderWidth: 1,
    // },
    text: {
        backgroundColor: '#E2CFE9',
        // Tip: Need '100%' width to expand inputField to container 
        width: '100%',
        // Note: Need '100%' height so that 'textInput' component stretches vertically; but needed to decrease 
        height: '80%',
        // add margin to push input down
        // textAlign: 'right',
        color: 'black',
        fontFamily: 'Courier New',
        fontSize: 23,
        marginTop: 15,
        paddingRight: 15,
    },
})

const MainScreenInputField = ({ word, dummyText, keyboard, width }) => {
    const [state, setState] = word;
    // TODO: CONTINUE HERE: "prevent change in state and re-rendering"
    let input = ''
    const createTempState = () => {
        // input
    }
    return (
        <View style={{
            flex: 3,
            alignSelf: 'flex-end',
            // marginLeft: 150,
            // paddingVertical: 15,
            width: width,
            height: 20,
            // height: 20,
            // debugging borders
            // borderStyle: 'solid',
            // borderColor: 'black',
            // borderWidth: 1,
        }}>
            <TextInput
                style={styles.text}
                placeholder={dummyText}
                keyboardType={keyboard}
                placeholderTextColor="black"
                autoCompleteType='off'
                autoCorrect={false}
                autoFocus={true}
                textAlign="right"
                clearButtonMode="never"
                // ** TODO: React-Native keyboard would stay onFocus
                // ** Not an issue with changing Parent-State 
                // ** Must figure out why
                onChangeText={setState}
                // ** Successfully clears state
                value={state}
                keyboardDismissMode='none'
                blueOnSubmit={false}
                // editable={true}
            />
        </View>
    )
}

MainScreenInputField.defaultProps = {

}

export default MainScreenInputField;
