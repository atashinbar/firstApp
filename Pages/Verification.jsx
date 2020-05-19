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
const verficationPage = (props) => {
    const [verficationCode, setVerficationCode] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const handleVerificationCode = () => {
        return fetch(
            "http://atashinbar.ir/wp-json/signup-app/v1/api/?mobileNumber=" +
                props.route.params.passMobileNumber +
                "&verificationNumber=" +
                verficationCode
        )
            .then((response) => response.json())
            .then((json) => {
                if (json.status == "success")
                    props.navigation.navigate("welcome");
                else setErrorMessage("لطفا کد درست را وارد کنید");
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <View style={styles.container}>
            <TextInput
                keyboardType="numeric"
                placeholder="کد ارسال شده را وارد کنید"
                placeholderTextColor="teal"
                style={styles.textBox}
                onChangeText={setVerficationCode}
            />
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TouchableHighlight
                style={styles.loginButton}
                onPress={() => handleVerificationCode()}
                underlayColor="#00ACF8"
            >
                <Text style={styles.loginButtonText}>تایید</Text>
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
    errorMessage: {
        color: "red",
        fontSize: 18,
        textAlign: "center",
        marginBottom: 20,
    },
});

export default verficationPage;
