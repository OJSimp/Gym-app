import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}


export default function GuestUser() {

return
}

export default function AuthorisedUser({session}) {

return(
  <section>
    <h1>User Details</h1>
    <h2>Email: {session.user.email}</h2>
  </section>
  )
}