"use client";
import React from "react";
import { useForm } from "react-hook-form";

const Experience = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const onSubmit = (data: any) => {
    console.log(data); // Handle form submission logic here
    closeModal(); // Close the modal after form submission
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Experience</h1>

        <button
          onClick={openModal}
          className="bg-black text-white px-4 py-1 rounded-md border border-black 
             transition-all duration-300 ease-in-out hover:bg-transparent hover:text-black"
        >
          Add Experience
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md max-w-xl w-full overflow-y-auto max-h-full">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Add Experience
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label
                    htmlFor="companyName"
                    className="block font-medium mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    {...register("companyName", {
                      required: "Company Name is required",
                    })}
                    className={`w-full border border-black rounded-md px-3 py-2 focus:outline-none ${
                      errors.companyName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="companyLocation"
                    className="block font-medium mb-1"
                  >
                    Company Location
                  </label>
                  <input
                    type="text"
                    id="companyLocation"
                    {...register("companyLocation", {
                      required: "Company Location is required",
                    })}
                    className={`w-full border border-black rounded-md px-3 py-2 focus:outline-none ${
                      errors.companyLocation
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="designation"
                    className="block font-medium mb-1"
                  >
                    Designation
                  </label>
                  <input
                    type="text"
                    id="designation"
                    {...register("designation", {
                      required: "Designation is required",
                    })}
                    className={`w-full border border-black rounded-md px-3 py-2 focus:outline-none ${
                      errors.designation ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="jobType" className="block font-medium mb-1">
                    Job Type
                  </label>
                  <select
                    id="jobType"
                    {...register("jobType", {
                      required: "Please select a Job Type",
                    })}
                    className={`w-full border border-black rounded-md px-3 py-2 focus:outline-none ${
                      errors.jobType ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select Job Type</option>
                    <option value="FULLTIME">Full Time</option>
                    <option value="PARTTIME">Part Time</option>
                    <option value="CONTRACT">Contract</option>
                    <option value="FREELANCE">Freelance</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="jobLocation"
                    className="block font-medium mb-1"
                  >
                    Job Location
                  </label>
                  <input
                    type="text"
                    id="jobLocation"
                    {...register("jobLocation", {
                      required: "Job Location is required",
                    })}
                    className={`w-full border border-black rounded-md px-3 py-2 focus:outline-none ${
                      errors.jobLocation ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="startDate" className="block font-medium mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    {...register("startDate", {
                      required: "Start Date is required",
                    })}
                    className={`w-full border border-black rounded-md px-3 py-2 focus:outline-none ${
                      errors.startDate ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="endDate" className="block font-medium mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    {...register("endDate")}
                    className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none `}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="isCurrent" className="block font-medium mb-1">
                    Currently Working Here
                  </label>
                  <select
                    id="isCurrent"
                    {...register("isCurrent")}
                    className={
                      "w-full border border-gray-300 rounded-md px-3 py-[10px] focus:outline-none "
                    }
                  >
                    <option value="">Select Option</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block font-medium mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  {...register("description", {
                    required: "Description is required",
                  })}
                  rows={3}
                  className={`w-full border border-black rounded-md px-3 py-2 focus:outline-none ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-1 rounded-md border border-black 
               transition-all duration-300 ease-in-out hover:bg-transparent hover:text-black"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-black text-white px-4 py-1 rounded-md border border-black 
               transition-all duration-300 ease-in-out hover:bg-transparent hover:text-black"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
