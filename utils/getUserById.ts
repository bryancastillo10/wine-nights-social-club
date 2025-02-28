import { users } from "@/features/user/api/mockData";

export const getUserById = (userId: string) => {
    return users.find(user => user.userId === userId);
};