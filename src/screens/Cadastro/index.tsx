import { View, Text, Image, TextInput, TouchableOpacity,} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { Input } from "../../components/Input";
import { StatusBar } from "expo-status-bar";
import { Button } from "@/components/Button";
import { LinearGradient } from "expo-linear-gradient";

type RootStackParamList = {
  cadastro: undefined;
  login: undefined; 
};


export function Cadastro() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    
    return (
        <LinearGradient colors={["#E91E63", "#6A1BB9"]} style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.loginContainer}>
                <Image style={styles.imageContainer} source={require("@/assets/navbarLogo.png")} resizeMode="contain"/>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Email:</Text>
                    <Input placeholder="Digite seu email" placeholderTextColor="#8A8A8C" keyboardType="email-address"/>
                    <Text style={styles.title}>Nome:</Text>
                    <Input placeholder="Digite o nome do Usuário" placeholderTextColor="#8A8A8C" secureTextEntry={true}/>
                    <Text style={styles.title}>Senha:</Text>
                    <Input placeholder="Digite sua senha" placeholderTextColor="#8A8A8C" secureTextEntry={true}/>
                    <Text style={styles.title}>Confirmar Senha:</Text>
                    <Input placeholder="Digite sua senha" placeholderTextColor="#8A8A8C" secureTextEntry={true}/>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Voltar Login" backgroundColor="#E91E63" textColor="#F2F2F4" onPress={() => navigation.navigate("login")}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cadastrar" backgroundColor="#27C6E5" textColor="#2C2C31" onPress={() => navigation.navigate("login")}/>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}