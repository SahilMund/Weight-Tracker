import firebase from "firebase";
import { db } from "./config";

function convert() {
  let current_datetime = new Date();
  let formatted_date =
    current_datetime.getFullYear() +
    "-" +
    (current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getDate() +
    " " +
    current_datetime.getHours() +
    ":" +
    current_datetime.getMinutes() +
    ":" +
    current_datetime.getSeconds();
  return formatted_date;
}

export function deleteTodo(id) {
  db.collection("weightData").doc(id).delete();
}

export const addData = (e, weight, setSuccess, handleClick, setWeight) => {
  e.preventDefault();
  if (weight) {
    db.collection("weightData").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      wdata: weight,
      date: convert(),
    });

    setSuccess(true);
    setWeight("");
    handleClick();
  } else {
    console.log("error");
    setSuccess(false);
  }
};

export const getDatas = (setWeightdatas) => {
  db.collection("weightData")
    .orderBy("timestamp", "desc")
    .onSnapshot((querySnapshot) => {
      setWeightdatas(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          wdata: doc.data().wdata,
          date: doc.data().date,
        }))
      );
    });
};
