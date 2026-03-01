import { Modal, Text, View, ImageSourcePropType, Image, ScrollView, Alert, TouchableOpacity } from "react-native"
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import { styles } from "./styles"
import { Input } from "../Input";
import { Button } from "../Button";


type Props = {
    visible: boolean;
    onClose: () => void;
}


export function ModalAddFaixa({visible, onClose} : Props) {
    const [faixa, setFaixa] = useState("");
    const [album, setAlbum] = useState("");
    const [duracao, setDuracao] = useState("");
    const [letra, setLetra] = useState("");

    
    function handleAdd() {
        if ( !faixa|| !album || !!duracao || !letra) return;
    
        setFaixa("");
        setAlbum("");
        setDuracao("");
    
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
                        <Text style={styles.titleText}>Adicionar Faixa</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.addContainer}>
                            <Input placeholder="Nome da Faixa" placeholderTextColor="#8A8A8C"  value={faixa} onChangeText={setFaixa}/>
                            <Input placeholder="Nome do Álbum" placeholderTextColor="#8A8A8C"  value={album} onChangeText={setAlbum}/>
                            <Input placeholder="Duração da Faixa" placeholderTextColor="#8A8A8C"  value={duracao} onChangeText={setDuracao}/>
                            <Input placeholder="Letra da Faixa" placeholderTextColor="#8A8A8C"  value={letra} onChangeText={setLetra} multiline textAlignVertical="top" style={{ minHeight: 100, paddingTop: 10 }}/>
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