import { INestedComments } from "@/features/postActions/api/interface";

export const countNestedComments = (comments: INestedComments[], postId: string): number => {
  const topLevelComments = comments.filter(comment => comment.postId === postId);

  const countCommentAndReplies = (comment: INestedComments): number => {
    let total = 1;

    if (comment.replies && comment.replies.length > 0) {
      total += comment.replies.reduce(
        (acc, reply) => acc + countCommentAndReplies(reply),
        0
      );
    }
    return total;
  };
  
  return topLevelComments.reduce((acc, comment) => acc + countCommentAndReplies(comment), 0);
};
