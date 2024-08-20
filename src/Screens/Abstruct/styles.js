import { makeStyles } from "@mui/styles";
import { StyleConstants } from "../../Utils/StyleConstants";

const useStyles = makeStyles({
  mainContainer: {
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "antiquewhite",
    paddingLeft: StyleConstants.space.paddingLeftRight,
    paddingRight: StyleConstants.space.paddingLeftRight,
  },
  paragraph: {
    fontSize: 10,
  },
});

export default useStyles;
