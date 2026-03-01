export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm font-bold tracking-tight text-white">
          JCK <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">LTD</span>
        </span>
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} JCK LTD. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {['Services', 'About', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-slate-500 hover:text-white text-sm transition-colors">
              {link}
            </a>
          ))}
          <a href="https://www.linkedin.com/in/jimkonieck" target="_blank" rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-400 text-sm transition-colors">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  )
}
