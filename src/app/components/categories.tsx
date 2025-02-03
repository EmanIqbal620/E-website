import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

// Define types for the data
interface Category {
  _id: string;
  title: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  products: string[];
}

const builder = imageUrlBuilder(client);

// Function to generate image URLs
function urlFor(source: { asset: { _ref: string } }) {
  return builder.image(source).url();
}

async function getdata(): Promise<Category[]> {
  const fetchdata = await client.fetch(`*[_type == "categories"] {
    _id,
    title,
    image,
    products
  }`);
  return fetchdata;
}

export default async function Categories() {
  const data = await getdata();
  console.log(data);

  return (
    <div>
      <h1 className="w-full text-[#272343] font-bold text-[30px]">
        Top Categories
      </h1>

      <section className="w-full flex flex-wrap gap-8 justify-center items-center mt-8">
        {data.map((val: Category) => (
          <div
            key={val._id}
            className="flex flex-col w-[300px] h-[300px] bg-[#ffffff] shadow-md items-center justify-center rounded-lg"
          >
            <Link href={`Product/Products`}></Link>
            <div className="relative group">
              <Image
                src={urlFor(val.image).toString()}
                alt={val.title}
                width={260}
                height={300}
                className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"></div>
            </div>
            <h2 className="mt-4 text-lg font-semibold">{val.title}</h2>
          </div>
        ))}
      </section>
    </div>
  );
}
