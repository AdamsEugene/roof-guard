import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/ui/Hero";
import WorkGallery from "@/components/ui/WorkGallery";
import Image from "next/image";

export default function AboutPage() {
  return (
    <SiteLayout>
      <Hero
        title="About RoofGuard"
        description="We're on a mission to transform the roofing industry by connecting homeowners with trusted professionals through innovative technology and exceptional service."
        secondaryCtaText="Contact Us"
        secondaryCtaLink="/contact"
        heroImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-6"
                style={{ color: "#0F172A" }}
              >
                Our Story
              </h2>
              <p className="text-slate-600 mb-4">
                RoofGuard was founded with a simple goal: to make quality
                roofing services accessible, transparent, and stress-free for
                homeowners across the country.
              </p>
              <p className="text-slate-600 mb-4">
                After experiencing firsthand the challenges of finding reliable
                roofing contractors, our founders recognized the need for a
                better solution. They envisioned a platform that would connect
                homeowners with trusted professionals, provide transparent
                pricing, and offer peace of mind throughout the entire process.
              </p>
              <p className="text-slate-600">
                Today, RoofGuard is transforming the roofing industry through
                innovative technology, rigorous contractor vetting, and a
                commitment to exceptional customer service. We&apos;re proud to
                have helped thousands of homeowners protect their most valuable
                asset—their home—with confidence and ease.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                alt="The RoofGuard team"
                width={600}
                height={400}
                className="object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold font-display tracking-tight"
              style={{ color: "#0F172A" }}
            >
              Our Core Values
            </h2>
            <p className="mt-4 text-xl" style={{ color: "#475569" }}>
              These principles guide everything we do at RoofGuard
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">
                Quality & Excellence
              </h3>
              <p className="text-slate-600">
                We&apos;re committed to connecting homeowners with only the
                highest quality professionals who deliver exceptional
                workmanship and service.
              </p>
            </div>

            <div className="card p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full bg-terracotta-100 text-terracotta flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">
                Trust & Transparency
              </h3>
              <p className="text-slate-600">
                We provide clear, transparent information and pricing so
                homeowners can make confident decisions about their roofing
                needs.
              </p>
            </div>

            <div className="card p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">
                Innovation
              </h3>
              <p className="text-slate-600">
                We continuously improve our platform and services to provide the
                best possible experience for homeowners and contractors alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold font-display tracking-tight"
              style={{ color: "#0F172A" }}
            >
              Meet Our Leadership
            </h2>
            <p className="mt-4 text-xl" style={{ color: "#475569" }}>
              The experienced team behind RoofGuard
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Michael Johnson, CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-slate-900">
                Michael Johnson
              </h3>
              <p className="text-primary-600 font-medium mb-3">CEO & Founder</p>
              <p className="text-slate-600 text-sm">
                With 15+ years in construction and technology, Michael founded
                RoofGuard to bridge the gap between quality roofing services and
                homeowners.
              </p>
            </div>

            <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                  alt="Sarah Chen, COO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-slate-900">
                Sarah Chen
              </h3>
              <p className="text-primary-600 font-medium mb-3">
                Chief Operations Officer
              </p>
              <p className="text-slate-600 text-sm">
                Sarah brings a wealth of experience in operations and customer
                service, ensuring our platform delivers a seamless experience.
              </p>
            </div>

            <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="David Rodriguez, CTO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-slate-900">
                David Rodriguez
              </h3>
              <p className="text-primary-600 font-medium mb-3">
                Chief Technology Officer
              </p>
              <p className="text-slate-600 text-sm">
                David leads our engineering team, developing innovative
                technology solutions that power the RoofGuard platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Consider adding this section */}

      {/* Work Samples */}
      <div className="container">
        <WorkGallery
          title="Our Work Speaks for Itself"
          subtitle="Browse through our portfolio of successful roofing projects completed by contractors in our network"
          compact={true}
        />
      </div>
    </SiteLayout>
  );
}
