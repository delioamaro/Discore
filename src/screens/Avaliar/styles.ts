import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0B0B0F",   
    },
    title: {
        color: '#F2F2F4',   
        fontSize: 28,
        fontWeight: '900',
        padding: 16,
    },
    avaliarContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 20,
        paddingHorizontal: 16,
    }, 
    textTitle: {
        width: "100%",
        color: "#F2F2F4",
        fontSize: 16,
        marginTop: 20,
        marginBottom: 4,
        paddingBottom: 16
    },
    text: {
        width: "100%",
        color: "#F2F2F4",
        fontSize: 12,
        paddingBottom: 8,
        marginBottom: 5, 
    },
    botaoContainer: {
         paddingTop: 40,
         width: '50%',
         alignSelf: 'center',
    },
    selecionarContainer: {
        backgroundColor: "#2C2C31",
        width: '100%',
        height: 50,
        borderRadius: 8,
        alignItems: "center",      
        justifyContent: "center",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        backgroundColor: "#000000",
        width: "70%",
        maxHeight: "70%",
        borderRadius: 20,
        gap: 10,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#2C2C31",
    },
    modalTitle:{
        color: "#F2F2F4",
        fontSize: 24,
        fontWeight: "900",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,

    },
    textoAlbum: {
        fontSize: 20,
        fontWeight: "700",
        color: "#F2F2F4",
        marginBottom: 10,
    }

})