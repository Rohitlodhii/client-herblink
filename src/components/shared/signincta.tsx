import React from "react";
import { useNavigate } from "@tanstack/react-router";

interface SignInCTAProps {
  orgName: string;
  redirectTo: string;
}

const SignInCTA: React.FC<SignInCTAProps> = ({ orgName, redirectTo }) => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate({ to: redirectTo });
  };

  return (
    <section className="flex items-center justify-center min-h-[90vh] bg-gray-50 px-4">
      <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          Sign in to your {orgName} account
        </h1>
        <p className="text-gray-600 mb-6">
          Access your dashboard, manage your herbs, and track supply chain
          details seamlessly.
        </p>
        <button
          onClick={handleSignIn}
          className="w-full bg-indigo-500 text-white py-3 rounded-xl 
                     font-medium hover:bg-indigo-600 transition-colors 
                     focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Sign In
        </button>
      </div>
    </section>
  );
};

export default SignInCTA;
