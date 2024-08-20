import { makeStyles } from "@mui/styles";
import { StyleConstants } from "../../Utils/StyleConstants";

const useStyles = makeStyles({
  mainContainer: {
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: StyleConstants.theme.light.backgroundColor,
    paddingLeft: StyleConstants.space.paddingLeftRight,
    paddingRight: StyleConstants.space.paddingLeftRight,
    paddingTop: StyleConstants.space[20],
    boxShadow: "0px 15px 13px -10px #5c2ea5",
    zIndex: 85,
  },
  paragraphContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    overflow: "hidden",
    marginBottom: StyleConstants.space[20],
  },
  paragraphText: {
    fontSize: 12,
    fontFamily: StyleConstants.text.fontFamily.poppins,
    color: StyleConstants.theme.light.textColor,
  },
});

export default useStyles;
