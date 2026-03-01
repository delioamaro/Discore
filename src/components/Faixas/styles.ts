import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: "center",
        borderBottomWidth: 2, 
        borderBottomColor: "#2C2C31",
        gap: 20,
        marginBottom: 12,
        paddingBottom: 4,
        paddingTop: 8
    },
    title: {
        color: '#F2F2F4',   
        fontSize: 14,
        fontWeight: '300',
    },
    duration: {
        color: '#F2F2F4',   
        fontSize: 14,
        fontWeight: '300',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
        width: '15%',
        gap: 8,
        marginLeft: 'auto',
        backgroundColor: "#2C2C31",
        color: "#F2F2F4",
        borderRadius: 4
    },
    buttonLetra: {
        color: "#F2F2F4",
        fontSize: 12,
        fontWeight: '300', 
    }
})