export default function Header() {
  return (
    <header className="bg-crypto-pureWhite border-b border-gray-200 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-20">
        <div className="flex items-center justify-between py-6 min-h-20">
          <a
            href="#"
            className="flex items-center text-2xl font-bold tracking-tight text-crypto-navy no-underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-7 h-7 mr-2 text-crypto-navy"
              strokeWidth={1.5}
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
              />
            </svg>
            HashTagCrypto
          </a>

          <nav className="flex items-center gap-4">
            <a
              href="#"
              className="text-crypto-darkGray font-bold text-base no-underline hover:text-crypto-lavender transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-crypto-darkGray font-bold text-base no-underline hover:text-crypto-lavender transition-colors"
            >
              Dashboard
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}