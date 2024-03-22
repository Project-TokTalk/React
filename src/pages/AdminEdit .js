const AdminEdit = () => {
  // 자주묻는 질문 + 질문 횟수 표기를 위해 두줄로 생성
  // 자주묻는 질문만 표기할 시 한줄로 변환

  return (
    <>
      <section class="h-screen bg-gray-100 px-4 text-gray-600 antialiased">
        <div class="flex h-full flex-col justify-center">
          <div class="mx-auto w-full max-w-2xl rounded-sm border border-gray-200 bg-white shadow-lg">
            <header class="border-b border-gray-100 px-5 py-4">
              <h2 class="font-semibold text-gray-800">Customers</h2>
            </header>
            <div class="p-3">
              <div class="overflow-x-auto">
                <table class="w-full table-auto">
                  <thead class="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
                    <tr>
                      <th class="whitespace-nowrap p-2">
                        <div class="text-left font-semibold">대분류</div>
                      </th>
                      <th class="whitespace-nowrap p-2">
                        <div class="text-left font-semibold">중분류</div>
                      </th>
                      <th class="whitespace-nowrap p-2">
                        <div class="text-left font-semibold">소분류</div>
                      </th>
                      <th class="whitespace-nowrap p-2">
                        <div class="text-center font-semibold">질문</div>
                      </th>
                      <th class="whitespace-nowrap p-2">
                        <div class="text-center font-semibold">답변</div>
                      </th>
                      <th class="whitespace-nowrap p-2">
                        <div class="text-center font-semibold">
                          ars 번호 및 url
                        </div>
                      </th>
                      <th class="whitespace-nowrap p-2">
                        <div class="text-center font-semibold"></div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100 text-sm">
                    {/* 여기부터 */}
                    <tr>
                      <td class="whitespace-nowrap p-2">
                        <div class="flex items-center">
                          <div class="mr-2 h-10 w-10 flex-shrink-0 sm:mr-3"></div>
                          <div class="font-medium text-gray-800">
                            Alex Shatov
                          </div>
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left">alexshatov@gmail.com</div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left font-medium text-green-500">
                          $2,890.66
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-center text-lg">🇺🇸</div>
                      </td>
                    </tr>
                    {/* 여기까지가 한 줄 */}

                    <tr>
                      <td class="whitespace-nowrap p-2">
                        <div class="flex items-center">
                          <div class="mr-2 h-10 w-10 flex-shrink-0 sm:mr-3"></div>
                          <div class="font-medium text-gray-800">
                            Philip Harbach
                          </div>
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left">philip.h@gmail.com</div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left font-medium text-green-500">
                          $2,767.04
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-center text-lg">🇩🇪</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap p-2">
                        <div class="flex items-center">
                          <div class="mr-2 h-10 w-10 flex-shrink-0 sm:mr-3"></div>
                          <div class="font-medium text-gray-800">
                            Mirko Fisuk
                          </div>
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left">mirkofisuk@gmail.com</div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left font-medium text-green-500">
                          $2,996.00
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-center text-lg">🇫🇷</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap p-2">
                        <div class="flex items-center">
                          <div class="mr-2 h-10 w-10 flex-shrink-0 sm:mr-3"></div>
                          <div class="font-medium text-gray-800">
                            Olga Semklo
                          </div>
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left">olga.s@cool.design</div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left font-medium text-green-500">
                          $1,220.66
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-center text-lg">🇮🇹</div>
                      </td>
                    </tr>

                    <tr>
                      <td class="whitespace-nowrap p-2">
                        <div class="flex items-center">
                          <div class="mr-2 h-10 w-10 flex-shrink-0 sm:mr-3"></div>
                          <div class="font-medium text-gray-800">
                            Burak Long
                          </div>
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left">longburak@gmail.com</div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left font-medium text-green-500">
                          $1,890.66
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-center text-lg">🇬🇧</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap p-2">
                        <div class="flex items-center">
                          <div class="mr-2 h-10 w-10 flex-shrink-0 sm:mr-3"></div>
                          <div class="font-medium text-gray-800">
                            Burak Long
                          </div>
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left">longburak@gmail.com</div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left font-medium text-green-500">
                          $1,890.66
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-center text-lg">🇬🇧</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap p-2">
                        <div class="flex items-center">
                          <div class="mr-2 h-10 w-10 flex-shrink-0 sm:mr-3"></div>
                          <div class="font-medium text-gray-800">
                            Burak Long
                          </div>
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left">longburak@gmail.com</div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left font-medium text-green-500">
                          $1,890.66
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-center text-lg">🇬🇧</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap p-2">
                        <div class="flex items-center">
                          <div class="mr-2 h-10 w-10 flex-shrink-0 sm:mr-3"></div>
                          <div class="font-medium text-gray-800">
                            Burak Long
                          </div>
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left">longburak@gmail.com</div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left font-medium text-green-500">
                          $1,890.66
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-center text-lg">🇬🇧</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap p-2">
                        <div class="flex items-center">
                          <div class="mr-2 h-10 w-10 flex-shrink-0 sm:mr-3"></div>
                          <div class="font-medium text-gray-800">
                            Burak Long
                          </div>
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left">longburak@gmail.com</div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left font-medium text-green-500">
                          $1,890.66
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-center text-lg">🇬🇧</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap p-2">
                        <div class="flex items-center">
                          <div class="mr-2 h-10 w-10 flex-shrink-0 sm:mr-3"></div>
                          <div class="font-medium text-gray-800">
                            Burak Long
                          </div>
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left">longburak@gmail.com</div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left font-medium text-green-500">
                          $1,890.66
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-center text-lg">🇬🇧</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap p-2">
                        <div class="flex items-center">
                          <div class="mr-2 h-10 w-10 flex-shrink-0 sm:mr-3"></div>
                          <div class="font-medium text-gray-800">
                            Burak Long
                          </div>
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left">longburak@gmail.com</div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-left font-medium text-green-500">
                          $1,890.66
                        </div>
                      </td>
                      <td class="whitespace-nowrap p-2">
                        <div class="text-center text-lg">🇬🇧</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminEdit;
