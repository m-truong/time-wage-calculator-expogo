
import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native';
import MainScreenLabel from './MainScreenLabel'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: 358,
        marginLeft: 20,
    },
    text: {
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
        width: '100%',
        // Note: Need '100%' height so that 'textInput' component stretches vertically; but needed to decrease 
        height: '80%',
        marginTop: 15,
        paddingRight: 15,
    },
})

const MainScreenRow = ({ text, word, width, dummyText, keyboard, padding }) => {
    const [state, setState] = word;
    return (
        // Tip: Both components need to be nested inside <Text> component to display inline
        <View style={styles.container}>
            <Text style={styles.text}>
                <MainScreenLabel
                    text={text}
                    word={word}
                    padding={padding}
                />
                {/* <MainScreenInputField
                    word={word}
                    width={width}
                    dummyText={dummyText}
                    keyboard={keyboard} /> */}
                <View style={{
                    flex: 3,
                    alignSelf: 'flex-end',
                    width: width,
                    height: 20,
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
            </Text>
        </View>
    )
}

MainScreenRow.defaultProps = {

}

export default MainScreenRow;