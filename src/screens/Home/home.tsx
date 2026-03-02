import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";


import { StackNavigationProp } from "@react-navigation/stack";


import { styles } from "./styles";
import { CardAlbum } from "@/components/CardAlbum";
import { StatusBar } from "expo-status-bar";
import Carrossel from "@/components/Carrossel";
import { data } from "../data/data";

type RootStackParamList = {
  app: undefined;
  album: undefined; 
};



export function Home() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <ScrollView style={styles.container}>
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
                <CardAlbum image={require("@/assets/coisas-naturais.jpg")} onPress={() => navigation.navigate("album")} /> 
                <CardAlbum image={require("@/assets/coisas-naturais.jpg")} onPress={() => navigation.navigate("album")}/> 
                <CardAlbum image={require("@/assets/coisas-naturais.jpg")} onPress={() => navigation.navigate("album")}/>
            </View>
            <View style={styles.albunsContainer}>
                <CardAlbum image={require("@/assets/coisas-naturais.jpg")} onPress={() => navigation.navigate("album")} /> 
                <CardAlbum image={require("@/assets/coisas-naturais.jpg")} onPress={() => navigation.navigate("album")}/> 
                <CardAlbum image={require("@/assets/coisas-naturais.jpg")} onPress={() => navigation.navigate("album")}/>
            </View>
            <Text style={styles.NovosTitle}>
                Mais Bem Avaliados
            </Text>
            <View style={styles.albunsContainer}>
                <Carrossel data={data} onPressItem={(id) => navigation.navigate("album")} />
            </View>
        </ScrollView>
    )
}