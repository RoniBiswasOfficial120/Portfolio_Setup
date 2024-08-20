import { makeStyles } from "@mui/styles";
import { StyleConstants } from "../../Utils/StyleConstants";

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    position: "sticky",
    top: 0,
    boxShadow: "0px 15px 13px -10px #5c2ea5",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "50px",
    paddingLeft: StyleConstants.space.paddingLeftRight,
    paddingRight: StyleConstants.space.paddingLeftRight,
    boxSizing: "border-box",
    marginBottom: StyleConstants.space[10],
    backgroundColor: StyleConstants.theme.neutral.backgroundColor,
    color: StyleConstants.theme.neutral.textColor,
  },
  leftContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  rightContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  profileName: {
    textAlign: "center",
    fontSize: StyleConstants.text.fontSize.web.headerName,
    fontFamily: StyleConstants.text.fontFamily.kaushan,
  },
  tabs: {
    textAlign: "center",
    marginLeft: "5px",
    marginRight: "5px",
    paddingLeft: "5px",
    paddingRight: "5px",
    fontSize: StyleConstants.text.fontSize.web.headerTabs,
    cursor: "pointer",
    "&:hover": {
      color: StyleConstants.theme.neutral.hoverTextColor,
    },
  },
});

export default useStyles;
