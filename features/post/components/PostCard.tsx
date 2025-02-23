import { StyleSheet, View } from 'react-native'

import Avatar from '@/components/ui/Avatar';
import { Paragraph } from '@/components/typography';
import PostDetails from '@/features/post/components/PostDetails';

import Icon from '@/assets/icons';
import { theme } from '@/style/theme';
import { hp, wp } from '@/utils/dimensions';

const PostCard = () => {
  return (
    <View style={styles.postContainer}>
        <View style={styles.avatarSection}>
            <Avatar />
              <View>
                  <Paragraph
                      variant="lg"
                      style={styles.userText}
                  >
                      Bryan
                  </Paragraph>
                <View style={styles.timePosted}>
                    <Paragraph style={{marginTop:2}}>1 hr</Paragraph>        
                    <Icon name="user" size={hp(2)} />
                </View>
            </View>  
        </View>
        <PostDetails/>
        <View style={styles.likeCommentSection}>
            <Paragraph>Likes & Comments Here</Paragraph>
        </View>
    </View>
  )
}

export default PostCard;

const styles = StyleSheet.create({
        postContainer: {
        flex:1,
        borderWidth: 0.5,
        borderColor: theme.colors.gray,
        padding: wp(4.5)
    },
    avatarSection: {
        flexDirection: 'row',
        gap:12
    },
    userText: {
        fontWeight: theme.fontWeight.bold,
        letterSpacing:1.5
    },
    timePosted: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 6
    },
    likeCommentSection: {
        flexDirection: 'row',
        gap:8
    }
})

