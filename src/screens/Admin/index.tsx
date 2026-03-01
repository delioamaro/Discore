import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


import { GerAlbum } from "./gerAlbum";
import { GerPerfil } from "./gerPerfil"
import { Perfil } from "./perfil";
import { GerFaixa } from "./gerFaixa"

const Tab = createMaterialTopTabNavigator();

export default function AdminTabs() {
    return (
        <Tab.Navigator
        screenOptions={{
                tabBarStyle: {backgroundColor: "#010101"},
                tabBarIndicatorStyle: {backgroundColor: "#27C6E5"},
                tabBarLabelStyle: {fontWeight: "bold"},
                tabBarActiveTintColor: "#F2F2F4",
                tabBarInactiveTintColor: "#6B7280",
        }}>
            <Tab.Screen name="Perfil" component={Perfil}/>
            <Tab.Screen name="Ger. Álbum" component={GerAlbum}/>
            <Tab.Screen name="Ger. Faixa" component={GerFaixa}/>
            <Tab.Screen name="Ger. Pefil" component={GerPerfil}/>
        </Tab.Navigator>
    )
}
