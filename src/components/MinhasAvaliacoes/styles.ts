import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        borderBottomWidth: 2, 
        borderBottomColor: "#2C2C31",
        marginBottom: 12,
        paddingBottom: 12,
        paddingTop: 8,
    },
    avaliacaoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 12,
        paddingBottom: 4,
        paddingTop: 8
    },
    usuarioContainer: {
        paddingLeft: 4,
        gap: 2,
        alignItems: 'center',
    },
    title: {
        color: '#F2F2F4',   
        fontSize: 14,
        fontWeight: '300',
    },
    albumContainer: {
        paddingLeft: 24,
    },
    titleAlbum: {
        color: '#F2F2F4',   
        fontSize: 16,
        fontWeight: '700',
    },
    titleCantor: {
        color: '#F2F2F4',   
        fontSize: 14,
        fontWeight: '300',
    },
    dataNota: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    data: {
        color: '#F2F2F4',   
        fontSize: 14,
        fontWeight: '300',
    },
    nota: {
        backgroundColor: "#6A1BB9",
        color: "#F2F2F4",
        fontSize: 24,
        fontWeight: '900',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 4,
        marginTop: 8,
    }
})