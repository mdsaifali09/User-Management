import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import AddUserForm from "../components/AddUserForm";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //const API = "http://localhost:5000/api/users";
  const API = "https://user-management-zs4m.onrender.com/api/users"

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch(API);

      if (!res.ok) throw new Error("Failed to fetch users");

      const data = await res.json();
      setUsers(data);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAdd = async (user) => {
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      if (!res.ok) throw new Error("Failed to add user");

      const newUser = await res.json();
      setUsers((prev) => [newUser, ...prev]);
    } catch (err) {
      alert(err.message);
    }
  };

  // filter
  let filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  // sort
  if (sort === "asc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "desc") {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">

        <AddUserForm onAdd={handleAdd} />

        <SearchBar
          setSearch={setSearch}
          setSort={setSort}
          onReset={() => {
            setSearch("");
            setSort("");
            fetchUsers();
          }}
        />

        {/* Loading */}
        {loading && <p className="text-center">Loading...</p>}

        {/* Error */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Empty */}
        {!loading && filtered.length === 0 && (
          <p className="text-center text-gray-500">No users found</p>
        )}

        {/* Users */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((user) => (
            <UserCard key={user._id} user={user} />
          ))}
        </div>

      </div>
    </div>
  );
}