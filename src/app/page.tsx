import { WebGLShader } from "@/components/ui/web-gl-shader"
import { RevealSection } from "@/components/ui/reveal-section"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white scroll-smooth">
      <WebGLShader />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-10 lg:px-8">
        <div className="mx-auto w-full rounded-[2rem] border border-white/10 bg-black/70 p-6 shadow-2xl shadow-black/60 backdrop-blur-xl sm:p-10">
          <div className="mb-10 flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="flex flex-col gap-2 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-green-400/90">Currículum Vitae</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                César Alejandro Castillo Ramírez
              </h1>
              <p className="mx-auto max-w-3xl text-base text-white/70 sm:text-lg">
                Ingeniería en Tecnologías de la Información e Innovación Digital
              </p>
              <p className="mx-auto max-w-3xl text-sm text-white/60 sm:text-base">
                Desarrollador Web • Backend • Apps Móviles
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-black/70 p-4 text-sm">
                <p className="text-green-300">Correo</p>
                <p className="mt-2 text-white/80">cas150ram@gmail.com</p>
              </div>
              <div className="rounded-2xl bg-black/70 p-4 text-sm">
                <p className="text-green-300">GitHub</p>
                <a href="https://github.com/Alejandro010825" target="_blank" rel="noreferrer" className="mt-2 block text-white/80 hover:text-white">
                  github.com/Alejandro010825
                </a>
              </div>
              <div className="rounded-2xl bg-black/70 p-4 text-sm">
                <p className="text-green-300">LinkedIn</p>
                <a href="https://www.linkedin.com/in/cesar-alejandro-castillo-86a7713a6/" target="_blank" rel="noreferrer" className="mt-2 block text-white/80 hover:text-white">
                  linkedin.com/in/cesar-alejandro-castillo-86a7713a6
                </a>
              </div>
            </div>
          </div>

          <nav className="mb-10 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
            <a href="#perfil" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10">Perfil</a>
            <a href="#experiencia" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10">Proyectos</a>
            <a href="#tecnologias" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10">Tecnologías</a>
            <a href="#habilidades" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10">Habilidades</a>
            <a href="#educacion" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10">Educación</a>
            <a href="#contacto" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10">Contacto</a>
          </nav>

          <main className="space-y-10">
            <RevealSection id="perfil" className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-3xl font-semibold text-white">Perfil</h2>
              <div className="space-y-4 text-sm leading-7 text-white/70">
                <p>
                  Soy estudiante de Ingeniería en Tecnologías de la Información e Innovación Digital con un enfoque práctico hacia el desarrollo web, backend y aplicaciones móviles. Me apasiona crear soluciones modernas y eficientes que combinen diseño, usabilidad y rendimiento.
                </p>
                <p>
                  Mi experiencia incluye proyectos Full Stack, servidores Linux, bases de datos, despliegue en la nube y redes. Me enfoco en aprender continuamente nuevas tecnologías y en generar resultados con impacto real.
                </p>
              </div>
            </RevealSection>

            <RevealSection className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8" id="experiencia">
              <h2 className="text-3xl font-semibold text-white">Experiencia destacada</h2>
              <div className="space-y-6 text-sm text-white/70">
                <article className="space-y-3 rounded-2xl bg-black/70 p-6">
                  <h3 className="text-xl font-semibold text-white">FlowPay</h3>
                  <p className="text-green-300">React Native • Node.js • Express • MySQL</p>
                  <p>
                    Aplicación móvil para administración de clientes, pagos, recibos y pendientes financieros dirigida a pequeños vendedores y emprendedores. Diseñé flujos de trabajo, componentes móviles y un backend REST firme para soportar múltiples usuarios.
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-white/70">
                    <li>Gestión de clientes y pagos.</li>
                    <li>Control de pendientes financieros.</li>
                    <li>Sistema multiusuario con roles y autenticación.</li>
                    <li>Integración con MySQL y APIs seguras.</li>
                  </ul>
                </article>

                <article className="space-y-3 rounded-2xl bg-black/70 p-6">
                  <h3 className="text-xl font-semibold text-white">CUTTRACK</h3>
                  <p className="text-green-300">React Native • Node.js • MySQL • WebSockets</p>
                  <p>
                    Aplicación para registrar cortes de cabello, calcular intervalos desde el último corte, historial de cortes y experiencias fluidas para el usuario.
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-white/70">
                    <li>Historial de cortes y recomendaciones.</li>
                    <li>Recordatorios automáticos.</li>
                    <li>Interfaz intuitiva y responsive.</li>
                  </ul>
                </article>

                <article className="space-y-3 rounded-2xl bg-black/70 p-6">
                  <h3 className="text-xl font-semibold text-white">Backend Node.js + MySQL</h3>
                  <p className="text-green-300">Node.js • Express • MySQL • JWT • Multer • bcrypt</p>
                  <p>
                    Desarrollo de backends completos con autenticación segura, subida de archivos y conexiones a bases de datos. Construí APIs REST y sistemas de gestión de usuarios con foco en escalabilidad y seguridad.
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-white/70">
                    <li>Login y registro seguros con JWT.</li>
                    <li>Gestión de usuarios y uploads de imágenes.</li>
                    <li>APIs REST con validación y manejo de errores.</li>
                  </ul>
                </article>
              </div>
            </RevealSection>

            <RevealSection id="tecnologias" className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-3xl font-semibold text-white">Tecnologías</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-black/70 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Frontend</h3>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>Next.js</li>
                    <li>TailwindCSS</li>
                    <li>JavaScript</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-black/70 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Backend & Cloud</h3>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>REST APIs</li>
                    <li>JWT Authentication</li>
                    <li>bcrypt</li>
                    <li>MySQL</li>
                    <li>AWS EC2</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-black/70 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Redes & Sistemas</h3>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>Cisco Packet Tracer</li>
                    <li>VLANs</li>
                    <li>InterVLAN Routing</li>
                    <li>Linux Ubuntu</li>
                    <li>VirtualBox</li>
                    <li>Apache</li>
                    <li>Nginx</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-black/70 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Programación</h3>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>C++</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Java</li>
                  </ul>
                </div>
              </div>
            </RevealSection>

            <RevealSection id="habilidades" className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-3xl font-semibold text-white">Habilidades</h2>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl bg-black/70 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Técnicas</h3>
                  <ul className="space-y-2 text-sm text-white/70 list-disc pl-5">
                    <li>APIs REST</li>
                    <li>Bases de datos MySQL</li>
                    <li>Administración Linux</li>
                    <li>Despliegue en AWS</li>
                    <li>Configuración de redes</li>
                    <li>Diseño responsive</li>
                    <li>Git y control de versiones</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-black/70 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Blandas</h3>
                  <ul className="space-y-2 text-sm text-white/70 list-disc pl-5">
                    <li>Trabajo en equipo</li>
                    <li>Resolución de problemas</li>
                    <li>Aprendizaje rápido</li>
                    <li>Adaptabilidad</li>
                    <li>Creatividad</li>
                    <li>Comunicación</li>
                  </ul>
                </div>
              </div>
            </RevealSection>

            <RevealSection id="educacion" className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-3xl font-semibold text-white">Educación</h2>
              <div className="space-y-4 text-sm text-white/70">
                <div className="rounded-2xl bg-black/70 p-6">
                  <h3 className="text-xl font-semibold text-white">Ingeniería en Tecnologías de la Información e Innovación Digital</h3>
                  <p className="mt-2">
                    Actualmente cursando estudios universitarios enfocados en desarrollo de software, redes, bases de datos, sistemas operativos y desarrollo web y móvil.
                  </p>
                </div>
              </div>
            </RevealSection>

            <RevealSection id="contacto" className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-3xl font-semibold text-white">Contacto</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-black/70 p-6 text-sm text-white/70">
                  <p className="text-green-300">Correo</p>
                  <p className="mt-2 text-white/80">cas150ram@gmail.com</p>
                </div>
                <div className="rounded-2xl bg-black/70 p-6 text-sm text-white/70">
                  <p className="text-green-300">GitHub</p>
                  <a href="https://github.com/Alejandro010825" target="_blank" rel="noreferrer" className="mt-2 block text-white/80 hover:text-white">
                    github.com/Alejandro010825
                  </a>
                </div>
                <div className="rounded-2xl bg-black/70 p-6 text-sm text-white/70">
                  <p className="text-green-300">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/cesar-alejandro-castillo-86a7713a6/" target="_blank" rel="noreferrer" className="mt-2 block text-white/80 hover:text-white">
                    linkedin.com/in/cesar-alejandro-castillo-86a7713a6
                  </a>
                </div>
                <div className="rounded-2xl bg-black/70 p-6 text-sm text-white/70">
                  <p className="text-green-300">Ubicación</p>
                  <p className="mt-2 text-white/80">Tuxtla Gutiérrez, Chiapas, México</p>
                </div>
              </div>
            </RevealSection>
          </main>
        </div>
      </div>
    </div>
  )
}
