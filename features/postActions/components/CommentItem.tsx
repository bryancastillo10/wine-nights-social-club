import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Paragraph } from '@/components/typography';
import { INestedComments } from '@/features/postActions/api/interface';
import { theme } from '@/style/theme';

interface CommentItemProps {
  comment: INestedComments;
  level?: number;
}

const CommentItem = ({ comment, level = 0 }: CommentItemProps) => {
  const [input, setInput] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const inputRef = useRef<TextInput>(null);

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
          <Paragraph>{comment.textComment}</Paragraph>
        )}
        <View style={styles.actionContainer}>
          {editMode ? (
            <>
              <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
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
                onPress={() => setShowReplyInput(!showReplyInput)}>
                <Paragraph style={styles.actionText}>
                  {showReplyInput ? 'CANCEL REPLY' : 'REPLY'}
                </Paragraph>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => {
                  setEditMode(true);
                  setInput(comment.textComment);
                }}>
                <Paragraph style={styles.actionText}>EDIT</Paragraph>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
                <Paragraph style={styles.actionText}>DELETE</Paragraph>
              </TouchableOpacity>
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
          <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
            <Paragraph style={styles.actionText}>REPLY</Paragraph>
          </TouchableOpacity>
        </View>
      )}
      
      {comment.replies.map((reply) => (
        <CommentItem key={reply.commentId} comment={reply} level={level + 1 } />
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
    backgroundColor: 'rgba(211,211,211,0.88)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 300,
    borderRadius: 5,
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
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 5,
    marginTop: 5,
  },
  textInput: {
    flex: 1,
    padding: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    backgroundColor: theme.colors.textLight,
  },
});
