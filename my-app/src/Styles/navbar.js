import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    height: "10vh",
    flexDirection: "row",
    alignItems: "center",
    ...theme.textColor,
    position: "unset",
  },

  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    margin: "0 30px",
  },
  divLevel: {
    marginLeft: "50px",
    height: "100%",
    fontSize: "1.1rem",
    fontWeight: "400",
    display: "flex",
    alignItems: "center",
    marginTop: "2px",
    "@media (max-width: 700px)": {
      marginLeft: "0",
    },
  },
  sliderContainer: {
    flex: "1",
    marginLeft: "30px",
    "@media (max-width: 700px)": {
      marginLeft: "0",
      flex: "0.8",
    },
  },
  homeLink: {
    textDecoration: "none",
    color: "black",
    "@media (max-width: 700px)": {
      display: "none",
    },
  },
}));
