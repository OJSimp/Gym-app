import Link from "next/link";

const accessPage = () => {
  return (
    <>
      <h2>Lift</h2>
      <Link href="access/signup" className="btn-primary">
        Sign up
      </Link>
      <Link href="access/login" className="btn-outline">
        Log in
      </Link>
    </>
  );
};

export default accessPage;
