const FAQ = () => {
  // const IdList = [1, 2, 3, 4];

  return (
    <>
      <div className="container mx-auto grid h-full w-full flex-col justify-start p-3">
        <div className="text-xl font-bold leading-6">자주 묻는 질문</div>
        <div className="mt-3 grid h-96 flex-col">
          <div className="h-full overflow-auto bg-white shadow" id="faq-scroll">
            <div className="max-h-full overflow-y-auto">
              <table className="h-full table-fixed ring-1 ring-inset ring-gray-300">
                <tbody className="h-full">
                  {/*
                  
                  여기 테이블 넣는거 이 코드 참고해서 입력하면 될듯
                  {IdList.map((id) => (
                    <tr
                      key={id}
                      className="relative scale-100 transform
                                        cursor-default border-b-2 py-1 text-xs"
                    >
                      <td className="flex justify-center whitespace-normal pl-3 pr-3">
                        {id}
                      </td>
                      <td className="flex-1 whitespace-normal pl-3 pr-3">
                        질문 리스트
                      </td>
                      <td className="flex w-20 justify-center whitespace-normal pl-3 pr-3">
                        질문 횟수
                      </td>
                    </tr>
                  ))}
                      */}

                  <tr
                    className="relative scale-100 transform
                                        cursor-default border-b-2 py-1 text-xs

                                "
                  >
                    <td className="whitespace-normal pl-3 pr-3">
                      <div>07:45</div>
                    </td>
                    <td className="whitespace-normal px-2 py-2">
                      <div className="leading-5 text-gray-900">
                        Create pull request #1213 이렇게 띄어쓰기와 함께 쓰면
                        줄바꿈 되지만
                      </div>
                    </td>
                  </tr>
                  <tr
                    className="relative scale-100 transform
                                        cursor-default border-b-2 py-1 text-xs

                                "
                  >
                    <td className="whitespace-normal pl-3 pr-3">
                      <div>07:45</div>
                    </td>
                    <td className="whitespace-normal px-2 py-2">
                      <div className="leading-5 text-gray-900">
                        Create pull request #1213
                        이렇게붙여서쓰면줄바꿈없어서칸늘어남아니이게왜안늘어나지뭐지아까는늘어났는데모르겟네아몰랑암튼뭐일단됬으니까넘어가자
                      </div>
                    </td>
                  </tr>
                  <tr
                    className="relative scale-100 transform
                                        cursor-default border-b-2 py-1 text-xs

                                "
                  >
                    <td className="whitespace-normal pl-3 pr-3">
                      <div>07:45</div>
                    </td>
                    <td className="whitespace-normal px-2 py-2">
                      <div className="leading-5 text-gray-900">
                        Create pull request #1213 이거 아래 공간있는거 너무
                        불편한데 안지워지네 다른 크기는 어떻게든 조절했는데 저거
                        크기 h-96 이상으로 할 수 없으니까 어찌 할 방도가 없네
                      </div>
                    </td>
                  </tr>
                  <tr
                    className="relative scale-100 transform
                                        cursor-default border-b-2 py-1 text-xs

                                "
                  >
                    <td className="whitespace-normal pl-3 pr-3">
                      <div>07:45</div>
                    </td>
                    <td className="whitespace-normal px-2 py-2">
                      <div className="leading-5 text-gray-900">
                        Create pull request #1213 h-1/2같은거 하면 테이블
                        스크롤링 해둔거 다 박살나서 안되고 어떻게 해야되는거야
                        머리아프네
                      </div>
                    </td>
                  </tr>
                  <tr
                    className="relative scale-100 transform
                                        cursor-default border-b-2 py-1 text-xs

                                "
                  >
                    <td className="whitespace-normal pl-3 pr-3">
                      <div>07:45</div>
                    </td>
                    <td className="whitespace-normal px-2 py-2">
                      <div className="leading-5 text-gray-900">
                        Create pull request #1213
                      </div>
                    </td>
                  </tr>
                  <tr
                    className="relative scale-100 transform
                                        cursor-default border-b-2 py-1 text-xs

                                "
                  >
                    <td className="whitespace-normal pl-3 pr-3">
                      <div>07:45</div>
                    </td>
                    <td className="whitespace-normal px-2 py-2">
                      <div className="leading-5 text-gray-900">
                        Create pull request #1213
                      </div>
                    </td>
                  </tr>
                  <tr
                    className="relative scale-100 transform
                                        cursor-default border-b-2 py-1 text-xs

                                "
                  >
                    <td className="whitespace-normal pl-3 pr-3">
                      <div>07:45</div>
                    </td>
                    <td className="whitespace-normal px-2 py-2">
                      <div className="leading-5 text-gray-900">
                        Create pull request #1213
                      </div>
                    </td>
                  </tr>
                  <tr
                    className="relative scale-100 transform
                                        cursor-default border-b-2 py-1 text-xs

                                "
                  >
                    <td className="whitespace-normal pl-3 pr-3">
                      <div>07:45</div>
                    </td>
                    <td className="whitespace-normal px-2 py-2">
                      <div className="leading-5 text-gray-900">
                        Create pull request #1213
                      </div>
                    </td>
                  </tr>
                  <tr
                    className="relative scale-100 transform
                                        cursor-default border-b-2 py-1 text-xs

                                "
                  >
                    <td className="whitespace-normal pl-3 pr-3">
                      <div>07:45</div>
                    </td>
                    <td className="whitespace-normal px-2 py-2">
                      <div className="leading-5 text-gray-900">
                        Create pull request #1213
                      </div>
                    </td>
                  </tr>
                  <tr
                    className="relative scale-100 transform
                                        cursor-default border-b-2 py-1 text-xs

                                "
                  >
                    <td className="whitespace-normal pl-3 pr-3">
                      <div>07:45</div>
                    </td>
                    <td className="whitespace-normal px-2 py-2">
                      <div className="leading-5 text-gray-900">
                        Create pull request #1213
                      </div>
                    </td>
                  </tr>
                  <tr
                    className="relative scale-100 transform
                                        cursor-default border-b-2 py-1 text-xs

                                "
                  >
                    <td className="whitespace-normal pl-3 pr-3">
                      <div>07:45</div>
                    </td>
                    <td className="whitespace-normal px-2 py-2">
                      <div className="leading-5 text-gray-900">
                        Create pull request #1213
                      </div>
                    </td>
                  </tr>
                  <tr
                    className="relative scale-100 transform
                                        cursor-default border-b-2 py-1 text-xs

                                "
                  >
                    <td className="whitespace-normal pl-3 pr-3">
                      <div>07:45</div>
                    </td>
                    <td className="whitespace-normal px-2 py-2">
                      <div className="leading-5 text-gray-900">
                        Create pull request #1213
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
