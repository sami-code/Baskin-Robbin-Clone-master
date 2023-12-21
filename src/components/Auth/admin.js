import React from "react";
import userService from "../../Services/UserServices";
import { withRouter } from "react-router-dom";

const Admin = (props) => {
  React.useEffect(() => {
    if (!userService.IsAdmin()) {
      props.history.push("/SignInPage");
    }
  }, []);
  return <> {props.children} </>;
};
export default withRouter(Admin);
