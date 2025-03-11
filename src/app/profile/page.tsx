import { logout, requireAuth } from "@/lib/authActions";

const Profile = async () => {
  await requireAuth();
  return (
    <main>
      <h1 className="text-4xl font-bold">Profile</h1>
      <form
        action={async () => {
          "use server";
          await logout();
          // redirect('/');
        }}
      >
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Logout
        </button>
      </form>
    </main>
  );
};

export default Profile;
