import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { Disc3 } from "lucide-react-native";
import { Search } from "lucide-react-native";
import { CirclePlus } from "lucide-react-native";
import { CircleUserRound } from "lucide-react-native"
import { LogOut } from "lucide-react-native";
import { TouchableOpacity } from "react-native";


import { Pesquisar } from "@/screens/Pesquisar";
import { Avaliar } from "@/screens/Avaliar";
import { Perfil } from "@/screens/Perfil";
import AdminTabs from "@/screens/Admin";
import HomeTabs from "@/screens/Home";



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
      headerRight: () => (
      <TouchableOpacity onPress={() => console.log("Logout")} style={{marginRight: 16}}>
        <LogOut size={24} color="#6d6d6d"/>    
      </TouchableOpacity>
      ),
      tabBarStyle: {backgroundColor: "#010101", borderTopWidth: 1, borderTopColor: "#2C2C31"}, 
      tabBarActiveTintColor: "#FFD900", tabBarInactiveTintColor: "#F2F2F4"}}>
      <Tab.Screen 
      name="Home" 
      component={HomeTabs} 
      options={{tabBarIcon: ({color, size}) => <Disc3 size={size} color={color} />,
      tabBarLabel: 'Início'
      }}/>
      <Tab.Screen 
      name="Search" 
      component={Pesquisar} 
      options={{tabBarIcon: ({color, size}) => <Search size={size} color={color} />,
      tabBarLabel: 'Pesquisar'
      }}/>
      <Tab.Screen 
      name="Avaliar" 
      component={Avaliar} 
      options={{tabBarIcon: ({color, size}) => <CirclePlus size={size} color={color} />,
      tabBarLabel: 'Avaliar'
      }}/>
      <Tab.Screen 
      name="perfil" 
      component={AdminTabs} 
      options={{tabBarIcon: ({color, size}) => <CircleUserRound size={size} color={color} />,
      tabBarLabel: 'Perfil'
      }}/>
    </Tab.Navigator>
  );
}