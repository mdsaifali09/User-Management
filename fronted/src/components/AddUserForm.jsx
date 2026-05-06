import { useState } from "react";

export default function AddUserForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert("Name & Email required");
      return;
    }

    await onAdd(form);

    setForm({ name: "", email: "", phone: "", company: "" });
  };

  return (
    <form className="bg-white p-5 rounded-2xl shadow mb-6" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-3 text-gray-700">➕ Add New User</h2>

      <div className="grid md:grid-cols-2 gap-3">
        <input
          placeholder="Name"
          className="border p-3 rounded-lg"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="border p-3 rounded-lg"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Phone"
          className="border p-3 rounded-lg"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <input
          placeholder="Company"
          className="border p-3 rounded-lg"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />
      </div>

      <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Add User
      </button>
    </form>
  );
}