/**
 * CONFIGURACIÓN DE ENLACES DE AFILIADO Y REFERENCIA - SAAS STACK FINDER
 * 
 * En este archivo puedes poner tus enlaces de afiliado para ganar comisiones.
 * Si un campo "affiliateUrl" está vacío (""), el sistema usará "defaultUrl" (web oficial).
 */

window.AFFILIATE_CONFIG = {
  // --- Constructores de Apps & Web (Frontend / Full-Stack) ---
  "lovable": {
    "name": "Lovable.dev",
    "affiliateUrl": "https://lovable.dev/invite/QWMPR5I",
    "defaultUrl": "https://lovable.dev",
    "badge": "Recomendado para Web Apps con IA (+10 Créditos Gratis)"
  },
  "bolt": {
    "name": "Bolt.new",
    "affiliateUrl": "",
    "defaultUrl": "https://bolt.new",
    "badge": "Prototipado Full Stack Ultra Rápido"
  },
  "flutterflow": {
    "name": "FlutterFlow",
    "affiliateUrl": "",
    "defaultUrl": "https://flutterflow.io",
    "badge": "Top 1 para Apps Móviles iOS & Android"
  },
  "bubble": {
    "name": "Bubble.io",
    "affiliateUrl": "",
    "defaultUrl": "https://bubble.io",
    "badge": "El más potente para Marketplaces"
  },
  "softr": {
    "name": "Softr.io",
    "affiliateUrl": "",
    "defaultUrl": "https://www.softr.io",
    "badge": "El más rápido para Directorios y Portales"
  },
  "nextjs": {
    "name": "Next.js",
    "affiliateUrl": "",
    "defaultUrl": "https://nextjs.org",
    "badge": "Estándar de Oro para Desarrolladores"
  },
  "expo": {
    "name": "Expo (React Native)",
    "affiliateUrl": "",
    "defaultUrl": "https://expo.dev",
    "badge": "Framework Móvil Open Source"
  },

  // --- Bases de Datos & Backend ---
  "supabase": {
    "name": "Supabase",
    "affiliateUrl": "",
    "defaultUrl": "https://supabase.com",
    "badge": "PostgreSQL + Auth + Storage"
  },
  "firebase": {
    "name": "Google Firebase",
    "affiliateUrl": "",
    "defaultUrl": "https://firebase.google.com",
    "badge": "Ideal para Apps Móviles"
  },
  "airtable": {
    "name": "Airtable",
    "affiliateUrl": "",
    "defaultUrl": "https://airtable.com",
    "badge": "Base de Datos Visual"
  },
  "pocketbase": {
    "name": "PocketBase",
    "affiliateUrl": "",
    "defaultUrl": "https://pocketbase.io",
    "badge": "Backend Open Source en 1 archivo"
  },

  // --- Inteligencia Artificial ---
  "openai": {
    "name": "OpenAI API",
    "affiliateUrl": "",
    "defaultUrl": "https://platform.openai.com",
    "badge": "Modelos GPT-4o y o1"
  },
  "gemini": {
    "name": "Google Gemini API",
    "affiliateUrl": "",
    "defaultUrl": "https://aistudio.google.com",
    "badge": "Free Tier generoso y 1M tokens"
  },
  "groq": {
    "name": "Groq LPU Cloud",
    "affiliateUrl": "",
    "defaultUrl": "https://groq.com",
    "badge": "Inferencia Ultra Rápida a 500 tokens/s"
  },
  "claude": {
    "name": "Anthropic Claude API",
    "affiliateUrl": "",
    "defaultUrl": "https://www.anthropic.com/api",
    "badge": "Máxima calidad de código y análisis"
  },

  // --- Hosting & Infraestructura ---
  "hostinger": {
    "name": "Hostinger",
    "affiliateUrl": "https://www.hostinger.com/es?REFERRALCODE=BIRLOPEZOQLE",
    "defaultUrl": "https://www.hostinger.com/es",
    "badge": "Hosting Web + Dominio Gratis + Creador Tiendas (20% Descuento)"
  },
  "vercel": {
    "name": "Vercel",
    "affiliateUrl": "",
    "defaultUrl": "https://vercel.com",
    "badge": "Despliegues en 1 clic"
  },
  "cloudflare": {
    "name": "Cloudflare Pages",
    "affiliateUrl": "",
    "defaultUrl": "https://pages.cloudflare.com",
    "badge": "Ancho de Banda Ilimitado 0€"
  },
  "eas": {
    "name": "Expo Application Services (EAS)",
    "affiliateUrl": "",
    "defaultUrl": "https://expo.dev/eas",
    "badge": "Compilación y Publicación Móvil"
  },

  // --- Pagos & Facturación ---
  "lemonsqueezy": {
    "name": "Lemon Squeezy",
    "affiliateUrl": "",
    "defaultUrl": "https://www.lemonsqueezy.com",
    "badge": "Gestiona IVA e Impuestos Globales (MoR)"
  },
  "stripe": {
    "name": "Stripe",
    "affiliateUrl": "",
    "defaultUrl": "https://stripe.com",
    "badge": "Infraestructura de Pagos Global"
  },
  "stripe_connect": {
    "name": "Stripe Connect",
    "affiliateUrl": "",
    "defaultUrl": "https://stripe.com/connect",
    "badge": "Pagos a Vendedores en Marketplaces"
  },
  "revenuecat": {
    "name": "RevenueCat",
    "affiliateUrl": "",
    "defaultUrl": "https://www.revenuecat.com",
    "badge": "Compras In-App en iOS y Android"
  },

  // --- Automatización & Workflows ---
  "make": {
    "name": "Make.com",
    "affiliateUrl": "https://www.make.com/en/register?pc=oliverlopez",
    "defaultUrl": "https://www.make.com",
    "badge": "Flujos Visuales sin Código (35% Comisión)"
  },
  "n8n": {
    "name": "n8n Workflows",
    "affiliateUrl": "",
    "defaultUrl": "https://n8n.io",
    "badge": "Automatización Open Source y Agentes IA"
  }
};

/**
 * Obtiene la URL de salida: enlace de afiliado si existe, o URL oficial directa.
 */
window.getToolUrl = function(toolId) {
  const item = window.AFFILIATE_CONFIG[toolId];
  if (!item) return "#";
  return (item.affiliateUrl && item.affiliateUrl.trim().length > 0)
    ? item.affiliateUrl.trim()
    : item.defaultUrl;
};
