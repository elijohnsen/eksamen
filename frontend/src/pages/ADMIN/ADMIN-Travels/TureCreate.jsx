import React, { useState } from "react";
import useRequestData from "../../../hooks/useRequestData";

const TourCreate = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    rating: 5,
    traveltime: "",
    destination: "",
    distance: "",
    price: "",
    spacelaunch: "",
  });
  const { makeRequest, isLoading, error } = useRequestData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.content.trim()) {
      alert("Title and content are required");
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    const image1Input = e.target.image1.files[0];
    const image2Input = e.target.image2.files[0];

    if (image1Input) formDataToSend.append("image1", image1Input);
    if (image2Input) formDataToSend.append("image2", image2Input);


    const response = await makeRequest(
      "http://localhost:4444/tours/admin",
      "POST",
      null,
      formDataToSend
    );

    if (response) {
      alert("Ny tur er oprettet");
    
      setFormData({
        title: "",
        content: "",
        rating: 5,
        traveltime: "",
        destination: "",
        distance: "",
        price: "",
        spacelaunch: "",
      });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="p-5">
      <div className="mycontainer">
        <h2 className="pb-5 text-center text-xl font-bold">Opret ny tur</h2>
        <div className="bg-vhgrey mx-auto w-full rounded border-2 p-5 shadow-md md:w-3/4 lg:w-5/6 xl:w-4/6">
          <h3 className="py-2 font-bold">Tilføj tur</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 w-full rounded border p-1 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">Content</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="w-full rounded border-2 p-1 py-2"
                rows="11"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">Rating</label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="mt-1 w-full rounded border p-1 py-2"
                min="1" 
                max="5"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">Travel Time</label>
              <input
                type="text"
                name="traveltime"
                value={formData.traveltime}
                onChange={handleChange}
                className="mt-1 w-full rounded border p-1 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">Destination</label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="mt-1 w-full rounded border p-1 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">Distance</label>
              <input
                type="text"
                name="distance"
                value={formData.distance}
                onChange={handleChange}
                className="mt-1 w-full rounded border p-1 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 w-full rounded border p-1 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">Space Launch Date</label>
              <input
                type="date"
                name="spacelaunch"
                value={formData.spacelaunch}
                onChange={handleChange}
                className="mt-1 w-full rounded border p-1 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">Image 1</label>
              <input
                type="file"
                name="image1"
                className="mt-1 w-full rounded border p-1 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">Image 2</label>
              <input
                type="file"
                name="image2"
                className="mt-1 w-full rounded border p-1 py-2"
              />
            </div>
            <div className="flex justify-center space-x-3">
              <button type="submit" className="btn  text-white">
                Opret tur
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TourCreate;
