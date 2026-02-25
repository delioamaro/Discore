import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0B0B0F"
    },
    heroTitle: {
        fontSize: 32,
        fontWeight: "700",
        color: "#F2F2F4",
        textAlign: "center",
        lineHeight: 32,
        marginBottom: 16,
        paddingTop: 32,
        paddingHorizontal: 40,
    },
    heroText: {
        fontSize: 14,
        fontWeight: "300",
        textAlign: "center",
        color: "#F2F2F4",
        marginBottom: 40,
        paddingHorizontal: 40,
    },
    blue: {
        color: "#27C6E5",
    },
    pink: {
        color: "#E91E63",
    },
    purple: {
        color: "#6A1BB9",
    },
    NovosTitle: {
        fontSize: 18,
        fontWeight: "600", 
        color: "#F2F2F4",
        marginBottom: 16,
        paddingHorizontal: 24,
        marginTop: 16
    },
    albunsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 24,
        paddingHorizontal: 24
    }, 
})