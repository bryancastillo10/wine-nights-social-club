import { useState } from "react";
import { Alert } from "react-native";
import { supabase } from "@/lib/supabase";

interface UserLogin {
  email: string;
  password: string;
}

const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<UserLogin>({
        email: "",
        password: ""
    })
  
  const onChangeText = (field: keyof UserLogin, val: string) => {
    setLoginData((prev) => ({
        ...prev,
        [field] : val
    }));
  };
    
  const handleSubmit = async () => {
      if (!loginData.email || !loginData.password) {
        Alert.alert('Login', 'Please fill all the required fields');
        return;
      }

      setLoading(true);
      try {
        await supabase.auth.signInWithPassword({
          email: loginData.email,
          password: loginData.password
        });
      } catch (error) {
        console.error(error);
        Alert.alert('Login Failed', 'Failed to login, server error');
      } finally {
        setLoading(false);
      }
    };
    
    return {
        loginData,
        loading,
        onChangeText,
        handleSubmit
    }
}

export default useLogin
