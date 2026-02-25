import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { Disc3 } from "lucide-react-native";
import { Search } from "lucide-react-native";

import Index from "../screens";
import { Home } from "@/screens/Home";
import { Pesquisar } from "@/screens/Pesquisar";


const Tab = createBottomTabNavigator();

export  default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{headerShown: true, headerTitleAlign: "center", headerStyle: {backgroundColor: "#010101", borderBottomWidth: 2, borderBottomColor: "#2C2C31"},
      headerTitle: () => (
        <Image
          source={require("@/assets/navbarLogo.png")} 
          style={{ width: 180, height: 60 }}
        />
      ),
      tabBarStyle: {backgroundColor: "#010101", borderTopWidth: 2, borderTopColor: "#2C2C31"}, 
      tabBarActiveTintColor: "#FFD900", tabBarInactiveTintColor: "#F2F2F4"}}>
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{tabBarIcon: ({color, size}) => <Disc3 size={size} color={color} />,
      tabBarLabel: 'Início'
      }}/>
      <Tab.Screen 
      name="Search" 
      component={Pesquisar} 
      options={{tabBarIcon: ({color, size}) => <Search size={size} color={color} />,
      tabBarLabel: 'Pesquisar'
      }}/>
      {/* <Tab.Screen 
      name="avaliar" 
      component={Avaliar} 
      options={{tabBarIcon: ({color, size}) => <Search size={size} color={color} />,
      tabBarLabel: 'Avaliar'
      }}/>
      <Tab.Screen 
      name="perfil" 
      component={Perfil} 
      options={{tabBarIcon: ({color, size}) => <Search size={size} color={color} />,
      tabBarLabel: 'Perfil'
      }}/><Tab.Screen 
      name="logout" 
      component={Logout} 
      options={{tabBarIcon: ({color, size}) => <Search size={size} color={color} />,
      tabBarLabel: 'Sair'
      }}*/}
    </Tab.Navigator>
  );
}