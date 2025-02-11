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
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-pink-800 mb-6">Servicios de Pestañas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lashServices.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
    </section>
  )
}

export default LashServices

