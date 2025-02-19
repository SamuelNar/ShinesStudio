import PropTypes from 'prop-types'

function Servcices({name, description, image}) {
  const handleBooking = () => {
    // Número de teléfono de WhatsApp del negocio
    const phoneNumber = "3586000477" // Reemplaza con el número real

    // Mensaje predefinido
    const message = `Hola, quiero sacar turno para ${name}`

    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(message)

    // Crear el enlace de WhatsApp
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappLink, "_blank")
  }
    
      return (
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6 hover:shadow-2xl transition-all duration-300 border border-pink-100">
          <div className="overflow-hidden rounded-lg mb-6">
            <img 
              src={image || "/placeholder.svg"} 
              alt={name} 
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <h3 className="text-2xl font-bold text-pink-800 mb-3 hover:text-pink-600 transition-colors">{name}</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
          <button
            onClick={handleBooking}
            className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2"
          >
            <span>Reservar Ahora</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      )
}

Servcices.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string
}

export default Servcices