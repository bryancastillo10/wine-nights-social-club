import { useEffect } from "react";
import { Stack, SplashScreen, useRouter, Href } from "expo-router"
import { useFonts } from 'expo-font';

import { supabase } from "@/lib/supabase";
import { AuthContextProvider, useAuth } from "@/context/AuthContext";
import { findAuthUser } from "@/utils/findAuthUser";

SplashScreen.preventAutoHideAsync(); 

const _layout = () => {
  return (
    <AuthContextProvider>
      <RootLayout/>
    </AuthContextProvider>
  )
};

const RootLayout = () => {
  const { setAuth } = useAuth();
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    Oswald: require("../assets/fonts/Oswald-Regular.ttf")
  });
    
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session) {
          // Home Page
          setAuth(findAuthUser(session?.user));
          router.replace("/home" as Href);
        } else {
          // Welcome Screen
          setAuth(null);
          router.replace("/welcome");
        }
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  
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