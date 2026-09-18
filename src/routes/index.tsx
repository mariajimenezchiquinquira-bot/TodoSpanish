import { createFileRoute } from "@tanstack/react-router";
import { FileText, Linkedin } from "lucide-react";
import {
  ActionLink,
  CardBlock,
  DocsLink,
  GithubLink,
  LiveLink,
  ProjectCard,
  TableauLink,
} from "@/components/portfolio/ProjectCard";
import { ProjectImageGrid } from "@/components/portfolio/ImagePlaceholder";
import paFormulario from "@/assets/projects/formulario.png";
import paFlow from "@/assets/projects/power-automate-flow.png";
import paRequestMail from "@/assets/projects/power-automate-email-detail.png";
import paRequestNotify from "@/assets/projects/power-automate-request-approved-notification.png";
import paApprovedMail from "@/assets/projects/power-automate-email-approved.png";
import zipptoLanding from "@/assets/projects/zippto-landing.png";
import zipptoCollections from "@/assets/projects/zippto-collections.png";
import zipptoFront from "@/assets/projects/zippto-flashcard-front.png";
import zipptoBack from "@/assets/projects/zippto-flashcard-back.png";
import payraSplitJiraBoard from "@/assets/projects/payrasplit-jira-board.png";
import payraSplitNotionCover from "@/assets/projects/payrasplit-notion-cover.png";
import payraSplitNotionTimelineBacklog from "@/assets/projects/payrasplit-notion-timeline-backlog.png";
import payraSplitTableau from "@/assets/projects/payrasplit-tableau-dashboard.png";
import weworkValuation from "@/assets/projects/wework-valuation.png";
import weworkTimeline from "@/assets/projects/wework-timeline.png";
import weworkLossesDonut from "@/assets/projects/wework-losses-donut.png";
import churnDashboard from "@/assets/projects/churn-capital-loss-dashboard-v2.png";
import segElbowMethod from "@/assets/projects/segmentation-5-elbow-method.png";
import segDominantCategory from "@/assets/projects/segmentation-4-dominant-category.png";
import segAvgTransaction from "@/assets/projects/segmentation-6-avg-transaction-by-cluster.png";
import segCardFranchise from "@/assets/projects/segmentation-card-franchise.png";
import segDomesticIntl from "@/assets/projects/segmentation-2-domestic-vs-international.png";
import segWeekdayHeatmap from "@/assets/projects/segmentation-weekday-heatmap.png";
import n8nFlow from "@/assets/projects/n8n-flow-diagram.png";
import n8nConfirmationMsg from "@/assets/projects/n8n-confirmation-message.png";
import sheetsResult from "@/assets/projects/n8n-sheets.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "María José Jiménez — Portafolio" },
      {
        name: "description",
        content:
          "Portafolio de María José Jiménez, estudiante de Ingeniería Industrial especializada en producto digital, business intelligence y análisis de datos, con proyectos potenciados con IA para fintech.",
      },
      { property: "og:title", content: "María José Jiménez — Portafolio" },
      {
        property: "og:description",
        content:
          "Proyectos de producto, business intelligence, analítica y automatización basados en datos e IA, con enfoque en fintech.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SKILLS = [
  "Automatización",
  "Python",
  "SQL",
  "Power BI",
  "Excel",
  "R",
  "Tableau",
  "Vercel",
  "Supabase",
  "Metodologías Ágiles (Scrum, Kanban)",
  "Diseño UI/UX",
  "IA Generativa",
  "Gestión de Producto",
  "Desarrollo de Producto Digital",
  "Business Intelligence",
  "Visualización de Datos",
  "Análisis de Negocio",
  "Análisis de Datos",
  "Análisis Financiero",
  "Mejora de Procesos",
  "Power Automate",
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Portafolio
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            María José Jiménez
          </h1>
          <p className="mt-3 text-base font-medium text-muted-foreground sm:text-lg">
            Estudiante de Ingeniería Industrial
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/mariajosejimenez-ingenieraindustrial/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <section aria-labelledby="projects">
          <h2
            id="projects"
            className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Proyectos
            <span className="mt-2 block h-1 w-14 rounded-full bg-primary" aria-hidden="true" />
          </h2>
          <div className="mt-8 grid gap-6">
            <ProjectCard
              title="Payra Split — Función de Pagos Compartidos"
              tech={["Notion", "Jira", "Tableau", "Scrum"]}
              actions={
                <TableauLink href="https://public.tableau.com/app/profile/maria.jimenez7845/viz/PayraSplit_DashboardTableauES/Dashboard1" />
              }
            >
              <CardBlock label="Problema">
                Dividir gastos compartidos puede ser un dolor de cabeza. Cuando una persona paga por
                todos, las cuentas se complican, o cuando Laura pagó la comida y Felipe las cervezas,
                hay que cruzar cuentas, saber quién le debe a quién, y al final es todo un rollo.
              </CardBlock>
              <CardBlock label="Solución">
                "Payra Split", una función que permite a los usuarios de Payra, dividir gastos al
                instante y ver quién ya pagó. A continuación se muestra un overview del proceso de
                planificación, ejecución y seguimiento del producto. Se utilizó Notion para
                planificar el producto, Jira para gestionar la ejecución de cada fase mediante
                sprints y tareas, y Tableau para analizar las tasas de adopción y uso después del
                lanzamiento.
              </CardBlock>
              <CardBlock label="Resultado">
                Una experiencia más simple para dividir gastos, hacer seguimiento a los pagos y
                saber quién debe a quién, con métricas de adopción y uso para evaluar el desempeño
                de la función.
              </CardBlock>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-card-foreground/50">
                    Notion — Planificación de Producto
                  </p>
                  <ProjectImageGrid
                    images={[
                      { src: payraSplitNotionCover, alt: "Resumen del roadmap de Payra Split en Notion" },
                      { src: payraSplitNotionTimelineBacklog, alt: "Cronograma y backlog de Payra Split en Notion" },
                    ]}
                  />
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-card-foreground/50">
                    Jira — Ejecución de Sprints
                  </p>
                  <div className="mx-auto w-full max-w-2xl">
                    <ProjectImageGrid
                      images={[
                        { src: payraSplitJiraBoard, alt: "Tablero Scrum de Payra Split en Jira" },
                      ]}
                      columns={1}
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-card-foreground/50">
                    Tableau — Dashboard de Adopción
                  </p>
                  <ProjectImageGrid
                    images={[
                      { src: payraSplitTableau, alt: "Dashboard de uso y adopción de Payra Split en Tableau" },
                    ]}
                    columns={1}
                  />
                </div>
              </div>
            </ProjectCard>

            <ProjectCard
              title="Zippto — Flashcards Personalizadas"
              tech={["UI/UX Design", "Supabase", "Vercel", "Claude Code"]}
              actions={
                <>
                  <LiveLink href="https://zippto.vercel.app/landing.html" label="Probar Zippto" />
                  <GithubLink href="https://github.com/mariajimenezchiquinquira-bot/Zippto" />
                </>
              }
            >
              <CardBlock label="Problema">
                Las herramientas tradicionales de flashcards pueden complicar el estudio más de lo
                necesario, con configuraciones complejas, importaciones poco intuitivas y sistemas de
                repaso confusos.
              </CardBlock>
              <CardBlock label="Solución">
                "Zippto", una aplicación web que simplifica la creación y el repaso de flashcards.
                Los usuarios pueden crear colecciones personalizadas y estudiar cualquier tema
                mediante un sistema de repetición espaciada de tres mazos, que prioriza las tarjetas
                que más necesitan práctica.
              </CardBlock>
              <CardBlock label="Resultado">
                Una experiencia de estudio más simple e intuitiva, sin configuraciones complejas ni
                sistemas de repaso confusos.
              </CardBlock>
              <ProjectImageGrid
                images={[
                  { src: zipptoLanding, alt: "Página de inicio de Zippto" },
                  { src: zipptoCollections, alt: "Vista de colecciones de Zippto" },
                  { src: zipptoBack, alt: "Reverso de la flashcard de Zippto" },
                  { src: zipptoFront, alt: "Frente de la flashcard de Zippto" },
                ]}
              />
            </ProjectCard>
            <ProjectCard
              title="Automatización — Solicitud Herramientas de Pago"
              tech={["Power Automate", "Process Automation"]}
              actions={
                <DocsLink href="/docs/premium-tool-request-automation-technical-documentation.pdf" />
              }
            >
              <CardBlock label="Problema">
                Solicitar a la empresa herramientas pagas como Claude Pro, Canva Pro, entre otras,
                requiere enviar varios correos y mensajes para obtener la aprobación, haciendo que
                el proceso sea lento y sin una trazabilidad clara.
              </CardBlock>
              <CardBlock label="Solución">
                Mediante un flujo de Power Automate se centraliza y automatiza todo el proceso. En
                lugar de enviar correos y mensajes, los usuarios hacen su solicitud a través de un
                Forms con la herramienta que necesitan, la justificación, el costo y la duración de
                la licencia. A partir de ahí, el flujo se encarga de enviar la solicitud al área
                encargada para su aprobación o rechazo, notificar al solicitante y dejar registrada
                cada decisión.
              </CardBlock>
              <CardBlock label="Resultado">
                Un proceso manual y disperso se convirtió en un flujo de trabajo estructurado,
                automatizado y totalmente trazable, reduciendo la carga operativa y asegurando que
                cada solicitud quedara registrada y documentada.
              </CardBlock>
              <div className="mx-auto grid w-full max-w-3xl gap-3 sm:grid-cols-2">
                <a
                  href={paFlow}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-md sm:row-span-2"
                >
                  <img
                    src={paFlow}
                    alt="Flujo de Power Automate ejecutándose exitosamente"
                    loading="lazy"
                    className="h-full w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </a>
                {[
                  { src: paFormulario, alt: "Formulario de solicitud de herramienta premium en Microsoft Forms" },
                  { src: paRequestMail, alt: "Correo de aprobación con los detalles de la solicitud" },
                ].map((image) => (
                  <a
                    key={image.src}
                    href={image.src}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-md"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="aspect-video w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>
                ))}
                {[
                  { src: paApprovedMail, alt: "Correo de confirmación de aprobación para el administrador" },
                  { src: paRequestNotify, alt: "Notificación de que la solicitud fue aprobada" },
                ].map((image) => (
                  <a
                    key={image.src}
                    href={image.src}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-md"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="aspect-video w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>
                ))}
              </div>
            </ProjectCard>

            <ProjectCard
              title="WeWork: El Colapso Estratégico de un Modelo de Negocio de $47.000M"
              tech={["Caso de Negocio", "Análisis Estratégico", "Business Understanding"]}
              actions={
                <DocsLink href="/docs/WeWork_Case_Study_Analysis.pdf" label="Ver Análisis Completo" />
              }
            >
              <CardBlock label="Problema">
                WeWork alcanzó una valoración de $47.000 millones en enero de 2019, pero se
                declaró en bancarrota en noviembre de 2023. Su modelo dependía de compromisos de
                arrendamiento a largo plazo mientras generaba ingresos mediante membresías
                flexibles de corto plazo, creando una exposición financiera significativa cuando
                la demanda se debilitó. ¿Qué decisiones estratégicas impulsaron este colapso?
              </CardBlock>
              <CardBlock label="Enfoque">
                Analicé su modelo de arrendamiento a largo plazo y subarriendo flexible, la
                cultura de gasto bajo el liderazgo de Adam Neumann, y las fallas de gobernanza
                previas al IPO de 2019. El análisis se enfocó en la relación entre la expansión
                agresiva, la sostenibilidad financiera y la gestión de riesgo.
              </CardBlock>
              <CardBlock label="Resultado">
                WeWork pasó de $47.000 millones a la bancarrota, acumulando $11.400 millones en
                pérdidas netas entre 2020 y mediados de 2023. El colapso fue impulsado por un
                desajuste estructural de riesgo, una expansión sin rentabilidad comprobada y una
                gobernanza débil.
              </CardBlock>
              <div className="grid gap-3 sm:grid-cols-[1.5fr_1fr_1fr]">
                <a
                  href={weworkTimeline}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center overflow-hidden rounded-md"
                >
                  <img
                    src={weworkTimeline}
                    alt="Línea de tiempo de las decisiones estratégicas clave de WeWork"
                    loading="lazy"
                    className="max-h-[220px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </a>
                <a
                  href={weworkValuation}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center overflow-hidden rounded-md"
                >
                  <img
                    src={weworkValuation}
                    alt="Valoración de WeWork desde el pico de 2019 hasta la bancarrota de 2023"
                    loading="lazy"
                    className="max-h-[220px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </a>
                <a
                  href={weworkLossesDonut}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center overflow-hidden rounded-md"
                >
                  <img
                    src={weworkLossesDonut}
                    alt="Pérdidas netas acumuladas de WeWork 2020-2023"
                    loading="lazy"
                    className="max-h-[220px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </a>
              </div>
            </ProjectCard>

            <ProjectCard
              title="Análisis de Fuga de Clientes y Pérdida de Capital"
              tech={["Power BI", "DAX", "Visualización de Datos"]}
              actions={
                <GithubLink href="https://github.com/mariajimenezchiquinquira-bot/PowerBi-Customer-Churn-Capital-Loss-Analysis" />
              }
            >
              <CardBlock label="Problema">
                Un banco enfrentaba fuga de clientes sin identificar sus principales causas ni
                su impacto en el capital.
              </CardBlock>
              <CardBlock label="Enfoque">
                Realicé un análisis exploratorio en Power BI mediante visualizaciones y
                comparaciones para identificar los patrones que mejor explicaban la fuga y los
                segmentos de mayor riesgo.
              </CardBlock>
              <CardBlock label="Resultados">
                El banco enfrenta una fuga de capital concentrada en clientes de alto saldo,
                generando un impacto financiero significativo. La principal señal de alerta es la
                inactividad, especialmente en Alemania, donde se registra la mayor tasa de fuga.
              </CardBlock>
              <img
                src={churnDashboard}
                alt="Dashboard de Power BI: Análisis de Fuga de Clientes y Pérdida de Capital"
                loading="lazy"
                className="mx-auto w-full max-w-3xl rounded-md bg-white object-contain"
              />
            </ProjectCard>

            <ProjectCard
              title="Segmentación de Tarjetahabientes por Comportamiento de Gasto"
              tech={["Python", "SQL"]}
              actions={
                <ActionLink href="/ConsumoTarjetasCredito.html" variant="solid">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Notebook
                </ActionLink>
              }
            >
              <CardBlock label="Problema">
                Un banco colombiano contaba con datos de gasto de más de 47.000 tarjetahabientes,
                pero no tenía una segmentación basada en su comportamiento de uso, limitando el
                diseño de promociones dirigidas.
              </CardBlock>
              <CardBlock label="Enfoque">
                Apliqué clustering K-means para segmentar clientes según su comportamiento
                transaccional y utilicé el método del codo para determinar el número óptimo de
                clústeres. Luego, mediante SQL, analicé la frecuencia, el gasto promedio y la
                categoría dominante de cada clúster.
              </CardBlock>
              <CardBlock label="Resultado">
                Los tres clústeres se diferenciaron por frecuencia y valor de gasto: ocasionales
                de bajo gasto (42.7%), ocasionales de alto valor (33.1%, 9 veces mayor) y
                usuarios frecuentes (24.2%).
              </CardBlock>
              <ProjectImageGrid
                columns={3}
                images={[
                  { src: segElbowMethod, alt: "Método del codo para seleccionar el número de clústeres" },
                  { src: segDominantCategory, alt: "Categoría de gasto dominante por clúster" },
                  { src: segAvgTransaction, alt: "Monto promedio de transacción por clúster de clientes" },
                  { src: segCardFranchise, alt: "Franquicia de tarjeta más usada por clúster" },
                  { src: segDomesticIntl, alt: "Gasto nacional vs. internacional por clúster" },
                  { src: segWeekdayHeatmap, alt: "Gasto por día de la semana y clúster" },
                ]}
              />
            </ProjectCard>

            <ProjectCard
              title="Automatización de Contratos Vehiculares"
              tech={["n8n", "Google Gemini (IA)"]}
              actions={
                <DocsLink href="/docs/vehicle-contract-automation-technical-documentation.pdf" />
              }
            >
              <CardBlock label="Problema">
                El equipo de facturación de un concesionario extraía manualmente 8 campos de
                datos de contratos en PDF a una hoja de cálculo, un proceso lento y propenso a
                errores humanos.
              </CardBlock>
              <CardBlock label="Enfoque">
                Construí un flujo automatizado en n8n usando un bucle para procesar múltiples
                contratos. El flujo lee los PDFs desde Drive, envía el texto a Gemini AI mediante
                un nodo Information Extractor, actualiza Google Sheets y dispara una
                confirmación por Gmail.
              </CardBlock>
              <CardBlock label="Resultado">
                El flujo procesó los 15 contratos sin errores, agregando automáticamente datos
                estructurados y notificando al equipo. Esto eliminó el ingreso manual de datos,
                optimizó el procesamiento por lotes y mejoró la confiabilidad de la facturación.
              </CardBlock>
              <div className="flex flex-col gap-3">
                <a
                  href={n8nFlow}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-md"
                >
                  <img
                    src={n8nFlow}
                    alt="Flujo de n8n para automatizar el procesamiento de contratos vehiculares"
                    loading="lazy"
                    className="aspect-video w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </a>
                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={sheetsResult}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-md"
                  >
                    <img
                      src={sheetsResult}
                      alt="Datos vehiculares extraídos y registrados en Google Sheets"
                      loading="lazy"
                      className="aspect-video w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>
                  <a
                    href={n8nConfirmationMsg}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-md"
                  >
                    <img
                      src={n8nConfirmationMsg}
                      alt="Mensaje de confirmación por Gmail tras el procesamiento exitoso"
                      loading="lazy"
                      className="aspect-video w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>
                </div>
              </div>
            </ProjectCard>
          </div>
        </section>

        <section aria-labelledby="skills" className="relative mt-16 sm:mt-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-28 -top-24 h-80 w-80 rounded-full bg-primary/30 blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/25 blur-[100px]"
          />
          <h2
            id="skills"
            className="relative text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Skills & Tools
            <span className="mt-2 block h-1 w-14 rounded-full bg-primary" aria-hidden="true" />
          </h2>
          <ul className="relative mt-8 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary/50">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">© María José Jiménez</p>
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/mariajosejimenez-ingenieraindustrial/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
