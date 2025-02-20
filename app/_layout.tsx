import { SplashScreen, Stack, Slot } from "expo-router";
import { useEffect } from "react";
import { useFonts } from "expo-font";


SplashScreen.preventAutoHideAsync(); 

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
        headerShown: false
      }}
    >
      <Slot/>
    </Stack>
  )
}

export default RootLayout

