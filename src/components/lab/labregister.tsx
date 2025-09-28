import React, { useState } from "react";

const LabRegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    labName: "",
    address: "",
    email: "",
    phone: "",
    accreditation: "",
    licenseNumber: "",
  });

  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_BASE}/lab/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
      setResponse({ error: "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4">Register New Lab</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="labName"
          placeholder="Lab Name"
          value={formData.labName}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Contact Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Contact Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="accreditation"
          placeholder="Accreditation (e.g. NABL)"
          value={formData.accreditation}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="licenseNumber"
          placeholder="License Number"
          value={formData.licenseNumber}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Registering..." : "Register Lab"}
        </button>
      </form>

      {response && (
        <div className="mt-6 p-4 border rounded bg-gray-50 text-sm">
          {response.error ? (
            <p className="text-red-600">{response.error}</p>
          ) : (
            <>
              <p className="font-semibold text-green-700">
                ✅ Lab registered successfully!
              </p>
              <p><strong>Lab ID:</strong> {response.labId}</p>
              <p><strong>Admin ID:</strong> {response.admin?.adminId}</p>
              <p><strong>Email:</strong> {response.admin?.email}</p>
              <p><strong>Password:</strong> {response.admin?.password}</p>

              <div className="mt-3 p-2 rounded bg-yellow-100 border border-yellow-400 text-yellow-700 text-xs">
                ⚠️ Please note: The above Admin ID and Password are provided
                only once during registration.  
                This password must be used only once for initial login and
                verification. After verification, the Admin should reset their
                password for security.
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default LabRegisterForm;
