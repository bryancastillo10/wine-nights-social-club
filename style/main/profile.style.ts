import { StyleSheet } from "react-native";

import { theme } from "@/style/theme";
import { hp } from "@/utils/dimensions";

export const viewProfileStyle = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems:'center'
    },
    avatarContainer: {
        height: hp(12),
        width: hp(12),
        alignSelf:'center'
    },
    editIcon: {
        position: 'absolute',
        bottom: 0,
        right: -12,
        padding: 7,
        borderRadius: 50,
        backgroundColor: '#F4F3F2',
        shadowColor: theme.colors.textLight,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 7
    },
    nameField: {
        marginTop: 30,
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    otherInfoField: {
        marginTop: 20,
        flexDirection: 'column',
        gap:4
    }
});