import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Plus } from "lucide-react-native"
import { Search } from "lucide-react-native"
import { useState } from "react";

import { styles } from "./styles";
import { Input } from "@/components/Input";
import { PerfilTab } from "@/components/PerfilTab";
import { ModalAddPerfil } from "@/components/ModalAddUsuario";
import { ModalVizualirarPerfil } from "@/components/ModalVizualizarUsuario";
import { ModalEditarPerfil } from "@/components/ModalEditarUsuario";
import { ModalExcluir } from "@/components/ModalExcluir";

export function GerPerfil() {
    const [modalVisible, setModalVisible] = useState(false);
    const [viewVisible, setViewVisible] = useState(false);
    const [editVisible, setEditVisible] = useState(false);
    const [cancelVisible, setCancelVisible] = useState(false);
    
    //dados fixos
    const perfilTeste = {
        nome: "Usuario",
        email: "usuario@email.com",
        senha: "1234",
    };

    function handleConfirmDelete() {
        console.log("Álbum excluído com sucesso!");
        setCancelVisible(false); 
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleGer}>Gerenciamento de Perfil</Text>
                <TouchableOpacity style={styles.add2} onPress={() => setModalVisible(true)}>
                    <Plus size={30} color="#F2F2F4" />
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <Input placeholder="Pesquisar álbum" placeholderTextColor="#8A8A8C" 
                icon={<Search color="#F2F2F4" size={20} />} />
            </View>
            <View style={styles.tableTop}>
                <Text style={styles.titleTable}>Usuário</Text>
                <Text style={styles.titleTable}>Ações</Text>
            </View>
            <View style={styles.perfilContainer2}>
                <PerfilTab nome={perfilTeste.nome} onView={() => setViewVisible(true)} onEdit={() => setEditVisible(true)} onCancel={() => setCancelVisible(true)}/>
            </View>
            
            <ModalAddPerfil 
                visible={modalVisible} 
                onClose={() => setModalVisible(false)}
            />

            <ModalVizualirarPerfil 
                visible={viewVisible}
                onClose={() => setViewVisible(false)}
                nome={perfilTeste.nome}
                email={perfilTeste.email}
                senha={perfilTeste.senha}
            />

            <ModalEditarPerfil 
                visible={editVisible}
                onClose={() => setEditVisible(false)}
                nome={perfilTeste.nome}
                email={perfilTeste.email}
                senha={perfilTeste.senha}
            />

            <ModalExcluir 
                title="Deseja Excluir o Usuário?"
                visible={cancelVisible} 
                onClose={() => setCancelVisible(false)}
                onConfirm={handleConfirmDelete}
            />
        
        </ScrollView>
    )
}