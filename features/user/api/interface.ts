export interface IUser {
    userId: string;
    username: string;
    email: string;
    profilePic: string;
    address: string | null;
    phoneNumber: string | null;
    hobby: string | null;
    faveSong: string | null;
    createdAt: string;
}