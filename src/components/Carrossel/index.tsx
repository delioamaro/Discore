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
    
}

export default function Carrossel({data} : carrosselProps) {
    return (
        <FlatList 
        data={data} 
        renderItem={({item})=>
            <TouchableOpacity style={{paddingHorizontal: 8}} >
                <Image source={item.image} style={{ width: 112, height: 112, borderWidth: 2, borderColor: "#2C2C31"}}/>
            </TouchableOpacity>
        }
        horizontal
        />
    )
}
