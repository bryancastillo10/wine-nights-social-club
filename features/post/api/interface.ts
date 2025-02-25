export interface IPost {
    postId: string;
    userId: string;
    content: string;
    mediaUrl: string | null; 
    mediaType: string | null;
    createdAt: string;
    updatedAt: string;
}