import "../App.css";
import Introduction from "./Introduction";
import Header from "./Header";
import Abstruct from "./Abstruct";
import { makeStyles } from "@mui/styles";
import ModalMenu from "../Component/ModalMenu";
import { useState } from "react";
import { StyleConstants } from "../Utils/StyleConstants";
import Education from "./Education";

const useStyles = makeStyles({
  mainContainer: {
    maxHeight: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "relative",
  },
  bodyOuterContainer: {
    height: "100vh",
    width: "100%",
    overflowY: "scroll",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: StyleConstants.theme.white.backgroundColor,
  },
  bodyInnerContainer: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: StyleConstants.theme.white.backgroundColor,
  },
  modalContainer: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    backgroundColor: StyleConstants.theme.light.backgroundColor,
    color: StyleConstants.theme.light.textColor,
  },
});

const MainScreen = () => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={classes.mainContainer}>
      <div className={classes.bodyOuterContainer}>
        <div className={classes.bodyInnerContainer}>
          <Introduction />
          <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Abstruct />
          <Education />
        </div>
      </div>
      {menuOpen && <ModalMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />}
    </div>
  );
};
export default MainScreen;
