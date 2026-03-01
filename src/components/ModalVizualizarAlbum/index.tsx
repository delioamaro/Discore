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
  album: string;
  artista: string;
  genero: string;
  duracao: string;
  image: ImageSourcePropType;
};



export function ModalVizualirarAlbum({visible, onClose, album, artista, genero, duracao, image} : Props) {
    return (
        <Modal transparent visible={visible} animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Image
                        source={require("@/assets/modalIcone.png")} 
                        style={{ width: 60, height: 60 }}
                        />
                        <Text style={styles.titleText}>Vizualizar Álbum</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.vizuContainer}>
                            <Text style={styles.title}>{album}</Text>
                            <Text style={styles.info}>Artista: {artista}</Text>
                            <Text style={styles.info}>Gênero: {genero}</Text>
                            <Text style={styles.info}>Duração: {duracao}</Text>
                        </View>
                        <Image source={image} style={styles.preview}  />
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <Button title="Cancelar" backgroundColor="#E91E63" textColor="#2C2C31" onPress={onClose}/>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}