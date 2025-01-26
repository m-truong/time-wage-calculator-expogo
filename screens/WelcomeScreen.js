import React from 'react'
import { View, StyleSheet } from 'react-native';
import MyButton from '../components/MyButton';
import PageLink from '../components/PageLink'
import WelcomeScreenBubble from '../components/WelcomeScreenBubble'
import BubbleStyles from '../utilities/BubbleStyles'
import { text } from '../utilities/Text'
import IncomeInequalityImage from '../svg/IncomeInequalityImage'

const styles = StyleSheet.create({
    container: {
        // Note: The 'flex-container' needs a flex: 1 property
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 15,
    },
})

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <PageLink
                text={"Skip Intro"}
                // Note: Must pass down {navigation} as a prop to the <TouchableOpacity> component to change screens
                navigation={navigation}
            />
            <WelcomeScreenBubble
                text={text.text1}
                background={BubbleStyles.background1}
                textStyle={BubbleStyles.text} />
            <WelcomeScreenBubble
                text={text.text2}
                background={BubbleStyles.background2}
                textStyle={BubbleStyles.text} />
            <WelcomeScreenBubble
                text={text.text3}
                background={BubbleStyles.background1}
                textStyle={BubbleStyles.text} />
            <WelcomeScreenBubble
                text={text.text4}
                background={BubbleStyles.background2}
                textStyle={BubbleStyles.text} />
            <WelcomeScreenBubble
                text={text.text5}
                background={BubbleStyles.background1}
                textStyle={BubbleStyles.text} />
            <IncomeInequalityImage style={{marginTop: 10, marginBottom: 10}}/>
            <MyButton
                text={"Proceed"}
                navigation={navigation}
                screen={"InfoScreen"} />
        </View>
    )
}

WelcomeScreen.defaultProps = {

}

export default WelcomeScreen;
