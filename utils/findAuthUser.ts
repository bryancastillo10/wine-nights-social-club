import { User } from "@supabase/supabase-js";
import { IUserData } from "@/context/auth.interface";

export const findAuthUser = (user: User | null): IUserData | null => {
    if (!user) return null;

    return {
        id: user.id,
        created_at: user.created_at ?? new Date().toISOString(),
        username: user.user_metadata?.username ?? "Unknown",
        image: user.user_metadata?.avatar_url ?? "",
        bio: user.user_metadata?.bio ?? "",
        email: user.email ?? "",
        address: user.user_metadata?.address ?? "",
        phoneNumber: user.user_metadata?.phoneNumber ?? "",
    };
};
