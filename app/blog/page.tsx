"use client";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  episode: z.number({
    invalid_type_error: "Episode number must be a number",
    required_error: "Episode number is required",
  }),
  email: z.string().email({ message: "Invalid email address" }),
});

// create type by using z.infer
type BlogInputs = z.infer<typeof schema>;

export default function BlogPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<BlogInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="p-2">
      <h1 className="text-3xl text-blue-500 font-bold text-center p-4">
        Form details
      </h1>
      <div className="w-9/10 lg:w-1/2 mx-auto p-4 rounded-sm shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-2xl font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Enter title"
              className="block w-full max-w-md outline-none border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-blue-200 focus:ring-2 placeholder:text-gray-400 hover:border-gray-400 transition-all duration-200 ease-in-out shadow-sm"
            />
            {errors.title?.message && (
              <span className="text-sm text-red-500 mt-6 font-medium">
                {errors.title.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="episode"
              className="block text-2xl font-medium text-gray-700"
            >
              Episode
            </label>
            <input
              type="number"
              {...register("episode", { valueAsNumber: true })}
              placeholder="Enter episode number"
              className="block w-full max-w-md outline-none border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 ease-in-out placeholder:text-gray-400 hover:border-gray-400 shadow-sm"
            />
            {errors.episode && (
              <span className="text-sm text-red-500 mt-6 font-medium">
                {errors.episode?.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="episode"
              className="block text-2xl font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter email"
              className="block w-full max-w-md outline-none border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 ease-in-out placeholder:text-gray-400 hover:border-gray-400 shadow-sm"
            />
            {errors.email?.message && (
              <span className="text-sm text-red-500 mt-6 font-medium">
                {errors.email?.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 ease-in-out "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
