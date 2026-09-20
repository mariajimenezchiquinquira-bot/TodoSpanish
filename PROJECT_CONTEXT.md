# Contexto del proyecto — Portafolio Consolidado en Español (María José Jiménez)

Este archivo resume la estructura de este proyecto y los cambios hechos con ayuda de Claude, para tener contexto rápido en futuras sesiones.

## Datos generales

- Proyecto: React + Vite, portafolio consolidado en español con TODOS los proyectos de María José (Producto, Business Intelligence y Análisis de Datos), sin duplicados, para que ningún proyecto quede suelto en un portafolio aparte.
- Ubicación: `C:\Users\alura\Documents\Claude\PortfolioHTML\EStodo-portfolio`
- Repositorio: `github.com/mariajimenezchiquinquira-bot/TodoSpanish`, rama `master`
- Desplegado en Vercel (repo de GitHub enlazado directamente), con su propio link, distinto al de los otros portafolios (`portfolio-product-es`, `portfolio-bi-es`, `portfolio-data-analysis-es`).
- Este proyecto se creó copiando la base de `portfolio-product-es` y agregando los proyectos de `portfolio-bi-es` y `portfolio-data-analysis-es`, evitando repetir el proyecto "Análisis de Fuga de Clientes y Pérdida de Capital" (estaba en ambos). Código propio, sin compartir `.git` con ninguno de los otros portafolios.
- Todo el contenido del portafolio vive en `src/routes/index.tsx`
- Las imágenes de los proyectos están en `src/assets/projects/`
- Los textos de los botones reutilizables (GitHub, documentación, dashboard) viven en `src/components/portfolio/ProjectCard.tsx`

## Proyectos actuales (7)

1. **Payra Split — Función de Pagos Compartidos** (Notion, Jira, Tableau, Scrum)
2. **Zippto — Flashcards Personalizadas** (UI/UX Design, Supabase, Vercel, Claude Code)
3. **Automatización — Solicitud Herramientas de Pago** (Power Automate, Process Automation)
4. **WeWork — Business Case** (Business Intelligence, Business Strategy, Financial Analysis)
5. **Análisis — Fuga de Clientes y Pérdida de Capital** (Power BI, DAX, Visualización de Datos)
6. **Segmentación — Tarjetahabientes por Comportamiento de Gasto** (Python, SQL, Scikit-learn, K-means)
7. **Automatización — Contratos Vehiculares** (n8n, Gemini IA, Process Automation)

Nota: el proyecto "Bud Light / AB InBev: El Costo de una Decisión de Marketing" se eliminó por completo a petición de la usuaria (texto, imágenes `budlight-*.png` y el PDF `BudLight_Case_Study_Analysis.pdf`) — no quedó guardado en ningún lado para reinsertar después, a diferencia de otros portafolios donde sí se guardan cards retiradas.

## Flujo de deployment

El proyecto está conectado a **Vercel** (repo de GitHub enlazado directamente). El deployment es automático:

```
cd "C:\Users\alura\Documents\Claude\PortfolioHTML\EStodo-portfolio"
git add -A
git commit -m "mensaje descriptivo"
git push
```

Al hacer push a `master`, Vercel detecta el commit y publica el nuevo build solo, normalmente en uno o dos minutos.

### Quién hace el `git push`

Claude (desde Cowork) puede escribir archivos y hacer `git add` + `git commit` directamente en esta carpeta, pero **no tiene credenciales de GitHub**, así que no puede hacer `git push`. Por eso, el flujo habitual es:

1. Claude hace los cambios, los deja en `git add -A` + `git commit` (commit local listo).
2. **María José hace el `git push` manualmente**, abriendo Git Bash en esta carpeta y corriendo `git push`.
3. Una vez el push termina, Vercel redespliega solo.

Si después de un cambio el sitio publicado no se ve actualizado, lo primero a revisar es si falta ese `git push` (con `git status` o `git log` se puede ver si hay commits locales sin subir). Lo segundo, si el push ya se hizo, es la caché del navegador — refrescar con `Ctrl + Shift + R` suele resolverlo.

### Problema conocido: `.git/index.lock` atascado

Cuando Claude (desde Cowork) escribe archivos directamente en esta carpeta (imágenes, PDFs, código), a veces queda un archivo `.git/index.lock` (o `HEAD.lock`) atascado que bloquea el siguiente `git add`/`git commit` con el error:

```
fatal: Unable to create '.../index.lock': File exists.
```

Solución: correr `find .git -name "*.lock" -delete` en Git Bash (dentro de la carpeta del proyecto) antes de `git add -A`. Si el archivo no se puede borrar por permisos, Claude debe pedir permiso de eliminación en la carpeta conectada antes de reintentar.

## Cambios realizados hasta ahora (en este portafolio consolidado)

### Creación del proyecto
- Se copió `portfolio-product-es` completo (código, componentes, configuración) sin `.git` ni `node_modules`, como base.
- Se agregaron los proyectos de `portfolio-bi-es` (WeWork, Bud Light, Análisis de Fuga de Clientes) y `portfolio-data-analysis-es` (Segmentación de Tarjetahabientes, Automatización de Contratos Vehiculares), copiando también sus imágenes y PDFs a este proyecto.
- Se evitó duplicar "Análisis de Fuga de Clientes y Pérdida de Capital", que estaba en ambos portafolios de origen.
- Se actualizó el título/meta SEO y la lista de Skills & Tools para reflejar las tres áreas (Producto, BI, Análisis de Datos).
- Se creó el repositorio en GitHub como `TodoSpanish` (la usuaria lo nombró así, aunque la carpeta local y el proyecto interno se llaman `EStodo-portfolio`) y se desplegó en Vercel.

