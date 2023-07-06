import { useState } from "react";
import firebase from "../service/firebase";
import { useRouter } from "next/router";
import Header from "@/components/Header";

export default function SignUp() {
  const [account, setAccount] = useState({ email: "", password: "" });
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const createUser = (email: string, password: string) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setAccount({ email: "", password: "" });
        alert("가입 성공");
        router.push("/");
      })
      .catch(() => {
        alert("가입 실패");
      });
  };

  return (
    <>
      <section className="section">
        <Header />
        <p className="text-[32px] font-medium mx-default my-[50px]">Sign Up</p>

        <input
          className="mx-default w-[325px] bottom-gray mb-[40px]"
          type="email"
          name="email"
          value={account.email}
          onChange={onChange}
          placeholder="EMAIL"
        />
        <input
          className="mx-default w-[325px] bottom-gray mb-[30px]"
          type="password"
          name="password"
          value={account.password}
          onChange={onChange}
          placeholder="PASSWORD"
        />

        <button
          className="black-button2 mx-auto"
          onClick={() => {
            createUser(account.email, account.password);
          }}
        >
          회원가입
        </button>
        <p className="mx-default mt-[25px] text-[14px] gray">
          We will email you a magic code for password-free sign in.
        </p>
        <div className="flex-center h-[100px] mx-default">
          <div className="h-[1px] w-[118px] gray4"></div>
          <span className="gray mx-[30px]">OR</span>
          <div className="h-[1px] w-[118px] gray4"></div>
        </div>
        <div className="mx-auto">
          <button className="white-button2">Google</button>
        </div>
        <p className="mx-default my-[25px] gray">
          By clicking Register or Continue with Google, Facebook, you are agree
          to Kartrade’s <span className="black underline">Terms of Use</span>{" "}
          and <span className="black underline">Privacy Policy.</span>
        </p>
      </section>
    </>
  );
}
