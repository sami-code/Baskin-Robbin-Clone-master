import React from "react";
import userService from "../../Services/UserServices";
import { withRouter } from "react-router-dom";

const Auth = (props) => {
  React.useEffect(() => {
    if (!userService.isLoogedIn()) {
      props.history.push("/SignInPage");
    }
  }, []);
  return <> {props.children} </>;
};
export default withRouter(Auth);
