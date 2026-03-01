import { View, Text, Image, Modal, ImageSourcePropType, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { useState } from "react";

import { styles } from "./styles";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";


type Album = {
  id: string;
  title: string;
  Cantor: string;
  image: ImageSourcePropType;
};


export function Avaliar() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
    
    const albuns: Album[] = [
    { id: "1", title: "Coisas Naturais", Cantor: "Marina Sena", image: require("@/assets/coisas-naturais.jpg") },
    { id: "2", title: "Coisas Naturais", Cantor: "Marina Sena", image: require("@/assets/coisas-naturais.jpg") },
    { id: "3", title: "Coisas Naturais", Cantor: "Marina Sena", image: require("@/assets/coisas-naturais.jpg") },
    { id: "4", title: "Coisas Naturais", Cantor: "Marina Sena", image: require("@/assets/coisas-naturais.jpg") },
    { id: "5", title: "Coisas Naturais", Cantor: "Marina Sena", image: require("@/assets/coisas-naturais.jpg") },
    ];

    const handleSelectAlbum = (album: Album) => {setSelectedAlbum(album); setModalVisible(false)};

    return (
        <ScrollView style={styles.container}>
                <Text style={styles.title}>Vamos avaliar?</Text>
                <View style={styles.avaliarContainer}>
                    <Text style={styles.textTitle}>Primeiro vamos escolher qual álbum avaliar</Text>
                    <TouchableOpacity style={styles.selecionarContainer} onPress={() => setModalVisible(true)}>
                        <Text style={{ color: "#F2F2F4", textAlign: "center" }}>{selectedAlbum ? selectedAlbum.title : "Selecione um Álbum"}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.avaliarContainer}>
                    <Text style={styles.textTitle}>Agora com álbum escolhido vamos dar a nota.</Text>
                    <Text style={styles.text}>Lembre-se que a nota vai de 1 á 10</Text>
                    <Input placeholder="Digite sua Nota" placeholderTextColor="#8A8A8C"/>
                </View>
                <View style={styles.botaoContainer}>
                    <Button title="Confirmar Avaliação" backgroundColor="#27C6E5" textColor="#2C2C31"/>
                </View>

                <Modal visible={modalVisible} transparent animationType="fade" onRequestClose={() => setModalVisible(false)}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalTitle}>Selecione um Álbum</Text>
                            <FlatList 
                                data={albuns}
                                renderItem={({item})=>
                                <TouchableOpacity style={styles.textoAlbum}  onPress={() => handleSelectAlbum(item)} >
                                    <Image source={item.image} style={{ width: 112, height: 112, borderWidth: 2, borderColor: "#2C2C31"}}/>
                                    <View>
                                        <Text style={{ color: "#F2F2F4", textAlign: "center" }}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            }/>
                        </View>
                    </View>
                </Modal>
        </ScrollView>
    )
}

