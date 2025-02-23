import { StyleSheet, Text, TextStyle } from 'react-native';
import { theme } from '@/style/theme';

interface ParagraphProps {
  children: React.ReactNode;
  variant?: "lg" | "sm" | "xs";
  style?: TextStyle;
}

const Paragraph = (props: ParagraphProps) => {
  const { children, variant, style } = props;

  const getFontSize = (variant: ParagraphProps["variant"]) => {
    switch (variant) {
      case "lg":
        return theme.fontSize.lg;
      case "sm":
        return theme.fontSize.sm;
      case "xs":
        return theme.fontSize.xs;
      default:
        return theme.fontSize.base;
    }
  };

  return (
      <Text style={
          [styles.textStyle,
          {fontSize: getFontSize(variant)},
          style
          ]}>
      {children}
    </Text>
  );
};

export default Paragraph;

const styles = StyleSheet.create({
  textStyle: {
    color: theme.colors.text,
    fontWeight: theme.fontWeight.medium,
    fontFamily: theme.fontFamily.primary
  }
});
