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
    <section>
      <h2 className="text-2xl font-bold text-pink-800 mb-6">Servicios de Uñas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nailServices.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
    </section>
  )
}

export default NailServices

