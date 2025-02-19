function Header() {
  return (
    <header className="bg-pink-200 py-4">
      <div className="container mx-auto px-4">
        <img 
          src="/logo1.png" 
          alt="Logo de la empresa"
          className="w-32 h-auto hover:scale-105 transition-transform duration-300 shadow-lg rounded-lg" 
        />
      </div>
    </header>
  )
}

export default Header