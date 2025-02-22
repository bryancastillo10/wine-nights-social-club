import { Stack } from "expo-router";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Text } from "react-native";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync(); 

const _layout = () => {
  return (
      <RootLayout/>
  )
};

const RootLayout = () => {
   const [loaded, error] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    Oswald: require("../assets/fonts/Oswald-Regular.ttf")
   });
  
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  };
  
  return (
 <Stack
    screenOptions={{
      headerShown: false,
    }}
    >
    <Stack.Screen 
      name="index"
    />
  </Stack>
  )
}

export default _layout;

