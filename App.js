import React, { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
} from "react-native";
import loginPage from "./Pages/Login";
import verficationPage from "./Pages/Verification";
import welcomePage from "./Pages/Welcome";
const App = () => {
    //const [mobileNumber, setMobileNumber] = useState("");
    //const [verficationCode, setVerficationCode] = useState("");
    const Stack = createStackNavigator();
    // const handleMobileNumber = ({ navigation }) => {
    //     navigation.navigate("home", { name: "Jane" });
    //     return fetch(
    //         "http://atashinbar.ir/wp-json/signup-app/v1/api/?mobileNumber=" +
    //             mobileNumber
    //     )
    //         .then((response) => response.json())
    //         .then((json) => {
    //             setVerficationCode(json.code);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // };
    // const loginPage = ({ navigation }) => {
    //     return (
    //         <View style={styles.container}>
    //             <Text style={styles.head}>
    //                 لطفا شماره موبایل خود را وارد کنید
    //             </Text>
    //             <TextInput
    //                 keyboardType="numeric"
    //                 placeholder="09121234654"
    //                 placeholderTextColor="teal"
    //                 style={styles.textBox}
    //                 onChangeText={setMobileNumber}
    //             />
    //             <TouchableHighlight
    //                 style={styles.loginButton}
    //                 onPress={() => handleMobileNumber({ navigation })}
    //                 underlayColor="#00ACF8"
    //             >
    //                 <Text style={styles.loginButtonText}>ورود</Text>
    //             </TouchableHighlight>
    //             <View>
    //                 <Text>{verficationCode}</Text>
    //             </View>
    //         </View>
    //     );
    // };
    // const verficationPage = () => {
    //     return (
    //         <View style={styles.container}>
    //             <Text>شماره {mobileNumber} خوش آمدید به نرم افزار</Text>
    //         </View>
    //     );
    // };
    const navigationOptions = {};
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="login">
                    <Stack.Screen name="login" component={loginPage} />
                    <Stack.Screen name="home" component={verficationPage} />
                    <Stack.Screen name="welcome" component={welcomePage} />
                </Stack.Navigator>
            </NavigationContainer>
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

export default App;
