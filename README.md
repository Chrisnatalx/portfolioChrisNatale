# Portfolio de Christian Natale (AI Engineer)

Sitio personal con forma de red neuronal: cada nodo del hero es un dato real de la carrera y cada sección es una "capa" del forward pass (entrada → trayectoria → embeddings → atención → salida). Incluye **AlterNata**, un chat con IA que responde solo sobre Christian.

- Producción: https://portfolio-chris-natale.vercel.app (ES) · https://portfolio-chris-natale.vercel.app/en/ (EN)
- Hosting: Vercel. **Un push a `main` despliega a producción.**

## Stack

- HTML, CSS y JavaScript sin framework ni bundler. Todo el front vive en un solo archivo por idioma.
- Red neuronal dibujada con Canvas 2D (sin librerías).
- Función serverless en Node.js (`api/chat.js`) con `@anthropic-ai/sdk` apuntando a Vercel AI Gateway (`https://ai-gateway.vercel.sh`), modelo `anthropic/claude-haiku-5.5`.
- Python 3 solo para generar la versión en inglés (`build.py`).

## Mapa de archivos

| Ruta | Qué es |
|---|---|
| `index.html` | **Fuente única del sitio, en español.** CSS, markup y JS inline (red neuronal, chips, widget de AlterNata, tema claro/oscuro). |
| `en/index.html` | **Generado.** No editar a mano: se produce con `python3 build.py`. |
| `build.py` | Lista de pares `(es, en)` que traduce `index.html` → `en/index.html`. Falla si un texto en español ya no matchea. |
| `api/chat.js` | `POST /api/chat`: endpoint de AlterNata. Valida historial, rate limit por IP, llama al gateway y devuelve respuesta + nodos a iluminar. |
| `api/_knowledge.js` | Base de conocimiento del bot (`KNOWLEDGE`) e ids de nodos de la red (`NODES`). El `_` evita que Vercel lo publique como función. |
| `assets/media/`, `assets/video/` | Capturas y videos de demo por proyecto (webp + miniatura `-sm`, webm + mp4 + póster). Todo pasa por redacción con OCR antes de publicarse: datos de terceros pixelados. |
| `assets/` | Foto, CV en PDF (`christian-natale-cv.pdf`) e imágenes Open Graph (`og.png`, `og-en.png`). |
| `og/og.html`, `og/render.cjs` | Plantilla y script (Playwright) que generan las imágenes OG. No se despliegan. |
| `vercel.json` | Sitio estático desde la raíz, sin build; `api/chat.js` con `maxDuration` 30 s. |
| `.vercelignore` | Excluye `build.py`, `og/` y `.env*` del deploy. |

## Comandos

```bash
python3 build.py                                   # regenera en/index.html (correr después de cualquier cambio en index.html)
python3 -m http.server 8000                        # vista local del sitio estático (/api/chat no funciona así)
NODE_PATH=<carpeta con playwright-core> node og/render.cjs   # regenera assets/og.png y og-en.png
```

Para probar el chat en local hace falta `vercel dev` (Vercel CLI) con `AI_GATEWAY_API_KEY` en `.env.local`, o el token OIDC de Vercel.

## AlterNata (`/api/chat`)

- **Entrada:** `{ messages: [{ role: "user" | "assistant", content: string }], lang: "es" | "en" }`
- **Salida:** `{ answer: string, nodes: string[] }`. `nodes` son ids de `NODES` que el front ilumina en la red. Si se agotaron los créditos del gateway: `{ answer, nodes: [], outOfCredits: true }`.
- **Límites:** 12 mensajes de historial, 600 caracteres por mensaje del visitante, 20 mensajes por IP cada 10 minutos (en memoria, por instancia: es de mejor esfuerzo; el tope real de gasto es el presupuesto del gateway).
- **Credenciales:** `AI_GATEWAY_API_KEY` (variable de entorno del proyecto en Vercel, marcada como Sensitive). Si no existe, usa el token OIDC del header `x-vercel-oidc-token`. Nunca poner la key en el repo ni en el HTML.
- **Comportamiento pedido:** responde en tercera persona, solo sobre Christian; si no hay créditos dice que se quedó sin créditos.
- **UI:** widget flotante abajo a la derecha (`#anFab` abre/cierra `#anPanel`; Escape cierra).

## Reglas para editar (humanos y LLMs)

1. **Editar solo `index.html`** y después correr `python3 build.py`. Si el build falla, agregar o actualizar el par correspondiente en `build.py`.
2. **Si cambia el contenido del sitio** (proyectos, cifras, cargo), actualizar también `api/_knowledge.js` para que AlterNata no quede desactualizado.
3. **Clientes con nombre (autorizado):** Bravía Kombucha, Globalex, RealtorMatch y Sarapura se pueden nombrar. Los datos de terceros (clientes finales, teléfonos, mensajes) se tapan siempre en videos e imágenes.
4. **Cargo:** "AI Engineer" en todo el sitio.
5. **Temas:** los colores son tokens en `:root` (oscuro por defecto) y se redefinen para claro en `@media (prefers-color-scheme: light)` y en `:root[data-theme="light"]`. Cambiar ambos bloques juntos.
6. **Respetar `prefers-reduced-motion`:** toda animación nueva necesita su versión sin movimiento. El motion actual (sin librerías): cambio de tema con View Transitions, barra de progreso `.fp`, entrada escalonada de bloques (`.js-rv` / `.rv`), cifras de `.metric .v` que cuentan desde 0, luz que sigue al cursor en `.proj` (`--mx`/`--my`) y puntos de "pensando" en el chat. No se usa three.js a propósito, para cuidar el peso.
7. **Secretos:** nunca en el repo ni en el HTML; solo como variables de entorno en Vercel (`.env*` está en `.gitignore`).
