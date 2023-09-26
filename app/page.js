import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";	

export default async function Home() {
  const session = await getServerSession(authOptions);	/* add */
  return (
    <main className="mx-auto">
      {session && (
        <p className="text-center my-2">Home | {session.user?.name}</p>
      )}
    </main>
  );
}
