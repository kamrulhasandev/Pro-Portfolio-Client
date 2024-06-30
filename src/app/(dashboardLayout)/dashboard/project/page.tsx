"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { techOptions } from "./technologies";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { toast } from "sonner";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const Project = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedTechnologies, setSelectedTechnologies] = React.useState([]);
  const axiosSecure = useAxiosSecure();
  const imgbb_key = process.env.NEXT_PUBLIC_IMGBB_API;
  const axiosPublic = useAxiosPublic();
  const imgbbUrl = `https://api.imgbb.com/1/upload?&key=${imgbb_key}`;

  const {
    data: projects,
    isLoading,
    refetch,
  } = useQuery<any, Error>({
    queryKey: ["project"],
    queryFn: async () => {
      const response: AxiosResponse<any> = await axiosSecure.get("/project");
      return response.data.data;
    },
  });

  console.log(projects);

  const onSubmit = async (data: any) => {
    data.isOngoing = data.isOngoing === "true";
    try {
      const imageFile = {
        image: data.image[0],
      };

      const imgRes = await axiosPublic.post(imgbbUrl, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (imgRes.status === 200) {
        const imgUrl = imgRes.data.data.display_url;
        const newProject = {
          ...data,
          technologies: selectedTechnologies,
          image: imgUrl,
        };

        const response: AxiosResponse<any> = await axiosSecure.post(
          "/project/add-project",
          newProject
        );

        console.log(response);

        if (response.status === 200) {
          toast.success("Project added successfully");
          reset();
        } else {
          throw new Error("Failed to add skill");
        }
      } else {
        throw new Error("Failed to upload image");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to add Project");
    } finally {
      refetch();
      closeModal();
    }
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
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Live Link
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {projects.map((project: any, index: number) => (
                <tr key={project.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-1 whitespace-nowrap">
                    <div className="px-6 py-1 whitespace-nowrap">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={50}
                        height={50}
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {project.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {project.link}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="bg-black px-2 rounded-md text-white ">
                      Edit
                    </button>{" "}
                    {/* Placeholder for edit functionality */}
                    <button className="bg-black px-2 rounded-md text-white">
                      Delete
                    </button>{" "}
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
                    className={`w-full border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-md px-3 py-2 focus:outline-none`}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="link" className="block font-medium mb-1">
                    Project Link
                  </label>
                  <input
                    type="text"
                    id="link"
                    {...register("link", {
                      required: "Project Link is required",
                    })}
                    className={`w-full border ${
                      errors.link ? "border-red-500" : "border-gray-300"
                    } rounded-md px-3 py-2 focus:outline-none`}
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
                    className={`w-full border ${
                      errors.githubServer ? "border-red-500" : "border-gray-300"
                    } rounded-md px-3 py-2 focus:outline-none`}
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
                    className={`w-full border ${
                      errors.githubClient ? "border-red-500" : "border-gray-300"
                    } rounded-md px-3 py-2 focus:outline-none`}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="image" className="block font-medium mb-1">
                    Image Upload
                  </label>
                  <input
                    type="file"
                    id="image"
                    {...register("image", { required: "Image is required" })}
                    className={`w-full border ${
                      errors.image ? "border-red-500" : "border-gray-300"
                    } rounded-md px-3 py-2 focus:outline-none`}
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
                    options={techOptions}
                    isMulti
                    onChange={handleTechnologiesChange}
                    className={`w-full ${
                      errors.technologies ? "border-red-500" : "border-gray-300"
                    } rounded-md px-3 py-2 focus:outline-none`}
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
                    className={`w-full border ${
                      errors.startDate ? "border-red-500" : "border-gray-300"
                    } rounded-md px-3 py-2 focus:outline-none`}
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
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
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
                    className={`w-full border ${
                      errors.type ? "border-red-500" : "border-gray-300"
                    } rounded-md px-3 py-2 focus:outline-none`}
                  >
                    <option value="">Select Project Type</option>
                    <option value="FULL_STACK">Full Stack</option>
                    <option value="FRONTEND">Front End</option>
                    <option value="BACKEND">Back End</option>
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
                    className="w-full border border-gray-300 rounded-md px-3 py-[10px] focus:outline-none"
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
                  className={`w-full border ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  } rounded-md px-3 py-2 focus:outline-none`}
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
