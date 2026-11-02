# ⚡ SaaS Stack Finder

Una web interactiva gratuita diseñada para ayudar a cualquier persona (técnica o no técnica) a descubrir el stack exacto de herramientas que necesita para crear su proyecto online o SaaS respondiendo 4 preguntas simples.

---

## 🎯 Características Principales

1. **Quiz Inteligente en 4 Pasos**:
   - **¿Qué quieres crear?** (App web, Móvil, Marketplace, Directorio, etc.)
   - **¿Sabes programar?** (No-Code, Básico, Desarrollador)
   - **¿Cuál es tu presupuesto?** (0€ Bootstrap, 0-20€/mes, 20-100€/mes, etc.)
   - **¿Necesitas Inteligencia Artificial?** (Núcleo, Secundaria, Ninguna)

2. **Resultados Detallados**:
   - 🛠️ **Crear la aplicación** (Lovable, Bolt, Bubble, FlutterFlow, Next.js, etc.)
   - 🗄️ **Base de datos & Backend** (Supabase, Firebase, Xano, PocketBase, Airtable)
   - 🧠 **Inteligencia Artificial** (OpenAI, Claude, Gemini Flash, Groq)
   - ☁️ **Hosting & Despliegue** (Vercel, Cloudflare Pages, Railway, Coolify)
   - 💳 **Pagos & Facturación** (Stripe, Lemon Squeezy, Polar)
   - ⚡ **Automatización & Workflows** (Make, n8n)

3. **Ficha Completa por Herramienta**:
   - ✅ Explicación muy corta de qué es.
   - 🎯 Para qué sirve exactamente en tu SaaS.
   - 🎁 **Alternativa 100% gratuita / open source**.
   - 🔗 Botón directo **"Probar herramienta →"** preparado para tus enlaces de afiliado.

4. **Monetización con Afiliados Preparada**:
   - Archivo de configuración centralizado: [`affiliate-config.js`](./affiliate-config.js).
   - Solo tienes que pegar tu enlace de afiliado en las herramientas que quieras monetizar. Si dejas el campo vacío, redirige automáticamente a la web oficial.

5. **Directorio Completo**:
   - Pestaña para explorar y filtrar más de 20 herramientas de referencia con sus alternativas y precios.

6. **Copiar Stack con 1 Clic**:
   - Los usuarios pueden copiar su arquitectura en formato texto/markdown para guardarlo o compartirlo.

---

## 🚀 Cómo abrir la web localmente

### Opción 1: Doble Clic (Inmediato)
Simplemente haz doble clic en el archivo [`index.html`](./index.html) o en [`abrir_web.bat`](./abrir_web.bat). Se abrirá directamente en Google Chrome o Microsoft Edge.

### Opción 2: Servidor local (Opcional)
Desde la terminal:
```bash
cd saas-stack-finder
python -m http.server 3000
```
Y abre `http://localhost:3000` en tu navegador.

---

## 🌐 Cómo publicarlo gratis en Internet (en 2 minutos)

Al ser una aplicación web estática (HTML + CSS + JavaScript puro):
1. **Cloudflare Pages / Vercel / Netlify**: Arrastra y suelta la carpeta `saas-stack-finder` y tendrás tu web con dominio SSL gratuito y coste 0€ de por vida.
2. **GitHub Pages**: Sube los archivos a un repositorio y activa Pages en la configuración.

---

## 💼 Cómo configurar tus enlaces de afiliado

Abre el archivo [`affiliate-config.js`](./affiliate-config.js) y verás una estructura como esta:

```javascript
window.AFFILIATE_CONFIG = {
  "lovable": {
    "name": "Lovable",
    "affiliateUrl": "https://lovable.dev/?via=tu_afiliado", // <-- Pega tu link aquí
    "defaultUrl": "https://lovable.dev"
  },
  "bubble": {
    "name": "Bubble",
    "affiliateUrl": "https://bubble.io/?ref=tu_codigo",    // <-- Pega tu link aquí
    "defaultUrl": "https://bubble.io"
  },
  // ...
};
```
Guarda el archivo y todos los botones de la web usarán automáticamente tus enlaces.
