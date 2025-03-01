import { ScrollView } from "react-native";
import { INestedComments } from "@/features/postActions/api/interface"
import CommentItem from "@/features/postActions/components/CommentItem";
import { hp } from "@/utils/dimensions";

interface CommentBlockProps {
  comments: INestedComments[];
}

const CommentBlock = ({comments}: CommentBlockProps) => {
  return (
    <ScrollView style={{padding: hp(2)}}>
    {comments.map((comment) => (
        <CommentItem
          key={comment.commentId}
          comment={comment}
        />
    ))}
    </ScrollView>
  )
}

export default CommentBlock
