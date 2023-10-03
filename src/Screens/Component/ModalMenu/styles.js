import { makeStyles } from "@mui/styles";
import { StyleConstants } from "../../../Utils/StyleConstants";

const useStyles = makeStyles({
  mainContainer: {
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

export default useStyles;
