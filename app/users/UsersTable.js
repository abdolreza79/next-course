import { getUsers } from "@/lib/users/users";
import Link from "next/link";
import { sort } from "fast-sort";

async function UsersTable({ sortOrder }) {
  const users = await getUsers();
  const sortedUser = sort(users).asc(
    sortOrder === "name"
      ? (user) => user.name
      : sortOrder === "email"
      ? (user) => user.email
      : (user) => user
  );

  return (
    <table className="m-5 border-2 border-slate-600">
      <thead>
        <tr className="bg-slate-600 text-white">
          <th>
            <Link href={"/users?sortOrder=name"}>Name</Link>
          </th>
          <th>
            <Link href={"/users?sortOrder=email"}>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUser.map((user) => (
          <tr>
            <td className="p-2 border-2 border-slate-600">{user.name}</td>
            <td className="p-2 border-2 border-slate-600">{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
