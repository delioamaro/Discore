import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        backgroundColor: "#0B0B0F",
        width: "90%",
        maxHeight: "85%",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#2C2C31",
    },
    titleContainer: {
        width: "100%",
        backgroundColor: "#010101",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#2C2C31",
    },
    titleText: {
        color: "#F2F2F4",
        fontSize: 24,
        fontWeight: "900",
        textAlign: "center",
        marginTop: 10,
    },
    vizuContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 20,
        marginVertical: 10,
        gap: 12,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#F2F2F4",
        marginBottom: 10,
    },
    info: {
        fontSize: 16,
        color: "#F2F2F4",
        marginBottom: 6,
        paddingHorizontal: 16,
    },
    letraContainer: {
        alignItems: "center",
        width: "100%",             
        marginTop: 10,
        marginBottom: 20,
    },
    letra: {
        textAlign: "center",
        fontSize: 12,
        color: "#F2F2F4",
        lineHeight: 22,

    },
    buttonContainer: {
        flexDirection: "row",
        paddingTop: 40,
        paddingBottom: 40,
        alignSelf: 'center',
        gap: 10,
    },
    button: {
        width: '40%',
        paddingHorizontal: 16,
    },

})