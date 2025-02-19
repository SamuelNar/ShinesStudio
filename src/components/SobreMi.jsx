import { useState } from "react";
import { motion } from "framer-motion";

const SobreMi = () => {
  const [certificados] = useState([
    "/certificado1.jpg",
    "/certificado2.jpg",
    "/certificado3.jpg",
  ]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-pink-50 to-white">
      {/* Imagen principal */}
      <div className="text-center">
        <motion.img
          src="/p.webp"
          alt="Foto de la persona"
          className="w-48 h-48 mx-auto rounded-full shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h2 className="text-2xl font-bold mt-4 text-pink-800">Malena Narvaja Torres</h2>
        <p className="text-gray-600">Lashista</p>
      </div>

      {/* Galería de Certificados */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-pink-800">Certificados</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {certificados.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Certificado ${index + 1}`}
              className="w-full rounded-lg shadow-md cursor-pointer"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </div>

      {/* Descripción */}
      <div className="mt-8 p-6 bg-pink-100 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-pink-800">Sobre mí</h3>
        <p className="text-gray-700 leading-relaxed">
          Desde pequeña, siempre me ha apasionado el arte en todas sus formas: cantar, pintar, dibujar y bailar. Un día descubrí el arte del maquillaje y me enamoré al instante. Después de terminar la secundaria, junto a mi pareja, buscamos a nuestro hijo Izan. Aunque inicialmente quería estudiar Psicología, me resultaba muy difícil, así que comencé con el arte de las uñas. Desafortunadamente, desarrollé una alergia que me impidió continuar, a pesar de que me encantaba.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Hace dos años, quedé embarazada de mi segundo bebé, lo cual fue una sorpresa ya que mi hijo acababa de dejar los pañales y el pecho. Aunque fue un proceso difícil, estaba emocionada por la llegada de nuestro segundo hijo. Lamentablemente, a los tres meses de embarazo, perdimos a nuestro bebé, lo que me devastó.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Mi madre sugirió que hiciera un curso de pestañas, pero en mi estado de depresión, no creía que pudiera hacerlo. Sin embargo, un día vi un video de una lashista aplicando extensiones de pestañas, y me sentí tan relajada y fascinada que decidí intentarlo.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Así nació Studio Shines, que significa &quot;El estudio brilla&quot;. Gracias al apoyo de mi familia, amigos y clientes, he encontrado una nueva pasión y propósito. He conocido a personas maravillosas y he hecho grandes amistades a través de este trabajo. Aunque perdí a alguien muy querido, he ganado mucho más con todos ustedes. Gracias por su confianza y por ayudarme a sanar mi corazón.
        </p>
      </div>
    </div>
  );
};

export default SobreMi;
