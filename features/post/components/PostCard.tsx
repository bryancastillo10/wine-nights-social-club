import { useState } from 'react';
import { Pressable, TouchableOpacity, View } from 'react-native'

import Avatar from '@/components/ui/Avatar';
import { Paragraph } from '@/components/typography';

import PostDetails from '@/features/post/components/PostDetails';
import ActionRow from '@/features/postActions/components/ActionRow';

import Icon from '@/assets/icons';
import { cardStyles } from '@/style/main/postCard.style';
import { hp } from '@/utils/dimensions';

const PostCard = () => {
const isSelfPost = true;

const [isMoreOpen, setIsMoreOpen] = useState<boolean>(false);
const toggleMoreOpen = () => {
    setIsMoreOpen(!isMoreOpen);
}
    
 return (
    <View style={cardStyles.postContainer}>
        <View style={cardStyles.avatarSection}>
            <View style={{flexDirection:'row', gap:12 }}>
                <Avatar />
                <View>
                    <Paragraph
                        variant="lg"
                        style={cardStyles.userText}
                    >
                        Bryan
                    </Paragraph>
                    <View style={cardStyles.timePosted}>
                        <Paragraph style={{marginTop:2}}>1 hr</Paragraph>        
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
                    <TouchableOpacity>
                        <Paragraph>Edit</Paragraph>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Paragraph>Delete</Paragraph>
                    </TouchableOpacity>
                </View>}
        </View>
          <PostDetails source="preview.coffee" mediaType="image" />
        <ActionRow/>
    </View>
  )
}

export default PostCard;
 