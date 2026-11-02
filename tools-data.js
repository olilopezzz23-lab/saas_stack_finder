/**
 * BASE DE DATOS DE HERRAMIENTAS Y MOTOR DE RECOMENDACIÓN ULTRA-DIFERENCIADO
 * SaaS Stack Finder
 */

window.TOOLS_DB = {
  // ==========================================
  // CONSTRUCTORES & APP BUILDERS
  // ==========================================
  "lovable": {
    id: "lovable",
    category: "app",
    categoryName: "1. Crear la Aplicación Web",
    name: "Lovable.dev",
    tagline: "Genera aplicaciones web Full Stack en React solo describiéndolas",
    shortDescription: "La IA más avanzada para crear interfaces web interactivas en React y Tailwind sin tocar código.",
    purpose: "Crear tu dashboard, pantallas de usuario y frontend en cuestión de minutos con código limpio y exportable.",
    pricing: "Prueba gratuita / Desde 20$/mes Pro",
    difficulty: "Muy Fácil (100% Asistido por IA)",
    recommendedReason: "La forma más rápida del mundo hoy para pasar de una idea a una aplicación web lista para usuarios reales.",
    freeOption: {
      name: "v0.dev de Vercel",
      url: "https://v0.dev",
      badge: "Gratis 0€",
      reason: "Genera interfaces completas en React gratis todos los días con prompts.",
      howToStart: "Crea una cuenta en v0.dev, escribe qué pantalla necesitas y copia el código generado directamente a tu proyecto."
    },
    expertTip: "Puedes conectar Lovable directamente con Supabase con 1 clic para tener autenticación y base de datos lista."
  },
  "flutterflow": {
    id: "flutterflow",
    category: "app",
    categoryName: "1. Crear la Aplicación Móvil",
    name: "FlutterFlow",
    tagline: "Constructor visual de Apps Nativas para iOS y Android",
    shortDescription: "Entorno visual profesional para diseñar y compilar aplicaciones móviles reales en Flutter/Dart.",
    purpose: "Publicar tu app en la App Store de Apple y en Google Play Store con rendimiento nativo y animaciones fluidas.",
    pricing: "Plan gratuito generoso / Pro desde 30$/mes",
    difficulty: "Intermedio (Constructor visual intuitivo)",
    recommendedReason: "Si quieres una App en el móvil de tus usuarios, FlutterFlow compila código nativo sin que tengas que programar en Swift o Kotlin.",
    freeOption: {
      name: "Expo (React Native Open Source)",
      url: "https://expo.dev",
      badge: "Gratis 0€",
      reason: "Framework open-source para crear apps móviles en JavaScript/React sin pagar suscripciones.",
      howToStart: "Descarga la app Expo Go en tu teléfono y podrás probar tu app en vivo mientras escribes código."
    },
    expertTip: "Usa Firebase como base de datos con FlutterFlow: la integración está preconfigurada y activa autenticación por Google/Apple en 2 minutos."
  },
  "bubble": {
    id: "bubble",
    category: "app",
    categoryName: "1. Crear el Marketplace",
    name: "Bubble.io",
    tagline: "El motor No-Code más potente para plataformas con múltiples tipos de usuarios",
    shortDescription: "Plataforma visual completa con base de datos relacional integrada, lógica condicional compleja y permisos avanzados.",
    purpose: "Gestionar marketplaces (compradores y vendedores), paneles dobles, comisiones de intermediario y flujos transaccionales.",
    pricing: "Prueba gratuita / Desde 29$/mes para publicar con dominio propio",
    difficulty: "Media (Lógica relacional)",
    recommendedReason: "Los marketplaces requieren roles distintos (cliente vs proveedor) y lógica compleja; Bubble es la única herramienta no-code probada para esto.",
    freeOption: {
      name: "Vercel Commerce (Next.js Open Source)",
      url: "https://github.com/vercel/commerce",
      badge: "Gratis 0€",
      reason: "Plantilla oficial de tienda y marketplace en código abierto con 0€ de coste en Vercel.",
      howToStart: "Haz un 'Fork' del repositorio oficial en GitHub y despliégalo gratis en Vercel con 1 clic."
    },
    expertTip: "Conecta Stripe Connect en Bubble para transferir el dinero automáticamente al vendedor y quedarte tu comisión de plataforma."
  },
  "softr": {
    id: "softr",
    category: "app",
    categoryName: "1. Crear el Directorio o Portal",
    name: "Softr.io",
    tagline: "Convierte bases de datos en portales y directorios interactivos en 1 hora",
    shortDescription: "Constructor web que se conecta a Airtable o Google Sheets para generar directorios con buscador, filtros y registros de usuarios.",
    purpose: "Lanzar directorios de herramientas, comunidades privadas, tablones de empleo y portales de clientes sin complicaciones.",
    pricing: "Plan gratuito disponible / Desde 49$/mes",
    difficulty: "Muy Fácil (En 30 minutos lo tienes montado)",
    recommendedReason: "Si tu proyecto es un directorio o portal de contenido, no necesitas una app compleja: Softr sincroniza tus filas de Airtable al instante.",
    freeOption: {
      name: "Typedream o Baserow + Cloudflare Pages",
      url: "https://baserow.io",
      badge: "Gratis 0€",
      reason: "Baserow es la alternativa open source a Airtable y se puede alojar gratis.",
      howToStart: "Crea tu tabla en Baserow y genera una web pública gratuita con su vista compartida."
    },
    expertTip: "Crea una vista privada en Softr accesible solo para usuarios que hayan pagado con Lemon Squeezy o Stripe."
  },
  "bolt": {
    id: "bolt",
    category: "app",
    categoryName: "1. Crear el Micro-SaaS con IA",
    name: "Bolt.new",
    tagline: "IDE completo en el navegador que programa frontend y backend con IA",
    shortDescription: "Plataforma que crea aplicaciones web completas en segundos desde un prompt y te permite probarlas y editarlas en vivo.",
    purpose: "Validar ideas de micro-SaaS y herramientas de nicho en menos de 24 horas sin configurar entornos locales.",
    pricing: "Plan gratuito con créditos diarios / Pro 20$/mes",
    difficulty: "Fácil (Asistido por IA)",
    recommendedReason: "El camino más directo para tener un prototipo interactivo con backend simulado en la misma tarde.",
    freeOption: {
      name: "StackBlitz WebContainers",
      url: "https://stackblitz.com",
      badge: "Gratis 0€",
      reason: "Entorno completo de Node.js en el navegador 100% gratuito.",
      howToStart: "Abre stackblitz.com, elige el template de React o Vite y empieza a programar gratis."
    },
    expertTip: "Cuando estés satisfecho con el prototipo en Bolt, dale al botón 'Deploy' para tenerlo online en Netlify en 10 segundos."
  },
  "nextjs": {
    id: "nextjs",
    category: "app",
    categoryName: "1. Desarrollo a Medida (Código)",
    name: "Next.js + Tailwind CSS",
    tagline: "El estándar de oro para aplicaciones web modernas y escalables",
    shortDescription: "Framework de desarrollo Full Stack en React/TypeScript optimizado para rendimiento extremo, SEO y APIs.",
    purpose: "Tener control total sobre el código, la arquitectura, la base de datos y no pagar suscripciones mensuales a plataformas no-code.",
    pricing: "100% Gratuito y Open Source (Licencia MIT)",
    difficulty: "Avanzada (Requiere saber programar)",
    recommendedReason: "Cero limitaciones técnicas. Si sabes programar, construir sobre Next.js te garantiza no tener que migrar nunca.",
    freeOption: {
      name: "Vite + React SPA",
      url: "https://vite.dev",
      badge: "Gratis 0€",
      reason: "La forma más ligera y rápida de compilar una aplicación web en el cliente.",
      howToStart: "Ejecuta 'npm create vite@latest' en tu terminal y selecciona la plantilla de React."
    },
    expertTip: "Usa shadcn/ui: una librería de componentes visuales gratuitos que se copian directo a tu proyecto de Next.js."
  },

  // ==========================================
  // BASES DE DATOS & BACKEND
  // ==========================================
  "supabase": {
    id: "supabase",
    category: "database",
    categoryName: "2. Base de Datos & Usuarios",
    name: "Supabase (PostgreSQL)",
    tagline: "La base de datos relacional estándar de las startups modernas",
    shortDescription: "Base de datos PostgreSQL real con sistema de registro y login de usuarios, almacenamiento de imágenes y APIs automáticas.",
    purpose: "Guardar las cuentas de tus clientes, perfiles, pagos y datos de la aplicación con seguridad de nivel bancario.",
    pricing: "Capa gratuita muy generosa (hasta 500MB de BD y 50.000 usuarios activos) / 25$/mes Pro",
    difficulty: "Fácil - Intermedio (Panel visual intuitivo)",
    recommendedReason: "Te da el poder de SQL profesional pero con la facilidad de uso de Firebase. No tiene vendor lock-in.",
    freeOption: {
      name: "PocketBase (Open Source)",
      url: "https://pocketbase.io",
      badge: "Gratis 0€",
      reason: "Un backend completo en un solo archivo ejecutable en SQLite sin cuotas.",
      howToStart: "Descarga el ejecutable de PocketBase en tu PC o VPS y tendrás un panel de usuarios y base de datos instantáneo."
    },
    expertTip: "Activa Row Level Security (RLS) en Supabase para que cada usuario solo pueda ver sus propios datos de forma automática."
  },
  "firebase": {
    id: "firebase",
    category: "database",
    categoryName: "2. Base de Datos para Móviles",
    name: "Google Firebase (Firestore)",
    tagline: "Backend en la nube de Google optimizado para Apps Móviles",
    shortDescription: "Base de datos NoSQL con sincronización en tiempo real, soporte offline nativo y autenticación con Google y Apple.",
    purpose: "Ideal para apps creadas con FlutterFlow o React Native: sincroniza datos en el teléfono aunque no haya internet.",
    pricing: "Plan Spark Gratuito muy amplio (1GB almacenamiento, 50k lecturas/día gratis) / Pago por uso",
    difficulty: "Fácil (Integración directa en 1 clic en FlutterFlow)",
    recommendedReason: "Para aplicaciones de smartphone es insuperable gracias a sus notificaciones push y sincronización offline automática.",
    freeOption: {
      name: "Appwrite (Open Source)",
      url: "https://appwrite.io",
      badge: "Gratis 0€",
      reason: "La alternativa de código abierto a Firebase que puedes instalar en tu propio servidor.",
      howToStart: "Instala Appwrite vía Docker en un VPS de 4€ o en local para desarrollo."
    },
    expertTip: "Usa Firebase Authentication para permitir inicio de sesión con 1 toque con Google o Apple ID."
  },
  "airtable": {
    id: "airtable",
    category: "database",
    categoryName: "2. Base de Datos Visual (Sin Código)",
    name: "Airtable",
    tagline: "La base de datos relacional con cara de hoja de cálculo",
    shortDescription: "Combina la sencillez de Excel con el poder de una base de datos relacional y automatizaciones nativas.",
    purpose: "Gestionar los datos de tu directorio, catálogo o contenidos de forma visual para que tú o tu equipo los editen a mano.",
    pricing: "Plan gratuito de hasta 1.000 registros por base / Desde 20$/mes",
    difficulty: "Muy Fácil (Si sabes usar Excel, sabes usar Airtable)",
    recommendedReason: "La forma más amigable para personas no técnicas de mantener un directorio o portal web actualizado en tiempo real.",
    freeOption: {
      name: "Baserow o Google Sheets",
      url: "https://baserow.io",
      badge: "Gratis 0€",
      reason: "Baserow es 100% de código abierto y no tiene límites artificiales de registros.",
      howToStart: "Crea una cuenta en baserow.io y crea tu primera tabla; se conecta a Softr y Make igual que Airtable."
    },
    expertTip: "Crea una vista con filtro 'Aprobado = Sí' para que solo los registros validados por ti aparezcan en la web pública."
  },

  // ==========================================
  // INTELIGENCIA ARTIFICIAL (IA)
  // ==========================================
  "gemini": {
    id: "gemini",
    category: "ai",
    categoryName: "3. Cerebro de Inteligencia Artificial",
    name: "Google Gemini Flash API",
    tagline: "Velocidad extrema y ventana de 1 millón de tokens al menor coste del mercado",
    shortDescription: "API multimodal que procesa texto, imágenes, audio y vídeo a velocidad récord con una generosísima cuota gratuita.",
    purpose: "Analizar documentos, transcribir audios, responder preguntas de clientes y razonar dentro de tu aplicación.",
    pricing: "Nivel gratuito muy generoso (15 peticiones por minuto gratis en Google AI Studio)",
    difficulty: "Fácil (Compatible con formato JSON y SDKs directos)",
    recommendedReason: "Es la opción más rentable del planeta: ofrece 15 peticiones por minuto GRATIS y contexto masivo para procesar PDFs enteros.",
    freeOption: {
      name: "Google AI Studio Free Tier",
      url: "https://aistudio.google.com",
      badge: "Gratis 0€",
      reason: "Consigue una API Key gratis en 30 segundos sin introducir tarjeta de crédito.",
      howToStart: "Entra en aistudio.google.com, pulsa 'Get API key' y pégala en Make o en tu backend."
    },
    expertTip: "Usa el parámetro 'response_mime_type: application/json' para que Gemini te devuelva siempre datos listos para pintar en pantalla."
  },
  "openai": {
    id: "openai",
    category: "ai",
    categoryName: "3. Cerebro de Inteligencia Artificial",
    name: "OpenAI API (GPT-4o & GPT-4o-mini)",
    tagline: "El motor de IA más reconocido y con mayor ecosistema de herramientas",
    shortDescription: "La API líder del mercado para razonamiento, visión artificial, llamadas a funciones y generación de contenidos.",
    purpose: "Crear agentes inteligentes, redactores automáticos y herramientas de análisis avanzadas.",
    pricing: "Pago por uso según tokens consumidos (gpt-4o-mini cuesta céntimos por miles de peticiones)",
    difficulty: "Fácil (Todas las herramientas no-code tienen módulo oficial de OpenAI)",
    recommendedReason: "Cualquier plugin de Make, Bubble, FlutterFlow o Next.js viene preparado de fábrica para funcionar con OpenAI.",
    freeOption: {
      name: "Groq Cloud (LPU)",
      url: "https://console.groq.com",
      badge: "Gratis 0€",
      reason: "Inferencia ultrarrápida gratuita con modelos Llama 3 a más de 500 tokens por segundo.",
      howToStart: "Regístrate en console.groq.com, saca tu API Key gratuita y úsala como reemplazo directo de OpenAI."
    },
    expertTip: "Usa 'gpt-4o-mini' para el 90% de las tareas de tu app: es 10 veces más barato que GPT-4 y responde en milisegundos."
  },

  // ==========================================
  // HOSTING & INFRAESTRUCTURA
  // ==========================================
  "vercel": {
    id: "vercel",
    category: "hosting",
    categoryName: "4. Dónde Alojar la Web (Hosting)",
    name: "Vercel",
    tagline: "La plataforma de despliegue frontend y serverless en la que confía el 80% de Silicon Valley",
    shortDescription: "Conecta tu proyecto con 1 clic y obtén servidores globales ultrarrápidos, certificado SSL y dominio gratuito.",
    purpose: "Hacer que tu SaaS cargue en menos de 1 segundo en todo el mundo sin configurar Linux ni servidores.",
    pricing: "Plan Hobby Gratuito generoso / Pro 20$/mes",
    difficulty: "Muy Fácil (Conectar y listo)",
    recommendedReason: "El despliegue es automático: cada vez que haces un cambio o lo subes desde Bolt/GitHub, la web se actualiza sola.",
    freeOption: {
      name: "Cloudflare Pages",
      url: "https://pages.cloudflare.com",
      badge: "Gratis 0€",
      reason: "Ancho de banda 100% ilimitado sin sustos ni facturas sorpresas.",
      howToStart: "Entra en pages.cloudflare.com, sube tu carpeta o conecta GitHub y tu web estará online de por vida sin pagar nada."
    },
    expertTip: "Puedes conectar tu propio dominio .com o .es en Vercel gratis con SSL automático en 2 clics."
  },
  "cloudflare": {
    id: "cloudflare",
    category: "hosting",
    categoryName: "4. Dónde Alojar la Web (Hosting)",
    name: "Cloudflare Pages",
    tagline: "Alojamiento estático y Edge Functions con ancho de banda ilimitado gratuito",
    shortDescription: "La red de borde más rápida del planeta con más de 300 centros de datos mundiales y protección DDoS incluida.",
    purpose: "Alojar tu aplicación con coste 0€ garantizado independientemente de si tienes 100 o 100.000 visitas al mes.",
    pricing: "100% Gratuito sin cobro por ancho de banda",
    difficulty: "Fácil",
    recommendedReason: "Es la única plataforma que te garantiza no cobrarte jamás por picos de tráfico inesperados.",
    freeOption: {
      name: "GitHub Pages",
      url: "https://pages.github.com",
      badge: "Gratis 0€",
      reason: "Alojamiento gratuito directo desde cualquier repositorio de GitHub.",
      howToStart: "Activa 'GitHub Pages' en los ajustes de tu repositorio para tener tu web online."
    },
    expertTip: "Usa Cloudflare DNS para gestionar tus dominios: es el registrador más barato porque vende los dominios a precio de coste mayorista."
  },
  "hostinger": {
    id: "hostinger",
    category: "hosting",
    categoryName: "4. Dónde Alojar la Web (Hosting)",
    name: "Hostinger (Hosting Web, Dominios & Tiendas con IA)",
    tagline: "Alojamiento web ultrarrápido con dominio gratis y creador de tiendas online asistido por IA",
    shortDescription: "La plataforma de hosting y tiendas más popular y asequible: incluye dominio .com gratis, correo profesional y soporte 24/7.",
    purpose: "Montar una tienda o web completa con su dominio propio en menos de 1 hora con pasarela de pago y catálogo listos.",
    pricing: "Desde 4,74€/mes (Cupón exclusivo: 20% de Descuento)",
    difficulty: "Muy Fácil (Asistente visual con IA sin código)",
    recommendedReason: "Incluye todo en una cuota mínima: dominio gratis, hosting rápido, certificados SSL de por vida y 0% comisiones por venta.",
    freeOption: {
      name: "Cloudflare Pages (0€)",
      url: "https://pages.cloudflare.com",
      badge: "Gratis 0€",
      reason: "Si solo quieres subir una página estática básica de código sin tienda.",
      howToStart: "Despliega código estático gratis conectando tu cuenta de GitHub."
    },
    expertTip: "Aprovecha el 20% de descuento y el dominio gratuito que vienen incluidos en el enlace especial."
  },

  // ==========================================
  // PAGOS & FACTURACIÓN (MONETIZACIÓN)
  // ==========================================
  "lemonsqueezy": {
    id: "lemonsqueezy",
    category: "payments",
    categoryName: "5. Cómo Cobrar Dinero (Pagos)",
    name: "Lemon Squeezy",
    tagline: "Merchant of Record que cobra, factura y gestiona el IVA internacional por ti",
    shortDescription: "Pasarela de pagos diseñada para creadores de software: actúa como vendedor registrado para que no tengas que declarar impuestos en 100 países.",
    purpose: "Cobrar suscripciones recurrentes, pagos únicos y licencias de software sin volverte loco con la gestoría y el IVA digital.",
    pricing: "0€ al mes fijos. Solo una comisión del 5% + 0.50$ por cada venta exitosa",
    difficulty: "Muy Fácil (Creas un enlace de pago en 2 minutos)",
    recommendedReason: "La mejor opción para empezar legalmente: ellos emiten la factura legal con IVA al cliente y a ti te transfieren el dinero neto limpio.",
    freeOption: {
      name: "Stripe Payment Links (0€ de cuota)",
      url: "https://stripe.com",
      badge: "Gratis 0€",
      reason: "No pagas nada al mes; comisión más baja (1.5% + 0.25€ en Europa).",
      howToStart: "Crea una cuenta en stripe.com, ve a 'Payment Links', crea tu producto y obtén un enlace de pago instantáneo."
    },
    expertTip: "Puedes incrustar el modal de checkout de Lemon Squeezy directamente en tu web para que el cliente pague sin salir de tu página."
  },
  "stripe": {
    id: "stripe",
    category: "payments",
    categoryName: "5. Cómo Cobrar Dinero (Pagos)",
    name: "Stripe",
    tagline: "El estándar financiero global de los negocios en Internet",
    shortDescription: "La plataforma de pagos más potente del mundo: acepta tarjetas, Apple Pay, Google Pay, Bizum y suscripciones.",
    purpose: "Cobrar de forma transparente con el menor coste por transacción y la mayor tasa de conversión del mercado.",
    pricing: "0€ fijos al mes. 1.5% + 0.25€ por transacción en tarjetas europeas",
    difficulty: "Fácil con Payment Links / Intermedio con API",
    recommendedReason: "Comisiones mínimas y máxima confianza del comprador internacional.",
    freeOption: {
      name: "Stripe en Modo Test (Pruebas 100% Gratis)",
      url: "https://stripe.com",
      badge: "Gratis 0€",
      reason: "Puedes probar todo el sistema de cobros con tarjetas de prueba ficticias sin mover un céntimo.",
      howToStart: "Activa el interruptor 'Modo de prueba' en Stripe para hacer simulaciones ilimitadas."
    },
    expertTip: "Usa el portal de clientes preconstruido de Stripe (Customer Portal) para que tus usuarios gestionen sus cancelaciones y facturas solos."
  },
  "stripe_connect": {
    id: "stripe_connect",
    category: "payments",
    categoryName: "5. Cómo Cobrar en un Marketplace",
    name: "Stripe Connect",
    tagline: "La infraestructura para pagar a vendedores y retener tu comisión",
    shortDescription: "El sistema que utilizan plataformas como Shopify, Uber o Airbnb para gestionar pagos multilaterales.",
    purpose: "El cliente paga 100€, el vendedor recibe 85€ en su cuenta bancaria y tú recibes tus 15€ de comisión automáticamente.",
    pricing: "0€ de cuota fija. Pequeña comisión por cuenta activa de vendedor",
    difficulty: "Intermedio",
    recommendedReason: "Obligatorio si creas un marketplace: te evita recibir todo el dinero en tu cuenta bancaria y tener problemas fiscales con Hacienda.",
    freeOption: {
      name: "Stripe Connect Express Onboarding",
      url: "https://stripe.com/connect",
      badge: "Gratis 0€",
      reason: "Stripe se encarga de verificar el DNI y la cuenta bancaria de tus vendedores gratis.",
      howToStart: "Activa Connect en tu panel de Stripe y utiliza el flujo Express preconstruido."
    },
    expertTip: "El flujo de Stripe Connect Express tarda menos de 3 minutos para que un nuevo vendedor se registre en tu plataforma."
  },
  "revenuecat": {
    id: "revenuecat",
    category: "payments",
    categoryName: "5. Cobros en App Móvil (In-App Purchases)",
    name: "RevenueCat",
    tagline: "La infraestructura líder para suscripciones en App Store y Google Play",
    shortDescription: "SDK que unifica las compras dentro de la aplicación de Apple y Google en un solo panel de control.",
    purpose: "Gestionar muros de pago (paywalls), pruebas gratuitas y suscripciones móviles sin programar la pesadilla de StoreKit y Google Billing.",
    pricing: "100% Gratuito hasta tus primeros 2.500$ de facturación mensual",
    difficulty: "Fácil (Integrado directamente en FlutterFlow)",
    recommendedReason: "Cualquier persona que haya intentado programar compras en Apple y Google sabe que RevenueCat te ahorra 2 meses de trabajo.",
    freeOption: {
      name: "Plan Gratuito de RevenueCat",
      url: "https://www.revenuecat.com",
      badge: "Gratis 0€",
      reason: "Completamente gratuito hasta 2.500$/mes en ventas reales.",
      howToStart: "Crea una cuenta, vincula tus credenciales de Google Play y Apple Developer y listo."
    },
    expertTip: "Puedes cambiar el precio y los textos de tus pantallas de pago desde la web de RevenueCat sin tener que enviar una actualización de la app a Apple."
  },

  // ==========================================
  // AUTOMATIZACIÓN & WORKFLOWS
  // ==========================================
  "make": {
    id: "make",
    category: "automation",
    categoryName: "6. Automatización de Flujos",
    name: "Make.com (Integromat)",
    tagline: "El pegamento visual que conecta tus pagos, correos, bases de datos e IA",
    shortDescription: "Plataforma visual de arrastrar y soltar para crear flujos de trabajo automáticos entre miles de aplicaciones.",
    purpose: "Enviar email de bienvenida tras pagar en Stripe, crear el usuario en Supabase y enviar un mensaje a Telegram en automático.",
    pricing: "Plan gratuito con 1.000 operaciones al mes / Desde 9$/mes",
    difficulty: "Fácil y visual",
    recommendedReason: "Es mucho más potente y hasta 5 veces más barato que Zapier. El estándar para automatizaciones SaaS.",
    freeOption: {
      name: "n8n Community (Open Source en GitHub)",
      url: "https://github.com/n8n-io/n8n",
      badge: "Gratis 0€",
      reason: "Ejecuciones y operaciones ilimitadas sin pagar cuotas mensuales.",
      howToStart: "Instala n8n en tu ordenador con 'npx n8n' o en un servidor propio para tener automatizaciones gratis."
    },
    expertTip: "Usa el módulo 'Webhook' en Make para recibir notificaciones instantáneas de Stripe cada vez que un cliente se dé de alta."
  },
  "n8n": {
    id: "n8n",
    category: "automation",
    categoryName: "6. Automatización & Agentes IA",
    name: "n8n Workflows & AI Agents",
    tagline: "Plataforma de automatización de código abierto con soporte nativo de Agentes de IA",
    shortDescription: "Herramienta que permite conectar modelos de IA, memoria conversacional y herramientas externas en flujos visuales.",
    purpose: "Crear agentes autónomos que ejecuten tareas complejas en segundo plano sin límites de operaciones.",
    pricing: "0€ autoalojado / Cloud desde 20€/mes",
    difficulty: "Intermedio",
    recommendedReason: "Si tu proyecto requiere agentes inteligentes con memoria y acceso a herramientas, n8n es la plataforma más avanzada.",
    freeOption: {
      name: "100% Gratuito en Local o VPS (GitHub)",
      url: "https://github.com/n8n-io/n8n",
      badge: "Gratis 0€",
      reason: "Código abierto con licencia justa y sin límite de flujos.",
      howToStart: "Ejecuta 'npx n8n' en tu terminal y abre http://localhost:5678 en tu navegador."
    },
    expertTip: "Conecta el nodo de LangChain en n8n para que un modelo de IA decida qué pasos ejecutar según lo que pida el usuario."
  }
};

