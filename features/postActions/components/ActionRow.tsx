import { StyleSheet, View } from 'react-native'
import IndividualAction from '@/features/postActions/components/IndividualAction';

export interface ActionRowProps{
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
}

const ActionRow = (props: ActionRowProps) => {
  const { likesCount, commentsCount, sharesCount } = props;
  return (
     <View style={styles.container}>
      <IndividualAction icon="heart" count={likesCount} />
      <IndividualAction icon="comment" count={commentsCount} />
      <IndividualAction icon="share" count={sharesCount} />
    </View>
  )
}

export default ActionRow;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop:8,
        gap: 10
    }
})