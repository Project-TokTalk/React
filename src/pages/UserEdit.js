import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// 통신사, 약관동의는 모달창으로 처리 예정
// 나머지 요소들은 아마도? 그대로 사용 예정 (약간의 스타일 변경 필요)

const UserEdit = () => {
  // 전화번호 입력 시 숫자, '-'를 제외하고 입력을 제한, 글자수 제한
  const [inputValue, setInputValue] = useState("");
  const handlePress_phone = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  useEffect(() => {
    // 전화번호가 10자리 일 시 xxx-xxx-xxxx의 형태로 변환, setInputValue에 대입
    if (inputValue.length === 10) {
      setInputValue(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    // 전화번호가 13자리 일 시 xxx-xxxx-xxxx의 형태로 변환 ('-'까지 포함한 길이), setInputValue에 대입
    if (inputValue.length === 13) {
      setInputValue(
        inputValue
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
      );
    }
  }, [inputValue]);

  // 사업자 등록증 여부를 묻기 위한 라디오 버튼
  const Business = [
    { text: "Y", value: 0 },
    { text: "N", value: 1 },
  ];
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const onChangeRadio = (e) => {
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
                  value={inputValue}
                  onChange={handlePress_phone}
                  placeholder="기존 전화번호 나오게 해줘요"
                  required
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
                  className="flex w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>SKT</option>
                  <option>KT</option>
                  <option>LG U+</option>
                  <option>알뜰폰</option>
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
                  required
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
            {/* grid-cols-8, sm:grid-cols-12 작은화면 : 8개, 그 외 : 12개로 칸을 분할, 최대가 12개임 */}
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
                  required
                  maxLength={13}
                  placeholder="기존 닉네임으로 바꿔줘요"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="Business"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
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
                      onChange={onChangeRadio}
                      checked={idx === selectedBusiness}
                      className="hidden"
                      required
                    />
                    <span
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
