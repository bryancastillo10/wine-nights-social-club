import { IUserData } from "@/context/auth.interface";
import { getUserData } from "@/service/user.service";

export const updateUserData = async (
    user: IUserData | null,
    setUserData: (userDAta: Partial<IUserData>) => void
    ) => {
    if (!user) {
        throw new Error;
    }
    const res = await getUserData(user?.id!);
    if (res?.success) {
        setUserData(res.data);
    }    
};