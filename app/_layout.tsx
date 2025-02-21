import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useFonts } from "expo-font";


const _layout = () => {
  return (
      <RootLayout/>
  )
};

const RootLayout = () => {
   const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    Oswald: require("../assets/fonts/Oswald-Regular.ttf")
   });
  
  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        SplashScreen.hideAsync(); 
      }
    }
    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  };
  
  return (
 <Stack
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen 
      name="welcome"
    />
  </Stack>
  )
}

export default _layout;

