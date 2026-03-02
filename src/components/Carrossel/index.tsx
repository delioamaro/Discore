import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, ImageSourcePropType } from "react-native";



import { CarouselProps } from "react-native-snap-carousel";

type dataProps = {
    id: string,
    title: string,
    image: ImageSourcePropType,
    description: string,
    Cantor: string
}

type carrosselProps = {
    data: dataProps[];
    onPressItem: (id: string) => void;
    
}

export default function Carrossel({data, onPressItem} : carrosselProps) {
    return (
        <FlatList 
        data={data} 
        keyExtractor={(item) => item.id}
        renderItem={({item})=>
            <TouchableOpacity style={{paddingHorizontal: 8}} onPress={() => onPressItem(item.id)} >
                <Image source={item.image} style={{ width: 112, height: 112, borderWidth: 2, borderColor: "#2C2C31"}}/>
            </TouchableOpacity>
        }
        horizontal
        />
    )
}
