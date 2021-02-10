import bg from "./bg.svg";

export const styles = {
  root: {
    // backgroundColor:"blue",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1417aa",
    backgroundImage: `url(${bg})`,
  },
  container: {
    width: "70%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    paddingBottom: "200px",
  },
  nav: {
    display: "flex",
    width: "100vw",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "0 16vw",
    margin: "20px",
    "@media (max-width: 800px)": {
      padding: "0 6vw",
    },
    "@media (max-width: 500px)": {
      gridGap: "2%",
      gridTemplateColumns: "repeat(1,100%)",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "5%",
    "@media (max-width: 800px)": {
      gridTemplateColumns: "repeat(2,50%)",
      padding: "0 6vw",
    },
    "@media (max-width: 500px)": {
      gridGap: "2%",
      gridTemplateColumns: "repeat(1,100%)",
    },
  },
};
