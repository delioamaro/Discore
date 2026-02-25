import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    backgroundColor: string;
    textColor: string;
}

export function Button({ title, backgroundColor, textColor, ...rest }: Props) {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor }]} {...rest}>
            <Text style={[styles.title, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
    )
}