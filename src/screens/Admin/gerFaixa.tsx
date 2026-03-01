import { View, Text, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import { Form, Plus } from "lucide-react-native"
import { Search } from "lucide-react-native"
import { useState } from "react";

import { styles } from "./styles";
import { Input } from "@/components/Input";

import { FaixaTab } from "@/components/FaixaTab";
import { ModalAddFaixa } from "@/components/ModalAddFaixa";
import { ModalVizualirarFaixa } from "@/components/ModalVizualizarFaixa";
import { ModalEditarFaixa } from "@/components/ModalEditarFaixa/indext";
import { ModalExcluir } from "@/components/ModalExcluir";



export function GerFaixa() {
    const [modalVisible, setModalVisible] = useState(false);
    const [viewVisible, setViewVisible] = useState(false);
    const [editVisible, setEditVisible] = useState(false);
    const [cancelVisible, setCancelVisible] = useState(false);

    //dados fixos
    const faixaTeste = {
        faixa: "Coisas Naturais",
        album: "Coisas Naturais",
        duracao: "4:00",
        letra: 
        
    `Na hora que eu te beijar, cê vai entender
    Que o paraíso pode acontecer
    A sensação é de entrar no mar
    Você tem sorte de me encontrar
                    
    E se eu começar a falar de você
    Que tem tudo que eu preciso pra te querer
    O jeito e o frescor das coisas naturais
    O movimento igual um rio que deságua
    Deságua
                    
    Quando eu tô na minha cama
    Altas horas do dia
    Eu me pego pensando
    Seu corpo, meu guia
                    
    Tô doida pra dar um beijo e te encontrar de novo
    Tô doida pra ter o seu olhar no meu, e o meu tem fome
    Tô doida pra dar um beijo e te encontrar de novo
    Tô doida pra ter o seu olhar no meu, e o meu tem fome`,
    };

    function handleConfirmDelete() {
        console.log("Álbum excluído com sucesso!");
        setCancelVisible(false); 
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleGer}>Gerenciamento de Faixa</Text>
                <TouchableOpacity style={styles.add3} onPress={() => setModalVisible(true)}>
                    <Plus size={30} color="#F2F2F4" />
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <Input placeholder="Pesquisar Faixa" placeholderTextColor="#8A8A8C" 
                icon={<Search color="#F2F2F4" size={20} />} />
            </View> 
            <View style={styles.tableTop}>
                <Text style={styles.titleTable}>Faixa</Text>
                <Text style={styles.titleTable}>Álbum</Text>
                <Text style={styles.titleTable}>Ações</Text>
            </View>
            <View style={styles.albumContainer}>
                <FaixaTab faixa={faixaTeste.faixa} album={faixaTeste.album} onView={() => setViewVisible(true)} onEdit={() => setEditVisible(true)} onCancel={() => setCancelVisible(true)}/>
            </View>
            <ModalAddFaixa 
                visible={modalVisible} 
                onClose={() => setModalVisible(false)} 
                />

            <ModalVizualirarFaixa 
                visible={viewVisible}
                onClose={() => setViewVisible(false)}
                faixa={faixaTeste.faixa}
                album={faixaTeste.album}
                duracao={faixaTeste.duracao}
                letra={faixaTeste.letra}
            />

            <ModalEditarFaixa 
                visible={editVisible}
                onClose={() => setEditVisible(false)}
                faixa={faixaTeste.faixa}
                album={faixaTeste.album}
                duracao={faixaTeste.duracao}
                letra={faixaTeste.letra}
            />

            <ModalExcluir 
                title="Deseja Excluir a Faixa?"
                visible={cancelVisible} 
                onClose={() => setCancelVisible(false)}
                onConfirm={handleConfirmDelete}
            />
        
        </ScrollView>
    )
}