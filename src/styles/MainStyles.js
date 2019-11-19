import morningImg from '../img/morning.jpg';
import afternoonImg from '../img/afternoon.jpg';
import eveningImg from '../img/evening.jpg';

export default {
    root: {
        backgroundColor: "#1D2636",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textShadow: "0 0 10px rgba(0, 0, 0, 0.568)",
        color: "white",

    },
    loadingScreen: {
        position: "fixed",
        zIndex: 100,
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        backgroundColor: "#1D2636",
        display: "flex",
        alignItems: "center",
    },
    weather: {
        position: "fixed",
        top: "30px",
        right: "20px",
        width: "110px",
        height: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItem: "center",
        "& h5": {
            margin: 0
        },
    },
    clock: {
        fontSize: "10rem",
        fontWeight: 400,

    },
    messageFocus: {
        color: "white",
        fontWeight: 500,
        "& .MuiFormControl-root": {
            margin: 0,
        },
    },
    quote: {
        bottom: "10px",
        position: "fixed",
        left: "calc(-50vw + 50%)",
        right: "calc(-50vw + 50%)",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "600px",
        padding: "10px"
    },
    toDo: {
        bottom: "30px",
        right: "30px",
        position: "fixed",
    },
    nav: {
        position: "fixed",
        top: "20px",
        left: "30px",
    },
    button: {
        color: "white",
        "&:hover": {
            backgroundColor: "rgba(0,0,0,0.3)",
        }
    },
    morning: {
        backgroundImage: `url(${morningImg})`,
    },
    afternoon: {
        backgroundImage: `url(${afternoonImg})`,
    },
    evening: {
        backgroundImage: `url(${eveningImg})`,
    }

}