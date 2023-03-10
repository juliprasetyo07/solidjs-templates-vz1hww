import { FaBrandsTwitter } from 'solid-icons/fa';
import { FaBrandsFacebookF } from 'solid-icons/fa';
import { AiOutlineInstagram } from 'solid-icons/ai';

export default function TopBar() {
  return (
    <>
      <div class="bg-dark relative h-10">
        <div class="flex ">
          <div class=" text-white text-center flex h-10  bg-cover items-center">
            <ul class=" flex text-xs text-right items-center">
              <button class="bg-orange rounded-xl px-2 sm:px-4 py-1 font-bold ">HOT</button>
              <li class=" text-xs ml-1 md:ml-2">Free Express Shipping</li>
            </ul>
          </div>

          
            <ul class="text-white flex items-center h-10 gap-1 sm:gap-3  right-0 absolute">
              <button class=" text-xs pr-1">EN</button>
              <button>
                <FaBrandsTwitter />
              </button>
              <button>
                <FaBrandsFacebookF />
              </button>
              <button>
                <AiOutlineInstagram />
              </button>
            </ul>
        
        </div>
      </div>
    </>
  );
}
