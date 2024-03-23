const Unsolved = () => {
  return (
    <>
      <div class="container mx-auto flex h-screen w-full justify-center p-3">
        <div
          class="flex h-full w-full overflow-auto bg-white shadow"
          id="unsolved-scroll"
        >
          <table class="h-full w-full table-auto object-center">
            <thead className="bg-gray-100">
              <tr>
                <th class="dark:border-dark-5 whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900">
                  -
                </th>
                <th class="dark:border-dark-5 whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900">
                  미해결 질문
                </th>
                <th class="dark:border-dark-5 whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900">
                  추가할 답안
                </th>
                <th class="dark:border-dark-5 whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900"></th>
              </tr>
            </thead>
            <tbody class="bg-gray-50">
              <tr class=" text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">1</td>
                <td class="dark:border-dark-5 border p-2">
                  Jean Marc Jean Marc Jean Marc Jean MarcJean Marc Jean Marc
                  Jean Marc Jean Marc{" "}
                </td>
                <td class="dark:border-dark-5 border p-2">
                  Louis Louis Louis Louis Louis Louis Louisouis Louis Louis
                  Louis Louis Louis Louis{" "}
                </td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">2</td>
                <td class="dark:border-dark-5 border p-2">Eric</td>
                <td class="dark:border-dark-5 border p-2">Prouve</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">3</td>
                <td class="dark:border-dark-5 border p-2">Julien</td>
                <td class="dark:border-dark-5 border p-2">Clai</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">4</td>
                <td class="dark:border-dark-5 border p-2">Igor</td>
                <td class="dark:border-dark-5 border p-2">Louth</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class=" text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">5</td>
                <td class="dark:border-dark-5 border p-2">
                  Jean Marc Jean Marc Jean Marc Jean MarcJean Marc Jean Marc
                  Jean Marc Jean Marc{" "}
                </td>
                <td class="dark:border-dark-5 border p-2">
                  Louis Louis Louis Louis Louis Louis Louisouis Louis Louis
                  Louis Louis Louis Louis{" "}
                </td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">6</td>
                <td class="dark:border-dark-5 border p-2">Eric</td>
                <td class="dark:border-dark-5 border p-2">Prouve</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">7</td>
                <td class="dark:border-dark-5 border p-2">Julien</td>
                <td class="dark:border-dark-5 border p-2">Clai</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">8</td>
                <td class="dark:border-dark-5 border p-2">Igor</td>
                <td class="dark:border-dark-5 border p-2">Louth</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class=" text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">9</td>
                <td class="dark:border-dark-5 border p-2">
                  Jean Marc Jean Marc Jean Marc Jean MarcJean Marc Jean Marc
                  Jean Marc Jean Marc{" "}
                </td>
                <td class="dark:border-dark-5 border p-2">
                  Louis Louis Louis Louis Louis Louis Louisouis Louis Louis
                  Louis Louis Louis Louis{" "}
                </td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">10</td>
                <td class="dark:border-dark-5 border p-2">Eric</td>
                <td class="dark:border-dark-5 border p-2">Prouve</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">11</td>
                <td class="dark:border-dark-5 border p-2">Julien</td>
                <td class="dark:border-dark-5 border p-2">Clai</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">12</td>
                <td class="dark:border-dark-5 border p-2">Igor</td>
                <td class="dark:border-dark-5 border p-2">Louth</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class=" text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">13</td>
                <td class="dark:border-dark-5 border p-2">
                  Jean Marc Jean Marc Jean Marc Jean MarcJean Marc Jean Marc
                  Jean Marc Jean Marc{" "}
                </td>
                <td class="dark:border-dark-5 border p-2">
                  Louis Louis Louis Louis Louis Louis Louisouis Louis Louis
                  Louis Louis Louis Louis{" "}
                </td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">14</td>
                <td class="dark:border-dark-5 border p-2">Eric</td>
                <td class="dark:border-dark-5 border p-2">Prouve</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">15</td>
                <td class="dark:border-dark-5 border p-2">Julien</td>
                <td class="dark:border-dark-5 border p-2">Clai</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">16</td>
                <td class="dark:border-dark-5 border p-2">Igor</td>
                <td class="dark:border-dark-5 border p-2">Louth</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class=" text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">17</td>
                <td class="dark:border-dark-5 border p-2">
                  Jean Marc Jean Marc Jean Marc Jean MarcJean Marc Jean Marc
                  Jean Marc Jean Marc{" "}
                </td>
                <td class="dark:border-dark-5 border p-2">
                  Louis Louis Louis Louis Louis Louis Louisouis Louis Louis
                  Louis Louis Louis Louis{" "}
                </td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">18</td>
                <td class="dark:border-dark-5 border p-2">Eric</td>
                <td class="dark:border-dark-5 border p-2">Prouve</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">19</td>
                <td class="dark:border-dark-5 border p-2">Julien</td>
                <td class="dark:border-dark-5 border p-2">Clai</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">20</td>
                <td class="dark:border-dark-5 border p-2">Igor</td>
                <td class="dark:border-dark-5 border p-2">Louth</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">10</td>
                <td class="dark:border-dark-5 border p-2">Eric</td>
                <td class="dark:border-dark-5 border p-2">Prouve</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">11</td>
                <td class="dark:border-dark-5 border p-2">Julien</td>
                <td class="dark:border-dark-5 border p-2">Clai</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">12</td>
                <td class="dark:border-dark-5 border p-2">Igor</td>
                <td class="dark:border-dark-5 border p-2">Louth</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class=" text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">13</td>
                <td class="dark:border-dark-5 border p-2">
                  Jean Marc Jean Marc Jean Marc Jean MarcJean Marc Jean Marc
                  Jean Marc Jean Marc{" "}
                </td>
                <td class="dark:border-dark-5 border p-2">
                  Louis Louis Louis Louis Louis Louis Louisouis Louis Louis
                  Louis Louis Louis Louis{" "}
                </td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">14</td>
                <td class="dark:border-dark-5 border p-2">Eric</td>
                <td class="dark:border-dark-5 border p-2">Prouve</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">15</td>
                <td class="dark:border-dark-5 border p-2">Julien</td>
                <td class="dark:border-dark-5 border p-2">Clai</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">16</td>
                <td class="dark:border-dark-5 border p-2">Igor</td>
                <td class="dark:border-dark-5 border p-2">Louth</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class=" text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">17</td>
                <td class="dark:border-dark-5 border p-2">
                  Jean Marc Jean Marc Jean Marc Jean MarcJean Marc Jean Marc
                  Jean Marc Jean Marc{" "}
                </td>
                <td class="dark:border-dark-5 border p-2">
                  Louis Louis Louis Louis Louis Louis Louisouis Louis Louis
                  Louis Louis Louis Louis{" "}
                </td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">18</td>
                <td class="dark:border-dark-5 border p-2">Eric</td>
                <td class="dark:border-dark-5 border p-2">Prouve</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">19</td>
                <td class="dark:border-dark-5 border p-2">Julien</td>
                <td class="dark:border-dark-5 border p-2">Clai</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">20</td>
                <td class="dark:border-dark-5 border p-2">Igor</td>
                <td class="dark:border-dark-5 border p-2">Louth</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">11</td>
                <td class="dark:border-dark-5 border p-2">Julien</td>
                <td class="dark:border-dark-5 border p-2">Clai</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">12</td>
                <td class="dark:border-dark-5 border p-2">Igor</td>
                <td class="dark:border-dark-5 border p-2">Louth</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class=" text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">13</td>
                <td class="dark:border-dark-5 border p-2">
                  Jean Marc Jean Marc Jean Marc Jean MarcJean Marc Jean Marc
                  Jean Marc Jean Marc{" "}
                </td>
                <td class="dark:border-dark-5 border p-2">
                  Louis Louis Louis Louis Louis Louis Louisouis Louis Louis
                  Louis Louis Louis Louis{" "}
                </td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">14</td>
                <td class="dark:border-dark-5 border p-2">Eric</td>
                <td class="dark:border-dark-5 border p-2">Prouve</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">15</td>
                <td class="dark:border-dark-5 border p-2">Julien</td>
                <td class="dark:border-dark-5 border p-2">Clai</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">16</td>
                <td class="dark:border-dark-5 border p-2">Igor</td>
                <td class="dark:border-dark-5 border p-2">Louth</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class=" text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">17</td>
                <td class="dark:border-dark-5 border p-2">
                  Jean Marc Jean Marc Jean Marc Jean MarcJean Marc Jean Marc
                  Jean Marc Jean Marc{" "}
                </td>
                <td class="dark:border-dark-5 border p-2">
                  Louis Louis Louis Louis Louis Louis Louisouis Louis Louis
                  Louis Louis Louis Louis{" "}
                </td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">18</td>
                <td class="dark:border-dark-5 border p-2">Eric</td>
                <td class="dark:border-dark-5 border p-2">Prouve</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">19</td>
                <td class="dark:border-dark-5 border p-2">Julien</td>
                <td class="dark:border-dark-5 border p-2">Clai</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 w-12 border p-2 pl-4 ">20</td>
                <td class="dark:border-dark-5 border p-2">Igor</td>
                <td class="dark:border-dark-5 border p-2">Louth</td>
                <td class="dark:border-dark-5  w-16 border p-2 pl-4">등록</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Unsolved;
