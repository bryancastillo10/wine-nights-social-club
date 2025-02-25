import { StyleSheet, View } from 'react-native'
import IndividualAction from '@/features/postActions/components/IndividualAction';

const ActionRow = () => {
  return (
     <View style={styles.container}>
      <IndividualAction icon="heart" count={10} />
      <IndividualAction icon="comment" count={1} />
      <IndividualAction icon="share"/>
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