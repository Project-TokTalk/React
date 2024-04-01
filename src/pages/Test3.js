import React, { useState, useEffect, useRef } from "react";

const Test = () => {
  return (
    <>
      <div class="flex h-screen w-full bg-white text-gray-800 antialiased">
        <nav
          aria-label="side bar"
          aria-orientation="vertical"
          class="flex flex-none flex-col items-center border-r bg-teal-900 text-center text-gray-400"
        >
          <div class="flex h-16 w-full items-center">
            <img
              class="mx-auto h-6 w-6"
              src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/leaves.png"
            />
          </div>

          <ul>
            <li>
              <a
                title="Home"
                href="#home"
                class="flex h-16 w-full items-center bg-teal-700 px-6 text-white"
              >
                <i class="mx-auto">
                  <svg
                    class="h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" />
                  </svg>
                </i>
              </a>
            </li>
            <li>
              <a
                title="Views"
                href="#views"
                class="flex h-16 w-full items-center px-6 hover:text-white"
              >
                <i class="mx-auto">
                  <svg
                    class="h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.546 3h-13.069l-5.477 8.986v9.014h24v-9.014l-5.454-8.986zm-3.796 12h-5.5l-2.25-3h-4.666l4.266-7h10.82l4.249 7h-4.669l-2.25 3zm-9.75-4l.607-1h12.787l.606 1h-14zm12.18-3l.607 1h-11.573l.607-1h10.359zm-1.214-2l.606 1h-9.144l.607-1h7.931z" />
                  </svg>
                </i>
              </a>
            </li>
            <li>
              <a
                title="Customer Lists"
                href="#customer-lists"
                class="flex h-16 w-full items-center px-6 hover:text-white"
              >
                <i class="mx-auto">
                  <svg
                    class="h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
                  </svg>
                </i>
              </a>
            </li>
            <li>
              <a
                title="Reporting"
                href="#reporting"
                class="flex h-16 w-full items-center px-6 hover:text-white"
              >
                <i class="mx-auto">
                  <svg
                    class="h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 19h-4v-4h4v4zm6 0h-4v-8h4v8zm6 0h-4v-13h4v13zm6 0h-4v-19h4v19zm1 2h-24v2h24v-2z" />
                  </svg>
                </i>
              </a>
            </li>
            <li>
              <a
                title="Admin"
                href="#admin"
                class="flex h-16 w-full items-center px-6 hover:text-white"
              >
                <i class="mx-auto">
                  <svg
                    class="h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
                  </svg>
                </i>
              </a>
            </li>
          </ul>

          <div class="mt-auto flex h-16 w-full items-center">
            <img
              style={{ filter: "invert(85%)" }}
              class="mx-auto h-8 w-10"
              src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/chi.png"
            />
          </div>
        </nav>

        <div class="flex flex-1 flex-col">
          <nav
            aria-label="top bar"
            class="flex h-16 flex-none justify-between bg-white"
          >
            <ul
              aria-label="top bar left"
              aria-orientation="horizontal"
              class="flex"
            >
              <li class="group relative">
                <button
                  aria-controls="add"
                  aria-expanded="false"
                  aria-haspopup="listbox"
                  class="flex h-full items-center px-4 text-sm"
                >
                  <i>
                    <svg
                      class="mx-auto h-3 w-3 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 10h-10v-10h-2v10h-10v2h10v10h2v-10h10z" />
                    </svg>
                  </i>
                  <span class="ml-2">Add</span>
                </button>
                <span class="absolute hidden p-1 group-hover:block"></span>
              </li>
            </ul>

            <ul
              aria-label="top bar right"
              aria-orientation="horizontal"
              class="flex items-center px-8"
            >
              <li class="relative">
                <input
                  title="Search Bar"
                  aria-label="search bar"
                  role="search"
                  class="w-4 cursor-pointer rounded-md py-2 pl-4 pr-8 placeholder-transparent transition-all duration-300 ease-in-out focus:w-64 focus:cursor-text focus:border-black focus:placeholder-gray-500"
                  type="text"
                  placeholder="Search Chi Desk Support"
                />
                <i class="pointer-events-none absolute right-0 top-0 flex h-full items-center pr-3">
                  <svg
                    class="mx-auto h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
                  </svg>
                </i>
              </li>

              <li class="ml-3 h-8 w-8">
                <button
                  title="Notifications"
                  aria-label="notifications"
                  class="focus:shadow-outline h-full w-full rounded-md bg-gray-600 text-white focus:outline-none"
                >
                  <i>
                    <svg
                      class="mx-auto h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z" />
                    </svg>
                  </i>
                </button>
              </li>

              <li class="ml-3 h-8 w-8">
                <button
                  title="v2 REPL"
                  aria-label="repl"
                  class="focus:shadow-outline h-full w-full rounded-md bg-gray-600 text-white focus:outline-none"
                >
                  <i>
                    <svg
                      class="mx-auto h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z" />
                    </svg>
                  </i>
                </button>
              </li>

              <li class="ml-3 h-8 w-8">
                <button
                  title="Products"
                  aria-label="chi desk products"
                  class="focus:shadow-outline h-full w-full rounded-md focus:outline-none"
                >
                  <i class="text-gray-600">
                    <svg
                      class="mx-auto h-5 w-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11 11h-11v-11h11v11zm13 0h-11v-11h11v11zm-13 13h-11v-11h11v11zm13 0h-11v-11h11v11z" />
                    </svg>
                  </i>
                </button>
              </li>

              <li class="ml-3 h-10 w-10">
                <button
                  title="Page Menu"
                  aria-label="page menu"
                  class="focus:shadow-outline h-full w-full rounded-full border focus:outline-none"
                >
                  <img
                    class="mx-auto h-full w-full rounded-full"
                    src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/me.jpg"
                  />
                </button>
              </li>
            </ul>
          </nav>

          <header
            aria-label="page caption"
            class="flex h-16 flex-none items-center border-t bg-gray-100 px-4"
          >
            <h1 id="page-caption" class="text-lg font-semibold">
              Dashboard
            </h1>
          </header>

          <main class="flex min-h-0 flex-grow border-t">
            <section class="flex min-h-0 w-full max-w-sm flex-none flex-col overflow-auto bg-gray-100 p-4">
              <h1 class="mb-3 font-semibold">Updates to your tickets</h1>
              <ul>
                <li>
                  <article
                    tabindex="0"
                    class="mb-2 flex cursor-pointer rounded-md border bg-white p-3 text-gray-700 hover:border-green-500 focus:border-green-500 focus:outline-none"
                  >
                    <span class="flex-none pr-2 pt-1">
                      <img
                        class="h-8 w-8 rounded-md"
                        src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/avatar.png"
                      />
                    </span>
                    <div class="flex-1">
                      <header class="mb-1">
                        Tarun T <span class="font-semibold">commented</span> on
                        <h1 class="inline">"RE: WPMS issue".</h1>
                      </header>
                      <p class="text-gray-600">
                        Hi Mazhar, Please note this issue comes when user is not
                        closing or logout sy…
                      </p>
                      <footer class="mt-2 text-sm text-gray-500">
                        Friday 22:16
                      </footer>
                    </div>
                  </article>
                </li>
                <li>
                  <article
                    tabindex="0"
                    class="mb-2 flex cursor-pointer rounded-md border bg-white p-3 text-gray-700 hover:border-green-500 focus:border-green-500 focus:outline-none"
                  >
                    <span class="flex-none pr-2 pt-1">
                      <img
                        class="h-8 w-8 rounded-md"
                        src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/avatar.png"
                      />
                    </span>
                    <div class="flex-1">
                      <header class="mb-1">
                        Tarun T <span class="font-semibold">commented</span> on
                        <h1 class="inline">"RE: WPMS issue".</h1>
                      </header>
                      <p class="text-gray-600">
                        Hi Mazhar, Please note this issue comes when user is not
                        closing or logout sy…
                      </p>
                      <footer class="mt-2 text-sm text-gray-500">
                        Friday 22:16
                      </footer>
                    </div>
                  </article>
                </li>
                <li>
                  <article
                    tabindex="0"
                    class="mb-2 flex cursor-pointer rounded-md border bg-white p-3 text-gray-700 hover:border-green-500 focus:border-green-500 focus:outline-none"
                  >
                    <span class="flex-none pr-2 pt-1">
                      <img
                        class="h-8 w-8 rounded-md"
                        src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/avatar.png"
                      />
                    </span>
                    <div class="flex-1">
                      <header class="mb-1">
                        Tarun T <span class="font-semibold">commented</span> on
                        <h1 class="inline">"RE: WPMS issue".</h1>
                      </header>
                      <p class="text-gray-600">
                        Hi Mazhar, Please note this issue comes when user is not
                        closing or logout sy…
                      </p>
                      <footer class="mt-2 text-sm text-gray-500">
                        Friday 22:16
                      </footer>
                    </div>
                  </article>
                </li>
                <li>
                  <article
                    tabindex="0"
                    class="mb-2 flex cursor-pointer rounded-md border bg-white p-3 text-gray-700 hover:border-green-500 focus:border-green-500 focus:outline-none"
                  >
                    <span class="flex-none pr-2 pt-1">
                      <img
                        class="h-8 w-8 rounded-md"
                        src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/avatar.png"
                      />
                    </span>
                    <div class="flex-1">
                      <header class="mb-1">
                        Tarun T <span class="font-semibold">commented</span> on
                        <h1 class="inline">"RE: WPMS issue".</h1>
                      </header>
                      <p class="text-gray-600">
                        Hi Mazhar, Please note this issue comes when user is not
                        closing or logout sy…
                      </p>
                      <footer class="mt-2 text-sm text-gray-500">
                        Friday 22:16
                      </footer>
                    </div>
                  </article>
                </li>
                <li>
                  <article
                    tabindex="0"
                    class="mb-2 flex cursor-pointer rounded-md border bg-white p-3 text-gray-700 hover:border-green-500 focus:border-green-500 focus:outline-none"
                  >
                    <span class="flex-none pr-2 pt-1">
                      <img
                        class="h-8 w-8 rounded-md"
                        src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/avatar.png"
                      />
                    </span>
                    <div class="flex-1">
                      <header class="mb-1">
                        Tarun T <span class="font-semibold">commented</span> on
                        <h1 class="inline">"RE: WPMS issue".</h1>
                      </header>
                      <p class="text-gray-600">
                        Hi Mazhar, Please note this issue comes when user is not
                        closing or logout sy…
                      </p>
                      <footer class="mt-2 text-sm text-gray-500">
                        Friday 22:16
                      </footer>
                    </div>
                  </article>
                </li>
                <li>
                  <article
                    tabindex="0"
                    class="mb-2 flex cursor-pointer rounded-md border bg-white p-3 text-gray-700 hover:border-green-500 focus:border-green-500 focus:outline-none"
                  >
                    <span class="flex-none pr-2 pt-1">
                      <img
                        class="h-8 w-8 rounded-md"
                        src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/avatar.png"
                      />
                    </span>
                    <div class="flex-1">
                      <header class="mb-1">
                        Tarun T <span class="font-semibold">commented</span> on
                        <h1 class="inline">"RE: WPMS issue".</h1>
                      </header>
                      <p class="text-gray-600">
                        Hi Mazhar, Please note this issue comes when user is not
                        closing or logout sy…
                      </p>
                      <footer class="mt-2 text-sm text-gray-500">
                        Friday 22:16
                      </footer>
                    </div>
                  </article>
                </li>
                <li>
                  <article
                    tabindex="0"
                    class="mb-2 flex cursor-pointer rounded-md border bg-white p-3 text-gray-700 hover:border-green-500 focus:border-green-500 focus:outline-none"
                  >
                    <span class="flex-none pr-2 pt-1">
                      <img
                        class="h-8 w-8 rounded-md"
                        src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/avatar.png"
                      />
                    </span>
                    <div class="flex-1">
                      <header class="mb-1">
                        Tarun T <span class="font-semibold">commented</span> on
                        <h1 class="inline">"RE: WPMS issue".</h1>
                      </header>
                      <p class="text-gray-600">
                        Hi Mazhar, Please note this issue comes when user is not
                        closing or logout sy…
                      </p>
                      <footer class="mt-2 text-sm text-gray-500">
                        Friday 22:16
                      </footer>
                    </div>
                  </article>
                </li>
                <li>
                  <article
                    tabindex="0"
                    class="mb-2 flex cursor-pointer rounded-md border bg-white p-3 text-gray-700 hover:border-green-500 focus:border-green-500 focus:outline-none"
                  >
                    <span class="flex-none pr-2 pt-1">
                      <img
                        class="h-8 w-8 rounded-md"
                        src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/avatar.png"
                      />
                    </span>
                    <div class="flex-1">
                      <header class="mb-1">
                        Tarun T <span class="font-semibold">commented</span> on
                        <h1 class="inline">"RE: WPMS issue".</h1>
                      </header>
                      <p class="text-gray-600">
                        Hi Mazhar, Please note this issue comes when user is not
                        closing or logout sy…
                      </p>
                      <footer class="mt-2 text-sm text-gray-500">
                        Friday 22:16
                      </footer>
                    </div>
                  </article>
                </li>
                <li>
                  <article
                    tabindex="0"
                    class="mb-2 flex cursor-pointer rounded-md border bg-white p-3 text-gray-700 hover:border-green-500 focus:border-green-500 focus:outline-none"
                  >
                    <span class="flex-none pr-2 pt-1">
                      <img
                        class="h-8 w-8 rounded-md"
                        src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/avatar.png"
                      />
                    </span>
                    <div class="flex-1">
                      <header class="mb-1">
                        Tarun T <span class="font-semibold">commented</span> on
                        <h1 class="inline">"RE: WPMS issue".</h1>
                      </header>
                      <p class="text-gray-600">
                        Hi Mazhar, Please note this issue comes when user is not
                        closing or logout sy…
                      </p>
                      <footer class="mt-2 text-sm text-gray-500">
                        Friday 22:16
                      </footer>
                    </div>
                  </article>
                </li>
                <li>
                  <article
                    tabindex="0"
                    class="mb-2 flex cursor-pointer rounded-md border bg-white p-3 text-gray-700 hover:border-green-500 focus:border-green-500 focus:outline-none"
                  >
                    <span class="flex-none pr-2 pt-1">
                      <img
                        class="h-8 w-8 rounded-md"
                        src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/avatar.png"
                      />
                    </span>
                    <div class="flex-1">
                      <header class="mb-1">
                        Tarun T <span class="font-semibold">commented</span> on
                        <h1 class="inline">"RE: WPMS issue".</h1>
                      </header>
                      <p class="text-gray-600">
                        Hi Mazhar, Please note this issue comes when user is not
                        closing or logout sy…
                      </p>
                      <footer class="mt-2 text-sm text-gray-500">
                        Friday 22:16
                      </footer>
                    </div>
                  </article>
                </li>
                <li>
                  <article
                    tabindex="0"
                    class="mb-2 flex cursor-pointer rounded-md border bg-white p-3 text-gray-700 hover:border-green-500 focus:border-green-500 focus:outline-none"
                  >
                    <span class="flex-none pr-2 pt-1">
                      <img
                        class="h-8 w-8 rounded-md"
                        src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/avatar.png"
                      />
                    </span>
                    <div class="flex-1">
                      <header class="mb-1">
                        Tarun T <span class="font-semibold">commented</span> on
                        <h1 class="inline">"RE: WPMS issue".</h1>
                      </header>
                      <p class="text-gray-600">
                        Hi Mazhar, Please note this issue comes when user is not
                        closing or logout sy…
                      </p>
                      <footer class="mt-2 text-sm text-gray-500">
                        Friday 22:16
                      </footer>
                    </div>
                  </article>
                </li>
                <li>
                  <article
                    tabindex="0"
                    class="mb-2 flex cursor-pointer rounded-md border bg-white p-3 text-gray-700 hover:border-green-500 focus:border-green-500 focus:outline-none"
                  >
                    <span class="flex-none pr-2 pt-1">
                      <img
                        class="h-8 w-8 rounded-md"
                        src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/avatar.png"
                      />
                    </span>
                    <div class="flex-1">
                      <header class="mb-1">
                        Tarun T <span class="font-semibold">commented</span> on
                        <h1 class="inline">"RE: WPMS issue".</h1>
                      </header>
                      <p class="text-gray-600">
                        Hi Mazhar, Please note this issue comes when user is not
                        closing or logout sy…
                      </p>
                      <footer class="mt-2 text-sm text-gray-500">
                        Friday 22:16
                      </footer>
                    </div>
                  </article>
                </li>
              </ul>
            </section>

            <section
              aria-label="main content"
              class="flex min-h-0 flex-auto flex-col border-l"
            >
              <nav class="flex bg-gray-100 p-4">
                <section
                  aria-labelledby="open-tickets-tabs-label"
                  class="mr-4 focus:outline-none"
                >
                  <label
                    id="open-tickets-tabs-label"
                    class="mb-1 block text-sm font-semibold"
                  >
                    Open Tickets
                    <span class="font-normal text-gray-700">(current)</span>
                  </label>
                  <ul class="flex">
                    <li>
                      <button class="flex w-24 flex-col items-center rounded-l-md border border-r-0 bg-white p-2 focus:bg-yellow-200 focus:outline-none">
                        <p class="text-lg font-semibold">6</p>
                        <p class="text-sm uppercase text-gray-600">You</p>
                      </button>
                    </li>
                    <li>
                      <button class="flex w-24 cursor-pointer flex-col items-center rounded-r-md border bg-white p-2 focus:bg-yellow-200 focus:outline-none">
                        <p class="text-lg font-semibold">23</p>
                        <p class="text-sm uppercase text-gray-600">Groups</p>
                      </button>
                    </li>
                  </ul>
                </section>

                <section
                  aria-labelledby="ticket-statistics-tabs-label"
                  class="pb-2"
                >
                  <label
                    id="ticket-statistics-tabs-label"
                    class="mb-1 block text-sm font-semibold"
                  >
                    Ticket Statistics
                    <span class="font-normal text-gray-700">(this week)</span>
                  </label>
                  <ul class="flex">
                    <li>
                      <button class="flex w-24 flex-col items-center rounded-l-md border border-r-0 bg-white p-2 focus:bg-yellow-200 focus:outline-none">
                        <p class="text-lg font-semibold">16</p>
                        <p class="text-sm uppercase text-gray-600">good</p>
                      </button>
                    </li>
                    <li>
                      <button class="flex w-24 flex-col items-center border border-r-0 bg-white p-2 focus:bg-yellow-200 focus:outline-none">
                        <p class="text-lg font-semibold">2</p>
                        <p class="text-sm uppercase text-gray-600">bad</p>
                      </button>
                    </li>

                    <li>
                      <button class="flex w-24 flex-col items-center rounded-r-md border bg-white p-2 focus:bg-yellow-200 focus:outline-none">
                        <p class="text-lg font-semibold">32</p>
                        <p class="text-sm uppercase text-gray-600">solved</p>
                      </button>
                    </li>
                  </ul>
                </section>
              </nav>

              <header class="flex items-center border-t bg-white px-4 py-1">
                <div class="flex">
                  <h2 id="content-caption" class="font-semibold">
                    Tickets requiring your attention (6)
                  </h2>
                  <span class="group relative ml-3">
                    <button
                      role="details"
                      aria-controls="info-popup"
                      class="border-b border-dotted border-blue-700 text-sm text-blue-700 focus:outline-none"
                    >
                      What is this?
                    </button>
                    <div
                      role="tooltip"
                      id="info-popup"
                      class="absolute right-0 z-50 mx-auto hidden translate-x-40 transform rounded-md rounded-t-lg pt-1 group-hover:block"
                    >
                      <div class="w-full w-screen max-w-xs rounded-md rounded-t-lg border bg-white shadow-lg">
                        <header class="rounded-t-lg bg-gray-300 px-4 py-2 font-semibold">
                          People are waiting for replies!
                        </header>
                        <div class="border-t p-4">
                          <p class="mb-4">
                            These are new or open tickets that are assigned to
                            you, unassinged in your group(s) or not assigned to
                            any group.
                          </p>
                          <p class="mb-1">
                            They are ordered by priority and requester update
                            date (oldest first).
                          </p>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
                <div class="ml-auto">
                  <button
                    title="See available tickets in this view"
                    aria-label="play"
                    class="rounded-md border px-3 py-2 leading-none"
                  >
                    Play
                  </button>
                </div>
              </header>

              <table
                aria-describedby="info-popup"
                aria-label="open tickets"
                class="flex h-full min-h-0 w-full flex-col border-t"
              >
                <thead class="flex w-full flex-col px-4">
                  <tr class="flex border-b">
                    <th class="w-24 py-3 pl-3 pr-1 text-left font-semibold">
                      <input type="checkbox" name="" id="" />
                    </th>
                    <th class="w-24 truncate px-1 py-3 text-left font-semibold">
                      ID
                    </th>
                    <th class="w-full max-w-xs truncate px-1 py-3 text-left font-semibold xl:max-w-lg">
                      Subject
                    </th>
                    <th class="flex-1 truncate px-1 py-3 text-left font-semibold">
                      Requester
                    </th>
                    <th class="flex-1 truncate px-1 py-3 text-left font-semibold">
                      Requester updated
                    </th>
                    <th class="flex-1 truncate px-1 py-3 text-left font-semibold">
                      Group
                    </th>
                    <th class="flex-1 truncate px-1 py-3 text-left font-semibold">
                      Assignee
                    </th>
                  </tr>
                </thead>
                <tbody class="flex min-h-0 w-full flex-1 flex-col overflow-hidden px-4">
                  <tr class="flex border-b">
                    <th
                      class="flex-1 bg-gray-100 px-3 py-2 text-left"
                      colspan="7"
                    >
                      <h2 class="text-sm">
                        <span class="mr-1 font-normal">Priority</span>
                        <span>Low</span>
                      </h2>
                    </th>
                  </tr>
                  <tr
                    role="row"
                    class="flex cursor-pointer border-b hover:bg-blue-100"
                  >
                    <td
                      role="cell"
                      headers="select"
                      class="flex w-24 items-start py-3 pl-3 pr-1"
                    >
                      <input class="mt-1" type="checkbox" />
                      <div class="group relative ml-auto">
                        <span
                          style={{
                            padding: "2px 5px",
                            fontSize: "0.7rem",
                            position: "relative",
                            bottom: "2px",
                          }}
                          class="rounded-sm bg-red-600 font-mono leading-none text-white"
                        >
                          O
                        </span>
                      </div>
                    </td>
                    <td class="w-24 px-1 py-3">#12534</td>
                    <td class="w-full max-w-xs px-1 py-3 xl:max-w-lg">
                      <div class="group relative w-full">
                        <p class="w-full truncate">
                          Quo laudantium error corporis accusamus unde, labore
                          quidem non officiis.
                        </p>
                      </div>
                    </td>
                    <td class="flex-1 truncate px-1 py-3">Marla Darsuz</td>
                    <td class="flex-1 truncate px-1 py-3">Tuesday 09:56</td>
                    <td class="flex-1 truncate px-1 py-3">UK Support</td>
                    <td class="flex-1 truncate px-1 py-3">Nico Braun</td>
                  </tr>
                  <tr
                    role="row"
                    class="flex cursor-pointer border-b hover:bg-blue-100"
                  >
                    <td
                      role="cell"
                      headers="select"
                      class="flex w-24 items-start py-3 pl-3 pr-1"
                    >
                      <input class="mt-1" type="checkbox" />
                      <div class="group relative ml-auto">
                        <span
                          style={{
                            padding: "2px 5px",
                            fontSize: "0.7rem",
                            position: "relative",
                            bottom: "2px",
                          }}
                          class="rounded-sm bg-red-600 font-mono leading-none text-white"
                        >
                          O
                        </span>
                      </div>
                    </td>
                    <td class="w-24 px-1 py-3">#12534</td>
                    <td class="w-full max-w-xs px-1 py-3 xl:max-w-lg">
                      <div class="group relative w-full">
                        <p class="w-full truncate">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </td>
                    <td class="flex-1 truncate px-1 py-3">Jim Beam</td>
                    <td class="flex-1 truncate px-1 py-3">Friday 10:29</td>
                    <td class="flex-1 truncate px-1 py-3">UK Support</td>
                    <td class="flex-1 truncate px-1 py-3">Nico Braun</td>
                  </tr>
                  <tr
                    role="row"
                    class="flex cursor-pointer border-b hover:bg-blue-100"
                  >
                    <td
                      role="cell"
                      headers="select"
                      class="flex w-24 items-start py-3 pl-3 pr-1"
                    >
                      <input class="mt-1" type="checkbox" />
                      <div class="group relative ml-auto">
                        <span
                          style={{
                            padding: "2px 5px",
                            fontSize: "0.7rem",
                            position: "relative",
                            bottom: "2px",
                          }}
                          class="rounded-sm bg-yellow-400 font-mono leading-none text-black"
                        >
                          N
                        </span>
                      </div>
                    </td>
                    <td class="w-24 px-1 py-3">#12534</td>
                    <td class="w-full max-w-xs px-1 py-3 xl:max-w-lg">
                      <div class="group relative w-full">
                        <p class="w-full truncate">
                          Excepturi at labore vel accusamus exercitationem quam,
                          amet provident!
                        </p>
                      </div>
                    </td>
                    <td class="flex-1 truncate px-1 py-3">Paul Ferrez</td>
                    <td class="flex-1 truncate px-1 py-3">Today 13:45</td>
                    <td class="flex-1 truncate px-1 py-3">-</td>
                    <td class="flex-1 truncate px-1 py-3">-</td>
                  </tr>
                  <tr
                    role="row"
                    class="flex cursor-pointer border-b hover:bg-blue-100"
                  >
                    <td
                      role="cell"
                      headers="select"
                      class="flex w-24 items-start py-3 pl-3 pr-1"
                    >
                      <input class="mt-1" type="checkbox" />
                      <div class="group relative ml-auto">
                        <span
                          style={{
                            padding: "2px 5px",
                            fontSize: "0.7rem",
                            position: "relative",
                            bottom: "2px",
                          }}
                          class="rounded-sm bg-red-600 font-mono leading-none text-white"
                        >
                          O
                        </span>
                      </div>
                    </td>
                    <td class="w-24 px-1 py-3">#12534</td>
                    <td class="w-full max-w-xs px-1 py-3 xl:max-w-lg">
                      <div class="group relative w-full">
                        <p class="w-full truncate">
                          impedit possimus praesentium voluptatum omnis
                          assumenda rem autem magni consequatur nostrum
                          distinctio unde.
                        </p>
                      </div>
                    </td>
                    <td class="flex-1 truncate px-1 py-3">Sara Dechicco</td>
                    <td class="flex-1 truncate px-1 py-3">Thursday 09:22</td>
                    <td class="flex-1 truncate px-1 py-3">UK Support</td>
                    <td class="flex-1 truncate px-1 py-3">Nico Braun</td>
                  </tr>

                  <tr class="flex border-b">
                    <th
                      class="flex-1 bg-gray-100 px-3 py-2 text-left"
                      colspan="7"
                    >
                      <h2 class="text-sm">
                        <span class="mr-1 font-normal">Priority</span>
                        <span>Medium</span>
                      </h2>
                    </th>
                  </tr>
                  <tr
                    role="row"
                    class="flex cursor-pointer border-b hover:bg-blue-100"
                  >
                    <td
                      role="cell"
                      headers="select"
                      class="flex w-24 items-start py-3 pl-3 pr-1"
                    >
                      <input class="mt-1" type="checkbox" />
                      <div class="group relative ml-auto">
                        <span
                          style={{
                            padding: "2px 5px",
                            fontSize: "0.7rem",
                            position: "relative",
                            bottom: "2px",
                          }}
                          class="rounded-sm bg-yellow-400 font-mono leading-none text-black"
                        >
                          N
                        </span>
                      </div>
                    </td>
                    <td class="w-24 px-1 py-3">#12534</td>
                    <td class="w-full max-w-xs px-1 py-3 xl:max-w-lg">
                      <div class="group relative w-full">
                        <p class="w-full truncate">
                          Excepturi at labore vel accusamus exercitationem
                          assumenda ex incidunt eum quam, amet provident!
                        </p>
                      </div>
                    </td>
                    <td class="flex-1 truncate px-1 py-3">Freddy Murro</td>
                    <td class="flex-1 truncate px-1 py-3">Today 12:13</td>
                    <td class="flex-1 truncate px-1 py-3">-</td>
                    <td class="flex-1 truncate px-1 py-3">-</td>
                  </tr>
                  <tr
                    role="row"
                    class="flex cursor-pointer border-b hover:bg-blue-100"
                  >
                    <td
                      role="cell"
                      headers="select"
                      class="flex w-24 items-start py-3 pl-3 pr-1"
                    >
                      <input class="mt-1" type="checkbox" />
                      <div class="group relative ml-auto">
                        <span
                          style={{
                            padding: "2px 5px",
                            fontSize: "0.7rem",
                            position: "relative",
                            bottom: "2px",
                          }}
                          class="rounded-sm bg-red-600 font-mono leading-none text-white"
                        >
                          O
                        </span>
                      </div>
                    </td>
                    <td class="w-24 px-1 py-3">#12534</td>
                    <td class="w-full max-w-xs px-1 py-3 xl:max-w-lg">
                      <div class="group relative w-full">
                        <p class="w-full truncate">
                          Odit consequatur natus aut reiciendis nisi sed!
                        </p>
                      </div>
                    </td>
                    <td class="flex-1 truncate px-1 py-3">Carla Sandaers</td>
                    <td class="flex-1 truncate px-1 py-3">Today 08:13</td>
                    <td class="flex-1 truncate px-1 py-3">-</td>
                    <td class="flex-1 truncate px-1 py-3">-</td>
                  </tr>

                  <tr class="flex hidden border-b">
                    <th
                      class="flex-1 bg-gray-100 px-3 py-2 text-left"
                      colspan="7"
                    >
                      <h2 class="text-sm">
                        <span class="mr-1 font-normal">Priority</span>
                        <span>High</span>
                      </h2>
                    </th>
                  </tr>
                </tbody>
              </table>

              <footer
                aria-label="content footer"
                class="flex hidden border-t bg-white p-3"
              >
                footer
              </footer>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Test;
