import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserEdit = () => {
  // 전화번호 입력 시 숫자, '-'를 제외하고 입력을 제한, 글자수 제한
  const [password, setPassword] = useState("");
  const [passwordck, setPasswordck] = useState("");
  const [phone, setphone] = useState("");
  const [mobile, setMobile] = useState("skt");
  const [nickname, setNickname] = useState("");
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  function edit() {
    console.log("Sending data:", {
      password: password,
      phone: phone,
      mobile: mobile,
      nickname: nickname,
      selectedBusiness: selectedBusiness,
    });

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
      baseURL: "http://localhost:8081",
      //withCredentials: true,
    })
      .then(function (response) {
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      });
  }

  const handle_pw = (e) => {
    setPassword(e.target.value);
  };
  const handle_pwck = (e) => {
    setPasswordck(e.target.value);
  };

  const handle_phone = (e) => {
    const regex = /^[0-9]{0,11}$/;
    if (regex.test(e.target.value)) {
      setphone(e.target.value);
    }
  };

  const mobileList = [
    { value: "skt", name: "SKT" },
    { value: "kt", name: "KT" },
    { value: "lg", name: "LG U+" },
    { value: "mvno", name: "알뜰폰" },
  ];

  const handle_mobile = (e) => {
    setMobile(e.target.value);
  };

  const handle_nick = (e) => {
    setNickname(e.target.value);
  };

  // 사업자 등록증 여부를 묻기 위한 라디오 버튼
  const Business = [
    { text: "Y", value: 0 },
    { text: "N", value: 1 },
  ];
  const handle_business = (e) => {
    setSelectedBusiness(Number(e.target.value));
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
                  placeholder="기존 전화번호 나오게 해줘요"
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
                {/* 이거도 통신사 변경할때 모달창으로 바꿀거임 */}
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
                  value={passwordck} // 이거 비밀번호하고 동일한지 ajax로 확인하는거 핵심때 했는데 나중에 시간나면 해드림
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
                  placeholder="기존 닉네임으로 바꿔줘요"
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
