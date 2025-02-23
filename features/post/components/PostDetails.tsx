import { Paragraph } from '@/components/typography'
import { theme } from '@/style/theme'
import { hp } from '@/utils/dimensions'
import { StyleSheet, Text, View } from 'react-native'


const PostDetails = () => {
    return (
    <View style={{padding: 4}}>
        <View>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio harum
                    expedita ad ipsa voluptates sit atque rerum nemo dolores!</Paragraph>
            </View>
        <View>
            <Text>Media Section</Text>
        </View>
    </View>
  )
}

export default PostDetails

const styles = StyleSheet.create({
    
})