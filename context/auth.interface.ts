export interface IUserData {
    id: string;
    created_at: string;
    username: string;
    image?: string | null | {uri: string}; 
    bio?: string;
    email: string;
    address?: string;
    phoneNumber?: string;
}

export interface AuthContextType {
    user: IUserData | null;
    setAuth: (authUser: IUserData | null) => void;
    setUserData: (userData: Partial<IUserData>) => void;
}
