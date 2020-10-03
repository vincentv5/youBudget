import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const icon = {
    left: <AntDesign name="arrowleft" size={24} color="black" />,
}

const Header = ({ onPress }) => {
    return (
        <View style={styles.headerStyle}>
            <TouchableWithoutFeedback onPress={onPress}>
                <Text style={styles.text}>
                    {icon.left}
                </Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        paddingVertical: 20,

    },
    text: {
        marginLeft: 10
    }
})

export default Header;