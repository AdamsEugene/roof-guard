"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";

type VerificationStatus = "loading" | "success" | "error" | "expired";

// Create a client component that uses useSearchParams
function VerificationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<VerificationStatus>("loading");
  const [countdown, setCountdown] = useState(5);

  // Simulating token verification
  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      setStatus("error");
      return;
    }

    // Simulate API call to verify the token
    const verifyToken = setTimeout(() => {
      // For demo purposes, we'll randomly choose a result
      // In a real app, this would be a real API call
      const result =
        Math.random() > 0.2
          ? "success"
          : Math.random() > 0.5
          ? "error"
          : "expired";
      setStatus(result as VerificationStatus);

      // Auto-redirect after success
      if (result === "success") {
        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              router.push("/login");
              return 0;
            }
            return prev - 1;
          });
        }, 1000);

        return () => clearInterval(timer);
      }
    }, 2000);

    return () => clearTimeout(verifyToken);
  }, [searchParams, router]);

  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-display font-bold text-slate-900">
          Email Verification
        </h1>
        <p className="mt-2 text-slate-600">
          {status === "loading" && "We're verifying your email address..."}
          {status === "success" && "Your email has been successfully verified!"}
          {status === "error" && "We couldn't verify your email address."}
          {status === "expired" && "This verification link has expired."}
        </p>
      </div>

      <div className="text-center mb-8">
        {status === "loading" && (
          <div className="flex justify-center mb-6">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        )}

        {status === "success" && (
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="mt-4 text-slate-700">
              Your account is now active. You will be redirected to login in{" "}
              {countdown} seconds.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <p className="mt-4 text-slate-700">
              The verification link you clicked on is invalid or has already
              been used.
            </p>
          </div>
        )}

        {status === "expired" && (
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="mt-4 text-slate-700">
              Your verification link has expired. Please request a new
              verification link.
            </p>
          </div>
        )}
      </div>

      {status !== "loading" && status !== "success" && (
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="py-2 px-6 rounded-md bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 text-white font-medium transition-colors"
            onClick={() => router.push("/login")}
          >
            {status === "expired" ? "Request New Link" : "Back to Login"}
          </motion.button>
        </div>
      )}

      {status === "success" && (
        <div className="mt-4 text-center">
          <Link
            href="/login"
            className="text-sm font-medium text-primary-600 hover:text-primary-500"
          >
            Go to login now
          </Link>
        </div>
      )}
    </>
  );
}

// Main page component with Suspense boundary
export default function VerifyEmailPage() {
  return (
    <div className="card p-8 shadow-lg bg-white rounded-xl">
      <Suspense
        fallback={
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
            </div>
            <p className="text-slate-600">Loading verification...</p>
          </div>
        }
      >
        <VerificationContent />
      </Suspense>
    </div>
  );
}
