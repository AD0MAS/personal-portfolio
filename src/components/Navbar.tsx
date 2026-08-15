/** Fixed top navigation bar with smooth-scroll links to page sections. */
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-semibold text-lg">Adomas Pakalniškis</span>

        <ul className="flex gap-6 text-sm text-gray-700">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
