// app/page.js
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md py-4 px-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">MyWebsite</h1>
          <nav className="space-x-4">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow container mx-auto px-8 py-16 text-center" id="home">
        <h2 className="text-3xl font-semibold mb-4">Welcome to My Website</h2>
        <p className="text-lg max-w-xl mx-auto">
          This is a simple single-page website built with Next.js and Tailwind CSS. You can start customizing it to match your project needs.
        </p>

        {/* About Section */}
        <section id="about" className="mt-20">
          <h3 className="text-2xl font-bold mb-4">About</h3>
          <p className="max-w-xl mx-auto text-base">
            This site is built using Next.js App Router and styled using Tailwind CSS. You can now split Header, Footer, and Body into reusable components.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-20">
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <p className="max-w-xl mx-auto text-base">
            Reach out via email at <a href="mailto:you@example.com" className="text-blue-500 underline">you@example.com</a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 shadow-inner py-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
}
