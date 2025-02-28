import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IComments } from '@/features/postActions/api/interface';
import { Paragraph } from '@/components/typography';
import { getUserById } from '@/utils/getUserById';
import { Avatar } from '@/components/ui';
import { theme } from '@/style/theme';
import { timeElapsed } from '@/utils/formatElapsedTime';
import { hp, wp } from '@/utils/dimensions';
import Icon from '@/assets/icons';

interface CommentItemProps extends IComments {
  allComments: IComments[];
  level?: number;
}

const CommentItem = ({
  commentId,
  textComment,
  userId,
  createdAt,
  allComments,
  level = 0,
}: CommentItemProps) => {
  const user = getUserById(userId);

  const nestedComments = allComments.filter(
    (comm) => comm.parentCommentId === commentId
  );

  const dynamicStyle = level >= 1 ? { marginLeft: hp(2) } : {};

  return (
    <View style={[styles.container, dynamicStyle]}>
      <View style={styles.itemHeader}>
        <View style={styles.userInfo}>
          {user && <Avatar source={user.profilePic} />}
          <Paragraph 
            variant="lg"
            style={{ fontWeight: theme.fontWeight.bold, letterSpacing: 0.75 }}
          >
            {user?.username}
          </Paragraph>
        </View>
        <View style={styles.time}>
          <Icon size={18} name="time" />
          <Paragraph variant="sm">
            {timeElapsed(createdAt)}
          </Paragraph>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Paragraph>{textComment}</Paragraph>
      </View>
      
      {nestedComments.map((nested) => (
        <CommentItem
          key={nested.commentId}
          {...nested}
          allComments={allComments}
          level={level + 1}
        />
      ))}
    </View>
  );
};

export default CommentItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "column",
  },
  userInfo: {
    flexDirection: "row",
    alignItems:"center",
    gap: hp(1),
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: "100%"
  },
  textContainer: {
    marginTop: hp(1.5),
    marginLeft: wp(1),
    flex: 1,
  },
  time: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"flex-end",
    alignItems:"center",
    gap: wp(1.5)
  },
});
