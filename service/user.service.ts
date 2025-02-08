import { supabase } from "@/lib/supabase";
import { IUserData } from "@/context/auth.interface";

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
        if (error instanceof Error) {
            return {
            success: false,
            message: error?.message ||  "Failed to get the user data"
            }
        }
        else {
            throw new Error;
        }
    }
};

export const updateUserData = async (userId: string, updateUserData: Partial<IUserData>) => {
    try {
        const { error } = await supabase
            .from('users')
            .update(updateUserData)
            .eq('id', userId)

        if(error){
        return {
            success: false,
            message: error?.message || "Failed to update your profile"
            }
        };
        return {
            success: true,
            updateUserData
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return {
            success: false,
            message: error?.message ||  "Failed to update the user data"
            }
        }
        else {
            throw new Error;
        }
    }
};