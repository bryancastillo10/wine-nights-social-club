import { IUser } from "@/features/user/api/interface";
import { IPost } from "@/features/post/api/interface";
import { ActionRowProps } from "@/features/postActions/components/ActionRow";

export interface PostCardProps extends ActionRowProps {
    user: IUser,
    post: IPost,
    isSelfPost: boolean,
    handleEdit?: () => void;
    handleDelete?: () => void;
}