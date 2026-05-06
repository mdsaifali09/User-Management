export default function UserCard({ user }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300 border">
      <h2 className="text-xl font-semibold text-blue-600">{user.name}</h2>

      <p className="text-gray-600 text-sm">{user.email}</p>

      <div className="mt-3 text-sm text-gray-700 space-y-1">
        <p>📞 {user.phone || "Not provided"}</p>
        <p>🏢 {user.company || "Not provided"}</p>
      </div>
    </div>
  );
}