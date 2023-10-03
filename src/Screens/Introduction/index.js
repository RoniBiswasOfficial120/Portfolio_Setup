import dp from "../../Assets/dp.jpg";
import useStyles from "./styles";

const Introduction = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <img src={dp} alt="dp" className={classes.dp} />
      <span className={classes.profileName}>Roni Biswas</span>
      <span className={classes.profileTitle}>Web Developer / Mobile Developer / Frontend Developer</span>
    </div>
  );
};

export default Introduction;
