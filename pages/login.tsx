import Header from "@/components/Header";
import { auth } from "../service/firebase";
import { useRouter } from "next/router";
import SocialLoginButton from "@/components/SocialLoginButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Login() {
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
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

  const signInSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <>
      <section className="section">
        <Header />
        <p className="text-[32px] font-medium mx-default my-[50px]">Sign In</p>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={signInSchema}
          onSubmit={(values) => {
            handleLogin(values.email, values.password);
          }}
        >
          <Form>
            <div className="mx-default w-[325px] mb-[40px]">
              <Field
                type="email"
                name="email"
                placeholder="EMAIL"
                className="w-full bottom-gray"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mx-default w-[325px] mb-[30px]">
              <Field
                type="password"
                name="password"
                placeholder="PASSWORD"
                className="w-full bottom-gray"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>

            <button
              className="black-button2 flex-center mx-auto mt-[15px]"
              type="submit"
            >
              SIGN IN
            </button>
          </Form>
        </Formik>

        <div className="flex-center h-[50px] mx-default my-[20px]">
          <div className="h-[1px] w-[118px] gray4"></div>
          <span className="gray mx-[30px]">OR</span>
          <div className="h-[1px] w-[118px] gray4"></div>
        </div>
        <div className="mx-auto h-[230px] flex flex-col justify-around">
          <SocialLoginButton
            provider={"google"}
            buttonText="Continue with Google"
          />
          <SocialLoginButton
            provider={"twitter"}
            buttonText="Continue with Twitter"
          />
          <SocialLoginButton
            provider={"facebook"}
            buttonText="Continue with Facebook"
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
