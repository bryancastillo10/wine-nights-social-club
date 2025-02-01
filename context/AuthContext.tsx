import { createContext, useState, useContext } from "react";
import { IUserData, AuthContextType } from "@/context/auth.interface";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<IUserData | null>(null);
    
    const setAuth = (authUser: IUserData | null ) => {
        setUser(authUser);
    };
    
    const setUserData = (userData: Partial<IUserData>) => {
        setUser((prev) => (prev) ? {...prev, ...userData} : null )
    };
    
    const contextValues = {
        user,
        setAuth,
        setUserData
    };
    
    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthContextProvider");
    }
    return context;
};