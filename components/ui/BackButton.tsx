import Icon from "@/assets/icons";

import { theme } from "@/style/theme";
import { useRouter } from "expo-router";
import { StyleSheet, Pressable } from "react-native";

interface BackButtonProps{
    size?: number;
}

const BackButton = ({ size = 28 }: BackButtonProps) => {
    const router = useRouter();
    return (
        <Pressable
            onPress={() => router.back()}
            style={styles.button}
        >
            <Icon
                name="arrowLeft"
                strokeWidth={2.5}
                size={size}
                color={theme.colors.text}
            />
        </Pressable>
    )
};

export default BackButton;

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-start',
        backgroundColor: theme.colors.snow,
        padding: 8,
        marginLeft:4,
        borderRadius: theme.radius.md
    }
});