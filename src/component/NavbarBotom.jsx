export default function NavbarBotom() {
  return (
    <section class="bg-dark ">
    <div  class="grid sm:grid-cols-4 text-white sm:py-28 max-w-6xl sm:mx-auto">
    <div class=" px-5">
       <div class="flex"> <img
          class="mx-auto pt-5 sm:pt-0 pb-5"
          src="https://bazaar.ui-lib.com/assets/images/logo.svg"
        /></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero
          id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus
          vel ut sollicitudin elit at amet.
        </p>
        <ul class="grid grid-cols-2 gap-1 pt-4 scale-50 sm:scale-100">
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/640px-Google_Play_Store_badge_EN.svg.png" />
          </li>
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/640px-Download_on_the_App_Store_Badge.svg.png" />
          </li>
        </ul>
      </div>
      <div class="sm:pl-20 text-center sm:text-left sm:leading-9">
        <h1 class="texl pt-3-sm:xl pb-3 font-medium">About Us</h1>
        <div class="font-light text-xs sm:text-xm sm:leading-7 grid">
          <a href="#">Careers</a>
          <a href="#">Our Stores</a>
          <a href="#">Our Cares</a>
          <a href="#">Terms & Condition</a>
          <a href="#">Arivacy Policy</a>
        </div>
      </div>
      <div class="items-right text-center sm:text-left sm:leading-9">
        <h1 class="text-xl pt-3 sm:pb-3 font-medium">Customer Care</h1>
        <div class="font-light text-xs sm:text-xm sm:leading-7 grid">
          <a href="#">Help Center</a>
          <a href="#">How To Buy</a>
          <a href="#">Track Your Order</a>
          <a href="#">Corporate & Bulk Purchaasing</a>
          <a href="#">Returns & Refunds</a>
        </div>
      </div>
      <div class="leading-7 text-center sm:text-left">
        <h1 class="text-xl pb-3 font-medium">Contact Us</h1>
        <div cclass="font-light">
          <p>70 Washington Square South, New York, NY 10012, United States</p>
          <p>Email: uilib.help@gmail.com</p>
          <p>Phone: +1 1123 456 780</p>
        </div>
      </div>
    </div>
    </section>
  );
}
