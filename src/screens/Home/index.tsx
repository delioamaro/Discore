import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


import { Home } from "./home";
import { Sobre } from "./sobre"

const Tab = createMaterialTopTabNavigator();

export default function HomeTabs() {
    return (
        <Tab.Navigator
        screenOptions={{
                tabBarStyle: {backgroundColor: "#010101"},
                tabBarIndicatorStyle: {backgroundColor: "#9333ea"},
                tabBarLabelStyle: {fontWeight: "bold"},
                tabBarActiveTintColor: "#F2F2F4",
                tabBarInactiveTintColor: "#6B7280",
        }}>
            <Tab.Screen name="Álbum" component={Home}/>
            <Tab.Screen name="Sobre" component={Sobre}/>
        </Tab.Navigator>
    )
}
