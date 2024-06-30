"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { techOptions } from "./technologies";

const Project = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedTechnologies, setSelectedTechnologies] = React.useState([]);

  const onSubmit = (data: any) => {
    console.log(data);
    closeModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTechnologiesChange = (selectedOptions: any) => {
    setSelectedTechnologies(selectedOptions.map((option: any) => option.value));
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Projects</h1>

        <button
          onClick={openModal}
          className="bg-black text-white px-4 py-1 rounded-md border border-black 
             transition-all duration-300 ease-in-out hover:bg-transparent hover:text-black"
        >
          Add Project
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md max-w-xl w-full overflow-y-auto max-h-full">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Add Project
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor="name" className="block font-medium mb-1">
                    Project Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", {
                      required: "Project Name is required",
                    })}
                    className={`w-full border border-black rounded-md px-3 py-2 focus:outline-none ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="link" className="block font-medium mb-1">
                    Project Link
                  </label>
                  <input
                    type="text"
                    id="link"
                    {...register("link")}
                    className={`w-full border border-black rounded-md px-3 py-2 focus:outline-none ${
                      errors.link ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="githubServer"
                    className="block font-medium mb-1"
                  >
                    GitHub Server Link
                  </label>
                  <input
                    type="text"
                    id="githubServer"
                    {...register("githubServer")}
                    className={`w-full border border-black rounded-md px-3 py-2 focus:outline-none ${
                      errors.githubServer ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="githubClient"
                    className="block font-medium mb-1"
                  >
                    GitHub Client Link
                  </label>
                  <input
                    type="text"
                    id="githubClient"
                    {...register("githubClient")}
                    className={`w-full border border-black rounded-md px-3 py-2 focus:outline-none ${
                      errors.githubClient ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="image" className="block font-medium mb-1">
                    Image Upload
                  </label>
                  <input
                    type="file"
                    id="image"
                    className={`w-full border border-black rounded-md px-3 py-2 focus:outline-none ${
                      errors.image ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="technologies"
                    className="block font-medium mb-1"
                  >
                    Technologies
                  </label>
                  <Select
                    id="technologies"
                    {...register("technologies", {
                      required: "Select at least one technology",
                    })}
                    options={techOptions}
                    isMulti
                    onChange={handleTechnologiesChange}
                    className={`w-full ${
                      errors.technologies ? "border-red-500" : "border-gray-300"
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
                    {...register("startDate")}
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
                  <label htmlFor="type" className="block font-medium mb-1">
                    Project Type
                  </label>
                  <select
                    id="type"
                    {...register("type", {
                      required: "Please select a Project Type",
                    })}
                    className={`w-full border border-black rounded-md px-3 py-2 focus:outline-none ${
                      errors.type ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select Project Type</option>
                    <option value="WEB">Web</option>
                    <option value="MOBILE">Mobile</option>
                    <option value="DESKTOP">Desktop</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="isOngoing" className="block font-medium mb-1">
                    Ongoing Project?
                  </label>
                  <select
                    id="isOngoing"
                    {...register("isOngoing")}
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

export default Project;
