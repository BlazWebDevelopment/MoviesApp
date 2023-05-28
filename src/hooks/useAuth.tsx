import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function useAuth() {
  const [authUser, setAuthUser] = useState(false);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(false);
      }
      return () => {
        listen();
      };
    });
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signed Out");
      })
      .catch((err) => console.log(err));
  };

  return {
    authUser,
    userSignOut,
  };
}

export default useAuth;
