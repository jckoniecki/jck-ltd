export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/[0.05] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-black tracking-tighter text-white text-lg">
          JCK <span className="text-gradient-warm">LTD</span>
        </span>
        <p className="text-gray-600 text-xs">© {year} JCK LTD. All rights reserved.</p>
        <div className="flex items-center gap-5">
          {['Services', 'About', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-xs text-gray-600 hover:text-gray-300 transition-colors">{l}</a>
          ))}
          <a
            href="https://www.linkedin.com/in/jimkonieck"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-600 hover:text-indigo-400 transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  )
}
