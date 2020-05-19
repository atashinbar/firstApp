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
const loginPage = (props) => {
    const [mobileNumber, setMobileNumber] = useState("");
    const handleMobileNumber = () => {
        props.navigation.navigate("home", { passMobileNumber: mobileNumber });
        return fetch(
            "http://atashinbar.ir/wp-json/signup-app/v1/api/?mobileNumber=" +
                mobileNumber
        )
            .then((response) => response.json())
            .then((json) => {})
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.head}>لطفا شماره موبایل خود را وارد کنید</Text>
            <TextInput
                keyboardType="numeric"
                placeholder="09121234654"
                placeholderTextColor="teal"
                style={styles.textBox}
                onChangeText={setMobileNumber}
            />
            <TouchableHighlight
                style={styles.loginButton}
                onPress={() => handleMobileNumber()}
                underlayColor="#00ACF8"
            >
                <Text style={styles.loginButtonText}>ورود</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 10,
    },
    head: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
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
});

export default loginPage;
