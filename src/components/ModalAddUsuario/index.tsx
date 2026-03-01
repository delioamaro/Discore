import { Modal, Text, View, ImageSourcePropType, Image, ScrollView, Alert, TouchableOpacity } from "react-native"
import { useState } from "react";


import { styles } from "./styles"
import { Input } from "../Input";
import { Button } from "../Button";



type Props = {
    visible: boolean;
    onClose: () => void;
}


export function ModalAddPerfil({visible, onClose} : Props) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    function handleAdd() {
        if (!nome || !email || !senha) return;
    
        setNome("");
        setEmail("");
        setSenha("");
    
        onClose();
    }
    
    return (
        <Modal transparent visible={visible} animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Image
                        source={require("@/assets/modalIcone.png")} 
                        style={{ width: 60, height: 60 }}
                        />
                        <Text style={styles.titleText}>Adicionar Usuário</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.addContainer}>
                            <Input placeholder="Nome do Usuário" placeholderTextColor="#8A8A8C"  value={nome} onChangeText={setNome}/>
                            <Input placeholder="Email do Usuário" placeholderTextColor="#8A8A8C"  value={email} onChangeText={setEmail}/>
                            <Input placeholder="Senha do Usuário" placeholderTextColor="#8A8A8C"  value={senha} onChangeText={setSenha}/>
                        </View>
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <Button title="Cancelar" backgroundColor="#E91E63" textColor="#2C2C31" onPress={onClose}/>
                            </View>
                            <View style={styles.button}>
                                <Button title="Adicionar" backgroundColor="#27C6E5" textColor="#2C2C31" onPress={handleAdd}/>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}