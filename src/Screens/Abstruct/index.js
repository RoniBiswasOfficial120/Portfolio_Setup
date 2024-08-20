import useStyles from "./styles";

const Abstruct = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <span>
        I am a passionate and experienced software developer with professional
        expertise, specializing in building dynamic and responsive applications
        using React Native, React JS, HTML, CSS, and JavaScript. My deep
        understanding of these technologies enables me to create seamless,
        high-performance applications for both web and mobile platforms.
      </span>
      <span>
        In addition to my core expertise, I possess a solid foundation in
        backend development with knowledge of PHP, Laravel, Node.js, Express.js,
        and Next.js. This full-stack experience allows me to contribute
        effectively to all aspects of the development process, from designing
        user interfaces to implementing server-side logic.
      </span>
      <span>
        Over the course of my career, I have successfully delivered multiple
        projects, working both independently and as part of a collaborative
        team. I am known for my dedication, attention to detail, and commitment
        to meeting project deadlines without compromising on quality. My ability
        to adapt to new challenges and continuously learn new technologies has
        been key to my professional growth.
      </span>
      <span>
        Whether it’s creating scalable mobile apps or developing complex web
        applications, I am driven by a desire to build solutions that not only
        meet client requirements but also provide an exceptional user
        experience. My goal is to continue honing my skills and contribute to
        innovative projects that make a meaningful impact.
      </span>
    </div>
  );
};

export default Abstruct;
