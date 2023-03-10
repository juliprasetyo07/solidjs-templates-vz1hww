import { OcHorizontalrule2 } from 'solid-icons/oc';
export default function WatchAndSpeaker() {
  return (
    <div class="grid sm:grid-cols-2 sm:my-8 gap-1 sm:gap-10 ">
      <button class="relative">
        <div class="absolute ml-5 sm:mt-5">
          <p class="font-medium text-left">Final Reduction</p>
          <p class="font-bold">
          Sale Up To 20% Off
          </p>
          <div>
            
            <OcHorizontalrule2 />
          </div>
          <p>
            Only From <span class="font-bold text-red">$270.00</span>
          </p>
        </div>
        <img src="https://bazaar.ui-lib.com/assets/images/banners/banner-21.jpg" />
      </button>

      <button class="relative text-white">
        <div class="absolute ml-5 sm:mt-5">
          <p class="font-medium text-left">Weekend Sale</p>
          <p class="font-bold">
          Fine Smart Speaker
          </p>
          <div>
            
            <OcHorizontalrule2 />
          </div>
          <p>
            Starting at <span class="font-bold text-red">$185.00</span>
          </p>
        </div>
        <img src="https://bazaar.ui-lib.com/assets/images/banners/banner-22.jpg" />
      </button>


     


    </div>
  );
}
