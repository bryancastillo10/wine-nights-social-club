import { StyleSheet, View, Text, Pressable } from 'react-native';

import { hp } from '@/utils/common';
import { theme } from '@/constants/theme';
import Loading from './Loading';

interface ICustomButton {
    buttonStyle: { [x: string]: number | string };
    textStyle?: { [x: string]: number | string}
    title: string;
    onPress?: () => void;
    loading?: boolean;
    hasShadow?: boolean;
}

const CustomButton = ({
    buttonStyle,
    textStyle,
    title = "",
    onPress = () => { },
    loading = false,
    hasShadow = true
}: ICustomButton) => { 
    if (loading) {
        return (
            <View style={[styles.button, buttonStyle,
            {
                backgroundColor: 'white'
            }
            ]}>
                <Loading/>
            </View>)
    }
    return (
        <Pressable
            onPress={onPress}
            style={[
            styles.button,
            buttonStyle,
            hasShadow && styles.shadowStyle
        ]}
    >
        <Text
            style={[styles.text, textStyle]}
        >
          {title}
        </Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        height: hp(6.6),
        justifyContent: 'center',
        alignItems: 'center',
        borderCurve: 'continuous',
        borderRadius: theme.radius.xl
    },
    shadowStyle: {
      shadowColor: theme.colors.dark,
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation:4,
    },
    text: {
        fontSize: hp(2.5),
        color: "#f4f3f2",
        fontWeight: theme.fonts.bold
    },
})