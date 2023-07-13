import { authService } from "@/service/firebase";
import { useEffect, useState } from "react";

export const useAuthStatus = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setEmail(user.email);
      } else {
        setIsLoggedIn(false);
        setEmail(null);
      }
      setInit(true);
    });
  }, []);

  return { init, isLoggedIn, email };
};
