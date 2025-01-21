'use client'
import { useState } from "react";

export default function Shop() {
  // Define openIndex as a state that can be either a number or null
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Toggle function to expand/collapse items
  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Close if already open, otherwise open
  };

  return (
    <>
      <div className="max-w-screen-lg mx-auto py-12 px-4">
        <h2 className="text-3xl mt-10 font-bold text-center text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque amet culpa, soluta vero aspernatur similique, quo doloremque quidem voluptate, eligendi corrupti? Architecto nisi modi dolorem, accusamus voluptate soluta iure non.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {[
            "What types of chairs do you offer?",
            "How can we get touch with you?",
            "Do your chairs come with a warranty?",
            "What will be delivered? And When?",
            "Can I try a chair before purchasing?",
            "How do I clean and maintain my Comforty chair?",
          ].map((question, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              onClick={() => toggleOpen(index)}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
                <p className="text-xl text-gray-800">{openIndex === index ? "-" : "+"}</p>
              </div>
              {/* Conditional content rendering */}
              {openIndex === index && (
                <div className="mt-4 text-gray-600">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque eget ligula vel quam tristique efficitur at et 
                    purus. Pellentesque habitant morbi tristique senectus.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
