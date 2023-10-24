export default function Cart() {
  return (
    <div className="rounded-xl w-[95%] h-[17rem] bg-White absolute top-[4.8rem] left-[0.55rem] shadow-2xl md:top-24 md:left-8 md:w-11/12 md:h-80 lg:w-4/12 lg:left-2/3">
      <div className="border-b py-6">
        <h3 className="text-Black text-xl font-bold  border-Grayish-blue pl-5">
          Cart
        </h3>
      </div>
      <div className="flex items-center justify-center p-16 text-Dark-grayish-blue font-bold">
        <p>Your cart is empty.</p>
      </div>
    </div>
  );
}
