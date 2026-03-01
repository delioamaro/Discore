import { Modal, Text, View, ImageSourcePropType, Image, ScrollView, Alert, TouchableOpacity } from "react-native"

import { styles } from "./styles"
import { Button } from "../Button";



type Props = {
    title: string;
    visible: boolean;
    onClose: () => void;
    onConfirm: () => void;
};



export function ModalExcluir({visible, onClose, onConfirm, title} : Props) {
    return (
        <Modal transparent visible={visible} animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Image
                        source={require("@/assets/modalIcone.png")} 
                        style={{ width: 60, height: 60 }}
                        />
                        <Text style={styles.titleText}>{title}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Cancelar" backgroundColor="#E91E63" textColor="#2C2C31" onPress={onClose}/>
                        </View>
                        <View style={styles.button}>
                            <Button title="Excluir" backgroundColor="#27C6E5" textColor="#2C2C31" onPress={onConfirm}/>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}