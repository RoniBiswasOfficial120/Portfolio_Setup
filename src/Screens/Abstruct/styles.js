import { makeStyles } from "@mui/styles";
import { StyleConstants } from "../../Utils/StyleConstants";

const useStyles = makeStyles({
  mainContainer: {
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: StyleConstants.theme.white.backgroundColor,
    paddingLeft: StyleConstants.space.paddingLeftRight,
    paddingRight: StyleConstants.space.paddingLeftRight,
    paddingTop: StyleConstants.space[20],
    paddingBottom: StyleConstants.space[20],
    boxShadow: "0px 15px 13px -10px #5c2ea5",
    zIndex: 90,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    width: 400,
    border: "1px solid #5c2ea5",
  },
  imageStyle: {
    height: 300,
    width: 400,
    objectFit: "contain",
  },
  paragraphMainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
    overflow: "hidden",
    gap: StyleConstants.space[20],
    marginLeft: StyleConstants.space[20],
  },
  paragraphContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    overflow: "hidden",
  },
  paragraphText: {
    fontSize: 14,
    fontFamily: StyleConstants.text.fontFamily.poppins,
    color: StyleConstants.theme.light.textColor,
    textAlign: "justify",
  },
});

export default useStyles;
