import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserEdit = () => {
  // 각 입력값들 초기값 설정
  const [password, setPassword] = useState("");
  const [passwordck, setPasswordck] = useState("");
  const [phone, setphone] = useState("");
  const [mobile, setMobile] = useState("skt");
  const [nickname, setNickname] = useState("");
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  function edit() {
    // 수정된 회원정보 axios로 전송
    axios({
      url: "/chat",
      method: "post",
      data: {
        password: password,
        phone: phone,
        mobile: mobile,
        nickname: nickname,
        selectedBusiness: selectedBusiness,
      },
      baseURL: "http://43.201.239.119:8081",
    })
      .then(function (response) {})
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      });
  }

  // Password input 값이 바뀔때마다 상태 관리
  const handle_pw = (e) => {
    setPassword(e.target.value);
  };

  const handle_phone = (e) => {
    // 0~9까지의 숫자, 11자리까지 입력
    const regex = /^[0-9]{0,11}$/;
    if (regex.test(e.target.value)) {
      setphone(e.target.value);
    }
  };

  // 통신사 옵션 선택
  const mobileList = [
    { value: "skt", name: "SKT" },
    { value: "kt", name: "KT" },
    { value: "lg", name: "LG U+" },
    { value: "mvno", name: "알뜰폰" },
  ];

  // 통신사 선택이 바뀔때마다 상태 관리
  const handle_mobile = (e) => {
    setMobile(e.target.value);
  };

  // Nickname값이 바뀔때마다 상태 관리
  const handle_nick = (e) => {
    setNickname(e.target.value);
  };

  // 사업자 등록증 여부를 묻기 위한 라디오 버튼
  const Business = [
    { text: "Y", value: 0 },
    { text: "N", value: 1 },
  ];

  // 선택 여부가 바뀔때 마다 상태 관리
  const handle_business = (e) => {
    setSelectedBusiness(Number(e.target.value));
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {/* 화면 크기에 따른 설정 추가 */}
        {/* flex-col : 요소를 세로로 정렬 
              flex-1 : 요소의 남은 영역 차지*/}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="logo"
          />
        </div>

        <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm ">
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
            <div className="sm:col-span-3 ">
              <label
                htmlFor="mobile"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                mobile carrier
              </label>
              <div className="mt-2 flex w-full">
                <select
                  id="mobile"
                  name="mobile"
                  value={mobile}
                  onChange={handle_mobile}
                  className="flex w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {mobileList.map((item) => (
                    <option value={item.value} key={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  required
                  onChange={handle_pw}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="passwordck"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password Check
              </label>
              <div className="mt-2">
                <input
                  id="passwordck"
                  name="passwordck"
                  type="password"
                  value={passwordck}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="grid-cols-1 sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                <div className="mt-2">
                  <div className="block w-full rounded-md border-0 p-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ">
                    South Korea
                  </div>
                </div>
              </div>
            </div>

            <label
              htmlFor="resi_num"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Korean Residential Number
            </label>
            <div className="mt-3 grid grid-cols-8 gap-x-3 gap-y-6 sm:grid-cols-12">
              <div className="col-span-4 sm:col-span-6">
                <div className="block w-full rounded-md border-0 p-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ">
                  xxxxxx
                </div>
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <div className="flex-grow:1 flex w-full items-center justify-center rounded-md border-0 py-1.5 text-gray-900  sm:text-sm sm:leading-6">
                  -
                </div>
              </div>
              <div className="col-span-1 flex items-center justify-center sm:col-span-2 ">
                <div className="block w-full rounded-md border-0 p-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ">
                  x
                </div>
              </div>
              <div className="col-span-2 flex items-center justify-center sm:col-span-3">
                <div className="flex-grow:1 justify-left items-left flex w-full rounded-md border-0 py-1.5 text-gray-900  sm:text-sm sm:leading-6">
                  xxxxxx
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="nickname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nick Name
              </label>
              <div className="mt-2">
                <input
                  id="nickname"
                  name="nickname"
                  type="text"
                  value={nickname}
                  required
                  maxLength={13}
                  onChange={handle_nick}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Possession of Business Registration Certificate
              </label>
              <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-6">
                {Business.map((Business, idx) => (
                  <label key={idx} className="flex items-center justify-center">
                    <input
                      id="Business"
                      name="Business"
                      type="radio"
                      value={Business.value}
                      required
                      onChange={handle_business}
                      checked={idx === selectedBusiness}
                      className="hidden"
                    />
                    <span
                      // flex-grow : 나눠진 칸을 전체 차지하도록 설정
                      className={`Business flex flex-grow cursor-pointer items-center justify-center
                          ${idx === selectedBusiness ? "border-indigo-300 bg-indigo-100" : "border-gray-300 bg-gray-100"}
                          mx-2 rounded-md border px-4 py-2`}
                      onClick={() => setSelectedBusiness(idx)}
                    >
                      {Business.text}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Link to={"#"}>
                <button
                  type="submit"
                  onClick={edit}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Complete
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserEdit;
