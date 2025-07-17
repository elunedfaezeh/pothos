import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/Screens/Home';
import SplashScreen from './app/Screens/SplashScreen';
import Useraccount from './app/Screens/useraccount';
import Detalsscreen from './app/Screens/Details';
import BottomTabs from './app/Layouts/Bottoms';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyDrawer from './app/Layouts/Drawer';
import Switch from './app/Screens/Switch';
import All from './app/Screens/All';
import MainSerach from './app/Screens/MainSerach';
import Login from './app/Screens/Login';
import Advertise from './app/Screens/Advertise';
import Faq from './app/Screens/Faq';
import DetailsScreen from './app/Screens/DetailsScreen';
import Agency from './app/Screens/Agency';
import Agent from './app/Screens/AgentDetails';
import Agents from './app/Screens/Agents';
import ContactUs from './app/Screens/ContactUs';
import ImageScreen from './app/Screens/image';
import About from './app/Screens/About';
import { Provider } from 'react-redux'
import store from './app/store/store';
import OnBoarding from './app/Screens/OnBoarding';
import NextButton from './app/Screens/NextButton';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='OnBoarding'>
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
          <Stack.Screen name='BottomTabs' component={BottomTabs} options={{ headerShown: false }} />
          <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Useraccount' component={Useraccount} options={{ headerShown: false }} />
          <Stack.Screen name='Detalsscreen' component={Detalsscreen} options={{ headerShown: false }} />
          <Stack.Screen name='MyDrawer' component={MyDrawer} options={{ headerShown: false }} />
          <Stack.Screen name='Switch' component={Switch} options={{ headerShown: false }} />
          <Stack.Screen name='OnBoarding' component={OnBoarding} options={{ headerShown: false }} />
          <Stack.Screen name='NextButton' component={NextButton} options={{ headerShown: false }} />
          <Stack.Screen name='All' component={All} options={{ headerShown: false }} />
          <Stack.Screen name='MainSerach' component={MainSerach} options={{ headerShown: false, sheetAllowedDetents: "fitToContents", presentation: "modal", }} />
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false, sheetAllowedDetents: "fitToContents", presentation: "modal", }} />
          <Stack.Screen name='Advertise' component={Advertise} options={{ headerShown: false, sheetAllowedDetents: "fitToContents", presentation: "modal", }} />
          <Stack.Screen name='Faq' component={Faq} options={{ headerShown: false, sheetAllowedDetents: "fitToContents", presentation: "modal", }} />
          <Stack.Screen name='DetailsScreen' component={DetailsScreen} options={{ headerShown: false, sheetAllowedDetents: "fitToContents", presentation: "modal", }} />
          <Stack.Screen name='Agency' component={Agency} options={{ headerShown: false, sheetAllowedDetents: "fitToContents", presentation: "modal", }} />
          <Stack.Screen name='Agent' component={Agent} options={{ headerShown: false, sheetAllowedDetents: "fitToContents", presentation: "modal", }} />
          <Stack.Screen name='Agents' component={Agents} options={{ headerShown: false, sheetAllowedDetents: "fitToContents", presentation: "modal", }} />
          <Stack.Screen name='ContactUs' component={ContactUs} options={{ headerShown: false, sheetAllowedDetents: "fitToContents", presentation: "modal", }} />
          <Stack.Screen name='About' component={About} options={{ headerShown: false, sheetAllowedDetents: "fitToContents", presentation: "modal", }} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

