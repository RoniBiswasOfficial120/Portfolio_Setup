import React from "react";
import useStyles from "./styles";

const ModalMenu = ({ menuOpen, setMenuOpen }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.mainContainer}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ModalMenu
    </div>
  );
};

export default ModalMenu;
