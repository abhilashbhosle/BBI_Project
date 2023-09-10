import * as React from "react";
import { Text } from "react-native";
import { Home } from "./src/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Detail } from "./src/Detail";
import { Provider } from "react-redux";
import store from "./src/features/store";

const Stack=createNativeStackNavigator();
function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Detail' component={Detail}/>
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default () => {
  return <App />;
};