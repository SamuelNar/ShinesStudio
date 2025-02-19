function Header() {
  return (
    <header className="bg-gradient-to-r from-pink-200 to-pink-300 py-6 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <img 
          src="/logo1-re.png" 
          alt="Logo de la empresa"
          className="w-32 h-auto hover:scale-110 transition-transform duration-300 shadow-lg rounded-lg" 
        />
      </div>
    </header>
  )
}

export default Header