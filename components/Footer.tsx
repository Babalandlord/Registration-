export function Footer() {
  return (
    <footer className="border-t border-purple-400/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold">RH</span>
              </div>
              <span className="text-white font-semibold">Ritarock Educonsult Hangout</span>
            </div>
            <p className="text-purple-300 text-sm">
              Join us for a fun hangout experience!
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact & Links</h4>
            <ul className="space-y-2 text-sm text-purple-300">
              <li>📧 RitaRock @ <a href="mailto:contact@ritarockeduconsult.com" className="text-purple-100 hover:text-white transition-colors">ritarockeduconsult.com</a></li>
              <li>🌐 <a href="https://ritarockeduconsult.com" target="_blank" rel="noopener noreferrer" className="text-purple-100 hover:text-white transition-colors">Visit our website</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-400/20 pt-8 text-center">
          <p className="text-purple-300 text-sm">
            &copy; 2026 Ritarock Educonsult. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
