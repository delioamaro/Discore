import { Modal, Text, View, ImageSourcePropType, Image, ScrollView, Alert, TouchableOpacity } from "react-native"
import { useState } from "react";


import { styles } from "./styles"
import { Button } from "../Button";



type Props = {
  visible: boolean;
  onClose: () => void;
  faixa: string;
  album: string;
  duracao: string;
  letra: string;
};



export function ModalVizualirarFaixa({visible, onClose, faixa, album, duracao, letra } : Props) {
    return (
        <Modal transparent visible={visible} animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Image
                        source={require("@/assets/modalIcone.png")} 
                        style={{ width: 60, height: 60 }}
                        />
                        <Text style={styles.titleText}>Vizualizar Faixa</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.vizuContainer}>
                            <Text style={styles.title}>{faixa}</Text>
                            <Text style={styles.info}>Álbum: {album}</Text>
                            <Text style={styles.info}>Duração: {duracao}</Text>
                        </View>
                        <View style={styles.letraContainer}>
                            <Text style={styles.title}>Letra:</Text>
                            <Text style={styles.letra}>{letra}</Text>
                        </View>
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