/**
 * MOTOR DE RECOMENDACIÓN INTELIGENTE Y DIFERENCIADO
 * 
 * Genera un stack radicalmente adaptado a las respuestas del usuario:
 * - projectType: 'webapp' | 'mobile' | 'marketplace' | 'content'
 * - knowsCoding: 'no' | 'basic' | 'yes'
 * - budget: 'zero' | 'low' | 'mid' | 'high'
 * - needsAI: 'core' | 'secondary' | 'none'
 */
window.recommendStack = function(answers) {
  const { projectType, knowsCoding, budget, needsAI } = answers;

  const stack = {
    title: "",
    badgeType: "",
    meta: {
      estimatedCost: "",
      timeToMvp: "",
      complexity: "",
      summary: ""
    },
    steps: [] // Cada elemento es un paso del stack con su herramienta recomendada y su alternativa gratis
  };

  // ==========================================
  // CASO 1: APLICACIÓN MÓVIL (iOS & Android)
  // ==========================================
  if (projectType === 'mobile') {
    stack.title = "Stack Especializado para Aplicación Móvil (iOS & Android)";
    stack.badgeType = "📱 Arquitectura Móvil Nativa";
    stack.meta.estimatedCost = (budget === 'zero') ? "0 €/mes (Capas Gratuitas)" : "0 – 30 €/mes";
    stack.meta.timeToMvp = (knowsCoding === 'yes') ? "2 a 3 semanas" : "1 a 2 semanas";
    stack.meta.complexity = (knowsCoding === 'yes') ? "Media-Alta" : "Media (Constructor Visual)";
    stack.meta.summary = "Stack diseñado específicamente para compilar apps nativas fluidas que se descarguen en App Store y Google Play.";

    // Paso 1: App Builder
    stack.steps.push({
      stepNumber: 1,
      role: "Crear la Aplicación Móvil",
      icon: "smartphone",
      color: "text-purple-400",
      tool: window.TOOLS_DB["flutterflow"],
      whyThis: "FlutterFlow compila código nativo Flutter/Dart sin que tengas que aprender Swift para iOS ni Kotlin para Android."
    });

    // Paso 2: Base de Datos Móvil
    stack.steps.push({
      stepNumber: 2,
      role: "Base de Datos en Tiempo Real & Auth",
      icon: "database",
      color: "text-accent-400",
      tool: window.TOOLS_DB["firebase"],
      whyThis: "Firebase es el backend móvil por excelencia de Google: incluye sincronización offline si el usuario entra en un túnel y login con 1 toque con Google/Apple."
    });

    // Paso 3: IA (si aplica)
    if (needsAI !== 'none') {
      stack.steps.push({
        stepNumber: 3,
        role: "Inteligencia Artificial Móvil",
        icon: "sparkles",
        color: "text-brand-400",
        tool: (budget === 'zero' || budget === 'low') ? window.TOOLS_DB["gemini"] : window.TOOLS_DB["openai"],
        whyThis: "Procesa respuestas y analiza datos a gran velocidad con cuota gratuita muy generosa."
      });
    }

    // Paso 4: Pagos In-App
    stack.steps.push({
      stepNumber: stack.steps.length + 1,
      role: "Cobros en la App (In-App Purchases)",
      icon: "credit-card",
      color: "text-amber-400",
      tool: window.TOOLS_DB["revenuecat"],
      whyThis: "Gestiona las suscripciones de App Store y Google Play con 1 solo SDK. Es 100% gratis hasta que factures más de 2.500$/mes."
    });

    // Paso 5: Automatización
    stack.steps.push({
      stepNumber: stack.steps.length + 1,
      role: "Automatizaciones & Notificaciones",
      icon: "workflow",
      color: "text-pink-400",
      tool: window.TOOLS_DB["make"],
      whyThis: "Dispara notificaciones push, emails de bienvenida y sincroniza usuarios automáticamente."
    });

    return stack;
  }

  // ==========================================
  // CASO 2: MARKETPLACE / PLATAFORMA MULTIVENDOR
  // ==========================================
  if (projectType === 'marketplace') {
    stack.title = "Stack para Marketplace & Plataforma Multiusuario";
    stack.badgeType = "🛒 Arquitectura Marketplace Multi-Rol";
    stack.meta.estimatedCost = (budget === 'zero' || budget === 'low') ? "0 – 29 €/mes" : "29 – 60 €/mes";
    stack.meta.timeToMvp = "1 a 3 semanas";
    stack.meta.complexity = "Media (Manejo de Compradores y Vendedores)";
    stack.meta.summary = "Stack optimizado para gestionar dos tipos de usuarios simultáneos, catálogos de productos/servicios y reparto automático de comisiones.";

    // Paso 1: App Builder
    stack.steps.push({
      stepNumber: 1,
      role: "Constructor de la Plataforma",
      icon: "store",
      color: "text-amber-400",
      tool: window.TOOLS_DB["bubble"],
      whyThis: "Los marketplaces exigen lógica multi-rol avanzada (el comprador ve una cosa y el vendedor ve su panel de ventas). Bubble es el líder absoluto para esto."
    });

    // Paso 2: Base de Datos Relacional
    stack.steps.push({
      stepNumber: 2,
      role: "Base de Datos Relacional",
      icon: "database",
      color: "text-accent-400",
      tool: (budget === 'zero') ? window.TOOLS_DB["supabase"] : window.TOOLS_DB["supabase"],
      whyThis: "Mantiene vinculados los pedidos, compradores, vendedores y valoraciones con integridad relacional SQL."
    });

    // Paso 3: IA (si aplica)
    if (needsAI !== 'none') {
      stack.steps.push({
        stepNumber: 3,
        role: "Buscador Inteligente / Asistente IA",
        icon: "sparkles",
        color: "text-brand-400",
        tool: window.TOOLS_DB["gemini"],
        whyThis: "Permite a los usuarios buscar productos con lenguaje natural y redacta descripciones de vendedores automáticamente."
      });
    }

    // Paso 4: Pagos Multi-Vendedor (Stripe Connect)
    stack.steps.push({
      stepNumber: stack.steps.length + 1,
      role: "Pagos y Reparto de Comisiones",
      icon: "credit-card",
      color: "text-emerald-400",
      tool: window.TOOLS_DB["stripe_connect"],
      whyThis: "Imprescindible para marketplaces: el cliente paga, Stripe le deposita el dinero al vendedor y transfiere automáticamente tu comisión a tu cuenta sin problemas fiscales."
    });

    // Paso 5: Automatización
    stack.steps.push({
      stepNumber: stack.steps.length + 1,
      role: "Automatización de Pedidos",
      icon: "workflow",
      color: "text-pink-400",
      tool: window.TOOLS_DB["make"],
      whyThis: "Avisa por WhatsApp o email al vendedor cada vez que entra un pedido y envía el albarán al cliente."
    });

    return stack;
  }

  // ==========================================
  // CASO 3: DIRECTORIO DE RECURSOS / PORTAL DE CONTENIDOS
  // ==========================================
  if (projectType === 'content') {
    stack.title = "Stack para Directorio de Recursos o Portal de Contenidos";
    stack.badgeType = "📂 Arquitectura de Directorio Ágil";
    stack.meta.estimatedCost = (budget === 'zero') ? "0 €/mes (100% Gratuito)" : "0 – 20 €/mes";
    stack.meta.timeToMvp = "2 a 4 días";
    stack.meta.complexity = "Muy Baja (100% Visual sin Código)";
    stack.meta.summary = "La arquitectura más rápida de lanzar: monta un directorio con buscador, filtros y cobros en menos de un fin de semana.";

    // Paso 1: App Builder
    stack.steps.push({
      stepNumber: 1,
      role: "Constructor Web del Directorio",
      icon: "layout",
      color: "text-blue-400",
      tool: window.TOOLS_DB["softr"],
      whyThis: "Softr se conecta a tu base de datos y genera una web moderna con buscador, categorías y filtros en solo 30 minutos."
    });

    // Paso 2: Base de Datos Visual
    stack.steps.push({
      stepNumber: 2,
      role: "Base de Datos de Recursos",
      icon: "table",
      color: "text-amber-400",
      tool: window.TOOLS_DB["airtable"],
      whyThis: "Gestionas las herramientas o contenidos como en un Excel visual y los cambios aparecen al instante en la web."
    });

    // Paso 3: IA (si aplica)
    if (needsAI !== 'none') {
      stack.steps.push({
        stepNumber: 3,
        role: "Enriquecimiento Automático de Datos",
        icon: "sparkles",
        color: "text-brand-400",
        tool: window.TOOLS_DB["gemini"],
        whyThis: "La IA investiga las webs de los recursos y redacta los resúmenes y etiquetas automáticamente en tu tabla."
      });
    }

    // Paso 4: Hosting
    stack.steps.push({
      stepNumber: stack.steps.length + 1,
      role: "Alojamiento Web Global",
      icon: "server",
      color: "text-accent-400",
      tool: window.TOOLS_DB["cloudflare"],
      whyThis: "Alojamiento y CDN global gratuito para que el directorio soporte miles de visitas sin costes de servidor."
    });

    // Paso 5: Pagos / Membresías
    stack.steps.push({
      stepNumber: stack.steps.length + 1,
      role: "Cobros de Acceso / Listados de Pago",
      icon: "credit-card",
      color: "text-emerald-400",
      tool: window.TOOLS_DB["lemonsqueezy"],
      whyThis: "Permite cobrar por envíos destacados o por acceso a contenido VIP con gestión de IVA incluida."
    });

    return stack;
  }

  // ==========================================
  // CASO 4: APLICACIÓN WEB TRADICIONAL (SaaS / Dashboard)
  // ==========================================
  if (knowsCoding === 'yes') {
    // Para desarrolladores
    stack.title = "Stack para Aplicación Web SaaS (Full Stack Moderno)";
    stack.badgeType = "💻 Stack para Desarrolladores";
    stack.meta.estimatedCost = (budget === 'zero') ? "0 €/mes en capas Free" : "0 – 20 €/mes";
    stack.meta.timeToMvp = "1 a 3 semanas";
    stack.meta.complexity = "Alta (Desarrollo a Medida)";
    stack.meta.summary = "La combinación de código moderno más potente, modular y sin vendor lock-in. Ideal para proyectos de alta escala.";

    stack.steps.push({
      stepNumber: 1,
      role: "Framework Frontend & API",
      icon: "code",
      color: "text-cyan-400",
      tool: window.TOOLS_DB["nextjs"],
      whyThis: "Next.js 15 te da App Router, Server Components y renderizado ultrarrápido con control absoluto del código."
    });

    stack.steps.push({
      stepNumber: 2,
      role: "Base de Datos & Auth",
      icon: "database",
      color: "text-brand-400",
      tool: window.TOOLS_DB["supabase"],
      whyThis: "PostgreSQL relacional con cliente TypeScript generado automáticamente y autenticación segura con JWT."
    });

    if (needsAI !== 'none') {
      stack.steps.push({
        stepNumber: 3,
        role: "Cerebro de Inteligencia Artificial",
        icon: "sparkles",
        color: "text-purple-400",
        tool: (budget === 'zero') ? window.TOOLS_DB["gemini"] : window.TOOLS_DB["openai"],
        whyThis: "SDKs oficiales fáciles de integrar en rutas API con streaming de respuestas en tiempo real."
      });
    }

    stack.steps.push({
      stepNumber: stack.steps.length + 1,
      role: "Despliegue & Edge Network",
      icon: "server",
      color: "text-accent-400",
      tool: (budget === 'zero') ? window.TOOLS_DB["cloudflare"] : window.TOOLS_DB["vercel"],
      whyThis: "Despliegue continuo con GitHub: haces 'git push' y tu web está actualizada en producción en 20 segundos."
    });

    stack.steps.push({
      stepNumber: stack.steps.length + 1,
      role: "Pagos & Facturación Recurrente",
      icon: "credit-card",
      color: "text-amber-400",
      tool: window.TOOLS_DB["stripe"],
      whyThis: "La mejor API de pagos del mundo con Webhooks y portal de clientes para gestionar suscripciones."
    });

    return stack;
  } else {
    // Para personas que NO programan o tienen nivel básico
    stack.title = "Stack para Aplicación Web SaaS (No-Code & Asistido por IA)";
    stack.badgeType = "⚡ Stack Ágil Asistido por IA";
    stack.meta.estimatedCost = (budget === 'zero') ? "0 €/mes en capas Free" : "0 – 20 €/mes";
    stack.meta.timeToMvp = "3 a 7 días";
    stack.meta.complexity = "Baja (Visual + IA)";
    stack.meta.summary = "Construye tu SaaS describiendo lo que quieres en español. La IA escribe el código y la infraestructura se gestiona sola.";

    // Paso 1: App Builder IA
    stack.steps.push({
      stepNumber: 1,
      role: "Constructor de la Aplicación",
      icon: "wand-2",
      color: "text-brand-400",
      tool: (budget === 'zero' || budget === 'low') ? window.TOOLS_DB["lovable"] : window.TOOLS_DB["bolt"],
      whyThis: "Le describes la app en lenguaje natural y genera una interfaz moderna y funcional en React sin que tengas que picar código."
    });

    // Paso 2: Base de Datos
    stack.steps.push({
      stepNumber: 2,
      role: "Base de Datos & Registro de Usuarios",
      icon: "database",
      color: "text-accent-400",
      tool: window.TOOLS_DB["supabase"],
      whyThis: "Lovable y Bolt se conectan a Supabase con 1 clic para que tus usuarios se puedan registrar, iniciar sesión y guardar sus datos."
    });

    // Paso 3: IA
    if (needsAI !== 'none') {
      stack.steps.push({
        stepNumber: 3,
        role: "Motor de Inteligencia Artificial",
        icon: "sparkles",
        color: "text-purple-400",
        tool: (budget === 'zero') ? window.TOOLS_DB["gemini"] : window.TOOLS_DB["openai"],
        whyThis: "El cerebro inteligente que genera las respuestas, analiza información o redacta contenidos para los usuarios."
      });
    }

    // Paso 4: Hosting & Dominio
    const isFreeOrDev = (budget === 'zero' || coding === 'developer');
    stack.steps.push({
      stepNumber: stack.steps.length + 1,
      role: isFreeOrDev ? "Alojamiento en Internet (Hosting)" : "Hosting Web, Dominio & Tiendas con IA",
      icon: "server",
      color: "text-emerald-400",
      tool: isFreeOrDev ? window.TOOLS_DB["vercel"] : window.TOOLS_DB["hostinger"],
      whyThis: isFreeOrDev
        ? "Tu web queda publicada con certificado de seguridad SSL y dominio propio con cero mantenimiento técnico."
        : "Alojamiento ultrarrápido con dominio .com gratis incluido, creador con IA y 20% de descuento especial."
    });

    // Paso 5: Pagos
    stack.steps.push({
      stepNumber: stack.steps.length + 1,
      role: "Cobros y Suscripciones",
      icon: "credit-card",
      color: "text-amber-400",
      tool: window.TOOLS_DB["lemonsqueezy"],
      whyThis: "Cobra en dólares o euros sin preocuparte de facturas de IVA ni de darte de alta de autónomo desde el día uno."
    });

    // Paso 6: Automatizaciones
    stack.steps.push({
      stepNumber: stack.steps.length + 1,
      role: "Automatización & Conexiones",
      icon: "workflow",
      color: "text-pink-400",
      tool: window.TOOLS_DB["make"],
      whyThis: "Conecta tu pasarela de pagos con el envío de emails de bienvenida y avisos automáticos."
    });

    return stack;
  }
};
