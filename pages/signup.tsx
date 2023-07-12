import firebase from "../service/firebase";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import SocialLoginButton from "@/components/SocialLoginButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function SignUp() {
  const router = useRouter();

  const createUser = (email: string, password: string) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert("가입 성공");
        router.push("/");
      })
      .catch(() => {
        alert("가입 실패");
      });
  };

  const SignUpSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <>
      <section className="section">
        <Header />
        <p className="text-[32px] font-medium mx-default my-[50px]">Sign Up</p>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignUpSchema}
          onSubmit={(values) => {
            createUser(values.email, values.password);
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

            <button className="black-button2 flex-center mx-auto" type="submit">
              SIGN UP
            </button>
          </Form>
        </Formik>

        <p className="mx-default mt-[25px] text-[14px] gray">
          We will email you a magic code for password-free sign in.
        </p>
        <div className="flex-center h-[100px] mx-default">
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
          By clicking Register or Continue with Google, Facebook, you are agree
          to Kartrade’s <span className="black underline">Terms of Use</span>{" "}
          and <span className="black underline">Privacy Policy.</span>
        </p>
      </section>
    </>
  );
}
