import { auth } from "@/service/firebase";
import { AuthProvider, signInWithPopup } from "firebase/auth";
import { User as FirebaseAuthUser } from "firebase/auth";
import { User as NextAuthUser } from "next-auth";

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
  onSuccess: (user: NextAuthUser) => void;
  onFailure: () => void;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  provider,
  buttonText,
  onSuccess,
  onFailure,
}) => {
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const firebaseUser = result.user;
        const nextAuthUser = convertFirebaseUserToNextAuthUser(firebaseUser); // Firebase 사용자 객체를 Next.js 사용자 객체로 변환합니다.
        onSuccess(nextAuthUser);
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
