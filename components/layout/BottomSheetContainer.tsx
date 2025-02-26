import { StyleSheet, Modal, Pressable } from 'react-native'
import { theme } from '@/style/theme';

interface BottomSheetContainerProps {
    isOpen: boolean;
    toggleOpen: () => void;
    children: React.ReactNode;
}

const BottomSheetContainer = (props: BottomSheetContainerProps) => {
    const { children, isOpen, toggleOpen } = props
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
    }
})