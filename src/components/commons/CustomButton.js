import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { primaryColor, secondaryColor, textSize, radius } from '../../utils/utiles';
const fontSize = textSize();

const CustomButton = ({ snB, btnText, icon, value, icon2, onPress, buttonOverride }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.button, snB ? styles.snB : null, buttonOverride]}>
                <View style={styles.txtContainer}>
                    {
                        snB
                            ? <Text>{icon ? icon : null}</Text>
                            : null
                    }

                    <Text style={[styles.buttonText, btnText ? styles.btnText : null]}>{value}</Text>
                    {
                        icon2
                            ? <Text>{icon2 ? icon2 : null}</Text>
                            : null
                    }
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    btnText: {
        color: primaryColor
    },
    txtContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: primaryColor,
        borderRadius: radius,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 10,
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom: 5,


    },
    prB: {},
    snB: {
        borderColor: primaryColor,
        borderWidth: 1,
        backgroundColor: secondaryColor
    },
    buttonText: {
        color: "#fff",
        fontSize,
        fontFamily: 'narrow-bold'
    },
})

export default CustomButton;