import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Blogs</h1>

        <Link
          href="/dashboard/add-blog"
          className="bg-black text-white px-4 py-1 rounded-md border border-black 
             transition-all duration-300 ease-in-out hover:bg-transparent hover:text-black"
        >
          Add Blog
        </Link>
      </div>
    </div>
  );
};

export default Blog;
