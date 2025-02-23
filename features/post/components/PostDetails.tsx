import { StyleSheet, View, Image } from 'react-native'

import { Paragraph } from '@/components/typography'
import VideoScreen from '@/components/ui/VideoScreen';

import { theme } from '@/style/theme'
import { getImageSource } from '@/utils/getImageSource';

interface PostDetailsProps {
    mediaType?: "image" | "video" | null;
    source?: string;
}

const PostDetails = ({
    mediaType = null,
    source
}: PostDetailsProps) => {
    
    const NoMediaAvailable = (
        <Paragraph>No Image/Video Available</Paragraph>
    );

    const renderMedia = (mediaType: PostDetailsProps["mediaType"]) => {
        switch (mediaType) {
            case "image":
                return source ? <Image source={getImageSource(source)}
                    resizeMode="contain"
                    style={styles.imagePost}
                /> : NoMediaAvailable;
            case "video":
                return source ? <VideoScreen source={source} />
                : NoMediaAvailable;
            default:
                return null;
        }
    };
   
    return (
    <View style={{padding: 4}}>
        <View>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio harum
                    expedita ad ipsa voluptates sit atque rerum nemo dolores!
            </Paragraph>
        </View>
        <View style={styles.mediaContainer}>
            {renderMedia(mediaType)}
        </View>
    </View>
  )
}

export default PostDetails

const styles = StyleSheet.create({
    mediaContainer: {
        borderRadius: theme.radius.md
    },
    imagePost: {
        width: 360,
        height: 250,
        alignSelf: 'center'
    }
})