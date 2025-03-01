interface BasePostActions {
    userId: string;
    postId: string;
    createdAt: string;
}

export interface IPostShare extends BasePostActions {
    shareId: string;
    caption: string;
}