# Configuración de EmailJS para el Formulario de Contacto

Este documento explica cómo configurar EmailJS para que el formulario de contacto envíe emails a deevpfa@gmail.com.

## 1. Crear cuenta en EmailJS

1. Ve a [EmailJS.com](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Confirma tu email

## 2. Configurar el Servicio de Email

1. En el dashboard de EmailJS, ve a **"Services"**
2. Haz click en **"Add Service"**
3. Elige **"Gmail"** como proveedor
4. Sigue las instrucciones para conectar tu cuenta de Gmail (deevpfa@gmail.com)
5. Anota el **Service ID** que se genera (ej: `service_xxxxxx`)

## 3. Crear la Plantilla de Email

1. Ve a **"Templates"** en el dashboard
2. Haz click en **"Create Template"**
3. Configura la plantilla con el siguiente contenido:

### Configuración de la Plantilla:

**Subject:** `Nuevo mensaje de contacto de {{from_name}}`

**Content (HTML):**
```html
<h2>Nuevo mensaje de contacto</h2>

<p><strong>De:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Teléfono:</strong> {{phone}}</p>
<p><strong>Fecha:</strong> {{date}}</p>

<h3>Mensaje:</h3>
<div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
{{message}}
</div>

<hr>
<p style="font-size: 12px; color: #666;">
Este email fue enviado desde el formulario de contacto del sitio web de Alejandro Franquez Carpintería.
</p>
```

**Settings:**
- **To Email:** `deevpfa@gmail.com` (o usa `{{to_email}}` si quieres que sea dinámico)
- **From Name:** `{{from_name}}`
- **Reply To:** `{{reply_to}}`

4. Guarda la plantilla y anota el **Template ID** (ej: `template_xxxxxx`)

## 4. Obtener la Clave Pública

1. Ve a **"Account"** → **"General"**
2. Copia tu **Public Key** (ej: `your_public_key_here`)

## 5. Configurar Variables de Entorno

1. Abre el archivo `.env.local` en la raíz del proyecto
2. Reemplaza los valores con tus credenciales reales:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
VITE_CONTACT_EMAIL=deevpfa@gmail.com
```

## 6. Probar el Formulario

1. Ejecuta el proyecto: `npm run dev`
2. Ve al formulario de contacto
3. Llena los campos y envía un mensaje de prueba
4. Verifica que el email llegue a deevpfa@gmail.com

## 7. Configuración para Producción (Vercel)

1. En el dashboard de Vercel, ve a tu proyecto
2. Ve a **"Settings"** → **"Environment Variables"**
3. Agrega las siguientes variables:

```
VITE_EMAILJS_SERVICE_ID = tu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID = tu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY = tu_public_key_aqui
VITE_CONTACT_EMAIL = deevpfa@gmail.com
```

4. Redeploya la aplicación

## Límites del Plan Gratuito de EmailJS

- **200 emails por mes**
- **Rate limit:** 50 emails por hora
- Para más emails, considera upgradearse a un plan pago

## Solución de Problemas

### Error: "EmailJS configuration missing"
- Verifica que las variables de entorno estén configuradas correctamente
- Asegúrate de que los IDs no tengan espacios extra

### Error: "Service not found" 
- Verifica que el Service ID sea correcto
- Asegúrate de que el servicio esté activo en EmailJS

### Error: "Template not found"
- Verifica que el Template ID sea correcto
- Asegúrate de que la plantilla esté guardada y activa

### Los emails no llegan
- Revisa la carpeta de spam/correo no deseado
- Verifica que la configuración de Gmail permita la aplicación de EmailJS
- Chequea el dashboard de EmailJS para ver el historial de envíos

## Seguridad

- Las claves públicas de EmailJS son seguras para usar en el frontend
- EmailJS actúa como un proxy seguro para enviar emails
- Los datos del formulario se validan antes del envío
- Se incluye protección contra spam básica

## Alternativas

Si EmailJS no funciona bien, considera:
- **Formspree** (alternativa similar)
- **Netlify Forms** (si usas Netlify)
- **GetForm** (servicio de formularios)
- Implementar un backend propio con Node.js + Nodemailer