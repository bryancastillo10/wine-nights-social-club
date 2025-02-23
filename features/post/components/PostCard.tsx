import { StyleSheet,Text, View } from 'react-native'

import Avatar from '@/components/ui/Avatar';

import Icon from '@/assets/icons';
import { theme } from '@/style/theme';

import PostDetails from '@/features/post/components/PostDetails';
import { hp, wp } from '@/utils/dimensions';

const PostCard = () => {
  return (
    <View style={styles.postContainer}>
        <View style={styles.avatarSection}>
            <Avatar />
              <View>
               <Text style={styles.userText}>Bryan</Text>
                <View style={styles.timePosted}>
                    <Text style={styles.timePostedText}>1 hr</Text>        
                    <Icon name="user" size={hp(2)} />
                </View>
            </View>  
        </View>
        <PostDetails/>
        <View style={styles.likeCommentSection}>
            <Text>Like & Comment Section</Text>
        </View>
    </View>
  )
}

export default PostCard;

const styles = StyleSheet.create({
        postContainer: {
        flex:1,
        borderWidth: 2,
        borderColor: theme.colors.gray,
        padding: wp(4.5)
    },
    avatarSection: {
        flexDirection: 'row',
        gap:12
    },
    userText: {
        fontWeight: theme.fonts.bold,
        fontFamily: theme.fontFamily.primary,
        letterSpacing:0.75,
        fontSize:16,
    },
    timePosted: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 6
    },
    timePostedText: {
        fontSize: hp(1.5),
        marginTop:2,
        fontFamily: theme.fontFamily.primary,
        color: theme.colors.text,
        letterSpacing: 0.75       
    },
    likeCommentSection: {
        flexDirection: 'row',
        gap:8
    }
})

