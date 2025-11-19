import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-10 container">
      <header className="w-full max-w-3xl flex items-center justify-between mb-12">
        <h1 className="text-2xl font-extrabold tracking-tight">MyWebsite</h1>
        <nav className="flex gap-6">
          <Link href="/" className="header-link">Home</Link>
          <Link href="/about" className="header-link">About</Link>
          <Link href="/contact" className="header-link">Contact</Link>
        </nav>
      </header>

      <section className="w-full max-w-3xl mx-auto text-center">
        <div className="card p-10">
          <h2 className="text-4xl font-bold mb-4">Design‑forward Landing for Your Product</h2>
          <p className="text-slate-600 mb-6">We craft beautiful, accessible landing pages that convert visitors into customers. Fast, responsive, and delightful on every device.</p>
          <div className="flex items-center justify-center gap-4">
            <a href="#features" className="button-primary">Get Started</a>
            <a href="#features" className="px-4 py-2 text-indigo-600 border border-indigo-200 rounded-md hover:bg-indigo-50 transition">Explore Features</a>
          </div>
        </div>
      </section>

      <section id="features" className="max-w-3xl w-full mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h4 className="font-semibold mb-2">Performance</h4>
          <p className="text-sm text-slate-600">Lightweight pages, fast load times, and SEO-friendly markup.</p>
        </div>
        <div className="card">
          <h4 className="font-semibold mb-2">Design</h4>
          <p className="text-sm text-slate-600">Polished visual language and thoughtful interactions that build trust.</p>
        </div>
        <div className="card">
          <h4 className="font-semibold mb-2">Accessibility</h4>
          <p className="text-sm text-slate-600">Semantic HTML, readable contrast, and keyboard-friendly navigation.</p>
        </div>
      </section>

      <footer className="mt-16 text-gray-600 text-sm">© {new Date().getFullYear()} MyWebsite — Built with care.</footer>
    </main>
  );
}
