"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  passKey: string;
}

const LoginPage = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setErrorMessage(null); // Clear any previous error
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }
      localStorage.setItem("accessToken", result.data.token);
      router.push("/dashboard");
      console.log(result);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="min-h-[100vh] w-full flex justify-center items-center">
      <div>
        <Image src="/rock.png" alt="login" width={300} height={300} />
        {errorMessage && (
          <p className="text-red-500 mt-2 text-center">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="password"
            {...register("passKey", { required: true })}
            className="w-full border-2 border-black outline-black mb-2 px-2 py-1"
            placeholder="Passkey"
          />
          <button type="submit" className="w-full bg-black py-2 text-white">
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
