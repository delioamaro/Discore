import { View, Text, Image, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { styles } from "./styles";
import { Faixas } from "@/components/Faixas";
import { Avaliacao } from "@/components/Avaliacao";


export function Album(){
    return (
        <ScrollView style={styles.container}>
            <View style={styles.albumContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.albumTitle}>Coisas Naturais</Text>
                    <Text style={styles.albumArtist}>Marina Sena</Text>
                    <Text style={styles.albumArtist}>2025 - 13 Faixas</Text>
                    <Text style={styles.albumNota}>9.9</Text>
                </View>
                <Image source={require("@/assets/coisas-naturais.jpg")} style={{ width: 112, height: 112, borderWidth: 2, borderColor: "#2C2C31",}} />
            </View>
            <View style={styles.albumInfo}>
                <Text style={styles.albumArtist}>Artista: Marina Sena </Text>
                <Text style={styles.albumArtist}>Lançamento: 31/03/2025 </Text>
                <Text style={styles.albumArtist}>Gênero: MPB </Text>
                <Text style={styles.albumArtist}>Duração: 43:13 </Text>
            </View>
            <View style={styles.albumInfo}>  
                <Text style={styles.titleFaixa}>Faixas:</Text>
                <Faixas title={"Coisas Naturais"} duration={"4:00"} />
                <Faixas title={"Coisas Naturais"} duration={"4:00"} />
                <Faixas title={"Coisas Naturais"} duration={"4:00"} />
                <Faixas title={"Coisas Naturais"} duration={"4:00"} />
            </View>
            <View style={styles.albumInfo}>
                <Text style={styles.titleFaixa}>Avaliações:</Text>
                <Avaliacao title="Usuario" data="25/02/2025" nota="10"/>
                <Avaliacao title="Usuario" data="25/02/2025" nota="10"/>
                <Avaliacao title="Usuario" data="25/02/2025" nota="10"/>
                <Avaliacao title="Usuario" data="25/02/2025" nota="10"/>
            </View>
        </ScrollView>
    )
}