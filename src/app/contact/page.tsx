"use client";

import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/ui/Hero";
import Image from "next/image";
import { useEffect, useRef } from "react";

// Define types for Google Maps API
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GoogleMap = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GoogleMarker = any;

interface MapOptions {
  center: { lat: number; lng: number };
  zoom: number;
  mapTypeControl: boolean;
}

interface MarkerOptions {
  position: { lat: number; lng: number };
  map: GoogleMap;
  title: string;
}

// Declare global Google Maps types
declare global {
  interface Window {
    google: {
      maps: {
        Map: new (element: HTMLElement, options: MapOptions) => GoogleMap;
        Marker: new (options: MarkerOptions) => GoogleMarker;
      };
    };
    initMap: (() => void) | undefined;
  }
}

export default function ContactPage() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Google Maps
    const initMap = () => {
      if (mapRef.current && window.google) {
        // Coordinates for Kumasi, Ghana
        const kumasi = { lat: 6.6666, lng: -1.6163 };

        const map = new window.google.maps.Map(mapRef.current, {
          center: kumasi,
          zoom: 14,
          mapTypeControl: false,
        });

        // Add marker for office location
        new window.google.maps.Marker({
          position: kumasi,
          map,
          title: "RoofGuard Ghana Headquarters",
        });
      }
    };

    // Load Google Maps API if not already loaded
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      // Clean up
      window.initMap = undefined;
    };
  }, []);

  return (
    <SiteLayout>
      <Hero
        title="Contact Us"
        description="Get in touch with our team for questions, support, or to find out more about our roofing services. We're here to help you protect your investment."
        secondaryCtaText="Browse Services"
        secondaryCtaLink="/services"
        heroImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
      />

      {/* Contact Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-6"
                style={{ color: "#0F172A" }}
              >
                Get In Touch
              </h2>
              <p className="text-slate-600 mb-8">
                Whether you have questions about our services, need technical
                support, or want to join our network of contractors, we&apos;d
                love to hear from you. Fill out the form and our team will get
                back to you as soon as possible.
              </p>

              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-4 text-slate-900">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-slate-900">
                        Email Us
                      </h4>
                      <a
                        href="mailto:ghana@roofguard.com"
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        ghana@roofguard.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-slate-900">
                        Call Us
                      </h4>
                      <a
                        href="tel:+233200123456"
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        +233 20 012 3456
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-slate-900">
                        Visit Us
                      </h4>
                      <address className="not-italic text-slate-600">
                        123 Prempeh Avenue
                        <br />
                        Kumasi, Ghana
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">
                  Office Hours
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="card p-8 shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-slate-900">
                  Send Us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="service">Service Request</option>
                      <option value="support">Technical Support</option>
                      <option value="contractor">Contractor Application</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-primary-600 text-white py-3 px-4 rounded-md font-medium hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-4"
              style={{ color: "#0F172A" }}
            >
              Visit Our Office
            </h2>
            <p className="text-xl text-slate-600">
              Our headquarters is conveniently located in Kumasi, Ghana
            </p>
          </div>

          <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-md">
            {/* Interactive Google Map */}
            <div ref={mapRef} className="w-full h-full" />

            {/* Fallback for when map fails to load */}
            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center pointer-events-none opacity-0">
              <div className="relative w-full h-full">
                <Image
                  src="https://maps.googleapis.com/maps/api/staticmap?center=Kumasi,Ghana&zoom=14&size=1200x450&markers=color:red%7CKumasi,Ghana&key=&scale=2"
                  alt="Map showing RoofGuard office location in Kumasi, Ghana"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white py-3 px-6 rounded-lg shadow-md flex items-center">
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <span className="font-medium text-slate-900">
                      RoofGuard Ghana Headquarters
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Kumasi,Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-white py-2 px-4 rounded-lg shadow-md text-primary-600 font-medium hover:bg-primary-50 transition-colors"
              aria-label="View location on Google Maps"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="section bg-white">
        <div className="container">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Join Our Network of Contractors
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Are you a roofing professional in Ghana looking to grow your
              business? Join our network to connect with customers seeking
              quality roofing services.
            </p>
            <button className="bg-white text-primary-700 py-3 px-8 rounded-md font-medium hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600">
              Apply as a Contractor
            </button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
