import { StyleSheet, View, Image, ImageSourcePropType } from 'react-native'

import { Paragraph } from '@/components/typography'
import { theme } from '@/style/theme'
import { hp } from '@/utils/dimensions'


interface PostDetailsProps {
    mediaType?: "image" | "video" | null;
    source?: ImageSourcePropType;
}

const PostDetails = ({
    mediaType = null,
    source
    }: PostDetailsProps) => {
    const natureImg = "../../../assets/preview/nature.jpg";

    // const renderMedia = (mediaType: PostDetailsProps["mediaType"]) => {
    //     switch (mediaType) {
    //         case "image":
    //             return <Image
    //                 source={source}
    //                 resizeMode='contain'
    //                 style={{ width: 100, height: 100 }}
    //             />
    //         case "video":
    //             return <Paragraph>Video Available</Paragraph>
    //         default:
    //             return null;
    //     }
    // };
    
    return (
    <View style={{padding: 4}}>
        <View>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio harum
                    expedita ad ipsa voluptates sit atque rerum nemo dolores!
            </Paragraph>
        </View>
        <View style={styles.mediaContainer}>
                <Image
                    source={require(natureImg)}
                    resizeMode="contain"
                    style={styles.imagePost}
                />
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