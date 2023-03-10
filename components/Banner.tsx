import Image from 'next/image';

function Banner() {
  return (
    <div
      className="flex justify-between items-center
   bg-yellow-400 border-y border-black py-10 lg:py-0"
    >
      <div className="px-10 space-y-5">
        <h1 className="text-6xl max-w-xl font-serif">
          <span className="underline decoration-black decoration-4">
            Medium
          </span>{' '}
          is a place to write, read and connect
        </h1>
        <h2>
          It&apos;s easy and free tp ost your thinking on any topic and connect
          with millions of readers
        </h2>
      </div>
      <div className="hidden md:inline-flex h-60 lg:h-full">
        <Image
          src="https://www.iconpacks.net/icons/2/free-medium-icon-2177-thumb.png"
          alt="Medium Logo"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        ></Image>
      </div>
    </div>
  );
}

export default Banner;
