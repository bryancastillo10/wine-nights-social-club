import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IScreenWrapper {
    children: React.ReactNode;
    bg?: string;
}

const ScreenWrapper = ({ children, bg = "#F4F3F2" }: IScreenWrapper) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : 30;
  return (
    <View
        style={{
            flex: 1,
            paddingTop,
            backgroundColor: bg
        }}
      >
      {children}
    </View>
  )
}

export default ScreenWrapper