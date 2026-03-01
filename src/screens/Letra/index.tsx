import { View, Text, ScrollView } from "react-native";

import { styles } from "./styles";

const muscia = {
    letra:  
            `
            Na hora que eu te beijar, cê vai entender
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
            Tô doida pra ter o seu olhar no meu, e o meu tem fome`
}



export function Letra(){
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Letra</Text>
            <View>
                <Text style={styles.texto}>{muscia.letra}</Text>
            </View>
        </ScrollView>
    )
}