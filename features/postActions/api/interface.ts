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

export interface IPostLikes extends BasePostActions {
    likeId: string;
}

export interface IPostShare extends BasePostActions {
    shareId: string;
    caption: string;
}