import React from "react";

const RegistrationList = ({ registrations, onDelete, onEdit }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Registrations</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Phone</th>
            <th className="py-2 px-4">Date of Birth</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((reg) => (
            <tr
              key={reg.ID}
              className="border-b hover:bg-gray-100 transition-all duration-300 ease-in-out"
            >
              <td className="py-2 px-4">{reg.Name}</td>
              <td className="py-2 px-4">{reg.Email}</td>
              <td className="py-2 px-4">{reg.PhoneNumber}</td>
              <td className="py-2 px-4">{new Date(reg.DateOfBirth).toLocaleDateString()}</td>
              <td className="py-2 px-4 flex space-x-2">
                <button
                  onClick={() => onEdit(reg)}
                  className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition-all duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(reg.ID)}
                  className="ml-2 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition-all duration-200"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegistrationList;
