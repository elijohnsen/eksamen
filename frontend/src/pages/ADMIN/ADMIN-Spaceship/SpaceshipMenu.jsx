import React, { useEffect, useState } from "react";
import useRequestData from "../../../hooks/useRequestData";

const SpaceshipMenu = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ title: "", content: "" });

  useEffect(() => {
    makeRequest("http://localhost:4444/spacecraft");
  }, []);

  useEffect(() => {
    if (data) {
      setFormData({
        title: data.title || "",
        content: data.content || "",
      });
    }
  }, [data]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await makeRequest(
        "http://localhost:4444/spacecraft/admin",
        "PUT",
        null,
        formData,
      );
      setIsEditing(false);
      makeRequest("http://localhost:4444/spacecraft");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  if (isLoading) {
    return <div className="p-5 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-5 text-center text-red-600">Error: {error}</div>;
  }

  return (
    <section className="p-5 ">
      <div className="mycontainer text-center">
          <h2 className="pb-5 text-xl font-bold">Rediger Rumfærgen</h2>
        <div className="min-h-64 mt-20 ">
          {isEditing ? (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 ">
              <div>
                <label className="text-sm font-medium text-white">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="mt-1 w-full rounded border p-2"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-white">
                  Content
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  className="w-full rounded border p-2"
                  rows="5"
                  required
                />
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  type="submit"
                  className="btn bg-green-600 text-white hover:bg-green-800"
                >
                  Gem
                </button>
                <button
                  type="button"
                  onClick={handleEditToggle}
                  className="btn bg-red-600 text-white hover:bg-red-800"
                >
                  Fortryd
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-16 text-white">
              <h2 className="pb-5 text-center text-xl font-bold">
                {data?.title}
              </h2>
              <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: data?.content }}
              />
              <button
                onClick={handleEditToggle}
                className="btn mt-4 text-white"
              >
                Ret Tekst
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SpaceshipMenu;
