import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Eye } from "lucide-react-native"
import { Pen } from "lucide-react-native"
import { Trash2 } from "lucide-react-native"

import { styles } from "./styles";


type Props = {
    album: string;
    cantor: string;
    onView: () => void;
    onEdit: () => void;
    onCancel: () => void;
}


export function AlbumTab({album, cantor, onView, onEdit, onCancel} : Props) {
    return(
        <View style={styles.tabContainer}>
            <Text style={styles.tabText}>{album}</Text>
            <Text style={styles.tabText2}>{cantor}</Text>
            <View style={styles.iconeContainer}>
                <TouchableOpacity style={styles.icone} onPress={onView}>
                    <Eye size={20} color="#F2F2F4" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icone} onPress={onEdit}>
                    <Pen size={20} color="#F2F2F4" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icone}>
                    <Trash2 size={20} color="#F2F2F4" onPress={onCancel}/>
                </TouchableOpacity>
                </View>
        </View>
    )
}