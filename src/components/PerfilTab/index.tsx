import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Eye } from "lucide-react-native"
import { Pen } from "lucide-react-native"
import { Trash2 } from "lucide-react-native"

import { styles } from "./styles";


type Props = {
    nome: string;
    onView: () => void;
    onEdit: () => void;
    onCancel: () => void;
}

export function PerfilTab({nome, onView, onEdit, onCancel} : Props) {
    return(
        <View style={styles.tabContainer}>
            <Text style={styles.tabText}>{nome}</Text>
            <View style={styles.iconeContainer}>
                <TouchableOpacity>
                    <Eye size={20} color="#F2F2F4" onPress={onView}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Pen size={20} color="#F2F2F4" onPress={onEdit} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Trash2 size={20} color="#F2F2F4" onPress={onCancel}/>
                </TouchableOpacity>
                </View>
        </View>
    )
}