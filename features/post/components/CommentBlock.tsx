import { ScrollView, StyleSheet } from "react-native";
import { INestedComments } from "@/features/comments/api/interface"
import CommentItem from "@/features/comments/components/CommentItem";
import { hp, wp } from "@/utils/dimensions";

interface CommentBlockProps {
  comments: INestedComments[];
}

const CommentBlock = ({comments}: CommentBlockProps) => {
  return (
    <ScrollView style={styles.container}>
    {comments.map((comment) => (
        <CommentItem
          key={comment.commentId}
          comment={comment}
        />
    ))}
    </ScrollView>
  )
}

export default CommentBlock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(2),
    marginBottom:hp(2)
  }
});
