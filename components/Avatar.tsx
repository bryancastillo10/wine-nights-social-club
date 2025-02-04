import { StyleSheet} from 'react-native'
import { Image } from 'expo-image'

import { hp } from '@/utils/common';
import { theme } from '@/constants/theme';
import { getUserImgSource } from '@/service/image.service';
interface IAvatar {
    source?: string;
    size?: number;
    rounded?: number;
}

const Avatar = (props: IAvatar) => {
    const {
        source,
        size = hp(4.5),
        rounded = theme.radius.md
    } = props;
    
    const uri = getUserImgSource(source);
    return (
      <Image
          source={uri}
          transition={100}
          style={[styles.avatar,
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
        borderColor: theme.colors.darkLight,
        borderWidth:1,
    }
})