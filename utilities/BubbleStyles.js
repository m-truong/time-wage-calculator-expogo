import { StyleSheet } from 'react-native'

const BubbleStyles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 15,
        fontFamily: 'Helvetica',
        textAlign: 'center',
    },
    background1: {
        marginTop: 10,
        marginBottom: 10,
        marginRight: 80,
        padding: 9,
        backgroundColor: '#E2CFE9',
        borderRadius: 20,
        // Update #2: Fixed alignment to the left of WelcomeScreen
        alignSelf: 'flex-start',
    },
    background2: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 60,
        padding: 9,
        backgroundColor: '#F4DDAC',
        borderRadius: 20,
        // Update #3: Fixed alignment to the right of WelcomeScreen
        alignSelf: 'flex-end',
    }
})

export default BubbleStyles;