import { TouchableOpacity, Image, TouchableOpacityProps, ImageSourcePropType } from "react-native";

type Props = TouchableOpacityProps & {
  image: ImageSourcePropType;
};

export function CardAlbum({ image, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <Image source={image} style={{ width: 112, height: 112, borderWidth: 2, borderColor: "#2C2C31"}} />
    </TouchableOpacity>
  );
}
