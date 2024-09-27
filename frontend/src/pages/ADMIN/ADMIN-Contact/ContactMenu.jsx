import React, { useEffect, useState } from "react";
import useRequestData from "../../../hooks/useRequestData";

const ContactMenu = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await makeRequest("http://localhost:4444/contact/admin");
      if (response && response.data) {
        setContacts(response.data);
      }
    };

    fetchContacts();
  }, []);

  const toggleReadStatus = async (id) => {
    const contactToUpdate = contacts.find((contact) => contact._id === id);
    const newReadStatus = !contactToUpdate.read;

    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact._id === id ? { ...contact, read: newReadStatus } : contact,
      ),
    );

    await makeRequest(
      `http://localhost:4444/contact/admin/${id}`,
      "PATCH",
      {
        "Content-Type": "application/json",
      },
      { read: newReadStatus },
    );
  };

  if (isLoading) {
    return <div>Loading contacts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="py-6 px-4">
      <h2 className="rubrik text-center mb-6">Beskeder fra kontaktform</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contacts.map((contact) => (
          <div
            key={contact._id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200  flex flex-col justify-between space-y-4"
          >
            <p>
              <span className="font-bold">Navn:</span> {contact.name}
            </p>
            <p>
              <span className="font-bold">Email:</span> {contact.email}
            </p>
            <p>
              <span className="font-bold">Telefon:</span> {contact.phone}
            </p>
            <p>
              <span className="font-bold">Besked:</span> {contact.message}
            </p>
            <p>
              <span className="font-bold">Modtaget: <br/></span>
              <div className="italic">

              {new Date(contact.received).toLocaleString()}
              </div>
            </p>
            <p>
              <span className="font-bold">Læst:</span>{" "}
              {contact.read ? "ja" : "nej"}
            </p>
            <button
              onClick={() => toggleReadStatus(contact._id)}
              className={`px-4 py-2 btn text-sm font-semibold text-white rounded-md ${
                contact.read ? "bg-red-500 hover:bg-red-600" : " hover:bg-green-600"
              }`}
            >
              Skift til {contact.read ? "ikke læst" : "læst"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactMenu;
