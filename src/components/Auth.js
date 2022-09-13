import Card from "./Card";
import classes from "./Auth.module.css";

import {
  auth,
  provider,
  signInWithRedirect,
//   getRedirectResult,
  onAuthStateChanged
} from "../config";
import { useEffect } from "react";

const Auth = (props) => {
  //   const [signedIn, setSignedIn] = useState(false);
  const SignIn = (e) => {
    e.preventDefault();
    signInWithRedirect(auth, provider);
  };

//   useEffect(() => {
//     getRedirectResult(auth)
//       .then((result) => {
//        console.log(result)
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   This is called before the result
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          props.onSign(true)
          console.log(user)
        //   const uid = user.uid;
        //   console.log(uid)
        } else {
          props.onSign(false)
        }
      });
  }, [props]);

  return (
    <Card className={classes.box}>
      <div className={classes.div}>Sign in to access your profile</div>
      <button className={classes.button} onClick={SignIn}>
        Sign in
      </button>
    </Card>
  );
};

export default Auth;
