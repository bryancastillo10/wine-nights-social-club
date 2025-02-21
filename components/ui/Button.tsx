import { StyleSheet, Text, Pressable, View } from 'react-native'

import Loading from '@/components/common/Loading';

import { hp } from '@/utils/dimensions'
import { theme } from '@/style/theme';

interface ButtonProps {
    buttonStyle?: { [x: string]: number | string };
    textStyle?: { [x: string]: number | string}
    text: string;
    onPress?: () => void;
    loading?: boolean;
    hasShadow?: boolean;
}

const Button = (props: ButtonProps) => {
    const { buttonStyle, onPress, textStyle, hasShadow, text, loading } = props;
    
    if (loading) {
        return (
            <View style={[styles.button, buttonStyle,
            {
                backgroundColor: '#F4F3F2'
            }
            ]}>
                <Loading/>
            </View>)
    }
    return (
    <Pressable
        onPress={onPress}
        style={[styles.button, buttonStyle, hasShadow && styles.shadowStyle]}
    >
        <Text style={[styles.text, textStyle]}>
            {text}
        </Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        height: hp(6.6),
        justifyContent: 'center',
        alignItems: 'center'
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