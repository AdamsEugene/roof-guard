"use client";

/**
 * Utility to suppress React hydration warnings that are caused by browser extensions
 * modifying the DOM with attributes like 'cz-shortcut-listen'.
 *
 * Use this function in your useEffect to register the error handling.
 */
export function suppressHydrationWarnings() {
  if (typeof window !== "undefined") {
    // Store the original console.error
    const originalConsoleError = console.error;

    // Replace console.error with a version that filters out specific hydration warnings
    console.error = (...args: unknown[]) => {
      // Check if the error is a hydration warning related to browser extensions
      const errorMessage = String(args[0] || "");
      if (
        errorMessage.includes("Hydration") &&
        (errorMessage.includes("cz-shortcut-listen") ||
          errorMessage.includes("browser extension"))
      ) {
        // Silent this specific error
        return;
      }

      // Pass through other errors to the original console.error
      return originalConsoleError.apply(console, args);
    };
  }
}
