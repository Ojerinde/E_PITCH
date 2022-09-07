import myImg from "../assets/img.jpeg";
import classes from "./Image.module.css";

const Image = () => {
  return (
    <figure className={classes.figure}>
      <img src={myImg} alt="Taken at School " className={classes.img} />
    </figure>
  );
};
export default Image;
