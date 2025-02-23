import { theme } from '@/style/theme'
import { hp } from '@/utils/dimensions'
import { StyleSheet, Text, View } from 'react-native'


const PostDetails = () => {
    return (
    <View style={{padding: 4}}>
        <View>
            <Text style={styles.postText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio harum
                    expedita ad ipsa voluptates sit atque rerum nemo dolores!</Text>
            </View>
        <View>
            <Text>Media Section</Text>
        </View>
    </View>
  )
}

export default PostDetails

const styles = StyleSheet.create({
    postText: {
        fontSize: hp(1.75),
        fontFamily: theme.fontFamily.primary,
        color: theme.colors.text,
        textAlign:'justify'
    }
})