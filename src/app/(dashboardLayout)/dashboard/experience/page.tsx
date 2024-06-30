"use client";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Experience = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const {
    data: experiences,
    isLoading,
    refetch,
  } = useQuery<any, Error>({
    queryKey: ["experience"],
    queryFn: async () => {
      const response: AxiosResponse<any> = await axiosSecure.get("/experience");
      return response.data.data;
    },
  });

  const onSubmit = async (data: any) => {
    try {
      data.isCurrent = data.isCurrent === "true";
      const res = await axiosSecure.post("/experience/add-experience", data);
      console.log(res);
      if (res.status === 200) {
        reset();
        refetch();
        toast.success("Experience added successfully");
      }
    } catch (error) {
      console.log(error);
    }
    closeModal();
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

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto mt-10 text-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-black text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Company Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Designation
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Job Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Job Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Start Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  End Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Currently Working
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {experiences.map((experience: any, index: number) => (
                <tr key={experience.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {experience.companyName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {experience.designation}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {experience.jobType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {experience.jobLocation}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {experience.startDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {experience.endDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {experience.isCurrent ? "Yes" : "No"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="bg-black px-2 rounded-md text-white ">Edit</button>{" "}
                    {/* Placeholder for edit functionality */}
                    <button className="bg-black px-2 rounded-md text-white">Delete</button>{" "}
                    {/* Placeholder for delete functionality */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md max-w-xl w-full overflow-y-auto max-h-full">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Add Experience
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Form fields */}
              </div>
              <div className="flex justify-end gap-2 mt-4">
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
