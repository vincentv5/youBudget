import React from "react";
import { Modal, StyleSheet, View, ScrollView, Text, Dimensions, TouchableWithoutFeedback } from "react-native";
import { textSize, primaryColor } from '../utils/utiles';
import { Feather, MaterialIcons } from '@expo/vector-icons';
const { height, width } = Dimensions.get('window');
const fontSize = textSize();
const icons = {
    message: <Feather name="alert-circle" size={fontSize * 3} color="gray" />,
    cancel: <MaterialIcons name="cancel" size={fontSize * 1.5} color={"#ec8e9b"} />
}


const CustomModal = ({ visible, onReqClose, children, customStyle }) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slid"
                transparent={true}
                visible={visible}
                onRequestClose={onReqClose}
            >
                <View style={[styles.srcView, customStyle]}>
                    <View style={styles.cancelStyle}>
                        <TouchableWithoutFeedback onPress={onReqClose}>
                            <Text style={styles.textStyle}>{icons.cancel}</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    {children}
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    iconStyle: {
        marginVertical: height / 30
    },
    cancelStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingVertical: 10,
        width,
        paddingHorizontal: 30
    },
    srcView: {
        backgroundColor: "#f8f8f8",
        flexDirection: 'column',
        flex: 1,
        alignItems: "center",
        marginTop: height / 9
    },

    textStyle: {
        fontSize,
        fontFamily: "narrow-bold",
        color: primaryColor
    },

});
export default CustomModal;
