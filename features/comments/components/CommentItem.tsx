import { useState, useRef, useEffect } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { INestedComments } from '@/features/comments/api/interface';
import { Paragraph } from '@/components/typography';
import { theme } from '@/style/theme';
import Icon from '@/assets/icons';
import CommentDetails from './CommentHeader';

interface CommentItemProps {
  comment: INestedComments;
  level?: number;
}

const CommentItem = ({ comment, level = 0 }: CommentItemProps) => {
  const loggedInUserId = "1001";
  
  const [input, setInput] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const isSelfComment = comment.userId === loggedInUserId;

  useEffect(() => {
    if (editMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editMode]);

  return (
     <View style={[styles.container, { marginLeft: level > 0 ? 20 : 0 }]}>
      <View style={styles.commentContainer}>
        {editMode ? (
          <TextInput
            ref={inputRef}
            style={styles.editableText}
            value={input || comment.textComment}
            onChangeText={setInput}
            autoFocus
          />
        ) : (
          <CommentDetails
            userId={comment.userId}
            createdAt={comment.createdAt}
            textComment={comment.textComment}              
          />
        )}
        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => setShowReplyInput(!showReplyInput)}>
            <Paragraph style={styles.actionText}>
              {showReplyInput ? 'cancel reply' : 'reply'}
            </Paragraph>
          </TouchableOpacity>

          {isSelfComment && (
            <>
              {editMode ? (
                <>
                  <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => {setEditMode(false);}}>
                    <Paragraph style={styles.actionText}>SAVE</Paragraph>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => {
                      setInput(comment.textComment);
                      setEditMode(false);
                    }}>
                    <Paragraph style={styles.actionText}>CANCEL</Paragraph>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => {
                      setEditMode(true);
                      setInput(comment.textComment);
                    }}>
                    <Paragraph style={styles.actionText}>
                      <Icon name="edit" size={16} color={theme.colors.snow} />
                    </Paragraph>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => {}}>
                    <Paragraph style={styles.actionText}>
                      <Icon name="delete" size={16} color={theme.colors.snow} />
                    </Paragraph>
                  </TouchableOpacity>
                </>
              )}
            </>
          )}
        </View>
      </View>

      {showReplyInput && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={input}
            onChangeText={setInput}
            placeholder="type reply..."
            autoFocus
          />
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => { }}>
            <View style={styles.replyTab}>
              <Icon
                name="arrowDown"
                size={16}
                color={theme.colors.snow}
              />
              <Paragraph style={styles.actionText}>
                  reply
              </Paragraph>
            </View>
          </TouchableOpacity>
        </View>
      )}

      {comment.replies.map((reply) => (
        <CommentItem
          key={reply.commentId}
          comment={reply}
          level={level + 1}
        />
      ))}
    </View>

     
  );
};

export default CommentItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  commentContainer: {
    backgroundColor: theme.colors.textLight,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 300,
    borderRadius: 5,
  },
  replyTab: {
    display: "flex",
    flexDirection: "row",
    gap:2
  },
  editableText: {
    fontSize: 14,
    borderWidth: 1,
    borderColor: theme.colors.gray,
    padding: 5,
    borderRadius: 5,
    backgroundColor: theme.colors.snow,
  },
  actionContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  actionButton: {
    padding: 5,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    marginRight: 5,
  },
  actionText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.snow,
    letterSpacing: 0.75,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 4,
    marginBottom: 5,
    marginTop: 5,
  },
  textInput: {
    flex: 1,
    padding: 6,
    borderWidth: 1,
    borderColor: theme.colors.dark,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.snow,
  },
});
