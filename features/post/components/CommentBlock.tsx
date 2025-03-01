import { View } from "react-native";
import { INestedComments } from "@/features/postActions/api/interface"
import CommentItem from "@/features/postActions/components/CommentItem";

interface CommentBlockProps {
  comments: INestedComments[];
}

const CommentBlock = ({comments}: CommentBlockProps) => {
  return (
    <View>
    {comments.map((comment) => (
        <CommentItem
          key={comment.commentId}
          comment={comment}
        />
    ))}
    </View>
  )
}

export default CommentBlock
