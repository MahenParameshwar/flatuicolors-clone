export const styles = {
    paletteColors:{
                height: "85vh",
                width: "100vw",
                display: "grid",
                gridTemplateColumns: "repeat(5,1fr)"
    },
    colorBox:{
        backgroundColor:'black',
        width: "100%",
        height: "auto",
        margin: "0 auto",
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        cursor: "pointer",
        textTtransform: "uppercase",
    },
    backBtn:{
        color: "white",
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top:"50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        fontSize: "1rem",
        lineHeight: "30px",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        border: "none",
        opacity: "1",
        textTransform: "uppercase",
        cursor: "pointer",
    }
}