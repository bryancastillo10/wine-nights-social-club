export interface IPost {
    postId: string;
    userId: string;
    content: string;
    mediaUrl: string | null; 
    mediaType: "image" | "video" | null;
    createdAt: string;
    updatedAt: string;
}