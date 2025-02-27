import { StyleSheet, View } from 'react-native'

import { IComments } from '@/features/postActions/api/interface'
import { Paragraph } from '@/components/typography'

interface CommentSectionProps extends IComments {}

const CommentSection = ({
    parentCommentId,
    textComment,
    userId,
    createdAt
  }: CommentSectionProps) => {
  return (
    <View style={styles.container}>
      
        <Paragraph>{textComment}</Paragraph>
    </View>
  )
}

export default CommentSection

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})