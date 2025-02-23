import { StyleSheet } from "react-native"

import { wp } from "@/utils/dimensions";

export const authStyle = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        paddingHorizontal: wp(5)
    },
    form: {
        gap: 20
    },
    biometrics:{
        alignItems: 'center',
        marginBottom:5,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    }
})