import Service from "./Servcices"

const lashServices = [
  {
    name: "Extensiones Clásicas",
    description: "Extensiones de pestañas pelo a pelo para un look natural y elegante.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Extensiones Volumen", 
    description: "Técnica avanzada para un efecto más dramático y voluminoso.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Lifting de Pestañas",
    description: "Realza tus pestañas naturales para un efecto de ojos abiertos.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

function LashServices() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-8 text-center">
          Servicios de Pestañas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lashServices.map((service, index) => (
            <div key={index} className="transform hover:scale-105 transition-all duration-300">
              <Service {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LashServices
