import { IUser } from "@/features/user/api/interface";
import { IPost } from "@/features/post/api/interface";
import { INestedComments } from "@/features/comments/api/interface";
import { ActionRowProps } from "@/features/comments/components/ActionRow";

export interface PostCardProps extends ActionRowProps {
    user: IUser,
    post: IPost,
    comments: INestedComments[],
    isSelfPost: boolean,
    handleEdit?: () => void;
    handleDelete?: () => void;
}