import { StyleSheet } from "react-native";

export default StyleSheet.create({
    itemNameViewStyle: {
        flexDirection: "column", 
        margin: 5
    },
    itemNameTextStyle: {
        fontSize: 18, 
        fontFamily: "Roboto-Bold"
    },
    itemDescriptionTextStyle: {
        fontSize: 16, 
        fontFamily: "Roboto-Light", 
        marginTop: 3
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null  
    }
})