export interface INotification {
    notificationId: string;
    senderId: string;
    receiverId: string;
    commentId: string;
    type: "like" | "comment" | "share";
    isRead: boolean;
    createdAt: string;
}