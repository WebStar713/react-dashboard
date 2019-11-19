export default {
    SortableQuoteBox: {
        backgroundColor: "rgb(46, 46, 46)",
        boxShadow: "0 0 5px rgba(0,0,0,0.7)",
        height: "130px",
        padding: "20px",
        color: "white",
        position: "relative",
        textAlign: "left",
        cursor: "pointer",
        fontSize: "1.2em",
        userSelect: "none",
    },
    deleteIcon: {
        position: "absolute",
        bottom: "20px",
        right: "20px",
        cursor: "pointer",
        padding: "5px",
        "&:hover": {
            color: "aquamarine",
            transform: "scale(1.2) rotate(5deg)",
            transition: "all 0.2s ease-in"
        }
    }
}