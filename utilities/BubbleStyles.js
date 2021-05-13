import { StyleSheet } from 'react-native'

const BubbleStyles = StyleSheet.create({
    text: {
        fontFamily: 'Helvetica',
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
    },
    background1: {
        backgroundColor: '#E2CFE9',
        borderRadius: 20,
        padding: 9,
        marginRight: 80,
        // Update #2: Fixed alignment to the left of WelcomeScreen
        alignSelf: 'flex-start',
    },
    background2: {
        backgroundColor: '#F4DDAC',
        borderRadius: 20,
        width: 290,
        padding: 9,
        marginLeft: 60,
        // Update #3: Fixed alignment to the right of WelcomeScreen
        alignSelf: 'flex-end',
    }
})

export default BubbleStyles;