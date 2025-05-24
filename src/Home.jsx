
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Sección 1: Presentación */}
      <section className="py-20 text-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-4">Impulsa</h1>
        <p className="text-lg max-w-xl mx-auto">
          Psicología organizacional para equipos en remoto. Bienestar, cohesión y rendimiento donde sea que trabajes.
        </p>
      </section>

      {/* Sección 2: Problemática */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">La barrera invisible del teletrabajo</h2>
        <p className="mb-4">
          El trabajo en remoto puede generar desconexión emocional, dificultades de comunicación y pérdida de pertenencia. Todo esto impacta directamente en el rendimiento individual y colectivo.
        </p>
        <p>
          En Impulsa ayudamos a las empresas a recuperar la cohesión y el bienestar psicológico de sus equipos a distancia.
        </p>
      </section>

      {/* Sección 3: Servicios */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Servicios que ofrecemos</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <li className="bg-white shadow p-4 rounded-xl">
              <h3 className="font-semibold text-lg">Mentorías para líderes remotos</h3>
              <p>Guiamos a quienes lideran equipos desde la distancia para que comuniquen, motiven y conecten mejor.</p>
            </li>
            <li className="bg-white shadow p-4 rounded-xl">
              <h3 className="font-semibold text-lg">Dinámicas virtuales para equipos</h3>
              <p>Actividades diseñadas para fortalecer vínculos, confianza y colaboración entre compañeros.</p>
            </li>
            <li className="bg-white shadow p-4 rounded-xl">
              <h3 className="font-semibold text-lg">Planes de mejora de rendimiento individual</h3>
              <p>Coaching personalizado para optimizar la productividad y el bienestar desde casa.</p>
            </li>
            <li className="bg-white shadow p-4 rounded-xl">
              <h3 className="font-semibold text-lg">Diagnóstico del clima emocional remoto</h3>
              <p>Evaluación profunda del estado psicológico y organizacional del equipo.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Sección 4: Diferenciales */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">¿Por qué elegir Impulsa?</h2>
        <ul className="space-y-3 text-center">
          <li>✅ Enfoque psicológico centrado en las personas</li>
          <li>✅ Herramientas adaptadas al trabajo remoto</li>
          <li>✅ Intervención individual y colectiva</li>
          <li>✅ Propuestas aplicables desde el primer día</li>
        </ul>
      </section>

      {/* Sección 5: CTA */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold mb-4">¿Querés saber cómo mejorar tu equipo remoto?</h2>
        <p className="mb-6">Solicita un diagnóstico gratuito sin compromiso. Te ayudamos a reconectar a tu equipo.</p>
        <button className="text-white bg-gray-900 hover:bg-gray-800 px-6 py-2 rounded-full">Solicitar diagnóstico</button>
      </section>

      {/* Sección 6: Contacto */}
      <section className="py-16 px-4 max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Contacto</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full border border-gray-300 rounded px-4 py-2"
            rows={4}
          ></textarea>
          <button className="bg-gray-900 text-white hover:bg-gray-800 px-4 py-2 rounded" type="submit">Enviar mensaje</button>
        </form>
      </section>
    </main>
  );
}
