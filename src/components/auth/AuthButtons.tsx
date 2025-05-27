import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/clerk-react";

const AuthButtons = () => {
  const { isSignedIn } = useUser();

  if (isSignedIn) {
    return <UserButton afterSignOutUrl="/" />;
  }

  return (
    <div className="flex items-center gap-4">
      <SignInButton mode="modal">
        <button className="text-primary-600 hover:text-primary-700 font-medium">
          Sign In
        </button>
      </SignInButton>
      <SignUpButton mode="modal">
        <button className="btn btn-primary">
          Sign Up
        </button>
      </SignUpButton>
    </div>
  );
};

export default AuthButtons;