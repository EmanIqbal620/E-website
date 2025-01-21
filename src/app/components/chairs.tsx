import Image from "next/image";
export default function Chairs() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-3">
        <div >
          
          <Image
            src="/product-3.png"
            alt="image"
            width={600}
            height={800}
            className="object-contain w-full"
          />
          </div>
         
       
        {/* first row */}
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-lg">
            <Image
              src="/product-4.png"
              alt="image"
              width={300}
              height={400}
              className="object-contain w-full"
            />
          </div>
          <div className="rounded-lg">
            <Image
              src="/product-image.png"
              alt="image"
              width={300}
              height={400}
              className="object-contain w-full"
            />
          </div>
          <div className="rounded-lg">
          <Image
              src="/our-product--2.png"
              alt="logo"
              width={300}
              height={400}
              className="object-contain w-full"
            />

          </div>
          <div className="rounded-lg">
          <Image
              src="/image 1.png"
              alt="logo"
              width={300}
              height={400}
              className="object-contain w-full"
            />

          </div>
        </div>
    
       
      </section>
    </>
  );
}
