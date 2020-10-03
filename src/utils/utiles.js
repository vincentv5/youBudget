import React from "react";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";
let d = Math.round(Dimensions.get("window").width);
export const textSize = () => {
    return d === 200 && d <= 300
        ? 14
        : d > 300 && d <= 400
            ? 19
            : d > 400 && d <= 500
                ? 25
                : 15;
};


export const primaryColor = "#d9bca7";
export const secondaryColor = "#dddcdb";
export const inputColor = "#eaeffd";
export const subbuttonColor = "2bae76";
export const lightGray = "#97989A";
export const lightBrown = "#CD9931";
export const green = "#2BAE76";
export const dark = "#0D0D0D";
export const skyblue = "#EAEFFD";
export const red = "#FF0000";

export const radius = 25;