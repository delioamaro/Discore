import { View, Text, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import { Plus } from "lucide-react-native"
import { Search } from "lucide-react-native"
import { useState } from "react";

import { styles } from "./styles";
import { Input } from "@/components/Input";
import { AlbumTab } from "@/components/AlbumTab";
import { ModalAddAlbum } from "@/components/ModalAddAlbum";
import { ModalVizualirarAlbum } from "@/components/ModalVizualizarAlbum";
import { ModalEditarAlbum } from "@/components/ModalEditarAlbum";
import { ModalExcluir } from "@/components/ModalExcluir";


export function GerAlbum() {
    const [modalVisible, setModalVisible] = useState(false);
    const [viewVisible, setViewVisible] = useState(false);
    const [editVisible, setEditVisible] = useState(false);
    const [cancelVisible, setCancelVisible] = useState(false);
    
    //dados fixos
    const albumTeste = {
        album: "Coisas Naturais",
        cantor: "Marina Sena",
        genero: "MPB",
        duracao: "43:13",
        image: require("@/assets/coisas-naturais.jpg"),
    };
    
    function handleConfirmDelete() {
        console.log("Álbum excluído com sucesso!");
        setCancelVisible(false); 
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleGer}>Gerenciamento de Álbum</Text>
                <TouchableOpacity style={styles.add} onPress={() => setModalVisible(true)}>
                    <Plus size={30} color="#F2F2F4" />
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <Input placeholder="Pesquisar álbum" placeholderTextColor="#8A8A8C" 
                icon={<Search color="#F2F2F4" size={20} />} />
            </View> 
            <View style={styles.tableTop}>
                <Text style={styles.titleTable}>Título</Text>
                <Text style={styles.titleTable}>Cantor</Text>
                <Text style={styles.titleTable}>Ações</Text>
            </View>
            <View style={styles.albumContainer}>
                <AlbumTab album={albumTeste.album} cantor={albumTeste.cantor} onView={() => setViewVisible(true)} onEdit={() => setEditVisible(true)} onCancel={() => setCancelVisible(true)}/>
            </View>
            
            
            <ModalAddAlbum 
                visible={modalVisible} 
                onClose={() => setModalVisible(false)} 
                />
            
            <ModalVizualirarAlbum 
                visible={viewVisible}
                onClose={() => setViewVisible(false)}
                album={albumTeste.album}
                artista={albumTeste.cantor}
                genero={albumTeste.genero}
                duracao={albumTeste.duracao}
                image={albumTeste.image}
            />

            <ModalEditarAlbum 
                visible={editVisible}
                onClose={() => setEditVisible(false)}
                album={albumTeste.album}
                artista={albumTeste.cantor}
                genero={albumTeste.genero}
                duracao={albumTeste.duracao}
                image={albumTeste.image} 
            />

            <ModalExcluir 
                title="Deseja Excluir o Álbum"
                visible={cancelVisible} 
                onClose={() => setCancelVisible(false)}
                onConfirm={handleConfirmDelete}
            />
            
        </ScrollView>
    )
}