import { View, Text, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { CardAlbum } from "@/components/CardAlbum";
import { StatusBar } from "expo-status-bar";



export function Home() {
    return(
        <View style={styles.container}>
            <StatusBar style="light" />
           <Text style={styles.heroTitle}>
                <Text style={styles.blue}>Avalie </Text>
                álbuns. {""}
                <Text style={styles.pink}>Descubra </Text>
                músicas. {""}
                <Text style={styles.purple}>Viva </Text>
                o som.
            </Text>
            <Text style={styles.heroText}>
                Compartilhe suas opiniões, explore novos sons e encontre os melhores álbuns do momento!
            </Text>
            <Text style={styles.NovosTitle}>
                Novos Álbuns 
            </Text>
            <View style={styles.albunsContainer}>
                <CardAlbum image={require("@/assets/coisas-naturais.jpg")}/> 
                <CardAlbum image={require("@/assets/coisas-naturais.jpg")}/> 
                <CardAlbum image={require("@/assets/coisas-naturais.jpg")}/>
            </View>
            <View style={styles.albunsContainer}>
                <CardAlbum image={require("@/assets/coisas-naturais.jpg")}/> 
                <CardAlbum image={require("@/assets/coisas-naturais.jpg")}/> 
                <CardAlbum image={require("@/assets/asap-rocky.jpg")}/>
            </View>
            <Text style={styles.NovosTitle}>
                Mais Bem Avaliados
            </Text>

        </View>
    )
}