import { useRef, useEffect } from 'react';
import { StyleSheet, TextInput, FlatList, View } from 'react-native';
import { Paragraph } from '@/components/typography';
import { theme } from '@/style/theme';
import { wp } from '@/utils/dimensions';
import { INestedComments } from '@/features/postActions/api/interface';
import CommentItem from '@/features/postActions/components/CommentItem';

interface CommentBlockProps {
  comments: INestedComments[];
}

const CommentBlock = ({ comments }: CommentBlockProps) => {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (comments.length === 0 && inputRef.current) {
      inputRef.current.focus();
    }
  }, [comments]);

  const WriteComment = (
    <TextInput
      ref={inputRef}
      style={styles.input}
      placeholder="Write main comment..."
      autoFocus
    />
  );

  return (
    <View style={styles.container}>
      {comments.length > 0 ? (
        <View style={styles.existingComments}>
          <FlatList
            data={comments} 
            keyExtractor={(item) => item.commentId}
            renderItem={({ item }) => <CommentItem {...item} level={0} />}
          />
          {WriteComment}
        </View>
      ) : (
        <View style={styles.noComments}>
          <Paragraph style={styles.noCommentsText}>
            No comments yet. Be the first to comment!
          </Paragraph>
        </View>
      )}
    </View>
  );
};

export default CommentBlock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    padding: wp(2),
    backgroundColor: theme.colors.snow,
  },
  existingComments: {
    padding: 10,
  },
  noComments: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  noCommentsText: {
    marginBottom: 10,
  },
  input: {
    borderColor: theme.colors.textDark,
    borderWidth: 1,
    borderRadius: theme.radius.sm,
    padding: 10,
    marginTop: 12,
  },
});
