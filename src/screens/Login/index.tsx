import { View, Text, Image, TextInput, TouchableOpacity,} from "react-native";

import { styles } from "./styles";
import { Input } from "../../components/Input";
import { StatusBar } from "expo-status-bar";
import { Button } from "@/components/Button";
import { LinearGradient } from "expo-linear-gradient";

export function Login() {
    return (
        <LinearGradient colors={["#E91E63", "#6A1BB9"]} style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.loginContainer}>
                <Image style={styles.imageContainer} source={require("@/assets/navbarLogo.png")} resizeMode="contain"/>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Email:</Text>
                    <Input placeholder="Digite seu email" placeholderTextColor="#8A8A8C" keyboardType="email-address"/>
                    <Text style={styles.title}>Senha:</Text>
                    <Input placeholder="Digite sua senha" placeholderTextColor="#8A8A8C" secureTextEntry={true}/>
                </View>
                <Button title="Entrar" backgroundColor="#27C6E5" textColor="#2C2C31"/>
            </View>
        </LinearGradient>
    )
}