import useWindowDimension from "../../CustomHooks/useWindowDimension";
import useStyles from "./styles";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";

const Header = ({ menuOpen, setMenuOpen }) => {
  const classes = useStyles();
  const { height, width } = useWindowDimension();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}>
        <span className={classes.profileName}>Roni Biswas</span>
      </div>
      {width > 900 ? (
        <div className={classes.rightContainer}>
          <span className={classes.tabs}>Introduction</span>
          <span className={classes.tabs}>Education</span>
          <span className={classes.tabs}>Experience</span>
          <span className={classes.tabs}>Projects</span>
          <span className={classes.tabs}>Services</span>
        </div>
      ) : (
        <div
          className={classes.rightContainer}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MenuSharpIcon />
        </div>
      )}
    </div>
  );
};

export default Header;
