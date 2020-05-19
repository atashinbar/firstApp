import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
} from "react-native";

const welcomePage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.head}>خوش آمدید</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "#fff",
        paddingHorizontal: 10,
    },
    head: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
    },
    textBox: {
        borderWidth: 1,
        borderColor: "#C7EBFB",
        borderRadius: 3,
        height: 60,
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center",
        textAlign: "center",
        fontSize: 20,
    },
    loginButton: {
        alignItems: "center",
        backgroundColor: "#00ACF8",
        padding: 10,
    },
    loginButtonText: {
        fontSize: 22,
        padding: 5,
        color: "#fff",
    },
    errorMessage: {
        color: "red",
        fontSize: 14,
    },
});

export default welcomePage;
