import React, { useEffect, useState } from "react";
import useRequestData from "../../../hooks/useRequestData";
import ConfirmModal from "../../../components/ADMIN/ConfirmModal";
const KontaktDelete = () => {
  const { makeRequest, isLoading, error } = useRequestData();
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await makeRequest("http://localhost:4444/contact/admin");
      if (response && response.data) {
        setContacts(response.data);
      }
    };

    fetchContacts();
  }, []);

  const openModal = (contact) => {
    setContactToDelete(contact);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setContactToDelete(null);
  };

  const deleteContact = async () => {
    if (contactToDelete) {
      await makeRequest(`http://localhost:4444/contact/admin/${contactToDelete._id}`, "DELETE");


      setContacts((prevContacts) => prevContacts.filter(contact => contact._id !== contactToDelete._id));
      
      
      closeModal();
    }
  };

  if (isLoading) {
    return <div>Loading contacts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="py-6 px-4">
      <h2 className="rubrik text-center mb-6">Slet Kontakt</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contacts.map((contact) => (
          <div
            key={contact._id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between space-y-4"
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
              <span className="font-bold">Modtaget: <br /></span>
              <div className="italic">
                {new Date(contact.received).toLocaleString()}
              </div>
            </p>
            <button
              onClick={() => openModal(contact)}
              className="mt-2 px-4 py-2 btn text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded-md"
            >
              Slet
            </button>
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={isModalOpen}
        onConfirm={deleteContact}
        onCancel={closeModal}
        message={`Er du sikker på, at du vil slette kontakten: ${contactToDelete ? contactToDelete.name : ''}?`}
      />
    </div>
  );
};

export default KontaktDelete;
