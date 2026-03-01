import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0B0B0F",
    },
    albumContainer: {
        flexDirection: 'row',
        padding: 8,
        alignItems: 'center',
        borderBottomWidth: 2, 
        borderBottomColor: "#2C2C31",
        paddingBottom: 16
    },
    titleContainer: {
        flexDirection: 'column',
        flex: 1,
        marginRight: 16,
    },
    albumTitle: {
        color: '#F2F2F4',   
        fontSize: 24,
        fontWeight: '900',
    },
    albumArtist: {
        color: '#F2F2F4',   
        fontSize: 14,
        marginTop: 4,
        fontWeight: '300',
    },
    albumNota: {
        backgroundColor: "#6A1BB9",
        color: "#F2F2F4",
        fontSize: 24,
        fontWeight: '900',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
        marginTop: 8,
        textAlign: 'center',
        width: '20%',
    },
    albumInfo: {
        borderBottomWidth: 2, 
        borderBottomColor: "#2C2C31",
        padding: 8,
        paddingBottom: 16
    },
    titleFaixa: {
        color: '#F2F2F4',   
        fontSize: 20,
        fontWeight: '500',
        marginTop: 12,
        paddingBottom: 18
    }
})  