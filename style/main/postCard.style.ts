import { StyleSheet } from "react-native";
import { theme } from "@/style/theme";
import { wp } from "@/utils/dimensions";

export const cardStyles = StyleSheet.create({
    postContainer: {
        flex:1,
        borderWidth: 0.5,
        borderColor: theme.colors.gray,
        padding: wp(4.5)
    },
    avatarSection: {
        flexDirection: 'row',
        justifyContent:'space-between',
        gap:12
    },
    userText: {
        fontWeight: theme.fontWeight.bold,
        letterSpacing:1.5
    },
    timePosted: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 6
    },
    moreAction: {
        position: 'absolute',
        gap: 6,
        zIndex: 50,
        backgroundColor: theme.colors.snow,
        borderWidth: 1,
        borderRadius: theme.radius.sm,
        padding: wp(2),
        top:20,
        right: -5
    }
})