import { StyleSheet, Text, TextStyle } from 'react-native'

import { theme } from '@/style/theme'

interface TextHeaderProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3";
  style?: TextStyle;
}

const TextHeader = (props: TextHeaderProps) => {
    const { variant, children, style } = props;
    
    const getFontSize = (variant: TextHeaderProps["variant"]) => {
        switch (variant) {
            case "h1": 
                return theme.fontSize.h1
            case "h2":
                return theme.fontSize.h2
            case "h3":
                return theme.fontSize.h3
            default:         
                return theme.fontSize.h4               
        }
    };
    
    return (
    <Text
      style={
          [styles.textStyle,
          {fontSize: getFontSize(variant)},
          style
          ]}
      >
      {children}
    </Text>
  )
}

export default TextHeader

const styles = StyleSheet.create({
    textStyle: {
        color: theme.colors.text,
        fontWeight: theme.fontWeight.medium,
        letterSpacing:1.5,
        fontFamily: theme.fontFamily.secondary
    },
})