import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { auth } from "../service/firebase";
import { useRouter } from "next/router";
import { User as NextAuthUser } from "next-auth";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import SocialLoginButton from "@/components/SocialLoginButton";
import { useSession } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState<NextAuthUser | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert("로그인 성공");
      router.push("/");
    } catch (error) {
      alert("로그인 실패");
    }
  };

  const handleSignUp = () => {
    router.push("/signup");
  };

  const handleSocialLoginSuccess = (user: NextAuthUser) => {
    setUserData(user);
    alert("로그인 성공");
    router.push("/");
  };

  const handleSocialLoginFailure = () => {
    alert("로그인 실패");
  };

  return (
    <>
      <section className="section">
        <Header />
        <p className="text-[32px] font-medium mx-default my-[50px]">Sign In</p>
        <form onSubmit={handleLogin}>
          <input
            className="mx-default w-[325px] bottom-gray mb-[40px]"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="mx-default w-[325px] bottom-gray"
            placeholder="PASSWORD"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="my-[35px] flex-center">
            <button className="black-button2" type="submit">
              SIGN IN
            </button>
          </div>
        </form>
        <div className="flex-center h-[50px] mx-default">
          <div className="h-[1px] w-[118px] gray4"></div>
          <span className="gray mx-[30px]">OR</span>
          <div className="h-[1px] w-[118px] gray4"></div>
        </div>
        <div className="mx-auto h-[230px] flex flex-col justify-around">
          <SocialLoginButton
            provider={new GoogleAuthProvider()}
            buttonText="Continue with Google"
            onSuccess={handleSocialLoginSuccess}
            onFailure={handleSocialLoginFailure}
          />
          <SocialLoginButton
            provider={new TwitterAuthProvider()}
            buttonText="Continue with Twitter"
            onSuccess={handleSocialLoginSuccess}
            onFailure={handleSocialLoginFailure}
          />
          <SocialLoginButton
            provider={new FacebookAuthProvider()}
            buttonText="Continue with Facebook"
            onSuccess={handleSocialLoginSuccess}
            onFailure={handleSocialLoginFailure}
          />
        </div>
        <p className="mx-default my-[25px] gray">
          We will email you a magic code for password-free sign in. Or you can{" "}
          <span className="underline black" onClick={handleSignUp}>
            sign up manually
          </span>
        </p>
      </section>
    </>
  );
}
