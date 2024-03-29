import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handle_phone = (e) => {
    // 손승아, 입력값 길이 11자 제한, 20240329
    if(e.target.value.length <=11){
      setPhone(e.target.value);
    }
  };

  const handle_pw = (e) => {
    setPassword(e.target.value);
  };

  const handleSignin = async (e) => {
    e.preventDefault(); // 폼 기본 동작 방지

    // 입력 필드 유효성 검사
    if (!password || !phone) {
      alert("모든 항목을 입력해주세요."); // 임시로 넣었습니다.
      return;
    }

    // 손승아, DB에 사용자 정보 있을 때만 로그인, 20240327
    try {
      const response = await axios.post("http://localhost:8081/user/login", {
        phone,
        password,
      })

      console.log(response.data);

      if( phone === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/chat");
      }
    } catch (error) {
      console.error("로그인 에러 : ",error);

      alert("로그인에 실패했습니다. 다시 시도해주세요.")
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="logo"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={phone}
                  required
                  onChange={handle_phone}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  required
                  autoComplete="current-password"
                  onChange={handle_pw}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleSignin}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-3 text-center text-sm text-gray-500">
            Not a member? {/* 회원가입페이지로 변경 */}
            <Link
              to={"/signup"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Join us
            </Link>
          </div>
          <div className="mt-3 text-center text-sm text-gray-500">
            Don't need signIn? { /* 비회원으로 연결 */}
            <Link
              to={"/chat"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Chat now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
