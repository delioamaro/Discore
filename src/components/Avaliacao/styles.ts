import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: "center",
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
    title: {
        color: '#F2F2F4',   
        fontSize: 14,
        fontWeight: '300',
    },
    data: {
        marginLeft: 40,
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
        paddingHorizontal: 8,
        borderRadius: 4,
        marginTop: 8,
        textAlign: 'center',  
       
    }
})