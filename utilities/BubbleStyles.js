import { StyleSheet } from 'react-native'

const BubbleStyles = StyleSheet.create({
    text: {
        // styling the Bubble component text
        fontFamily: 'Helvetica',
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        // flexWrap: 'wrap',
    },
    background1: {
        // flex: 0.1,
        // alignContent: 'space-around',
        // width: '100%',

        marginRight: 80,
        padding: 9,
        backgroundColor: '#E2CFE9',
        borderRadius: 20,
        // Update #2: Fixed alignment to the left of WelcomeScreen
        alignSelf: 'flex-start',
    },
    background2: {
        // flex: 0.2,
        // flexWrap: 'wrap',
        // alignContent: 'space-around',

        width: 290,
        marginLeft: 60,
        padding: 9,
        backgroundColor: '#F4DDAC',
        borderRadius: 20,
        // Update #3: Fixed alignment to the right of WelcomeScreen
        alignSelf: 'flex-end',
    }
})

export default BubbleStyles;