import { Alert } from "react-native";
import { useAuth } from "@/context/AuthContext";

import { supabase } from "@/lib/supabase";
const useLogout = () => {
    const { setAuth } = useAuth();
    
    const handleLogout = async () => {
        try {
            setAuth(null);
            const { error } = await supabase.auth.signOut();
            
            if (error) {
                Alert.alert(error?.message || "User failed to sign out");
                throw Error(error.message);
            }
        }
        catch (error) {
            Alert.alert("Sign Out", "User failed to sign out");
        }
    };
    
    return {
        handleLogout
    }
}

export default useLogout;
