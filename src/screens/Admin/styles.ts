import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0B0B0F"
    },
    perfilContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 30,
        paddingHorizontal: 60,
        borderBottomWidth: 2, 
        borderBottomColor: "#2C2C31",
    },
    usuario: {
        flexDirection: "column",
        alignItems: "center",
    },
    nomeUsuario: {
        color: "#B8B8BA",   
        fontSize: 24,
        fontWeight: '600',
        paddingTop: 10,
    },
    album: {
        flexDirection: "column",
        backgroundColor: "#27C6E5",
        padding: 8,
        borderRadius: 8
    },
    albunsAvaliados:{
        color: "#2C2C31",
        fontSize: 14,
        fontWeight: "600",
        paddingBottom: 8
    },
    numAvaliados: {
        color: "#2C2C31",
        fontSize: 24,
        fontWeight: "900"
    },
    ultimosAlbuns: {
        flexDirection: "column",
        paddingBottom: 4,
        paddingHorizontal: 8,
        paddingTop: 18,
        borderBottomWidth: 2, 
        borderBottomColor: "#2C2C31",
    },
    albunsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 24,
        paddingHorizontal: 14
    },
    title: {
        fontSize: 18,
        fontWeight: "600", 
        color: "#F2F2F4",
        paddingBottom: 20,
    },
    minhasAvaliacoes: {
        flexDirection: "column",
        paddingBottom: 4,
        paddingHorizontal: 8,
        paddingTop: 18,
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 18,
        marginHorizontal: 10 
    },
    titleGer: {
        color: "#F2F2F4", 
        fontSize: 20,
        fontWeight: "700",
    },
    inputContainer: {
        marginHorizontal: 10   
    },
    add: {
        justifyContent: "center",
        backgroundColor: "#E91E63",
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    add2: {
        justifyContent: "center",
        backgroundColor: "#27C6E5",
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    add3: {
        justifyContent: "center",
        backgroundColor: "#6A1BB9",
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    tableTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#2C2C31",
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginTop: 24,
        marginHorizontal: 10 
        
    },
    titleTable: {
        color: "#F2F2F4", 
        fontSize: 18,
        fontWeight: "700",
    },
    albumContainer: {
        flexDirection: "column",
        marginHorizontal: 10 
    },
    perfilContainer2: {
        flexDirection: "column",
        marginHorizontal: 10 
    }    
})