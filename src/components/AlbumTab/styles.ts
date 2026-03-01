import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    tabContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#0B0B0F",
        alignItems: "center",
        borderRadius: 8,
        borderColor: "#2C2C31",
        borderWidth: 2,
        marginVertical: 14,
        paddingHorizontal: 10,
    },
    tabText: {
        width: 120,
        color: "#F2F2F4", 
        fontSize: 12,
        fontWeight: "900",
    },
    tabText2: {
        width: 90,
        color: "#F2F2F4", 
        fontSize: 12,
        fontWeight: "500",
    },
    iconeContainer: {
        width: 90,
        flexDirection: "row",
        paddingVertical: 10,
        gap: 14
    },
    icone: {
        paddingVertical: 10,
    }
})