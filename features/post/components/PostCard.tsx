import { useState } from 'react';
import { Pressable, TouchableOpacity, View } from 'react-native'

import Avatar from '@/components/ui/Avatar';
import { Paragraph } from '@/components/typography';

import PostDetails from '@/features/post/components/PostDetails';
import ActionRow from '@/features/postActions/components/ActionRow';

import Icon from '@/assets/icons';
import { cardStyles } from '@/style/main/postCard.style';
import { hp } from '@/utils/dimensions';

import { PostCardProps } from '@/features/post/types/postCardProps';
import { timeElapsed } from '@/utils/formatElapsedTime';

import BottomSheetContainer from '@/components/layout/BottomSheetContainer';
import CommentSection from '@/features/postActions/components/CommentSection';
    
const PostCard = (props: PostCardProps) => {
    const {
        user,
        post,
        comments,
        isSelfPost,
        likesCount,
        commentsCount,
        sharesCount,
        handleEdit,
        handleDelete
    } = props;
    
    const [isMoreOpen, setIsMoreOpen] = useState<boolean>(false);
    const [isCommentOpen, setIsCommentOpen] = useState<boolean>(false);
    
    const toggleMoreOpen = () => { setIsMoreOpen(!isMoreOpen); };
    const toggleIsCommentOpen = () => { setIsCommentOpen(!isCommentOpen) };
  
    return (
        <View style={cardStyles.postContainer}>
            <View style={cardStyles.avatarSection}>
                <View style={{flexDirection:'row', gap:12 }}>
                    <Avatar source={user.profilePic} />
                    <View>
                        <Paragraph
                            variant="lg"
                            style={cardStyles.userText}
                        >
                            {user.username}
                        </Paragraph>
                        <View style={cardStyles.timePosted}>
                            <Paragraph style={{ marginTop: 2 }}>
                                {timeElapsed(post.createdAt)}
                            </Paragraph>        
                            <Icon name="user" size={hp(2)} />
                        </View>
                    </View>
                </View>
                {isSelfPost &&
                    (<Pressable onPress={toggleMoreOpen}><Icon
                    name="threeDotHorizontal"
                    /></Pressable>)}
                
                {isMoreOpen &&
                    <View style={cardStyles.moreAction}>
                        <TouchableOpacity onPress={handleEdit}>
                            <Paragraph>Edit</Paragraph>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleDelete}>
                            <Paragraph>Delete</Paragraph>
                        </TouchableOpacity>
                    </View>}
            </View>
            <PostDetails
                source={post.mediaUrl}
                mediaType={post.mediaType}
                content={post.content}
            />
            <ActionRow
                likesCount={likesCount}
                commentsCount={commentsCount}
                sharesCount={sharesCount}
                openComment={toggleIsCommentOpen}
            />
            
            {isCommentOpen && (
            <BottomSheetContainer
                sheetTitle='Comments'
                isOpen={isCommentOpen}
                toggleOpen={toggleIsCommentOpen}
            >     
            {comments.map((comm) => (
                <CommentSection
                    key={comm.commentId}
                    {...comm}
                />
            ))}
            </BottomSheetContainer>
            )}
        </View>
  )
}

export default PostCard;
 