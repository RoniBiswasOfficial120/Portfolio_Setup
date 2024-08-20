import React from "react";
import { makeStyles } from "@mui/styles";
import { StyleConstants } from "../Utils/StyleConstants";
import { GrDocumentMissing } from "react-icons/gr";

const CustomIcon = ({ Icon = GrDocumentMissing, theme = "dark" }) => {
  const classes = useStyles(theme)();
  return (
    <div className={classes.container}>
      <Icon size={30} color={StyleConstants.theme?.[theme].iconColor} />
    </div>
  );
};

export default CustomIcon;

const useStyles = (theme) =>
  makeStyles({
    container: {
      height: "40px",
      width: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      border: `1px solid ${StyleConstants.theme?.[theme].borderColor}`,
      marginLeft: "5px",
      marginRight: "5px",
    },
  });
