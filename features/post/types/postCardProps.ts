import { IUser } from "@/features/user/api/interface";
import { IPost } from "@/features/post/api/interface";

export interface PostCardProps {
    user: IUser,
    post: IPost,
    isSelfPost: boolean,
    handleEdit?: () => void;
    handleDelete?: () => void;
}