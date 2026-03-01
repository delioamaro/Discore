import { Modal, Text, View, ImageSourcePropType, Image, ScrollView, Alert, TouchableOpacity } from "react-native"

import { styles } from "./styles"
import { Button } from "../Button";



type Props = {
  visible: boolean;
  onClose: () => void;
  nome: string;
  email: string;
  senha: string;
};



export function ModalVizualirarPerfil({visible, onClose, nome, email, senha } : Props) {
    return (
        <Modal transparent visible={visible} animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Image
                        source={require("@/assets/modalIcone.png")} 
                        style={{ width: 60, height: 60 }}
                        />
                        <Text style={styles.titleText}>Vizualizar Usuário</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.vizuContainer}>
                            <Text style={styles.title}>{nome}</Text>
                            <Text style={styles.info}>Email: {email}</Text>
                            <Text style={styles.info}>Senha: {senha}</Text>
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