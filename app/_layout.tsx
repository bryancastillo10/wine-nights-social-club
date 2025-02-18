import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack, SplashScreen } from "expo-router";

const _layout = () => {
  return (
      <RootLayout/>
  )
};

const RootLayout = () => {
  // const { setAuth, setUserData } = useAuth();
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

export default _layout;