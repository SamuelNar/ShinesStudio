import Service from "./Servcices"

const nailServices = [
  {
    name: "Manicura Clásica",
    description: "Limado, cutículas y esmalte para unas manos perfectas.",
    image: "/uñas.webp",
  },
  {
    name: "Pedicura Spa", 
    description: "Tratamiento completo para pies, incluyendo exfoliación y masaje.",
    image: "/uñas.webp",
  },
  {
    name: "Uñas Acrílicas",
    description: "Extensiones de uñas duraderas y resistentes.",
    image: "/uñas.webp",
  },
]

function NailServices() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-800 mb-12 text-center">
          Servicios de Uñas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {nailServices.map((service, index) => (
            <div key={index} className="transform hover:scale-105 transition-all duration-300">
              <Service {...service} />
            </div>
          ))}
        </div>
      </div>
      <img src="../assets/perfil.webp" alt="" />
    </section>
  )
}

export default NailServices