import { makeStyles } from "@mui/styles";
import { StyleConstants } from "../../Utils/StyleConstants";

const useStyles = makeStyles({
  mainContainer: {
    minHeight: "100vh",
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: StyleConstants.theme.white.backgroundColor,
  },
});

export default useStyles;
