import React, { useState, useEffect } from "react";
import RegistrationForm from "../components/RegistrationForm";
import RegistrationList from "../components/RegistrationList";
import apiService from "../services/apiService";

const RegistrationManager = () => {
  const [registrations, setRegistrations] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedRegistration, setSelectedRegistration] = useState(null);

  // Fetching registrations from the backend.
  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const data = await apiService.getRegistrations();
        setRegistrations(data);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      }
    };
    fetchRegistrations();
  }, []);

  // Handling Edit button click.
  const handleEdit = (registration) => {
    setSelectedRegistration(registration);
    setEditMode(true);  // Switch to edit mode
  };

  // Handling Delete button click
  const handleDelete = async (id) => {
    try {
      await apiService.deleteRegistration(id);
      setRegistrations(registrations.filter((reg) => reg.ID !== id)); // Remove the deleted registration from the list
    } catch (error) {
      console.error("Error deleting registration:", error);
    }
  };

  // Handling form submission success (after creating or updating a registration)
  const handleFormSubmitSuccess = () => {
    setEditMode(false);  // Exit edit mode after successful form submission
    setSelectedRegistration(null);  // Clear selected registration
    // Refetch registrations to get the latest list
    apiService.getRegistrations().then((data) => setRegistrations(data));
  };

  return (
    <div>
      <RegistrationForm
        onSubmitSuccess={handleFormSubmitSuccess}
        initialData={selectedRegistration || {}}
        editMode={editMode}
      />
      <RegistrationList
        registrations={registrations}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default RegistrationManager;
