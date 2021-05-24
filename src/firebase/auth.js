import { fireauth } from "./config";

export const anonymousLogIn = (setIslogin) => {
  fireauth
    .signInAnonymously()
    .then(() => {
      setIslogin(true);
    })
    .catch(() => {
      console.log("unsuccesfully");
    });
};

export const onStateChange = (user) => {
  fireauth.onAuthStateChanged(user);
};

export const annonymousLogout = (setIslogin) => {
  fireauth.signOut().then(() => {
    console.log("logout successfull");
    setIslogin(false);
  });
};
