import React, { useState, useEffect } from "react";
import apiService from "../services/apiService";
import RegistrationForm from "../components/RegistrationForm";
import RegistrationList from "../components/RegistrationList";

const HomePage = () => {
  const [registrations, setRegistrations] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchRegistrations = async () => {
    try {
      const data = await apiService.getRegistrations();
      setRegistrations(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await apiService.deleteRegistration(id);
      fetchRegistrations();
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <RegistrationForm
        onSubmitSuccess={() => {
          fetchRegistrations();
          setEditing(null);
        }}
        initialData={editing || {}}
        editMode={!!editing}
      />
      <RegistrationList
        registrations={registrations}
        onDelete={handleDelete}
        onEdit={(reg) => setEditing(reg)}
      />
    </div>
  );
};

export default HomePage;
