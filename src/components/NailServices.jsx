import Service from "./Servcices"

const nailServices = [
  {
    name: "Manicura Clásica",
    description: "Limado, cutículas y esmalte para unas manos perfectas.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Pedicura Spa", 
    description: "Tratamiento completo para pies, incluyendo exfoliación y masaje.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Uñas Acrílicas",
    description: "Extensiones de uñas duraderas y resistentes.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

function NailServices() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-8 text-center">
          Servicios de Uñas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nailServices.map((service, index) => (
            <div key={index} className="transform hover:scale-105 transition-all duration-300">
              <Service {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NailServices
