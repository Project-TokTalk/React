const FAQ = () => {
  const IdList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  return (
    <>
      <div className="mb-8 mt-8 flex justify-center">
        <div className="text-xl leading-6">
          <h2 className="mb-3 text-2xl font-bold">자주 묻는 질문</h2>
          <div className="mt-3 grid h-full flex-col">
            <div
              className="h-full overflow-auto bg-white shadow"
              id="faq-scroll"
            >
              <div className="max-h-full overflow-y-auto">
                <table className="h-full table-fixed ring-1 ring-inset ring-gray-300">
                  <tbody className="h-full">
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
                          불편한데 안지워지네 다른 크기는 어떻게든 조절했는데
                          저거 크기 h-96 이상으로 할 수 없으니까 어찌 할 방도가
                          없네
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

                    {IdList.map((id_faq) => (
                      <tr
                        key={id_faq}
                        className="relative scale-100 transform
                    cursor-default border-b-2 py-1 text-xs"
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
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
