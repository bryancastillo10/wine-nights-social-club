import { StyleSheet, View } from 'react-native'
import { Paragraph } from '@/components/typography'
import { Avatar } from '@/components/ui'


import Icon from '@/assets/icons'
import { timeElapsed } from '@/utils/formatElapsedTime'
import { wp } from '@/utils/dimensions'
import { getUserById } from '@/utils/getUserById'

interface CommentDetailsProps {
    userId: string;
    createdAt: string;
    textComment: string;
};

const CommentDetails = (props: CommentDetailsProps) => {
    const { userId, createdAt, textComment } = props;
    const userComment = getUserById(userId);
    return (
        <>
            <View style={styles.commentHeader}>
              <View style={styles.userInfo}>
                <Avatar source={userComment?.profilePic} />
                <Paragraph variant="lg">{userComment?.username}</Paragraph>
              </View>
              <View style={styles.time}>
                <Icon name="time" size={20} />
                <Paragraph variant="sm">{timeElapsed(createdAt)}</Paragraph>
              </View>
            </View>
            <Paragraph>{textComment}</Paragraph>
        </>
  )
}

export default CommentDetails

const styles = StyleSheet.create({
     commentHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "space-between",
    marginRight: wp(2)
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: wp(4)
  },
  time: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    gap: 4
  },
})