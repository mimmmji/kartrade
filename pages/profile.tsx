import Header from "@/components/Header";
import { useAuthStatus } from "@/hooks/useAuthStatus";
import { authService } from "@/service/firebase";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const onLogoutClick = () => {
    authService.signOut();
    router.push("/");
  };

  const { email } = useAuthStatus();
  return (
    <>
      <section className="section">
        <Header />
        <div className="w-[375px] h-12 bottom-gray flex items-center">
          <Link href="/">
            <span className="gray text-[13px] ml-[25px]">Home {">"}</span>
          </Link>
          <span className="text-[13px] ml-[5px]">My page</span>
        </div>

        <div className="h-[100px] mx-default bottom-gray flex items-center">
          <div className="rounded-full bg-[gray] h-[60px] w-[60px] mr-[10px]"></div>
          <div className="font-[25px] font-medium">{email}</div>
        </div>
        <button
          className="black-button2 flex-center mx-auto mt-[15px]"
          onClick={onLogoutClick}
        >
          LOG OUT
        </button>
      </section>
    </>
  );
}
