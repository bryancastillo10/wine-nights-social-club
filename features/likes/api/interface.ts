interface BasePostActions {
    userId: string;
    postId: string;
    createdAt: string;
}

export interface IPostLikes extends BasePostActions {
    likeId: string;
}