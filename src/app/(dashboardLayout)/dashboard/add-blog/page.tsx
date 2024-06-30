"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const AddBlog = () => {
  const [content, setContent] = useState("");

  const handleAddBlogPost = () => {
    console.log(content);
    // Add your logic here to submit or handle the blog post data
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],  // Text color and background color
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      ["link"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
    "direction",
    "link",
  ];

  return (
    <div>
      <div>
        <h1>Add Blog</h1>
        <div>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Write something amazing..."
            modules={modules}
            formats={formats}
            style={{ height: "300px", marginBottom: "20px" }}
          />
          <button
            onClick={handleAddBlogPost}
            className="bg-black text-white px-4 py-1 rounded mt-10"
          >
            Add Blog Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
