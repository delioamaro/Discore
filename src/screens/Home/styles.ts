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
        marginBottom: 8,
        paddingTop: 32,
        paddingHorizontal: 40,
    },
    heroText: {
        fontSize: 14,
        fontWeight: "300",
        textAlign: "center",
        color: "#F2F2F4",
        marginBottom: 24,
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
    albumAvaliados: {
        
    },
    comoAvaliar: {
        flexDirection: "column",
        paddingVertical: 4
    },
    title: {
        fontSize: 20,
        fontWeight: "900", 
        color: "#F2F2F4",
        marginBottom: 10,
        paddingHorizontal: 6,
        marginTop: 16
    },
    subTitle: {
        color: "#F2F2F4",
        fontSize: 12,
        paddingBottom: 8,
        marginBottom: 5, 
        paddingHorizontal: 6,
    },
    dicasContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 4,
        paddingHorizontal: 10,
    },
    infoContainer: {
        flex: 1,
        flexDirection: "column",
        paddingVertical: 4,
        paddingHorizontal: 10,
        flexShrink: 1,
    },
    titleInfo: {
        color: '#F2F2F4',   
        fontSize: 16,
        fontWeight: '600',
        flexWrap: "wrap"

    },
    textInfo: {
        color: "#F2F2F4",
        fontSize: 12
    },
    vamosAvaliar: {
        flexDirection: "column",
        paddingVertical: 4
    },
    title2: {
        fontSize: 18,
        fontWeight: "700", 
        color: "#F2F2F4",
        marginBottom: 10,
        paddingHorizontal: 6,
        marginTop: 16
    },
    notasTitle: {
        color: '#F2F2F4',   
        fontSize: 16,
        fontWeight: '700',
        paddingHorizontal: 6,
    },
    starContainer: {
        flexDirection: "row",
        paddingVertical: 8,
        alignItems: "center",
        borderBottomWidth: 2, 
        borderBottomColor: "#2C2C31",
        justifyContent: "center"
    },
    star: {
        flexDirection: "column",
        paddingVertical: 4,
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    nota: {
        color: '#F2F2F4',   
        fontSize: 12,
        fontWeight: '500',
    },
    redesContainer: {
        flexDirection: "column",
        paddingVertical: 4
    },
    redesSociais: {
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 10, 
        gap: 60
    },
    email: {
        fontSize: 20,
        fontWeight: "700", 
        color: "#27C6E5",
        marginBottom: 10,
        paddingHorizontal: 6,
    }
})