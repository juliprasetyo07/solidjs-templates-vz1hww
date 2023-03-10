export default function SelectionButton() {
  return (
    <section class="grid sm:grid-cols-2 pb-5 mx-2 sm:mx-0">
      <div>
        <p class="text-2xl">Selected Products</p>
        <p>All our new arrivals in a exclusive brand selection</p>
      </div>
      <div class="">
      <ul class="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2 mx-auto">
        <button class="border border-red text-red text-center rounded p-1">New Arrivals</button>
        <button  class="border text-center rounded p-1">Best Seler</button>
        <button class="border text-center rounded p-1">Most Popular</button>
        <button class="border text-center rounded p-1">View All</button>
      </ul>
      </div>
    </section>
  )
}