import React, { useState, useEffect } from "react";
import apiService from "../services/apiService";

const RegistrationForm = ({ onSubmitSuccess, initialData = {}, editMode = false }) => {
  const [formData, setFormData] = useState({
    Name: initialData.Name || "",
    Email: initialData.Email || "",
    DateOfBirth: initialData.DateOfBirth || "",
    PhoneNumber: initialData.PhoneNumber || "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    // Reset error when switching between Create and Edit mode
    setError("");
  }, [editMode]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset error on every submit
    setError("");

    // Validation
    if (!/^[a-zA-Z\s]*$/.test(formData.Name)) {
      setError("Name should only contain letters and spaces.");
      return;
    }
    if (formData.PhoneNumber.length !== 10 || isNaN(formData.PhoneNumber)) {
      setError("Phone number should be exactly 10 digits.");
      return;
    }

    try {
      if (editMode) {
        await apiService.updateRegistration(initialData.ID, formData);
      } else {
        await apiService.createRegistration(formData);
      }
      onSubmitSuccess();
      // Reset the form after successful submission
      setFormData({
        Name: "",
        Email: "",
        DateOfBirth: "",
        PhoneNumber: "",
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold">{editMode ? "Edit Registration" : "New Registration"}</h2>
      {error && <div className="text-red-500">{error}</div>}
      
      <input
        type="text"
        name="Name"
        placeholder="Name"
        value={formData.Name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      
      <input
        type="email"
        name="Email"
        placeholder="Email"
        value={formData.Email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      
      <input
        type="date"
        name="DateOfBirth"
        value={formData.DateOfBirth}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      
      <input
        type="text"
        name="PhoneNumber"
        placeholder="Phone Number"
        value={formData.PhoneNumber}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        maxLength="10"
      />
      
      <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
        {editMode ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default RegistrationForm;
