"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Check for success messages from redirects
  useEffect(() => {
    const reset = searchParams.get("reset");
    const verified = searchParams.get("verified");

    if (reset === "success") {
      setSuccessMessage(
        "Your password has been successfully reset. You can now log in with your new password."
      );
    } else if (verified === "success") {
      setSuccessMessage(
        "Your email has been verified. You can now log in to your account."
      );
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, you would handle authentication here
    }, 1500);
  };

  return (
    <div className="card p-8 shadow-lg bg-white rounded-xl">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-display font-bold text-slate-900">
          Welcome Back
        </h1>
        <p className="mt-2 text-slate-600">Sign in to your RoofGuard account</p>
      </div>

      {successMessage && (
        <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md text-sm">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-sm text-primary-600 hover:text-primary-500"
            >
              Forgot password?
            </Link>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-slate-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-slate-700"
          >
            Remember me
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 rounded-md bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 text-white font-medium transition-colors"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Signing in...
            </span>
          ) : (
            "Sign in"
          )}
        </button>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-slate-500">
              Or continue with
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="py-2 px-4 rounded-md bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 flex items-center justify-center shadow-sm transition-colors"
          >
            <svg
              className="h-5 w-5 mr-2"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
            </svg>
            Google
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="py-2 px-4 rounded-md bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 flex items-center justify-center shadow-sm transition-colors"
          >
            <svg
              className="h-5 w-5 mr-2"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.075 7.448C14.996 6.527 15.5 5.287 15.5 4c0-.256-.029-.502-.072-.741C14.148 3.589 12.83 4 11.5 4c-1.33 0-2.648-.411-3.928-.741-.043.24-.072.485-.072.741 0 1.287.504 2.527 1.425 3.448 1.018 1.018 1.38 2.578 1.11 4.052H7.6c.372-1.727-.154-3.697-1.568-5.112C4.947 5.304 4.5 4.267 4.5 3c0-.296.035-.569.077-.833C3.046 2.712 2 3.953 2 5.5v2.5c0 3.59 2.91 6.5 6.5 6.5h7c3.59 0 6.5-2.91 6.5-6.5v-2.5c0-1.547-1.046-2.788-2.577-3.333C19.965 2.431 20 2.704 20 3c0 1.267-.447 2.304-1.532 3.388-1.414 1.415-1.94 3.385-1.568 5.112h-2.935c-.27-1.474.092-3.034 1.11-4.052zM9.5 16.5a.5.5 0 000 1h6a.5.5 0 000-1h-6z" />
            </svg>
            Apple
          </motion.button>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-slate-600">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-primary-600 hover:text-primary-500"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
