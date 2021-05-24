import React from "react";
import { Button, Card, Typography } from "@material-ui/core";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { anonymousLogIn } from "../../firebase/auth";

const Login = ({ setIslogin, islogin }) => {
  return (
    <div className="auth">
      <Card
        className="card_res"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "max-content",
          padding: "150px",
          margin: "auto",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography className="auth_title">Wt-Tracker</Typography>
        <AccountCircleIcon
          style={{
            fontSize: "60",
          }}
        />

        {!islogin ? (
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ alignSelf: "center", marginTop: 20 }}
            onClick={() => anonymousLogIn(setIslogin)}
          >
            signin
          </Button>
        ) : (
          ""
        )}
      </Card>
    </div>
  );
};

export default Login;
