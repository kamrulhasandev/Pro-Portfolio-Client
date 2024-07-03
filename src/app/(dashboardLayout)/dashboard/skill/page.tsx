"use client";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Skill = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const imgbb_key = process.env.NEXT_PUBLIC_IMGBB_API;
  const imgbbUrl = `https://api.imgbb.com/1/upload?&key=${imgbb_key}`;

  const {
    data: skills,
    isLoading,
    refetch,
  } = useQuery<any, Error>({
    queryKey: ["skill"],
    queryFn: async () => {
      const response: AxiosResponse<any> = await axiosSecure.get("/skill");
      return response.data.data;
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const imageFile = {
        image: data.icon[0],
      };

      const imgRes = await axiosPublic.post(imgbbUrl, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (imgRes.status === 200) {
        const imgUrl = imgRes.data.data.display_url;
        const newSkill = {
          ...data,
          icon: imgUrl,
        };

        const response: AxiosResponse<any> = await axiosSecure.post(
          "/skill/add-skill",
          newSkill
        );

        if (response.status === 200) {
          toast.success("Skill added successfully");
          reset();
        } else {
          throw new Error("Failed to add skill");
        }
      } else {
        throw new Error("Failed to upload image");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to add skill");
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

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Skills</h1>

        <button
          onClick={openModal}
          className="bg-black text-white px-4 py-1 rounded-md border border-black 
             transition-all duration-300 ease-in-out hover:bg-transparent hover:text-black"
        >
          Add Skill
        </button>
      </div>

      <div className=" text-sm mt-10">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-black text-white">
            <tr className="border-b border-gray-300">
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Icon
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Level
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {skills?.map((skill: any, index: number) => (
              <tr
                key={skill.id}
                className="border-b border-gray-300 hover:bg-slate-50"
              >
                <td className="px-6 py-1 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-1 whitespace-nowrap">{skill.name}</td>
                <td className="px-6 py-1 whitespace-nowrap">
                  <div className="px-6 py-1 whitespace-nowrap">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                </td>
                <td className="px-6 py-1 whitespace-nowrap">
                  {skill.category}
                </td>
                <td className="px-6 py-1 whitespace-nowrap">{skill.level}</td>
                <td className="px-6 py-1 whitespace-nowrap">
                  <button className="bg-black px-2 rounded-md text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md max-w-xl w-full overflow-y-auto max-h-full">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Add Skill
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-4">
                <div className="mb-4">
                  <label htmlFor="name" className="block font-medium mb-1">
                    Skill Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", {
                      required: "Skill Name is required",
                    })}
                    className={`w-full border rounded-md px-3 py-2 focus:outline-none ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="icon" className="block font-medium mb-1">
                    Icon Upload
                  </label>
                  <input
                    type="file"
                    id="icon"
                    {...register("icon", { required: "Icon is required" })}
                    className={`w-full border rounded-md px-3 py-2 focus:outline-none ${
                      errors.icon ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="category" className="block font-medium mb-1">
                    Skill Category
                  </label>
                  <select
                    id="category"
                    {...register("category", {
                      required: "Please select a Skill category",
                    })}
                    className={`w-full border rounded-md px-3 py-2 focus:outline-none ${
                      errors.category ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select Skill Category</option>
                    <option value="FRONTEND">Front End</option>
                    <option value="BACKEND">Back End</option>
                    <option value="DATABASE">Database</option>
                    <option value="LANGUAGE">Language</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="level" className="block font-medium mb-1">
                    Skill Level
                  </label>
                  <select
                    id="level"
                    {...register("level", {
                      required: "Please select a Skill Level",
                    })}
                    className={`w-full border rounded-md px-3 py-2 focus:outline-none ${
                      errors.level ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select Skill Level</option>
                    <option value="BASIC">Basic</option>
                    <option value="INTERMEDIATE">Intermediate</option>
                    <option value="ADVANCED">Advanced</option>
                    <option value="EXPERT">Expert</option>
                  </select>
                </div>
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

export default Skill;
