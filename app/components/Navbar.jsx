"use client"

const Navbar = ({ changeLanguage, currSection, changeCurrSection }) => {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <div>Logo</div>
      <div className="flex gap-2 items-center justify-center">
        <button onClick={() => changeLanguage("ENG")}>ENG</button>
        <button onClick={() => changeLanguage("DE")}>DE</button>
        <button onClick={() => changeLanguage("PT")}>PT</button>
      </div>
    </nav>
  )
}

export default Navbar
