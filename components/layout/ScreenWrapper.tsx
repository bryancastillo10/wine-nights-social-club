import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface ScreenWrapperProps{
    children: React.ReactNode;
    bg?: string;
}

const ScreenWrapper = ({children, bg = "#F4F3F2"}: ScreenWrapperProps) => {
    const { top } = useSafeAreaInsets();
    const paddingTop = top > 0 ? top + 5 : 30;
    
    return (
    <View
        style={{
            flex:1,
            paddingTop,
            backgroundColor: bg
        }}
      >
      {children}
    </View>
  )
}

export default ScreenWrapper;
