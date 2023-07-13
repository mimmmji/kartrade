import { authService } from "@/service/firebase";
import {
  AuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider,
} from "firebase/auth";
import { useRouter } from "next/router";

interface SocialLoginButtonProps {
  provider: "google" | "facebook" | "twitter";
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
    case "twitter": {
      authProvider = new TwitterAuthProvider();
      break;
    }
    case "google": {
      authProvider = new GoogleAuthProvider();
      break;
    }
    default:
      throw new Error("Provider not supported");
  }

  const handleSignIn = () => {
    signInWithPopup(authService, authProvider)
      .then(() => {
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
