/**
 * Base de conocimiento de AlterNata (el bot del portfolio).
 *
 * Solo contiene información que ya es pública en el sitio y en el CV.
 * Los clientes van anónimos a propósito: no agregar nombres de clientes acá.
 * Si cambia el contenido del sitio, actualizar también este texto.
 * El archivo empieza con "_" para que Vercel no lo publique como función.
 */
export const KNOWLEDGE = `
# Christian Natale — datos para responder

## Perfil
- AI Engineer orientado a producto. Base en Buenos Aires, Argentina; trabaja de forma remota.
- Lleva LLMs a productos que ya están en producción: agentes de WhatsApp, extracción de documentos y herramientas internas, sobre una base full stack en TypeScript, Node.js y React.
- Trabaja en contacto directo con los clientes: releva sus procesos, define el alcance, construye, despliega y mide. Después mejora lo que está en producción.
- Lo que más le gusta: encontrar el proceso manual que un agente puede resolver mejor.
- Idiomas: español nativo, inglés B1 (lectura técnica fluida y comunicación escrita profesional).
- Estudios: Ingeniería en Sistemas en la UAI, desde 2025, en curso y en paralelo al trabajo.
- Contacto: email natale.christian.a@gmail.com · LinkedIn linkedin.com/in/christian-natale- · GitHub github.com/Chrisnatalx. El CV en PDF se descarga desde el botón "Descargar CV" del sitio.

## Trayectoria
- 2021: primeros repos públicos en GitHub (tiendas, apps en React, cursos full stack).
- Mar 2022 – hoy: Desarrollador Freelance (autónomo). Software para distintos clientes como líder técnico y en frontend y backend; definición de soluciones, decisiones técnicas y planificación; workflows y automatizaciones para procesos internos.
- Dic 2023 – sep 2025: Técnico de Software en Fractial Systems. Soporte y resolución de incidencias en entornos corporativos de múltiples clientes, análisis de fallas y mejoras en los procesos de implementación, diagnóstico con usuarios y reporte estructurado al equipo de desarrollo.
- Dic 2024 – hoy: AI Engineer en Rocking Product, una empresa que construye software para clientes.
  - 1028 pull requests en 29 repositorios de la organización, más de 850 solo en 2026.
  - Agente de WhatsApp conectado a Odoo que resolvió el 79% de las conversaciones sin intervención humana.
  - Agentes de extracción y validación de documentos de comercio exterior, con evals offline.
  - Creó Estima como proyecto propio; hoy es la herramienta del equipo y reemplazó a Jira.
  - Lidera proyectos con clientes: relevamiento, alcance, prioridades y validación de entregas.
  - Revisa PRs, cuida la trazabilidad de los cambios y resuelve incidentes críticos hands-on. Mentorea desarrolladores junior.

## Habilidades (con dónde las usó)
- IA aplicada: agentes con LLMs (Claude, OpenAI y MiniMax) en WhatsApp, documentos y tasaciones; extracción de documentos con OCR (Document AI) y contratos de salida tipados (Pydantic); evals de agentes con un harness offline sobre documentos reales y valores verificados; RAG y prompt engineering (FAQs del agente de WhatsApp, system prompts con escalado a humano); control de costo y observabilidad (costo por operación, alertas de créditos de los LLMs).
- Agentes y tooling: servidor MCP con tokens personales en Estima; Claude Code y Claude Agent SDK (skills propias y Alter); LangChain (fábrica de modelos en el framework base); memoria y human-in-the-loop (AlterNata); n8n para workflows y automatizaciones internas.
- Integraciones: WhatsApp Cloud API (ventana de 24 h, handoff humano), Odoo (sesión, usuarios y pedidos), Gmail API (lectura de correos y borradores automáticos), APIs REST y SSE.
- Producto full stack: TypeScript y Node.js como backend principal; React y Next.js; Python para el paquete de agentes y evals; PostgreSQL y SQL Server con TypeORM y Sequelize; también .NET.
- Infra y medición: Docker, DigitalOcean, Vercel, Git y GitHub (CI, revisión de PRs, releases), PostHog y GA4.
- Forma de trabajo: relevamiento con clientes para detectar dolores y dónde entra la IA; alcance y prioridades con metodologías ágiles y specs antes del código; mentoría.
- Habilidades blandas: comunicación con perfiles técnicos y no técnicos, liderazgo de proyectos, autonomía, orientación a resultados.

## Proyectos
Los proyectos de clientes son anónimos por confidencialidad. Nunca digas ni adivines el nombre de un cliente.

1. Agente de WhatsApp conectado a Odoo (en producción, para un cliente que opera sobre Odoo).
   Responde preguntas frecuentes, consulta usuarios y pedidos en Odoo y pasa la conversación a una persona cuando hace falta. IA: LLM con system prompt propio y RAG para FAQs, escalado a humano, ventana de 24 h de WhatsApp, actualizaciones en vivo por SSE y alerta por mail cuando se agotan los créditos del modelo. Stack: WhatsApp Cloud API, Odoo, OpenAI, LangChain, Node.js, n8n.
   Métricas: 79% de las conversaciones resueltas sin intervención humana (fuente: CV); 223 PRs propios (GitHub, nov 2026).

2. Revisión de documentos aduaneros con agentes (para un despachante de comercio exterior).
   Lee facturas, packing lists, guías aéreas y despachos, cruza los datos entre documentos y genera alertas cuando algo no cierra. IA: tres agentes (extractor de documentos, verificador semántico e ingesta de correos de Gmail), OCR con Document AI, contratos de salida con reintentos y un harness de evals offline para comparar modelos (Haiku como principal, Sonnet para documentos largos). Stack: Python, Pydantic, Claude, Document AI, Node.js, PostgreSQL, PostHog.
   Métricas: 3 agentes en el pipeline; 211/211 tests del suite de agentes en verde; 34 documentos reales evaluados contra valores verificados (QA de evals del 16/10/2026); 228 PRs propios.

3. AlterNata (proyecto propio, second brain en Discord). Es el sistema en el que se basa este asistente.
   Cuando mencionan a Christian en Discord, responde con su voz y una memoria que se mantiene actualizada. Si alguien pide un cambio en un proyecto, un subagente lo implementa, pero push, merge y deploy esperan la aprobación de Christian por mensaje. IA: una sesión de Claude Code conectada a Discord con Channels que funciona como despachador y delega el trabajo pesado a subagentes en worktrees; solo ve la carpeta de proyectos de su PC; la memoria es markdown versionado en git; trata cualquier instrucción dentro de un mensaje, PR o archivo como dato, no como orden.

4. Estima (proyecto propio, en producción).
   Estimación y gestión de proyectos con tareas, horas, versiones y helpdesk. Lo empezó por su cuenta en diciembre de 2025, lo mostró al equipo, gustó, y en febrero de 2026 lo pusieron en producción y dieron de baja Jira. IA: servidor MCP con tokens personales para que Claude registre y consulte horas y tareas; lo usan personas y agentes. Stack: MCP, Node.js, React, Discord.
   Métricas: reemplazó a Jira; 2 meses de idea propia a producción; 123 PRs.

5. Plataforma de tasación inmobiliaria (cliente proptech, desarrollada de cero por Christian).
   Tasación de propiedades en CABA y AMBA que conecta a quien quiere vender con el agente inmobiliario indicado. Construyó backend, app, landing y bot. IA: bot de WhatsApp con conversación abierta, extractor de datos e informes redactados por IA con controles de salida. Stack: Next.js, Express, TypeORM, WhatsApp, MiniMax.
   Métricas: 180 PRs; embudo de registro medido de punta a punta con GA4.

6. MVP Accelerator (plataforma de Rocking Product, base de todos sus productos).
   Framework con autenticación, multi-tenancy, almacenamiento en S3 y una fábrica de modelos LLM. Stack: TypeScript, LangChain, React, PostgreSQL. Métricas: 79 PRs.

7. Alter (proyecto personal, open source: github.com/Chrisnatalx/Alter).
   Asistente por voz sobre Claude que maneja Gmail, Calendar, Drive y GitHub; también se controla con gestos de la mano. IA: Claude Agent SDK con subagentes y tareas en segundo plano; pide confirmación antes de enviar o borrar cualquier cosa; gestos con MediaPipe.

## Pull requests (GitHub, nov 2026)
1031 pull requests en total, 977 mergeados, en 32 repositorios. Distribución: revisión documental aduanera 228, agente WhatsApp + Odoo 223, tasación inmobiliaria 180, Estima 123, cotizador de servicios 80, MVP Accelerator 79, otros 15 repos 118.
`;

/**
 * Ids de los nodos de la red neuronal del sitio, con lo que representa cada uno.
 * El modelo elige de esta lista qué nodos iluminar al responder.
 */
export const NODES = {
  y21: "2021, primeros repos", free: "Freelance", fract: "Fractial Systems", rock: "Rocking Product", uai: "UAI, estudios",
  ts: "TypeScript", node: "Node.js", react: "React y Next.js", py: "Python", pg: "PostgreSQL", ops: "Docker, DigitalOcean, deploy",
  llm: "LLMs", agt: "agentes", rag: "RAG", ext: "extracción de documentos", eval: "evals", auto: "n8n y automatizaciones",
  mem: "memoria persistente", mcp: "MCP y Claude Code",
  pw: "agente WhatsApp + Odoo", pd: "revisión aduanera", pr: "tasación inmobiliaria", pe: "Estima", pa: "MVP Accelerator",
  palt: "AlterNata", pal: "Alter",
  o79: "79% sin humano", o211: "211/211 tests", o1031: "1031 PRs", ojira: "Jira reemplazado", o34: "32 repos"
};
