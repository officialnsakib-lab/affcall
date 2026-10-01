import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-black font-sans leading-relaxed bg-white">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-black">
        Terms & Conditions
      </h1>

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3 text-black">
          Agreement to Terms
        </h2>
        <p className="mb-4 text-black">
          These Terms and Conditions constitute a legally binding agreement made between you and affcall, concerning your access to and use of our platform and services.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3 text-black">
          Intellectual Property Rights
        </h2>
        <p className="mb-4 text-black">
          Unless otherwise indicated, the site and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site are owned or controlled by affcall.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3 text-black">
          User Representations
        </h2>
        <p className="mb-4 text-black">
          By using our services, you represent and warrant that all registration information you submit will be true, accurate, current, and complete, and that you will maintain the accuracy of such information.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3 text-black">
          Prohibited Activities
        </h2>
        <p className="mb-4 text-black">
          You may not access or use the site for any purpose other than that for which we make the site available. The site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3 text-black">
          Modifications and Interruptions
        </h2>
        <p className="mb-4 text-black">
          We reserve the right to change, modify, or remove the contents of the site at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the services without notice.
        </p>
      </section>

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3 text-black">
          Governing Law
        </h2>
        <p className="mb-4 text-black">
          These terms shall be governed by and defined following the laws of the jurisdiction in which affcall operates, without regard to its conflict of law provisions.
        </p>
      </section>

      {/* Section 7 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3 text-black">
          Limitation of Liability
        </h2>
        <p className="mb-4 text-black">
          In no event will affcall or its directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the services.
        </p>
      </section>

      {/* Section 8 */}
      <section className="mb-4">
        <h2 className="text-xl font-bold mb-3 text-black">Contact Us</h2>
        <p className="text-black">
          If you have any questions about these Terms & Conditions, please contact us at{" "}
          <a
            href="mailto:support@affcall.com"
            className="text-blue-600 underline hover:text-blue-800"
          >
            support@affcall.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}