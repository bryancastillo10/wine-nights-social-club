interface BasePostActions {
    userId: string;
    postId: string;
    createdAt: string;
}

export interface IComments extends BasePostActions{
    commentId: string;
    parentCommentId: string | null;
    textComment: string;
}

export interface INestedComments extends IComments {
    replies: INestedComments[];
}
