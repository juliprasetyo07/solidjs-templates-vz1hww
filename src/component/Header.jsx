export default function Header() {
  return (
    <section class="flex pt-5">
      <a href="#"
      class=" mr-2">
        <img src="https://bazaar.ui-lib.com/assets/images/logo2.svg" />
      </a>

      <div class="mx-auto my-auto w-3/5">
        <div class="">
          <form class=" flex ">
            <input
              class="relative  border border-orange border-2 rounded-full h-7 w-full sm:h-11 mx-auto"
              type="search"
              placeholder="    Searching for..."
            />
          </form>
        </div>
      </div>

      <div class="my-auto ml-2">
        <div class="flex   gap-1 ">
          <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="bg-gray h-7 rounded-full  sm:h-9"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          </button>

         <button>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-7 bg-gray rounded-full sm:h-9"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
         </button>
        </div>
      </div>
    </section>
  );
}
