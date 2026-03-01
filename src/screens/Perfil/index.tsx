import { View, Text, Image, ScrollView } from "react-native";
import { CircleUserRound } from "lucide-react-native"
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { HomeStackParamList } from "@/screens/Home/home.routes";
import { dataProps } from "@/components/Carrossel"; 

import { styles } from "./styles";
import { CardAlbum } from "@/components/CardAlbum";
import { MinhasAvaliacoes } from "@/components/MinhasAvaliacoes";


type NavigationProps = StackNavigationProp<HomeStackParamList, "HomeTabs">;

export function Perfil() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.perfilContainer}>
                <View style={styles.usuario}>
                    <CircleUserRound size={80} color="#B8B8BA"/>
                    <Text style={styles.nomeUsuario}>Usuário</Text>
                </View>
                <View style={styles.album}>
                    <Text style={styles.albunsAvaliados}>Álbuns Avaliados:</Text>
                    <Text style={styles.numAvaliados}>39</Text>
                </View>
            </View>
            <View style={styles.ultimosAlbuns}>
                <Text style={styles.title}>Últimos Álbuns Avaliados:</Text> 
                <View style={styles.albunsContainer}>
                    <CardAlbum image={require("@/assets/coisas-naturais.jpg")} onPress={() => navigation.navigate("AlbumDetalhes")}/> 
                    <CardAlbum image={require("@/assets/coisas-naturais.jpg")}/> 
                    <CardAlbum image={require("@/assets/coisas-naturais.jpg")}/>
                </View>
            </View>
            <View style={styles.minhasAvaliacoes}>
                <Text style={styles.title}>Minhas Avaliações:</Text>
                <MinhasAvaliacoes title="Usuário" data="25/02/2025" nota="10" album="Coisas Naturais" cantor="Marina Sena" /> 
                <MinhasAvaliacoes title="Usuário" data="25/02/2025" nota="10" album="Coisas Naturais" cantor="Marina Sena" />  
                <MinhasAvaliacoes title="Usuário" data="25/02/2025" nota="10" album="Coisas Naturais" cantor="Marina Sena" /> 
                <MinhasAvaliacoes title="Usuário" data="25/02/2025" nota="10" album="Coisas Naturais" cantor="Marina Sena" /> 
            </View>
        </ScrollView>
    )
}