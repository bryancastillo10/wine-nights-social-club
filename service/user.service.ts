import { supabase } from "@/lib/supabase";

export const getUserData = async (userId: string) => {
    try {
        const { data, error } = await supabase
        .from('users')
        .select()
        .eq('id',userId)
        .single();

        if(error){
        return {
            success: false,
            message: error?.message || "Failed to get the user data"
            }
        };
        return {
            success: true,
            data
        }
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error) {
            return {
            success: false,
            message: error?.message ||  "Failed to get the user data"
            }
        }
    }
};