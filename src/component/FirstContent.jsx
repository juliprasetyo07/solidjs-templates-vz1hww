import { FaSolidArrowRightLong } from 'solid-icons/fa';

export default function FirstContent() {
  return (
    <section class="py-3 w-full relative  mx-auto sm:flex ">
      <div
        class="absolute w-1/2  text-left ml-4 sm:ml-24
       sm:my-32  sm:leading-8 "
      >
        <p class="sm:text-3xl text-xs">LIFESTYLE COLECTIONS</p>
        <p class="text-xl sm:font-bold sm:text-6xl">MEN</p>
        <p class="font-medium text-sm sm:text-3xl">
          SALE UP TO <span class="text-red">30% OFF</span>
        </p>
        <p class="text-xs sm:text-xl">Get Free Shoping On Orders Over $99.00</p>
        <button class="bg-black w-20 h-8  sm:mt-8 sm:w-36 sm:h-10">
          <p class="text-white text-center text-xs py-2 sm:py-3 ">SHOP NOW</p>
        </button>
      </div>
      <img
        class="sm:max-w-3xl mx-auto mb-2"
        src="https://bazaar.ui-lib.com/assets/images/banners/banner-15.jpg"
      />

      <div >
        <div class="flex">
        <div class="mx-auto">
          <div class="relative">
            <div class="absolute bg-blue ml-3 inset-y-20 sm:inset-y-5">
              <p class="text-xs">NEW ARRIVALS</p>
              <p class="font-medium  text-xl sm:text-xl">SUMMER</p>
              <p class="font-medium text-xl sm:text-xl">SALE 20% OFF</p>

              <a href="#" class="flex mt-5 text-xs font-medium">
                Shop Now
                <span class="my-auto ">
                  <FaSolidArrowRightLong />
                </span>
              </a>
            </div>
          </div>

          <img src="https://bazaar.ui-lib.com/assets/images/banners/banner-17.jpg" />
        </div>
        </div>
       <div class="flex ">
       <div class="mx-auto">
          <div class="relative">
            <div class="absolute bg-blue ml-3 inset-y-20 sm:inset-y-5">
              <p class="text-xs">GAMING 4K</p>
              <p class="font-medium  text-xl sm:text-xl">DESKTOP &</p>
              <p class="font-medium text-xl sm:text-xl">LAPTOP</p>

              <a href="#" class="flex mt-5 text-xs font-medium">
                Shop Now
                <span class="my-auto ">
                  <FaSolidArrowRightLong />
                </span>
              </a>
            </div>
          </div>
          <img
            class=""
            src="https://bazaar.ui-lib.com/assets/images/banners/banner-16.jpg"
          />
        </div>
       </div>
      </div>
    </section>
  );
}
