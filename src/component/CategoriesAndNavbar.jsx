import { AiOutlineRight } from 'solid-icons/ai';
import { CgMenuGridR } from 'solid-icons/cg';
import { FaSolidAngleDown } from 'solid-icons/fa';

export default function CategoriesNavbar() {
  return (
    <section class="pt-10 pb-2 bg-white items-center relative sm:flex ">
      <button class="flex  w-1/4">
        <div class="flex h-10 relative rounded items-center place-content-start sm:w-full bg-gray ml-1">
          <CgMenuGridR class="ml-1 text-xl " />
          <div class="text-xs text-graydark sm:text-sm ml-1">Categories</div>
          <p class=" sm:absolute sm:right-2 ">
            <AiOutlineRight class=" " />
          </p>
        </div>
      </button>

      {/* HOME START */}
      <ul class="hidden sm:flex text-xs absolute right-0 bg-white sm:text-sm sm:gap-8">
        <li class="relative flex group">
          <button class="flex  hover:text-red cursor-default">
            Home <FaSolidAngleDown class="my-auto ml-1" />
          </button>
          <div class="absolute top-0 pt-2 pl-4 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[280px] transform ">
            <div class="relative top-5 p-6 rounded-xl bg-white shadow-2xl w-full leading-9">
              <p class="hover:text-red hover:scale-150 hover:text-center">
                Market 1
              </p>
              <p class="hover:text-red hover:scale-150 hover:text-center">
                Market 2
              </p>
              <p class="hover:text-red hover:scale-150 hover:text-center">
                Furniture
              </p>
              <p class="hover:text-red hover:scale-150 hover:text-center">
                Grocery 1
              </p>
              <p class="hover:text-red hover:scale-150 hover:text-center">
                Grocery 2
              </p>
              <p class="hover:text-red hover:scale-150 hover:text-center">
                Grocery 3
              </p>
              <p class="hover:text-red hover:scale-150 hover:text-center">
                Health and Beauty
              </p>
              <p class="hover:text-red hover:scale-150 hover:text-center">
                Fasions 1
              </p>
              <p class="hover:text-red hover:scale-150 hover:text-center">
                Fasions 2
              </p>
              <p class="hover:text-red hover:scale-150 hover:text-center">
                Fasions 3
              </p>
              <p class="hover:text-red hover:scale-150 hover:text-center">
                Gift Store
              </p>
              <p class="hover:text-red hover:scale-150 hover:text-center">
                Gadget
              </p>
            </div>
          </div>
        </li>
        {/* HOME END */}
        {/* MEGA MENU START */}

       <li class="relative flex group">
          <button class="flex  hover:text-red cursor-default">
            Mega Menu <FaSolidAngleDown class="my-auto ml-1" />
          </button>
          <div class="absolute top-0 pt-2 pl-4 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[280px] transform ">
            <div class="relative top-5 p-6 rounded-xl bg-white shadow-2xl w-full leading-9">
              <p class="hover:text-red hover:scale-150 hover:text-center">
              
              </p>
              
            </div>
          </div>
        </li>
        {/* MEGA MENU END */}

        {/* FULL SCREEN MENU START */}

        <li class="relative flex group">
          <button class="flex  hover:text-red cursor-default">
            Full Screen Menu <FaSolidAngleDown class="my-auto ml-1" />
          </button>
          <div class="absolute top-0 pt-2 pl-4 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 transform ">
            <div class="relative top-5 p-6 rounded-xl bg-white shadow-2xl w-full leading-9">
              <p class="hover:text-red hover:scale-150 hover:text-center">
                
              </p>
            
            </div>
          </div>
        </li>
{/* FULL SCREEN MENU END */}
{/* PAGES START */}
        <li class="relative flex group">
          <button class="flex  hover:text-red cursor-default">
            Pages <FaSolidAngleDown class="my-auto ml-1" />
          </button>
          <div class="absolute top-0 pt-2 pl-4 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[280px] transform ">
            <div class="relative top-5 p-6 rounded-xl bg-white shadow-2xl w-full leading-9">
              <p class="hover:text-red hover:scale-150 hover:text-center">
               Sale Page
              </p>
              <p class="hover:text-red hover:scale-150 hover:text-center">
               Vendor
              </p>
              <p class="hover:text-red hover:scale-150 hover:text-center">
               Shop
              </p>
             
            </div>
          </div>
        </li>
{/* PAGES END */}
{/* USER ACCOUNT START */}
        <li class="relative flex group">
          <button class="flex  hover:text-red cursor-default">
            User Account <FaSolidAngleDown class="my-auto ml-1" />
          </button>
          <div class="absolute top-0 pt-2 pl-4 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[280px] transform ">
            <div class="relative top-5 p-6 rounded-xl bg-white shadow-2xl w-full leading-9">
            <p class="hover:text-red hover:scale-150 hover:text-center">
                Orders
              </p>
              <p class="hover:text-red hover:scale-150 hover:text-center">
                Profile
              </p>
              <p class="hover:text-red hover:scale-150 hover:text-center">
                Address
              </p>
              <p class="hover:text-red hover:scale-150 hover:text-center">
                Suport Tikets
              </p>
              <p class="hover:text-red hover:scale-150 hover:text-center">
                Wishlist
              </p>
            
            </div>
          </div>
        </li>
{/* USER ACCOUNT END */}
{/* VENDOR ACCOUNT START */}
        <li class="relative flex group">
          <button class="flex  hover:text-red cursor-default">
            Vendor Account <FaSolidAngleDown class="my-auto ml-1" />
          </button>
          <div class="absolute top-0 pt-2 pl-4 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 w-full transform ">
            <div class="relative top-5 p-6 rounded-xl bg-white shadow-2xl w-full leading-9">
              <p class="hover:text-red hover:scale-150 hover:text-center">
               Dashbord
              </p>
              <p class="hover:text-red hover:scale-150 hover:text-center">
                Products
              </p>
              <p class="hover:text-red hover:scale-150 hover:text-center">
                Orders
              </p>
              <p class="hover:text-red hover:scale-150 hover:text-center">
                Profile
              </p>
            
            </div>
          </div>
        </li>
{/* VENDOR ACCOUNT END */}
      </ul>
    </section>
  );
}
