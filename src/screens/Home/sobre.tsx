import { View, Text, Image, TouchableOpacity, ScrollView, Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

import { Headphones, Instagram, Twitter } from "lucide-react-native"
import { Videotape } from "lucide-react-native"
import { Lightbulb } from "lucide-react-native"
import { Star } from "lucide-react-native"


import { styles } from "./styles";



export function Sobre() {
    const openLink = async (url: string) => { try { await Linking.openURL(url); } catch (error) {
    console.error("Não foi possível abrir o link:", error);}};
    
    const sendEmail = () => {Linking.openURL('mailto:discore@email.com?subject=Suporte Discore&body=Olá!'); };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.comoAvaliar}>
                <Text style={styles.title}>Sabe como avaliar um álbum?</Text>
                <Text style={styles.subTitle}>Dicas para fazer uma avaliação justa</Text>
                <View style={styles.dicasContainer}>
                    <Headphones size={40} color="#27C6E5"/>
                    <View style={styles.infoContainer}>
                        <Text style={styles.titleInfo}>Escute com atenção</Text>
                        <Text style={styles.textInfo}>Escute o álbum inteiro com atenção, se precisar mais de uma vez.</Text>
                    </View>
                </View>
                <View style={styles.dicasContainer}>
                    <Videotape size={40} color="#27C6E5"/>
                    <View style={styles.infoContainer}>
                        <Text style={styles.titleInfo}>Considere a produção</Text>
                        <Text style={styles.textInfo}>Preste atençao na produção, batidas, vocaise no estilo musical.</Text>
                    </View>
                </View>
                <View style={styles.dicasContainer}>
                    <Lightbulb size={40} color="#27C6E5"/>
                    <View style={styles.infoContainer}>
                        <Text style={styles.titleInfo}>Sinta a criatividade</Text>
                        <Text style={styles.textInfo}>Perceba a originalidade e o sentimento que o álbum transimte em você.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.vamosAvaliar}>
                <Text style={styles.title2}>Vamos avaliar?</Text>
                <Text style={styles.subTitle}>Agora que você ja viu as dicas, está pronto para dar a nota.</Text>
                <Text style={styles.notasTitle}>As notas vão de 1 á 10</Text>
            </View>
            <View style={styles.starContainer}>
                <View style={styles.star}>
                    <Star size={40} color="#27C6E5"/>
                    <Text style={styles.nota}>1</Text>
                </View>
                <View style={styles.star}>
                    <MaskedView
                        maskElement={
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <Star size={40} color="black" />
                        </View>
                        }>
                        <LinearGradient
                            colors={["#27C6E5", "#E91E63"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={{ width: 40, height: 40 }}
                        />
                    </MaskedView>
                    <Text style={styles.nota}></Text>
                </View>
                <View style={styles.star}>
                    <Star size={40} color="#E91E63"/>
                    <Text style={styles.nota}>5</Text>
                </View>
                <View style={styles.star}>
                    <MaskedView
                        maskElement={
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <Star size={40} color="black" />
                        </View>
                        }>
                        <LinearGradient
                            colors={["#E91E63", "#6A1BB9"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={{ width: 40, height: 40 }}
                        />
                    </MaskedView>
                    <Text style={styles.nota}></Text>
                </View>
                <View style={styles.star}>
                    <Star size={40} color="#6A1BB9"/>
                    <Text style={styles.nota}>10</Text>
                </View>
            </View>
            <View style={styles.redesContainer}>
                <Text style={styles.title2}>Acompanhe atualizações nas nossas redes sociais</Text>
                <View style={styles.redesSociais}>
                    <TouchableOpacity onPress={() => openLink('https://instagram.com')}>
                        <Instagram size={40} color="#F2F2F4"/> 
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Twitter size={40} color="#F2F2F4" onPress={() => openLink('https://twitter.com')}/> 
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>Ou nos envie um email:</Text>
                <TouchableOpacity onPress={sendEmail}>
                    <Text style={styles.email}>discore@email.com</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}