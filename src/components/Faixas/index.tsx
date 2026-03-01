import { View, TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { Quote } from "lucide-react-native";


import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    duration: string;
}

export function Faixas({ title, duration }: Props) { 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.duration}>{duration}</Text>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonLetra}>Letra</Text>
                <Quote size={12} color="#F2F2F4"/>
            </TouchableOpacity>
        </View>
    )
}