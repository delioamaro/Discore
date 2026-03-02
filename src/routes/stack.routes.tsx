import { Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from "./tab.routes";
import { Login } from '@/screens/Login';
import { Album } from '@/screens/Album';
import { Cadastro } from "@/screens/Cadastro";
import { Letra } from "@/screens/Letra";


const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="cadastro" component={Cadastro} options={{ headerShown: false }}/>
      <Stack.Screen name="app" component={TabRoutes} options={{ headerShown: false }}/>
      <Stack.Screen name="album" component={Album} options={{ headerShown: true, headerTitleAlign: "center", headerStyle: {backgroundColor: "#010101", borderBottomWidth: 2, borderBottomColor: "#2C2C31"}, headerTintColor: '#F2F2F4',
      headerTitle: () => (
              <Image
                source={require("@/assets/navbarLogo.png")} 
                style={{ width: 180, height: 60, marginRight: 10 }}
              />
            ),
      }}/>
      <Stack.Screen name="letra" component={Letra} options={{ headerShown: true, headerTitleAlign: "center", headerStyle: {backgroundColor: "#010101", borderBottomWidth: 2, borderBottomColor: "#2C2C31"}, headerTintColor: '#F2F2F4',
      headerTitle: () => (
              <Image
                source={require("@/assets/navbarLogo.png")} 
                style={{ width: 180, height: 60, marginRight: 10 }}
              />
            ),
      }}/>
    </Stack.Navigator>
  );
}