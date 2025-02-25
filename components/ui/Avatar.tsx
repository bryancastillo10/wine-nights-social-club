import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

import { theme } from '@/style/theme';
import { hp } from '@/utils/dimensions';
import { getImageSource } from '@/utils/getImageSource';

interface AvatarProps {
    source?: string;
    size?: number;
    rounded?: number;
}

const Avatar = (props: AvatarProps) => {
  const {
        source,
        size = hp(4.5),
        rounded = theme.radius.lg
    } = props;
     
  const imageSource = source ? getImageSource(source) : 
  "../../assets/images/defaultuser.png";
  return (
      <Image
          source={imageSource as ImageSourcePropType}
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