import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { textSize } from '../utils/utiles';
const fontSize = textSize();

const Card = ({ onPress, title, icon }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{icon}</Text>
                <Text style={styles.textStyle}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: "#d9bca7",
        width: '35%',
        paddingHorizontal: 2,
        borderRadius: 5,
        paddingVertical: 60,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 3,
        shadowColor: 'gray',
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 3
    },
    textStyle: {
        fontSize: fontSize - 6,
        fontFamily: 'suma-b',
    }
})
export default Card;