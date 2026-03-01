import { Modal, View, Text, Image, ScrollView, Alert, ImageSourcePropType} from "react-native";
import { useState, useEffect } from "react";


import { styles } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";

type Props = {
    visible: boolean;
    onClose: () => void;
    faixa: string;
    album: string;
    duracao: string;
    letra: string;
}

export function ModalEditarFaixa({visible, onClose, faixa, album, duracao, letra}: Props) {
    const [editFaixa, setEditFaixa] = useState(faixa);
    const [editAlbum, setEditAlbum] = useState(album);
    const [editDuracao, setEditDuracao] = useState(duracao);
    const [editLetra, setEditLetra] = useState(letra);
    

    useEffect(() => {
    setEditFaixa(faixa);
    setEditAlbum(album);
    setEditDuracao(duracao);
    setEditLetra(letra);
    }, [visible]);

    function handleSave() {
    if (!editAlbum || !editAlbum || !editDuracao || !editLetra) {
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
                            <Input value={editFaixa} onChangeText={setEditFaixa} placeholderTextColor="#8A8A8C" />
                            <Input value={editAlbum} onChangeText={setEditAlbum} placeholderTextColor="#8A8A8C" />
                            <Input value={editDuracao} onChangeText={setEditDuracao} placeholderTextColor="#8A8A8C" />
                            <Input value={editLetra} onChangeText={setEditLetra} placeholderTextColor="#8A8A8C" multiline textAlignVertical="top" style={{ minHeight: 100, paddingTop: 10 }} />
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