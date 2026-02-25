import { View, Image, Text } from "react-native";

import { Input } from "../../components/Input";
import { styles } from "./styles";
import { Search } from "lucide-react-native";

export function Pesquisar() {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Input placeholder="Pesquisar álbum" placeholderTextColor="#8A8A8C" 
                    icon={<Search color="#F2F2F4" size={20} />}
                />
            </View>
        </View>
    )
}