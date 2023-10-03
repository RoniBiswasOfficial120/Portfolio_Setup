import { makeStyles } from "@mui/styles";
import { StyleConstants } from "../../Utils/StyleConstants";

const useStyles = makeStyles({
  mainContainer: {
    paddingTop: StyleConstants.space[10],
    paddingBottom: StyleConstants.space[10],
    paddingLeft: StyleConstants.space.paddingLeftRight,
    paddingRight: StyleConstants.space.paddingLeftRight,
    boxSizing: "border-box",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: StyleConstants.theme.dark.backgroundColor,
    color: StyleConstants.theme.dark.textColor,
  },
  dp: {
    height: "250px",
    width: "250px",
    borderRadius: "50%",
    objectFit: "cover",
    "@media (max-width: 500px)": {
      height: "200px",
      width: "200px",
    },
  },
  profileName: {
    textAlign: "center",
    marginTop: StyleConstants.space[10],
    marginBottom: StyleConstants.space[10],
    fontSize: StyleConstants.text.fontSize.web.profileName,
    fontFamily: StyleConstants.text.fontFamily.kaushan,
    "@media (max-width: 900px)": {
      fontSize: StyleConstants.text.fontSize.tab.profileName,
    },
    "@media (max-width: 500px)": {
      fontSize: StyleConstants.text.fontSize.mobile.profileName,
    },
  },
  profileTitle: {
    textAlign: "center",
    fontSize: StyleConstants.text.fontSize.web.profileTitle,
    fontFamily: StyleConstants.text.fontFamily.kaushan,
    "@media (max-width: 900px)": {
      fontSize: StyleConstants.text.fontSize.tab.profileTitle,
    },
    "@media (max-width: 500px)": {
      fontSize: StyleConstants.text.fontSize.mobile.profileTitle,
    },
  },
});

export default useStyles;
