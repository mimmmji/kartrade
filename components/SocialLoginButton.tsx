import { auth } from "@/service/firebase";
import { AuthProvider, signInWithPopup } from "firebase/auth";
import { User as FirebaseAuthUser } from "firebase/auth";
import { User as NextAuthUser } from "next-auth";
import {useRouter} from "next/router";

const convertFirebaseUserToNextAuthUser = (
  firebaseUser: FirebaseAuthUser
): NextAuthUser => {
  const nextAuthUser: NextAuthUser = {
    id: firebaseUser.uid,
    name: firebaseUser.displayName || "",
    email: firebaseUser.email || "",
  };

  return nextAuthUser;
};

interface SocialLoginButtonProps {
  provider: AuthProvider;
  buttonText: string;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  provider,
  buttonText,
}) => {
  const router = useRouter();
  const onSuccess = () => {
    alert("로그인 성공");
    router.push("/");
  };
  const onFailure = () => {
    alert("로그인 실패");
  };


  let authProvider: AuthProvider;
  switch (provider) {
    case "facebook": {
      authProvider = new FacebookAuthProvider();
      break;
    }
    case "twitter":{
      authProvider=new TwitterAuthProvider();
      break;
    }
    case "google":{
      authProvider=new GoogleAuthProvider();
      break;
    }
    default:
      throw new Error("Provider not supported");
  }

  const handleSignIn = () => {
    signInWithPopup(auth, authProvider)
      .then((result) => {
        onSuccess();
      })
      .catch(() => {
        onFailure();
      });
  };

  return (
    <button className="white-button2" onClick={handleSignIn}>
      {buttonText}
    </button>
  );
};

export default SocialLoginButton;
