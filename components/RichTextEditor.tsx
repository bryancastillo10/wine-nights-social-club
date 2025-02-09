import { theme } from '@/constants/theme';
import { StyleSheet, View, Text } from 'react-native'
import { RichEditor, RichToolbar, actions } from "react-native-pell-rich-editor";
interface IRichTextEditor {
  editorRef: React.MutableRefObject<null | RichEditor>;
  onChangeBodyText: (body: string) => void; 
};

const RichTextEditor = (props: IRichTextEditor) => {
  const { editorRef, onChangeBodyText } = props;
  
  const actionsConfig = [
    actions.setStrikethrough,
    actions.removeFormat,
    actions.setBold,
    actions.setItalic,
    actions.setUnderline,
    actions.insertBulletsList,
    actions.blockquote,
    actions.alignLeft,
    actions.alignCenter,
    actions.alignRight,
    actions.code,
    actions.heading1,
    actions.heading3
  ];
  
  
  const iconMap = {
    [actions.heading1]: (tintColor: string) => <Text style={{ color: tintColor }}>H1</Text>,
    [actions.heading3]: (tintColor: string) => <Text style={{ color: tintColor }}>H3</Text>
  };
  
  return (
    <View style={styles.container}>
      <RichToolbar
        actions={actionsConfig}
        style={styles.richToolBar}
        flatContainerStyle={styles.flatStyle}
        editor={editorRef}
        disabled={false}
        iconMap={iconMap}
        selectedIconTint={theme.colors.primary}
      />
      <RichEditor
        ref={editorRef}
        containerStyle={styles.richEditor}
        editorStyle={styles.content}
        placeholder="What's on your mind?"
        onChange={onChangeBodyText}
      />
    </View>
  )
}

export default RichTextEditor

const styles = StyleSheet.create({
  container: {
    minHeight: 285
  },
  richToolBar: {
    backgroundColor: theme.colors.gray,
    borderTopLeftRadius: theme.radius.xl,
    borderTopRightRadius: theme.radius.xl,
    borderColor: theme.colors.gray,
    borderWidth: 1.5,
    borderBottomWidth: 0,  
  },
  richEditor: {
    minHeight: 260,
    padding:5,
    borderWidth: 1.5,
    borderTopWidth: 0,
    borderBottomLeftRadius: theme.radius.xl,
    borderBottomRightRadius: theme.radius.xl,
    borderColor: theme.colors.gray,
    borderCurve:'continuous'
  },
  content: {
    color: theme.colors.textDark,
  },
  flatStyle: {
    paddingHorizontal: 8,
    gap: 3
  }
});