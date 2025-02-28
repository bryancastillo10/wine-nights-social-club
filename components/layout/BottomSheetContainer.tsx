import { StyleSheet, View, Modal, Pressable } from 'react-native'
import { Paragraph } from '@/components/typography';
import { theme } from '@/style/theme';

interface BottomSheetContainerProps {
    isOpen: boolean;
    sheetTitle?: string;
    toggleOpen: () => void;
    children: React.ReactNode;
}

const BottomSheetContainer = (props: BottomSheetContainerProps) => {
    const {
        children,
        isOpen,
        sheetTitle = "Sheet Title",
        toggleOpen } = props
    return (
        <Modal
            visible={isOpen}
            transparent
            animationType="slide"
        >
        <Pressable
            style={styles.overlay}
            onPress={toggleOpen}
            >
            <Pressable style={styles.container} onPress={() => {}}>
               <View style={styles.header}>
                <Paragraph 
                    variant='lg'
                    style={{ letterSpacing: 2, fontWeight: 700}}       
                >
                    {sheetTitle}
                </Paragraph>
                </View>  
                {children}
            </Pressable> 
        </Pressable>
    </Modal>
  )
}

export default BottomSheetContainer

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
    },
    container: {
        width: "100%",
        height: "55%",
        backgroundColor: theme.colors.snow
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: theme.radius.xl,
        padding:4,
        margin:10
    }
})