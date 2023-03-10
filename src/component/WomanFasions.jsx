import { ImStarFull } from 'solid-icons/im';
import { ImStarEmpty } from 'solid-icons/im';
import { FaSolidArrowRightLong } from 'solid-icons/fa'

export default function WomanFasions() {
  return (
    <section class="sm:flex pb-16 my-10 ">
      <div class="pl-3 bg-white sm:w-1/4 mr-5">
      <h2 class="text-xl font-bold mb-8">Woman's Fashion</h2>
        <h1>Wireless Speaker</h1>
        <h1>Tablet</h1>
        <h1>Smartphone</h1>
        <h1>Laptop</h1>
        <h1>iMac</h1>
        <h1>Game Controller</h1>
        <h1>Drone</h1>
        <h1>Apple</h1>
        <a class="grid grid-cols-2 mt-8">  <h2 class="text-xl">Browse All </h2> <p class="my-auto"><FaSolidArrowRightLong /></p></a>
      </div>

      <div class="grid sm:grid-cols-4 gap-4 sm:w-3/4">
        <ul class="text-center bg-white rounded pb-3">
       <button>
       <li>
            <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F4.DenimBlueJeans.png&w=1920&q=75" />
          </li>
          <div>Denim Blue Jens</div>
          <div class="font-bold">$210.00</div>
          <div class="text-yelow scale-75">
            <ul class="flex mx-auto w-28 items-center">
              <li>
                <ImStarFull />
              </li>
              <li>
                <ImStarFull />
              </li>
              <li>
                <ImStarFull />
              </li>
              <li>
                <ImStarFull />
              </li>
              <li>
                <ImStarEmpty />
              </li>
              <li class="text-black pl-1 ">(0)</li>
            </ul>
          </div>
       </button>

           <div class="flex border rounded m-4">
            <button class="mx-auto my-1 font-medium">Add To Cart</button>
          </div>
        </ul>

        <ul class="text-center bg-white rounded pb-3">
        <button>
        <li>
            <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F19.BlackWhiteSweater.png&w=1920&q=75" />
          </li>
          <div>Black White Sweeter</div>
          <div class="font-bold">$210.00</div>
          <div class="text-yelow scale-75">
            <ul class="flex mx-auto w-28 items-center">
              <li>
                <ImStarFull />
              </li>
              <li>
                <ImStarFull />
              </li>
              <li>
                <ImStarFull />
              </li>
              <li>
                <ImStarFull />
              </li>
              <li>
                <ImStarEmpty />
              </li>
              <li class="text-black pl-1 ">(0)</li>
            </ul>
          </div>
        </button>

           <div class="flex border rounded m-4">
            <button class="mx-auto my-1 font-medium">Add To Cart</button>
          </div>
        </ul>

        <ul class="text-center bg-white rounded pb-3">
       <button>
       <li>
            <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=1920&q=75" />
          </li>
          <div>Gray Overcoat Women</div>
          <div class="font-bold">$210.00</div>
          <div class="text-yelow scale-75">
            <ul class="flex mx-auto w-28 items-center">
              <li>
                <ImStarFull />
              </li>
              <li>
                <ImStarFull />
              </li>
              <li>
                <ImStarFull />
              </li>
              <li>
                <ImStarFull />
              </li>
              <li>
                <ImStarEmpty />
              </li>
              <li class="text-black pl-1 ">(0)</li>
            </ul>
          </div>

       </button>
           <div class="flex border rounded m-4">
            <button class="mx-auto my-1 font-medium">Add To Cart</button>
          </div>
        </ul>

        <ul class="text-center bg-white rounded pb-3">
         <button>
         <li>
            <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FShoes%2F1.Nike%20Red.png&w=1920&q=75" />
          </li>
          <div>Nike Red</div>
          <div class="font-bold">$210.00</div>
          <div class="text-yelow scale-75">
            <ul class="flex mx-auto w-28 items-center">
              <li>
                <ImStarFull />
              </li>
              <li>
                <ImStarFull />
              </li>
              <li>
                <ImStarFull />
              </li>
              <li>
                <ImStarFull />
              </li>
              <li>
                <ImStarEmpty />
              </li>
              <li class="text-black pl-1 ">(0)</li>
            </ul>
          </div>
         </button>

           <div class="flex border rounded m-4">
            <button class="mx-auto my-1 font-medium">Add To Cart</button>
          </div>
        </ul>
      </div>
    </section>
  );
}
