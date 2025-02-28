import { useRef, useEffect } from 'react';

import { StyleSheet, TextInput, FlatList, View } from 'react-native';
import { Paragraph } from '@/components/typography';

import { theme } from '@/style/theme';
import { wp } from '@/utils/dimensions';

import { IComments } from '@/features/postActions/api/interface';
import CommentItem from '@/features/postActions/components/CommentItem';

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
          keyExtractor={(i) => i.commentId}
          renderItem={({ item }) => (
            <CommentItem {...item} allComments={comments} level={0} />
          )}
        />
      ) : (
        <View style={styles.noComments}>
          <Paragraph style={styles.noCommentsText}>
            No comments yet. Be the first to comment!
          </Paragraph>
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
