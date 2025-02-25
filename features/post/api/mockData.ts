import { IPost } from "@/features/post/api/interface";

export const posts: IPost[] = [
    {
        postId: "2000-1",
        userId: "1001",
        content: "While my guitar gently weeps",
        mediaUrl: require("../../../assets/preview/music.mp4"),
        mediaType: "video",
        createdAt: "2025-02-15T08:00:00Z",
        updatedAt: "2025-02-15T08:00:00Z"
    },
    {
        postId: "2000-2",
        userId: "1002",
        content: "Love yourself",
        mediaUrl: null,
        mediaType: null,
        createdAt: "2025-02-14T10:00:00Z",
        updatedAt: "2025-02-14T10:00:00Z"
    },
    {
        postId: "2000-3",
        userId: "1003",
        content: "Chilling at the cafe! So relaxing.",
        mediaUrl: "preview.coffee",
        mediaType: "image",
        createdAt: "2025-02-17T10:00:00Z",
        updatedAt: "2025-02-17T10:00:00Z"
    },
    {
        postId: "2000-4",
        userId: "1002",
        content: "A scenic view in Japan",
        mediaUrl: "preview.nature",
        mediaType: "image",
        createdAt: "2025-02-14T10:00:00Z",
        updatedAt: "2025-02-14T10:00:00Z"
    },
]