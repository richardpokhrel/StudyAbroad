import React from "react";
import { ChevronRight, Calendar, MapPin, Award } from "lucide-react";

const ScholarshipSection = () => {
  // Scholarship Data
  const scholarships = [
    {
      name: "Tech Leaders Scholarship",
      amount: "$30,000",
      deadline: "2025-01-30",
      eligibility: "Perfect match",
      city: "Palo Alto, California",
      university: "Stanford University",
      description: "Awarded to tech leaders demonstrating innovation and academic excellence.",
      url: "/scholarship/tech-leaders"
    },
    {
      name: "International Merit Award",
      amount: "$25,000",
      deadline: "2025-02-15",
      eligibility: "High match",
      city: "Cambridge, Massachusetts",
      university: "MIT",
      description: "Supports international students with exceptional merit and leadership potential.",
      url: "/scholarship/international-merit"
    },
    {
      name: "Balmiki Lincoln College",
      amount: "NPR 11000",
      deadline: "2025-03-15",
      eligibility: "High match",
      city: "Amsterdam of Birtamode",
      university: "Lincoln University",
      description: "Supports international students with exceptional merit and leadership potential.",
      url: "/scholarship/international-merit"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Scholarships</h2>
          <button className="text-sm text-blue-500 hover:text-blue-600 flex items-center gap-1">
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {scholarships.map((scholarship, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg hover:shadow-md transition-all flex flex-col justify-between bg-white"
            >
              <div>
                {/* Scholarship Title */}
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {scholarship.name}
                </h3>

                {/* Scholarship Amount */}
                <p className="text-sm text-green-600 font-bold mb-3">
                  {scholarship.amount}
                </p>

                {/* University and City */}
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">University:</span> {scholarship.university}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  {scholarship.city}
                </p>

                {/* Deadline */}
                <div className="flex items-center text-sm text-gray-500 mt-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  Deadline: {new Date(scholarship.deadline).toLocaleDateString()}
                </div>

                {/* Description */}
                <p className="text-xs text-gray-500 mt-3">
                  {scholarship.description}
                </p>
              </div>

              {/* Learn More Button */}
              <a
                href={scholarship.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-3 py-2 text-sm bg-gray-50 text-gray-700 border rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <ChevronRight className="w-4 h-4" />
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScholarshipSection;
