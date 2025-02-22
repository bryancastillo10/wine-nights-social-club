import { StyleSheet } from "react-native"

import { theme } from "@/style/theme";
import { hp, wp } from "@/utils/dimensions";

export const authStyle = StyleSheet.create({
    container: {
        flex: 1,
        gap: 40,
        paddingHorizontal: wp(5)
    },
    welcomeTitle: {
        fontSize: hp(5),
        textAlign:'center',
        fontFamily: theme.fontFamily.secondary,
        fontWeight: theme.fonts.medium,
        letterSpacing: 1.5,
        color: theme.colors.text
    },
    form: {
    gap: 25
    },
    formText: {
        fontSize: hp(1.75),
        fontFamily: theme.fontFamily.primary,
        color: theme.colors.text
    },
    forgotPassword: {
        textAlign: 'right',
        color: theme.colors.text,
        fontWeight: theme.fonts.bold
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    footerText: {
        textAlign: 'center',
        color: theme.colors.text,
        fontSize: hp(1.6)
    }
})