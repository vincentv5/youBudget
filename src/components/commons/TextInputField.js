import React from 'react';
import { View, Text, TouchableWithoutFeedback, TextInput, StyleSheet } from 'react-native';
import { secondaryColor, textSize, primaryColor, radius, inputColor } from '../../utils/utiles';
const fontSize = textSize();
const TextInputField = ({ inputOverride, numeric, onFocus, label1, label2, cover, placeholder, error, value, handleChange, secureTextEntry }) => {
    console.log(value);
    return (
        <View style={[styles.wrapper, cover, error ? styles.error : null]}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{label1}</Text>
            </View>
            <View style={[styles.textInpuContainer, inputOverride]}>
                <TextInput
                    style={styles.textInput}
                    placeholder={placeholder}
                    placeholderTextColor={'gray'}
                    value={value}
                    onChangeText={handleChange}
                    onFocus={onFocus}
                    keyboardType={numeric}
                    secureTextEntry={secureTextEntry}
                />
            </View>
            {label2
                ?
                (<TouchableWithoutFeedback>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label2}>{label2}</Text>
                    </View>
                </TouchableWithoutFeedback>)
                : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        borderColor: '#f65a6a',
        borderWidth: 1,
    },
    wrapper: {
        backgroundColor: inputColor,
        borderRadius: radius,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        marginHorizontal: 10,
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom: 5,
    },

    labelContainer: {
        paddingHorizontal: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textInpuContainer: {
        flex: 5,
        height: '100%'
    },
    textInput: {
        height: "100%",
        fontSize,
        fontFamily: 'suma-r'
    },
    label: {
        color: "gray",
        fontSize,
        fontFamily: 'suma-r'
    },
    label2: {
        color: primaryColor,
        fontSize: fontSize - 2,
        fontFamily: 'suma-r'
    }
});

export default TextInputField;