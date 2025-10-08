# Guía para Agregar Sitemap a Google Search Console

## 📍 URL de tu Sitemap
```
https://www.iptvespana.site/sitemap.xml
```

---

## 🚀 Pasos para Agregar el Sitemap a Google Search Console

### Paso 1: Acceder a Google Search Console
1. Ve a: **https://search.google.com/search-console**
2. Inicia sesión con tu cuenta de Google
3. Selecciona tu propiedad: **iptvespana.site**

### Paso 2: Navegar a la Sección de Sitemaps
1. En el menú lateral izquierdo, busca la sección **"Indexación"**
2. Haz clic en **"Sitemaps"**

### Paso 3: Agregar el Sitemap
1. En el campo "Añadir un sitemap nuevo", escribe:
   ```
   sitemap.xml
   ```
2. Haz clic en el botón **"ENVIAR"**

### Paso 4: Verificar el Estado
- Espera unos minutos (puede tardar hasta 24 horas)
- El estado debería cambiar a **"Correcto"** o **"Éxito"**
- Verás el número de URLs descubiertas (debería ser 33)

---

## 📊 Contenido de tu Sitemap

Tu sitemap incluye **33 URLs**:

### Páginas Principales (3)
- Página de inicio
- Página "Aprende" (centro de aprendizaje)
- Página de prueba

### Artículos de Blog (30)
Todos tus artículos sobre IPTV están incluidos con:
- ✅ Prioridad optimizada (0.8-0.9)
- ✅ Frecuencia de actualización (weekly)
- ✅ Fecha de última modificación

---

## 🔍 Verificar que el Sitemap es Accesible

Antes de enviarlo a Google, verifica que funciona:

1. Abre tu navegador
2. Ve a: **https://www.iptvespana.site/sitemap.xml**
3. Deberías ver el contenido XML del sitemap

Si ves el XML correctamente, ¡está listo para Google!

---

## ⚡ Consejos Adicionales

### 1. Robots.txt
Asegúrate de que tu archivo `robots.txt` incluya la referencia al sitemap:
```
User-agent: *
Allow: /

Sitemap: https://www.iptvespana.site/sitemap.xml
```

### 2. Actualizar el Sitemap
Cada vez que agregues nuevos blogs:
1. Actualiza el archivo `sitemap.xml`
2. Cambia la fecha `<lastmod>` a la fecha actual
3. Ve a Google Search Console
4. En la sección Sitemaps, haz clic en el sitemap existente
5. Haz clic en "Volver a enviar"

### 3. Monitorear el Rendimiento
En Google Search Console puedes ver:
- **Rendimiento**: Clics, impresiones, CTR
- **Cobertura**: URLs indexadas vs. excluidas
- **Mejoras**: Problemas de usabilidad móvil
- **Enlaces**: Quién enlaza a tu sitio

---

## 🎯 Prioridades en el Sitemap

He configurado las prioridades así:

- **1.0** - Página principal (máxima prioridad)
- **0.9** - Página "Aprende" y blogs principales de España
- **0.8** - Todos los artículos de blog
- **0.5** - Página de prueba

---

## 📱 Verificar Indexación

Después de 1-2 semanas, verifica que Google está indexando tus páginas:

1. En Google, busca:
   ```
   site:iptvespana.site
   ```
2. Deberías ver todas tus páginas listadas

---

## ❓ Solución de Problemas

### Si el sitemap no se envía:
1. Verifica que el archivo esté en `/public/sitemap.xml`
2. Asegúrate de que Vercel lo está desplegando
3. Comprueba que no hay errores XML

### Si Google reporta errores:
1. Revisa el formato XML (debe ser válido)
2. Verifica que todas las URLs son accesibles (código 200)
3. Asegúrate de que no hay URLs duplicadas

### Si las páginas no se indexan:
1. Espera al menos 1-2 semanas
2. Verifica que el contenido es único y de calidad
3. Asegúrate de que no hay etiquetas `noindex`
4. Solicita indexación manual en Google Search Console

---

## 🎉 ¡Listo!

Tu sitemap está completo y optimizado para Google Search Console. 

**Próximos pasos:**
1. Enviar el sitemap a Google Search Console
2. Esperar 24-48 horas para ver resultados
3. Monitorear el rendimiento semanalmente
4. Actualizar el sitemap cuando agregues nuevos blogs

---

## 📞 Soporte

Si tienes problemas, verifica:
- Google Search Console Help: https://support.google.com/webmasters
- Validador de Sitemaps: https://www.xml-sitemaps.com/validate-xml-sitemap.html
