import React, { useState, useEffect } from "react";
import useRequestData from "../../../hooks/useRequestData";
import ConfirmModal from "../../../components/ADMIN/ConfirmModal";

const TureEditDelete = () => {
  const [tours, setTours] = useState([]);
  const [editingTour, setEditingTour] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    rating: 4,
    traveltime: "",
    destination: "",
    distance: "",
    price: "",
    spacelaunch: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tourToDelete, setTourToDelete] = useState(null);

  const { makeRequest, isLoading, error } = useRequestData();

  const fetchToursData = async () => {
    const response = await makeRequest("http://localhost:4444/tours");
    if (response) {
      setTours(response.data);
    }
  };

  useEffect(() => {
    fetchToursData();
  }, []);

  const handleEdit = (tour) => {
    setEditingTour(tour._id);
    setFormData({
      title: tour.title,
      content: tour.content,
      rating: tour.rating,
      traveltime: tour.traveltime,
      destination: tour.destination,
      distance: tour.distance,
      price: tour.price,
      spacelaunch: tour.spacelaunch,
    });
  };

  const handleDelete = (tourId) => {
    setTourToDelete(tourId);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    if (tourToDelete) {
      await makeRequest(
        `http://localhost:4444/tours/admin/${tourToDelete}`,
        "DELETE",
      );
      fetchToursData();
      setTourToDelete(null);
    }
    setIsModalOpen(false);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
  };

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

    await makeRequest(
      `http://localhost:4444/tours/admin/${editingTour}`,
      "PUT",
      null,
      formDataToSend,
    );
    fetchToursData();
    setEditingTour(null);
    setFormData({
      title: "",
      content: "",
      rating: 4,
      traveltime: "",
      destination: "",
      distance: "",
      price: "",
      spacelaunch: "",
    });
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
        <h2 className="pb-5 text-center text-xl font-bold">Rediger ture</h2>

        {!editingTour ? (
          <div className="flex flex-col space-y-4 text-white">
            {tours.map((tour) => (
              <div key={tour._id} className="rounded border-2 p-2">
                <h3 className="text-xl font-bold">{tour.title}</h3>
                <div
                  className="py-4"
                  dangerouslySetInnerHTML={{ __html: tour.content }}
                />
                <div className="space-y-4 pb-4">
                  <div className="flex">
                    <div className="w-1/2 "> <h4 className=" ">{tour.traveltime}</h4></div>
                    
                    <div className="w-1/2 "> <h4 className=" ">{tour.destination}</h4></div>
                  </div>
                  <div className="flex">
                    <div className="w-1/2 "><h4 className=" ">{tour.distance}</h4></div>
                    <div className="w-1/2"><h4 className=" ">{tour.price}</h4></div>
                  </div>
                  <div className="flex">

                    <div className="w-1/2 "><h4 className=" ">{tour.image1}</h4></div>
                    <div className="w-1/2 "><h4 className=" ">{tour.image2}</h4></div>

                  </div>
                  <div className=""><h4 className=" ">{tour.spacelaunch}</h4></div>
                </div>

                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => handleEdit(tour)}
                    className="btn text-white hover:bg-green-800"
                  >
                    Ret
                  </button>
                  <button
                    onClick={() => handleDelete(tour._id)}
                    className="btn bg-red-600 text-white hover:bg-red-900"
                  >
                    Slet
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-vhgrey mx-auto w-full rounded border-2 p-5 shadow-md md:w-3/4 lg:w-5/6 xl:w-4/6">
            <h3 className="py-2 font-bold">Edit Tour</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700">
                  Title
                </label>
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
                <label className="text-sm font-medium text-gray-700">
                  Content
                </label>
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
                <label className="text-sm font-medium text-gray-700">
                  Rating
                </label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="mt-1 w-full rounded border p-1 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700">
                  Travel Time
                </label>
                <input
                  type="text"
                  name="traveltime"
                  value={formData.traveltime}
                  onChange={handleChange}
                  className="mt-1 w-full rounded border p-1 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700">
                  Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="mt-1 w-full rounded border p-1 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700">
                  Distance
                </label>
                <input
                  type="text"
                  name="distance"
                  value={formData.distance}
                  onChange={handleChange}
                  className="mt-1 w-full rounded border p-1 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="mt-1 w-full rounded border p-1 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700">
                  Space Launch Date
                </label>
                <input
                  type="date"
                  name="spacelaunch"
                  value={formData.spacelaunch.split("T")[0]}
                  onChange={handleChange}
                  className="mt-1 w-full rounded border p-1 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700">
                  Image 1
                </label>
                <input
                  type="file"
                  name="image1"
                  className="mt-1 w-full rounded border p-1 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700">
                  Image 2
                </label>
                <input
                  type="file"
                  name="image2"
                  className="mt-1 w-full rounded border p-1 py-2"
                />
              </div>
              <div className="flex justify-center space-x-3">
                <button
                  type="submit"
                  className="btn bg-vhgreen text-white hover:bg-green-800"
                >
                  Gem tur
                </button>
                <button
                  type="button"
                  onClick={() => setEditingTour(null)}
                  className="btn bg-red-600 text-white hover:bg-red-900"
                >
                  Fortryd
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Custom Confirmation Modal */}
      <ConfirmModal
        isOpen={isModalOpen}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        message="Er du helt sikker på, du vil fjerne denne rejse?"
      />
    </section>
  );
};

export default TureEditDelete;
