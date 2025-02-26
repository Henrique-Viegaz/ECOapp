import { createStaticNavigation, NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Detalhes from "./src/pages/detalhe"
import Perfil from "./src/pages/perfil"

const Stack= createStackNavigator()



export default function App() {
  return (
  
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Detalhes">
           <Stack.Screen name="Detalhes" component={Detalhes} options={{headerShown:false}}/>
           <Stack.Screen name="Perfil" component={Perfil}options={{headerShown:false}}/>

        </Stack.Navigator>
       </NavigationContainer>
    
  )
}


  