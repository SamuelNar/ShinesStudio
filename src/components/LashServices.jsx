import Service from "./Servcices"

const lashServices = [
  {
    name: "Extensiones Clásicas",
    description: "Extensiones de pestañas pelo a pelo para un look natural y elegante.",
    image: "/pestañas.webp",
  },
  {
    name: "Extensiones Volumen", 
    description: "Técnica avanzada para un efecto más dramático y voluminoso.",
    image: "/pestañas.webp",
  },
  {
    name: "Lifting de Pestañas",
    description: "Realza tus pestañas naturales para un efecto de ojos abiertos.",
    image: "/pestañas.webp",
  },
]

function LashServices() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-800 mb-12 text-center">
          Servicios de Pestañas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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