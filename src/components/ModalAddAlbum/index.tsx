import { Modal, Text, View, ImageSourcePropType, Image, ScrollView, Alert, TouchableOpacity } from "react-native"
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import { styles } from "./styles"
import { Input } from "../Input";
import { Button } from "../Button";
import { ImageUp } from "lucide-react-native";


type Props = {
    visible: boolean;
    onClose: () => void;
}


export function ModalAddAlbum({visible, onClose} : Props) {
    const [image, setImage] = useState<string | null>(null);
    const [album, setAlbum] = useState("");
    const [artista, setArtista] = useState("");
    const [genero, setGenero] = useState("");
    const [duracao, setDuracao] = useState("");

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
            setImage(result.assets[0].uri);
        }
    }
    
    function handleAdd() {
        if (!image || !album || !artista || !genero || !!duracao) return;
    
        setImage("");
        setAlbum("");
        setArtista("");
        setGenero("");
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
                        <Text style={styles.titleText}>Adicionar Álbum</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.addContainer}>
                            <Input placeholder="Nome do Álbum" placeholderTextColor="#8A8A8C"  value={album} onChangeText={setAlbum}/>
                            <Input placeholder="Nome do Cantor" placeholderTextColor="#8A8A8C"  value={artista} onChangeText={setArtista}/>
                            <Input placeholder="Genero do Álbum" placeholderTextColor="#8A8A8C"  value={genero} onChangeText={setGenero}/>
                            <Input placeholder="Duração do Álbum" placeholderTextColor="#8A8A8C"  value={duracao} onChangeText={setDuracao}/>
                        </View>
                        <View style={styles.previewContainer}>
                            {image ? (<Image source={{ uri: image }} style={styles.preview} />
                            ) : (
                            <ImageUp color="#F2F2F4" size={60}/>
                            )}
                        </View>
                        <View style={styles.buttonImage}>
                            <Button title="Selecionar Imagem" backgroundColor="#2C2C31" textColor="#F2F2F4" onPress={handlePickImage}/>
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