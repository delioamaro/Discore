import { Modal, View, Text, Image, ScrollView, Alert, ImageSourcePropType} from "react-native";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

import { styles } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";

type Props = {
    visible: boolean;
    onClose: () => void;
    album: string;
    artista: string;
    genero: string;
    duracao: string;
    image: ImageSourcePropType;
}

export function ModalEditarAlbum({visible, onClose, album, artista, genero, duracao, image}: Props) {
    const [editAlbum, setEditAlbum] = useState(album);
    const [editArtista, setEditArtista] = useState(artista);
    const [editGenero, setEditGenero] = useState(genero);
    const [editDuracao, setEditDuracao] = useState(duracao);
    const [editImage, setEditImage] = useState<ImageSourcePropType>(image);

    useEffect(() => {
    setEditAlbum(album);
    setEditArtista(artista);
    setEditGenero(genero);
    setEditDuracao(duracao);
    setEditImage(image);

    }, [visible]);

    async function handlePickImage() {
            const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (!permission.granted) {
                Alert.alert(
                "Permissão necessária",
                "Precisamos de acesso à sua galeria."
                );
                return;
            }
        
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1], 
                quality: 1,
            });
    
            if (!result.canceled) {
                setEditImage({ uri: result.assets[0].uri });
            }
        }
    
    
    function handleSave() {
    if (!editAlbum || !editArtista || !editGenero || !editDuracao) {
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
                            <Input value={editAlbum} onChangeText={setEditAlbum} placeholderTextColor="#8A8A8C" />
                            <Input value={editArtista} onChangeText={setEditArtista} placeholderTextColor="#8A8A8C" />
                            <Input value={editGenero} onChangeText={setEditGenero} placeholderTextColor="#8A8A8C"  />
                            <Input value={editDuracao} onChangeText={setEditDuracao} placeholderTextColor="#8A8A8C" />
                        </View>
                        <View style={styles.previewContainer}>
                            <Image source={editImage} style={styles.preview} />
                        </View>
                        <View style={styles.buttonImage}>
                            <Button title="Selecionar Nova Imagem" backgroundColor="#2C2C31" textColor="#F2F2F4" onPress={handlePickImage}/>
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