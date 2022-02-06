import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Translator from "./pages/Translator";

const Stack = createNativeStackNavigator();

export default function Application() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name={"Home"} component={Home} />
      <Stack.Screen options={{ headerShown: false }} name={"Translator"} component={Translator} />
    </Stack.Navigator>
  );
}
