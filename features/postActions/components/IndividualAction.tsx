import { StyleSheet, View, Pressable } from 'react-native'

import Icon, { icons } from '@/assets/icons'

import { Paragraph } from '@/components/typography'
import { theme } from '@/style/theme';

interface PostActionProps {
  icon: keyof typeof icons;
  onPress?: () => void;
  count?: number;
};

const IndividualAction = ({icon,onPress,count}: PostActionProps) => {
  return (
    <View style={styles.actionContainer}>
      <Pressable onPress={onPress}>
        <Icon name={icon} size={26} />
      </Pressable>
      <Paragraph
        variant="lg"
        style={styles.count}
      >{count || "  "}
      </Paragraph>   
    </View>
  )
}

export default IndividualAction;

const styles = StyleSheet.create({
    actionContainer: {
    width: 60,
    flexDirection: 'row',
    gap: 3
    },
    count: {
      fontWeight: theme.fontWeight.bold,
      
    }
})