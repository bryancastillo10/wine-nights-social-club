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

export interface IPostLikes extends BasePostActions {
    likeId: string;
}

export interface IPostShare extends BasePostActions {
    shareId: string;
    caption: string;
}