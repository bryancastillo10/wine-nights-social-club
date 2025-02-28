import { useRef, useEffect } from 'react';
import { IComments } from '@/features/postActions/api/interface';
import { StyleSheet, Text, TextInput, FlatList, View } from 'react-native';
import { theme } from '@/style/theme';
import CommentItem from '@/features/postActions/components/CommentItem';
import { wp } from '@/utils/dimensions';

interface CommentBlockProps {
  comments: IComments[];
}

const CommentBlock = ({ comments }: CommentBlockProps) => {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (comments.length === 0 && inputRef.current) {
      inputRef.current.focus();
    }
  }, [comments]);

  return (
    <View style={styles.container}>
      {comments.length > 0 ? (
        <FlatList
          data={comments.filter((comm) => comm.parentCommentId === null)}
          keyExtractor={(item) => item.commentId}
          renderItem={({ item }) => (
            <CommentItem {...item} allComments={comments} level={0} />
          )}
        />
      ) : (
        <View style={styles.noComments}>
          <Text style={styles.noCommentsText}>
            No comments yet. Be the first to comment!
          </Text>
          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder="Write a comment..."
            autoFocus
          />
        </View>
      )}
    </View>
  );
};

export default CommentBlock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(2),
    backgroundColor: theme.colors.snow,
  },
  noComments: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  noCommentsText: {
    marginBottom: 10,
  },
  input: {
    borderColor: theme.colors.textDark,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginTop: 12
  },
});
