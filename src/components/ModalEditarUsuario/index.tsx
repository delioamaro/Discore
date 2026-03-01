import { Modal, View, Text, Image, ScrollView, Alert, ImageSourcePropType} from "react-native";
import { useState, useEffect } from "react";


import { styles } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";

type Props = {
    visible: boolean;
    onClose: () => void;
    nome: string;
    email: string;
    senha: string;
}

export function ModalEditarPerfil({visible, onClose, nome, email, senha}: Props) {
    const [editNome, setEditNome] = useState(nome);
    const [editEmail, setEditEmail] = useState(email);
    const [editSenha, setEditSenha] = useState(senha);

    useEffect(() => {
    setEditNome(nome);
    setEditEmail(email);
    setEditSenha(senha);
    }, [visible]);

    function handleSave() {
    if (!editNome || !editEmail || !editSenha) {
      Alert.alert("Preencha todos os campos");
      return;
    }

    Alert.alert("Alterações salvas");
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
                        <Text style={styles.titleText}>Editar Álbum</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.editContainer}>
                            <Input value={editNome} onChangeText={setEditNome} placeholderTextColor="#8A8A8C" />
                            <Input value={editEmail} onChangeText={setEditEmail} placeholderTextColor="#8A8A8C" />
                            <Input value={editSenha} onChangeText={setEditSenha} placeholderTextColor="#8A8A8C" />
                        </View>
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <Button title="Cancelar" backgroundColor="#E91E63" textColor="#2C2C31" onPress={onClose}/>
                            </View>
                            <View style={styles.button}>
                                <Button title="Salvar" backgroundColor="#27C6E5" textColor="#2C2C31" onPress={handleSave}/>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}