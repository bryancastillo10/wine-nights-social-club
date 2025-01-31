import { useState } from "react";
import { Alert } from "react-native";
import { supabase } from "@/lib/supabase";

interface UserSignUp {
  username: string;
  email: string;
  password: string;
}

const useSignUp = () => {
    const [signUpData, setSignUpData] = useState<UserSignUp>({
    username:"",
    email: "",
    password: ""
  })
  
  const [loading, setLoading] = useState<boolean>(false);
  
  const onChangeText = (field: keyof UserSignUp, val: string) => {
    setSignUpData((prev) => ({
        ...prev,
        [field] : val
    }));
  };
  
    const handleSubmit = async () => {
    if (!signUpData.email || !signUpData.password || !signUpData.username) {
      Alert.alert('SignUp', 'Please fill all the required fields');
      return;
    }

    setLoading(true);
    try {
      const { data : {session} } = await supabase.auth.signUp({
          email: signUpData.email,
          password: signUpData.password,
          options: {
            data: {
              username: signUpData.username
            }
          }
      });
      console.log(session);
      
    } catch (error) {
      console.error(error);
      Alert.alert('Signup Failed', 'Failed to signup, server error');
    } finally {
      setLoading(false);
    }
  };

  return {
        signUpData,
        loading,
        onChangeText,
        handleSubmit
    }
}

export default useSignUp
