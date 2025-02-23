import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Loading from '@/components/common/Loading';

import { wp, hp } from '@/utils/dimensions'
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
    <TouchableOpacity
        onPress={onPress}
        style={[styles.button, buttonStyle, hasShadow && styles.shadowStyle]}
    >
        <Text style={[styles.text, textStyle]}>
            {text}
        </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        height: hp(6.6),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: wp(4),
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
        fontSize: theme.fontSize.h4,
        color: theme.colors.snow,
        fontWeight: theme.fontWeight.bold,
        fontFamily: theme.fontFamily.primary,
        letterSpacing:2
    },
    })