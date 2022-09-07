import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.box}>
      <div>Hi, my name is Joel,</div>
      <p>
        I am learning Full Stack Developement and I am a student of University of Ilorin
        where I am studying Electrical and Electronics Engineering.
      </p>
      <p>
        I am studying Frontend engineering at AltSchool Africa and
        Full Stack development at Udacity University.
      </p>
      <p>
        I recently built an API around RESTful concepts which I used to connect
        a backend application to a frontend application. I also perform CRUD
        operations using a relational database.
      </p>
      <p>
        I am looking for a Full Stack role (as an Intern or Jr developer) where
        I can utilize my experience and skills in solving software engineering
        problems.
      </p>
      <div> What about you?</div>
    </div>
  );
};
export default About;
