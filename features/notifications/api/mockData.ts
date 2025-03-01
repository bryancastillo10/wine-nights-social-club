export const notifications = [
  // 1) Thea comments on Bryan's post -> Bryan receives a notification
  {
    notificationId: "6000-1",
    senderId: "1002",       
    receiverId: "1001",     
    postId: "2000-1",
    commentId: "3000-1",
    type: "comment",
    isRead: false,
    createdAt: "2025-02-20T08:00:00Z"
  },
  // 2) Ysa replies to Thea's comment (which is on Bryan's post) -> Bryan might also receive a notification
  {
    notificationId: "6000-2",
    senderId: "1003",       
    receiverId: "1001",    
    postId: "2000-1",
    commentId: "3000-2",
    type: "comment",
    isRead: false,
    createdAt: "2025-02-20T08:15:00Z"
  },
  // 3) Bryan replies back -> Thea gets a comment notification 
  {
    notificationId: "6000-3",
    senderId: "1001",       
    receiverId: "1002",    
    postId: "2000-1",
    commentId: "3000-3",
    type: "comment",
    isRead: false,
    createdAt: "2025-02-20T08:30:00Z"
  },
  // 4) Bryan comments on Thea’s second post -> Thea gets a notification
  {
    notificationId: "6000-4",
    senderId: "1001",       
    receiverId: "1002",     
    postId: "2000-2",
    commentId: "3000-4",
    type: "comment",
    isRead: false,
    createdAt: "2025-02-20T09:00:00Z"
  },
  // 5) Ysa shares Thea’s post -> Thea gets a notification
  {
    notificationId: "6000-5",
    senderId: "1003",       
    receiverId: "1002",    
    postId: "2000-1",
    commentId: null,        
    type: "share",
    isRead: false,
    createdAt: "2025-02-20T10:20:00Z"
  }
];
