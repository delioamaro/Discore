import { TextInput, TextInputProps, View } from "react-native";

import { styles } from "./styles";

type Props = TextInputProps & {
    icon?: React.ReactNode;    
}

export function Input({ icon, style, ...rest }: Props) {
    return (
        <View style={styles.container}>
            {icon}
            <TextInput style={[styles.input, style]} {...rest} />
        </View>
    )
}