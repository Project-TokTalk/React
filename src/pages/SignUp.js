import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// 통신사, 약관동의는 모달창으로 처리 예정
// 나머지 요소들은 아마도? 그대로 사용 예정 (약간의 스타일 변경 필요)

const SignUp = () => {
  // 전화번호 입력 시 숫자, '-'를 제외하고 입력을 제한, 글자수 제한
  const [password, setPassword] = useState("");
  const [phone, setphone] = useState("");
  const [mobile, setMobile] = useState("skt");
  const [country, setCountry] = useState("kr");
  const [resi_num, setResiNum] = useState("");
  const [gender, setGender] = useState("");
  const [nickname, setNickname] = useState("");
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [service, setService] = useState(false);
  const [policy, setPolicy] = useState(false);

  const resi_numRef = useRef("");
  const genderRef = useRef("");
  const navigate = useNavigate();

  // 최종적으로 저장된 데이터를 보내주는 함수
  function Send() {
    console.log("Sending data:", {
      password: password,
      phone: phone,
      mobile: mobile,
      country: country,
      resi_num: resi_num,
      gender: gender,
      nickname: nickname,
      selectedBusiness: selectedBusiness,
      service: service,
      policy: policy,
    });
    // 손승아, axios.post를 이용해 Spring Boot와 연결, 20240326
    axios.post("http://localhost:8081/user/signup",{
        password: password,
        phone: phone,
        mobile: mobile,
        nation: country,
        age: resi_num,
        gender: gender,
        name: nickname,
        selectedBusiness: selectedBusiness,
        service: service,
        policy: policy,
    },{
    headers:{
      'Content-Type': 'application/json'
    }
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

  const handleJoinUs = (e) => {
    e.preventDefault(); // 폼 기본 동작 방지

    // 입력 필드 유효성 검사
    if (
      !password ||
      !phone ||
      !resi_num ||
      !gender ||
      !nickname ||
      selectedBusiness === null ||
      !service ||
      !policy
    ) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    Send();
    navigate("/signin"); // 라우팅 처리
    // navigate("/chat"); // 라우팅 처리
  };

  const handle_pw = (e) => {
    setPassword(e.target.value);
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

  const countryList = [
    { value: "kr", name: "South Korea" },
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "mx", name: "Mexico" },
    { value: "cn", name: "China" },
    { value: "jp", name: "Japen" },
  ];

  const handle_country = (e) => {
    setCountry(e.target.value);
  };

  // 주민번호 - 숫자만 입력하도록 제한
  const handle_regi = (e) => {
    const regex1 = /^[0-9]{0,6}$/;
    if (regex1.test(e.target.value)) {
      setResiNum(e.target.value);
    }
  };

  // 주민번호 앞 6자리를 입력 시 자동으로 뒷자리 입력란으로 이동
  useEffect(() => {
    resi_num.length >= 6 && genderRef.current.focus();
  }, [resi_num]);

  // 성별 입력란
  const handle_gender = (e) => {
    const regex2 = /^[0-9]{0,1}$/;
    if (regex2.test(e.target.value)) {
      setGender(e.target.value);
    }
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

  const handle_service = (isChecked) => {
    setService(isChecked);
  };

  const handle_policy = (isChecked) => {
    setPolicy(isChecked);
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
                  placeholder="숫자만 입력해주세요"
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

            <div className="grid-cols-1 sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  value={country}
                  onChange={handle_country}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {countryList.map((item) => (
                    <option value={item.value} key={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <label
              htmlFor="resi_num"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Korean Residential Number
            </label>
            {/* grid-cols-8, sm:grid-cols-12 작은화면 : 8개, 그 외 : 12개로 칸을 분할, 최대가 12개임 */}
            <div className="mt-3 grid grid-cols-8 gap-x-3 gap-y-6 sm:grid-cols-12">
              <div className="col-span-4 sm:col-span-6">
                <input
                  id="resi_num"
                  name="resi_num"
                  type="text"
                  value={resi_num}
                  ref={resi_numRef}
                  onChange={(event) => {
                    handle_regi(event);
                  }}
                  className="flex-grow:1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <div className="flex-grow:1 flex w-full items-center justify-center rounded-md border-0 py-1.5 text-gray-900  sm:text-sm sm:leading-6">
                  -
                </div>
              </div>
              <div className="col-span-1 flex items-center justify-center sm:col-span-2 ">
                <input
                  id="gender"
                  name="gender"
                  type="text"
                  value={gender}
                  ref={genderRef}
                  maxLength={1}
                  onChange={(event) => {
                    handle_gender(event);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                  placeholder="닉네임은 13글자까지 입력할 수 있습니다."
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

            <fieldset>
              <div className="mt-3 space-y-3">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="service"
                      name="service"
                      type="checkbox"
                      required
                      checked={service}
                      onChange={(e) => handle_service(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="service"
                      className="font-medium text-gray-900"
                    >
                      Agree with Terms of Service
                    </label>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="policy"
                      name="policy"
                      type="checkbox"
                      required
                      checked={policy}
                      onChange={(e) => handle_policy(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="policy"
                      className="font-medium text-gray-900"
                    >
                      Agree with Privacy Policy
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>

            <div>
              <button
                type="submit"
                onClick={handleJoinUs}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Signin
              </button>
            </div>
          </form>

          <div className="mt-3 grid justify-center text-sm text-gray-500">
            <Link
              to={"/signin"}
              className="flex w-fit justify-center text-left font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Already a Member of Us
            </Link>

            <Link
              to={"/chat"}
              className="mt-1 flex w-fit justify-center font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              I don't want to respond
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
