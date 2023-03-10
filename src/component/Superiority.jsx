import { BiRegularTimer } from 'solid-icons/bi';
import { BsCreditCard2Back } from 'solid-icons/bs';
import { BsPiggyBank } from 'solid-icons/bs';
import { TbTruckDelivery } from 'solid-icons/tb';


export default function Superiority() {
  return (
    <section class="text-4xl py-2 mx-auto text-center bg-white shadow-lg grid sm:grid-cols-4">
      
       
      <button class=" flex items-center mx-auto pr-8 sm:border-r-2 border-graydark">
          <TbTruckDelivery class=""/>
          <ul class="pl-4 text-center">
            <li class="text-xl ">Fast delivery</li>
            <li class="text-xs">Start from $10</li>
            
          </ul>

        </button >
     
         <button class=" flex items-center mx-auto pr-8 sm:border-r-2 border-graydark">
          <BsPiggyBank />
          <ul class="pl-4 text-center">
            <li class="text-xl">Money Guarantee</li>
            <li class="text-xs">7 Days Back</li>
            <li></li>
          </ul>
        </button>
      
        <button class=" flex items-center mx-auto pr-8 sm:border-r-2 border-graydark">
          <BiRegularTimer />
          <ul class="pl-4 text-center">
            <li class="text-xl">365 Days</li>
            <li class="text-xs">For free return</li>
            <li></li>
          </ul>
        </button>
      
        <button class=" flex items-center mx-auto ">
       
          <BsCreditCard2Back />
          <ul class="pl-4 text-center"> 
            <li class="text-xl">Payment</li>
            <li class="text-xs">Secure system</li>
            <li></li>
          </ul>
        </button>
      
    </section>
  );
}
