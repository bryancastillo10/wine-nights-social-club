import { StyleSheet, Image } from 'react-native';

import { theme } from '@/style/theme';
import { hp } from '@/utils/dimensions';

interface AvatarProps {
    source?: string;
    size?: number;
    rounded?: number;
}

const Avatar = (props: AvatarProps) => {
  const {
        source,
        size = hp(4.5),
        rounded = theme.radius.md
    } = props;
     
  const imageSource = "../../assets/images/defaultuser.png";
  return (
      <Image
          source={require(imageSource) || source}
          style={[
            styles.avatar,
            {
              width: size,
              height: size,
              borderRadius: rounded
            }
          ]}
      />
  )
}

export default Avatar

const styles = StyleSheet.create({
    avatar: {
        borderCurve: 'continuous',
        borderColor: theme.colors.gray,
        borderWidth:0.5,
    }
})