import "../App.css";
import { useState, useEffect } from "react";
import { TextField, Button, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Data from "./Data";
import { annonymousLogout } from "../firebase/auth";
import { addData, getDatas } from "../firebase/database";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Home({ islogin, setIslogin }) {
  const [weight, setWeight] = useState("");
  const [success, setSuccess] = useState(false);
  const [weightdatas, setWeightdatas] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const unsubscribe = getDatas(setWeightdatas);
    return unsubscribe;
  }, []);

  return (
    <div className="app">
      {islogin ? (
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{ alignSelf: "center", marginTop: 20 }}
          onClick={() => annonymousLogout(setIslogin)}
        >
          signout
        </Button>
      ) : (
        ""
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h1 className="head_txt">Welcome to wt-tracker</h1>
        <form
          onSubmit={(e) =>
            addData(e, weight, setSuccess, handleClick, setWeight)
          }
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Enter Your Weight (in Kg)"
            value={weight}
            style={{ width: "90vw", maxWidth: "500px" }}
            onChange={(e) => setWeight(e.target.value)}
          />
        </form>

        {success ? (
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Data added Successfully !
            </Alert>
          </Snackbar>
        ) : (
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              Please Fill Something !
            </Alert>
          </Snackbar>
        )}

        <div style={{ width: "90vw", maxWidth: "500px", marginTop: "24px" }}>
          {weightdatas.map((data, i) => (
            <Data key={i} data={data.wdata} date={data.date} id={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
