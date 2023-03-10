import { FaSolidArrowRightLong } from 'solid-icons/fa';

export default function ThreeAdvertisements() {
  return (

   <div class="grid sm:grid-cols-3 gap-6 py-16">
      <div class="relative">
        <div class="absolute inset-5">
          <p class="text-xs mb-3">NEW ARRIVALS</p>
          <p class="font-medium">SKI CLOTHES SALE</p>
          <p class="text-red">Up To 35% OFF</p>
          <a href="" class="flex mt-5 text-xs font-medium">
                Shop Now
                <span class="my-auto ">
                  <FaSolidArrowRightLong />
                </span>
              </a>
        </div>
        <img src="https://bazaar.ui-lib.com/assets/images/banners/banner-18.jpg" /></div>


        <div class="relative">
        <div class="absolute text-white inset-5">
          <p class="text-xs mb-3">BEST SELLER</p>
          <p class="font-medium">TRENDING WOMEN</p>
          <p class="">SUNGLASSES</p>
          <a href="" class="flex mt-5 text-xs font-medium">
                Shop Now
                <span class="my-auto ">
                  <FaSolidArrowRightLong />
                </span>
              </a>
        </div>
        <img src="https://bazaar.ui-lib.com/assets/images/banners/banner-19.jpg" /></div>


        <div class="relative">
        <div class="absolute inset-5">
          <p class="text-xs mb-3">NEW ARRIVALS</p>
          <p class="font-medium">NEW LATEST BAG</p>
          <p class="">COLLECTIONS</p>
          <a href="" class="flex mt-5 text-xs font-medium">
                Shop Now
                <span class="my-auto ">
                  <FaSolidArrowRightLong />
                </span>
              </a>
        </div>
        <img src="https://bazaar.ui-lib.com/assets/images/banners/banner-20.jpg" /></div>





     
    </div>



  )
}