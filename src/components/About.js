import classes from "./About.module.css";
import { auth, signOut } from "../config";
const About = (props) => {
  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log(false);
        props.onSign(false);
      })
      .catch((error) => {
        props.onSign(true);
        console.log(error);
      });
  };
  return (
    <div className={classes.box}>
      <div>Hi, my name is Joel,</div>
      <p>
        I am learning Full Stack Developement and I am also a student of
        University of Ilorin where I am studying Electrical and Electronics
        Engineering.
      </p>
      <p>
        I am studying Frontend engineering at AltSchool Africa and Full Stack
        development at Udacity University.
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
      <button className={classes.button} onClick={logoutHandler}>
        Sign Out
      </button>
    </div>
  );
};
export default About;
