import CustomIcon from "../../Component/CustomIcon";
import useStyles from "./styles";
import { FaReact, FaHtml5, FaLaravel } from "react-icons/fa";
import { SiJavascript, SiNextdotjs } from "react-icons/si";
import { FaNodeJs, FaCss3Alt } from "react-icons/fa6";
import { SiPhp } from "react-icons/si";
import DataConstants from "../../Utils/DataConstants";

const Introduction = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <img src={DataConstants.profileImage} alt="dp" className={classes.dp} />
      <span className={classes.profileName}>{DataConstants.profileName}</span>
      <span className={classes.profileTitle}>{DataConstants.profileTitle}</span>
      <div className={classes.iconContainer}>
        <CustomIcon Icon={FaHtml5} />
        <CustomIcon Icon={FaCss3Alt} />
        <CustomIcon Icon={SiJavascript} />
        <CustomIcon Icon={FaReact} />
        <CustomIcon Icon={FaNodeJs} />
        <CustomIcon Icon={SiNextdotjs} />
        <CustomIcon Icon={SiPhp} />
        <CustomIcon Icon={FaLaravel} />
      </div>
    </div>
  );
};

export default Introduction;