### Ajustes de texto en tarjetas de proyecto
- **Zippto**: en la lista de tecnologías bajo el título, se quitó "CSS" y luego "HTML" y "JavaScript", dejando finalmente: **UI/UX Design · Supabase · Vercel · Claude Code**.
- **Automatización de Herramientas de Pago**: título cambiado de "Automatización de Solicitud de Herramientas Premium" a "Automatización de Solicitudes de Herramientas Pagas" y luego a su forma final **"Automatización — Solicitud Herramientas de Pago"** (con raya larga "—", no guion corto). Texto de Problema/Solución/Resultado reescrito con foco en herramientas como Claude Pro y Canva Pro. Tags bajo el título ajustados varias veces hasta quedar en: **Power Automate · Process Automation**.
- **Skills & Tools**: el encabezado de esa sección se cambió de "Skills" a **"Skills & Tools"**. Se quitó "Figma" y se agregó **"Automatización"**.
- **Footer**: el copyright se cambió de "© 2026 María José Jiménez" a **"© María José Jiménez"** (sin año).
- **Bud Light / AB InBev**: proyecto eliminado por completo (texto, imágenes y PDF), a petición explícita de la usuaria — este portafolio es precisamente para reunir todos los proyectos sin dejar ninguno suelto, así que no se guardó para reinsertar después.

## Pendiente / a futuro

- Revisar si el remote de git tiene algún token incrustado en la URL (buena práctica de seguridad, ya señalado como pendiente en otros portafolios).

### Ajustes de texto y PDF en los tres proyectos de datos (sesión posterior)

- **Análisis de Fuga de Clientes y Pérdida de Capital** → título cambiado a **"Análisis — Fuga de Clientes y Pérdida de Capital"** (raya larga "—"). Bloques Problema/Enfoque/Resultados reescritos.
- **Segmentación de Tarjetahabientes por Comportamiento de Gasto** → título cambiado a **"Segmentación — Tarjetahabientes por Comportamiento de Gasto"**. Tags bajo el título ampliados de "Python · SQL" a **"Python · SQL · Scikit-learn · K-means"**. Bloques Problema/Enfoque/Resultado reescritos.
- **Automatización de Contratos Vehiculares** → título cambiado a **"Automatización — Contratos Vehiculares"** (ya venía así de una sesión previa). Tags bajo el título ampliados de "n8n · Google Gemini (IA)" a **"n8n · Gemini (IA) · Process Automation"**. La etiqueta del segundo bloque se cambió de "Enfoque" a **"Solución"**, y los tres bloques (Problema/Solución/Resultado) se reescribieron.
- El PDF del botón "Ver Documentación" de Automatización de Contratos Vehiculares (`public/docs/vehicle-contract-automation-technical-documentation.pdf`) se reemplazó por una versión en español subida por la usuaria (mismo nombre de archivo). Se verificó con `stat` (tamaño y `nlink=1`) que el archivo en disco realmente cambió antes de confirmar el cambio, por el problema conocido de hardlinks documentado en otros portafolios.
- Estos mismos tres cambios de texto (sin el PDF) se aplicaron primero en `portfolio-data-analysis-es`, y este portafolio consolidado se actualizó después para mantener consistencia.

### Reemplazo del proyecto WeWork por la versión de portfolio-bi-es

- Se reemplazó por completo la tarjeta "WeWork: El Colapso Estratégico de un Modelo de Negocio de $47.000M" (que usaba 3 imágenes: `wework-valuation.png`, `wework-timeline.png`, `wework-losses-donut.png`, y enlazaba a `WeWork_Case_Study_Analysis.pdf`) por la versión que ya existía en `portfolio-bi-es`.
- Nueva tarjeta: **"WeWork — Business Case"**, tags **Business Intelligence · Business Strategy · Financial Analysis**. Bloques Problema/Análisis/Insight (en vez de Problema/Enfoque/Resultado), con una sola imagen: `wework-dashboard-overview.png`.
- El botón de documentación ahora enlaza a `public/docs/WeWork_Case_Study_Analysis.html` (versión HTML) en vez del PDF. Se copiaron ambos archivos nuevos (`wework-dashboard-overview.png` y `WeWork_Case_Study_Analysis.html`) desde `portfolio-bi-es` a este proyecto.
- Los imports de las tres imágenes anteriores (`weworkValuation`, `weworkTimeline`, `weworkLossesDonut`) se quitaron de `src/routes/index.tsx` y se reemplazaron por el import de `weworkDashboardOverview`.
- El PDF viejo (`WeWork_Case_Study_Analysis.pdf`) y las tres imágenes viejas se dejaron en el proyecto sin borrar (no se usan en el código, pero no se eliminaron del disco).
- Cambios verificados corriendo `npm install` + `npm run dev` localmente (la usuaria confirmó que se ve bien) y luego confirmados con `git add` + `git commit` (commit `bc5be78`). El `git push` lo hizo la usuaria manualmente.
