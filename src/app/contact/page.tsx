import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div>
        <h1 className="text-center text-[35px] font-bold mt-8">
          Get In Touch With Us
        </h1>
        <div className="justify-center items-center mx-[20px] lg:mx-[190px] text-[#9F9F9F]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            nulla quis, quae delectus in fugiat nemo omnis corrupti labore
            nostrum earum vel doloribus, itaque ab mollitia eveniet sit.
            Nesciunt, similique.
          </p>
        </div>
      </div>

      {/* Contact section */}
      <div className="flex justify-between w-full mt-8 px-[20px] lg:px-[50px]">
        {/* Left Side */}
        <div className="flex-1 p-5 rounded-lg shadow-lg mr-4">
          <div className="flex items-center mb-4">
            <i className="bi bi-geo-alt-fill text-2xl mr-3"></i>
            <h4 className="text-xl font-bold">Address</h4>
          </div>
          <p>
            236 5th SE Avenue, New
            <br />
            York NY10000, United
            <br />
            States
          </p>

          <div className="flex items-center mt-6 mb-4">
            <i className="bi bi-telephone-fill text-2xl mr-3"></i>
            <h4 className="text-xl font-bold">Phone</h4>
          </div>
          <p>Mobile: +(84) 546-6789 </p>
          <p>Hotline: +(84) 456-6789</p>

          <div className="flex items-center mt-6 mb-4">
            <i className="bi bi-stopwatch-fill text-2xl mr-3"></i>
            <h4 className="text-xl font-bold">Working Time</h4>
          </div>
          <p>
            Monday-Friday: 9:00 - 22:00<br></br>
            Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>

        {/* Right Side */}
        <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-lg ml-14">
          <form className="w-full">
            {/* Name Input */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            {/* Subject Input */}
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter the subject"
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Write your message"
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-teal-600 rounded-lg shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* third section */}
      <div className="mx-3 sm:mx-10 md:mx-10 lg:mx-20 mt-10 bg-[#F4F4F4] ">
      <div className="flex justify-around mx-8 p-4 ">
  {/* First Item */}
  <div className="flex items-center gap-2">
    <Image
      src="/trophy 1.png"
      alt="logo"
      width={50}
      height={50}
      className="object-contain"
    />
    <div>
      <h1 className="font-bold text-lg text-[25px]">High Quality</h1>
      <p>crafted from top materials</p>
    </div>
  </div>

  {/* Second Item */}
  <div className="flex items-center gap-2">
    <Image
      src="/guarantee.png"
      alt="logo"
      width={50}
      height={50}
      className="object-contain"
    />
    <div>
      <h1 className="font-bold text-lg text-[25px]">High Quality</h1>
      <p>crafted from top materials</p>
    </div>
  </div>

  {/* Third Item */}
  <div className="flex items-center gap-2">
    <Image
      src="/customer-support.png"
      alt="logo"
      width={50}
      height={50}
      className="object-contain"
    />
    <div>
      <h1 className="font-bold text-lg text-[25px]">High Quality</h1>
      <p>crafted from top materials</p>
    </div>
  </div>
</div>
</div>
    </>
  );
}
