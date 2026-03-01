import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from "./tab.routes";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="tabs" 
        component={TabRoutes} 
      />
    </Stack.Navigator>
  );
}