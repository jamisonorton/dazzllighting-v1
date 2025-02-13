import { Metadata } from "next";
import { auth } from "@/auth";
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
  title: 'Customer Profile',
};

const Profile = async () => {
  const session = await auth();

  return <SessionProvider session={session}>Profile</SessionProvider>;
};

export default Profile;
