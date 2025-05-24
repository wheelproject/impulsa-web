
export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      backgroundColor: '#f9fafb',
      color: '#1f2937',
      padding: '2rem'
    }}>
      <section style={{ textAlign: 'center', padding: '3rem 1rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Impulsa</h1>
        <p>Psicología organizacional para equipos en remoto. Bienestar, cohesión y rendimiento donde sea que trabajes.</p>
      </section>

      <section style={{ maxWidth: '700px', margin: '2rem auto' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>La barrera invisible del teletrabajo</h2>
        <p>
          El trabajo en remoto puede generar desconexión emocional, dificultades de comunicación y pérdida de pertenencia.
          Todo esto impacta directamente en el rendimiento individual y colectivo.
        </p>
      </section>

      <section style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '0.5rem', maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '1rem' }}>Servicios que ofrecemos</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Mentorías para líderes remotos:</strong> liderazgo consciente a distancia</li>
          <li><strong>Dinámicas virtuales para equipos:</strong> fortalecimiento de vínculos</li>
          <li><strong>Planes de mejora de rendimiento individual:</strong> coaching y acompañamiento</li>
          <li><strong>Diagnóstico del clima emocional remoto:</strong> evaluación personalizada</li>
        </ul>
      </section>

      <section style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f3f4f6' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>¿Querés saber cómo mejorar tu equipo remoto?</h2>
        <button style={{ backgroundColor: '#111827', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '9999px', fontSize: '1rem' }}>
          Solicitar diagnóstico gratuito
        </button>
      </section>
    </main>
  )
}
