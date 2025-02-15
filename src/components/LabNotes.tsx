"use client";

import React, { useState } from "react";
import Button from "./Button";

interface Note {
  imageUrl: string;
  date: string;
  title: string;
  link: string;
}

interface LabNotesProps {
  notes: Note[];
}

const LabNotes: React.FC<LabNotesProps> = ({ notes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextNote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % notes.length);
  };

  const prevNote = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? notes.length - 1 : prevIndex - 1
    );
  };


  return (
    <div className="bg-[#d0ff14] py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-start">
        <div className="w-full lg:w-1/2 pr-8 mb-8 lg:mb-0">
          <div className="bg-white text-gray-700 uppercase mb-4 rounded-full px-4 py-2 inline-block">
            Lab Notes
          </div>
          <h2 className="text-black text-5xl font-bold mb-8">
            Notes on the carbon revolution
          </h2>
          <Button text="View more" href="#" bgColor="bg-black" textColor="text-white" hoverBg="hover:bg-[#d0ff14]" hoverText="hover:text-black" />
        </div>

        <div className="w-full lg:w-1/2 relative overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {notes.map((note, index) => (
              <div
                key={index}
                className="w-[70%] mr-8 flex-shrink-0 rounded-3xl shadow-md bg-black text-white"
              >
                <img
                  src={note.imageUrl}
                  alt={note.title}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-400 mb-2">{note.date}</p>
                  <h3 className="text-xl font-semibold mb-4">{note.title}</h3>
                  <a href={note.link} className="text-white">
                    Learn more
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={prevNote}
              className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700"
            >
              &lt;
            </button>
            <button
              onClick={nextNote}
              className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabNotes;
