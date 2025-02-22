import { StyleSheet } from "react-native";
import { theme } from "@/style/theme";
import { wp, hp } from "@/utils/dimensions";

export const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: wp(4)
    },
    welcomeImage: {
        height: hp(30),
        width: wp(100)
    },
    title: {
        textAlign: 'center',
        color: theme.colors.text,
        fontWeight: theme.fonts.medium,
        fontSize: hp(4),
        letterSpacing:1.5,
        fontFamily: theme.fontFamily.secondary
    },
    caption: {
        textAlign: 'center',
        paddingHorizontal: wp(6),
        fontFamily: theme.fontFamily.primary,
        fontSize: hp(1.7),
        color: theme.colors.text,
    },
    footer: {
        gap: 30,
        width: '100%'
    },
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: theme.fontFamily.primary,
        paddingBottom: hp(6),
        gap: 5,
    },
    loginText: {
        textAlign: 'center',
        color: theme.colors.text,
        fontSize: hp(1.7)
    }
});