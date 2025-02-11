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
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold text-pink-700 mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <button
            onClick={handleBooking}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Sacar Turno
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