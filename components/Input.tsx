import { StyleSheet, TextInput, TextInputProps, View, ViewStyle } from 'react-native'

import { theme } from '@/constants/theme';
import { hp } from '@/utils/common';

export interface IInput extends TextInputProps {
    containerStyle?: ViewStyle;
    icon?: React.ReactNode;
    value: string;
    onChangeText: (value: string) => void;
}

const Input = ({
        containerStyle,
        icon: Icon,
        value,
        onChangeText,
        ...props
    }: IInput) => {
  return (
    <View 
        style={[
            styles.container, 
            containerStyle]}
    >
        {Icon}
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={theme.colors.textLight}
            {...props}
        />  
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        height: hp(7),
        borderWidth: 0.4,
        borderColor: theme.colors.text,
        borderRadius: theme.radius.xxl,
        borderCurve: 'continuous',
        paddingHorizontal: 18,
        gap:12
    },
    input: {
        flex: 1,
        height:hp(4.5),
    }
})