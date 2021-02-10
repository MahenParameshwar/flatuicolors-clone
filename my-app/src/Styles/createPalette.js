const drawerWidth = 350;

export const styles = (theme) => ({
  root: {
    display: "flex",
  },

  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    dispaly: "flex",
    alignIntems: "center",
    justifyContent: "center",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    width: "calc(100vw-300px)",
    marginTop: "64px",
    height: "calc(100vh - 64px)",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    "@media (max-width: 700px)": {
      height: "100%",
      gridTemplateColumns: "repeat(2,1fr)",
    },
    "@media (max-width: 500px)": {
      height: "100%",
      gridTemplateColumns: "repeat(1,1fr)",
    },
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  buttons: {},
});
