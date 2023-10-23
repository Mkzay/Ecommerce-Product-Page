export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center basis-2/5 gap-7 md:pb-10">
      <div>
        <img
          className="md:rounded-xl md:h-[500px]"
          src="./images/image-product-1.jpg"
        />
      </div>
      <div className="items-center justify-center gap-7 hidden md:flex">
        <img
          className="rounded-xl w-[100px]"
          src="./images/image-product-1-thumbnail.jpg"
        />
        <img
          className="rounded-xl w-[100px]"
          src="./images/image-product-2-thumbnail.jpg"
        />
        <img
          className="rounded-xl w-[100px]"
          src="./images/image-product-3-thumbnail.jpg"
        />
        <img
          className="rounded-xl w-[100px]"
          src="./images/image-product-4-thumbnail.jpg"
        />
      </div>
    </div>
  );
}
