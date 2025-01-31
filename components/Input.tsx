import { StyleSheet, TextInput, TextInputProps, View, ViewStyle } from 'react-native'

import { theme } from '@/constants/theme';
import { hp } from '@/utils/common';

export interface IInput extends TextInputProps {
    containerStyle?: ViewStyle;
    icon?: React.ReactNode;
    inputRef?: React.RefObject<TextInput>;
}

const Input = ({
        containerStyle,
        icon: Icon,
        inputRef,
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
            placeholderTextColor={theme.colors.textLight}
            ref={inputRef}
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
    }
})