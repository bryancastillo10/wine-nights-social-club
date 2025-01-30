import { useEffect } from "react";
import { Stack, SplashScreen } from "expo-router"
import { useFonts } from 'expo-font';

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
      />
  )
}

export default RootLayout;