/* Catálogo del kit de ventas.
   Los PRECIOS no se escriben aquí: se leen de MR_Portafolio/servicios/precios.json
   (las claves de "precio" apuntan a ese archivo). Aquí van los textos de cada servicio.
   Los costes de terceros son aproximados, en euros, y los paga SIEMPRE el cliente
   directamente a esa empresa. */
window.CATALOGO = {

  categorias: {
    "Webs": { color: "#2F6A9E", icon: "globe", texto: "Para que el negocio exista y venda en internet." },
    "Diseño": { color: "#5B48B0", icon: "pen-tool", texto: "Para que se vea bien y se use fácil, antes de construir." },
    "IA y automatización": { color: "#17766A", icon: "sparkles", texto: "Para quitarte trabajo repetido y no perder clientes." },
    "Marketing": { color: "#A23F6B", icon: "megaphone", texto: "Para que te encuentren y te elijan." },
    "Formación": { color: "#8A5A12", icon: "graduation-cap", texto: "Para que tu equipo aprenda a usar la IA por sí mismo." },
    "Apps": { color: "#3D4B66", icon: "smartphone", texto: "Para ideas propias y herramientas internas." },
    "Mantenimiento": { color: "#5E6675", icon: "wrench", texto: "Para que todo siga funcionando cada mes." }
  },


  condiciones: [
    "Los precios son «desde»: el precio final depende de lo que necesites y queda por escrito en tu presupuesto.",
    "Forma de pago de los proyectos: 50 % al empezar y 50 % al entregar, por transferencia bancaria (o SPEI en México). Bizum o efectivo, solo para importes pequeños.",
    "Las cuotas mensuales no tienen permanencia: se cancelan avisando con 30 días.",
    "El dominio, el alojamiento y las cuentas van siempre a tu nombre: si dejas de trabajar con nosotros, te lo llevas todo.",
    "Incluye 2 rondas de cambios. Cambios fuera de lo acordado: se presupuestan aparte antes de hacerlos.",
    "Impuestos: España + IVA 21 %; México + IVA 16 %; otros países, según la factura (te lo confirmamos).",
    "El presupuesto es válido durante 30 días. Los plazos empiezan cuando tenemos todo lo que necesitamos de ti (fotos, textos, accesos)."
  ],

  servicios: [
    {
      id: "landing", icon: "rocket", categoria: "Webs",
      titulo: "Landing page sencilla",
      frase: "Una página clara para que te encuentren en Google y te escriban por WhatsApp.",
      queEs: "Una sola página web que presenta el negocio (quién es, qué ofrece, precios o servicios, opiniones y cómo contactar) y lleva al cliente a escribir o llamar.",
      paraQuien: ["Autónomos y negocios que no tienen web", "Estéticas, peluquerías, consultoras, tiendas de barrio", "Profesionales que solo tienen Instagram", "Eventos o lanzamientos puntuales"],
      senales: "Te dicen «solo tengo Instagram», «me buscan y no salgo» o «quiero algo sencillo y barato».",
      incluye: ["1 página con hasta 6 secciones", "Versión para móvil, tablet y ordenador incluida (se adapta sola a cada pantalla)", "Botón de WhatsApp, formulario y mapa", "Preparada para salir en Google cuando buscan en su zona (SEO local básico)", "Publicación en internet", "2 rondas de cambios"],
      noIncluye: ["Tienda o pagos online", "Blog o más páginas", "Varios idiomas", "Logo o fotos profesionales", "Redacción de textos largos (el cliente da la información, nosotros la ordenamos)"],
      necesitamos: ["Logo (si lo tiene) y 5–10 fotos del negocio", "Textos básicos: qué hace, servicios y precios (nosotros los ordenamos)", "Datos de contacto, horario y dirección", "Acceso para comprar el dominio a su nombre"],
      plazo: "1–2 semanas desde que el cliente envía fotos y datos",
      precio: { inicial: "landing" },
      terceros: [
        {que:  "Dominio (la dirección de tu web)", quien:  "Cliente", costeEur:  [8, 16], costeMxn:  [500, 1200], costeUsd:  [17, 18], periodo:  "año", nota:  "Se renueva cada año y va a tu nombre", opciones:  [{n:  "DonDominio, .es", p:  "unos 8 € al año", m:  ["eur"]}, {n:  "DonDominio, .com", p:  "unos 16 € al año", m:  ["eur"]}, {n:  "Dominio .mx", p:  "unos 500–1.200 MXN al año, según el registrador", m:  ["mxn"]}, {n:  "Dominio .com", p:  "unos 17–18 US$ al año", m:  ["mxn", "usd"]}]},
        {que:  "Alojamiento (hosting)", quien:  "Cliente", costeEur:  [0, 0], costeMxn:  [0, 0], costeUsd:  [0, 0], periodo:  "", nota:  "Gratis, con uso comercial permitido, a tu nombre", opciones:  [{n:  "Cloudflare Pages", p:  "gratis"}]},
        {que:  "Textos legales y aviso de cookies", quien:  "Cliente", costeEur:  [6, 12], costeMxn:  [0, 190], costeUsd:  [6, 14], periodo:  "mes", nota:  "Obligatorio por ley; la opción depende del país", opciones:  [{n:  "España (recomendado): Lawwwing Starter", p:  "9,90 €/mes con pago anual o 12 €/mes. Aviso legal, privacidad, cookies y banner", m:  ["eur"]}, {n:  "España, más barato: iubenda Essentials", p:  "5,99 US$/mes (unos 5,50 €) con pago anual; el aviso legal lo redactamos nosotros", m:  ["eur"]}, {n:  "México: aviso de privacidad (integral y simplificado)", p:  "lo redactamos nosotros, incluido", m:  ["mxn"]}, {n:  "México, si la web usa analítica o publicidad: CookieYes", p:  "gratis hasta 5.000 visitas al mes; Basic 9 €/mes (unos 190 MXN)", m:  ["mxn"]}, {n:  "Otros países: iubenda Essentials", p:  "5,99 US$/mes con pago anual", m:  ["usd"]}, {n:  "Otros países: Termly Starter", p:  "10 US$/mes con pago anual o 14 US$/mes", m:  ["usd"]}]}
      ],
      mensual: { opcional: "mant", texto: "Opcional: mantenimiento mensual." },
      demos: [{ nombre: "Piñatas Madrid", url: "https://melinarivera.github.io/pinata/" }],
      preguntas: [
        ["¿Por qué no uso una web gratis tipo Wix?", "Puedes, pero tendrás que hacerla tú y pagar su plan para quitar anuncios y usar tu dominio. Aquí te la entregamos hecha, rápida, pensada para vender y es tuya."],
        ["¿Puedo cambiar cosas luego?", "Sí. Incluye 2 rondas de cambios; después, con el mantenimiento mensual, los cambios pequeños van incluidos."]
      ]
    },
    {
      id: "web", icon: "building-2", categoria: "Webs",
      titulo: "Web corporativa",
      frase: "Una web completa que genera confianza y explica bien todo lo que haces.",
      queEs: "Una web de 5 a 7 páginas (inicio, servicios, sobre nosotros, blog o catálogo, contacto…) con estructura pensada para que el visitante confíe y contacte.",
      paraQuien: ["Pymes con varios servicios que explicar", "Despachos, consultoras, gestorías, clínicas", "Negocios que quieren aparecer mejor en Google"],
      senales: "Te dicen «mi web es vieja», «no transmite lo que hacemos» o «necesito explicar varios servicios».",
      incluye: ["5–7 páginas", "Versión para móvil, tablet y ordenador incluida", "Blog o catálogo de servicios", "Preparada para salir en Google (SEO básico en cada página)", "WhatsApp, formulario y estadísticas de visitas", "Textos legales instalados: aviso legal, privacidad y cookies (la herramienta depende del país)", "2 rondas de cambios"],
      noIncluye: ["Tienda o pagos online", "Más de 7 páginas o varios idiomas (se presupuesta aparte)", "Redacción completa de todos los textos", "Fotografía profesional"],
      necesitamos: ["Logo y fotos del negocio", "Información de cada servicio (nosotros la ordenamos y la dejamos clara)", "Datos de la empresa para el aviso legal (nombre, NIF o RFC, dirección)", "Acceso para el dominio a su nombre"],
      plazo: "3–4 semanas desde que el cliente envía contenidos",
      precio: { inicial: "web" },
      terceros: [
        {que:  "Dominio (la dirección de tu web)", quien:  "Cliente", costeEur:  [8, 16], costeMxn:  [500, 1200], costeUsd:  [17, 18], periodo:  "año", nota:  "Se renueva cada año y va a tu nombre", opciones:  [{n:  "DonDominio, .es", p:  "unos 8 € al año", m:  ["eur"]}, {n:  "DonDominio, .com", p:  "unos 16 € al año", m:  ["eur"]}, {n:  "Dominio .mx", p:  "unos 500–1.200 MXN al año, según el registrador", m:  ["mxn"]}, {n:  "Dominio .com", p:  "unos 17–18 US$ al año", m:  ["mxn", "usd"]}]},
        {que:  "Alojamiento (hosting)", quien:  "Cliente", costeEur:  [0, 0], costeMxn:  [0, 0], costeUsd:  [0, 0], periodo:  "", nota:  "Gratis, con uso comercial permitido, a tu nombre", opciones:  [{n:  "Cloudflare Pages", p:  "gratis"}]},
        {que:  "Textos legales y aviso de cookies", quien:  "Cliente", costeEur:  [6, 12], costeMxn:  [0, 190], costeUsd:  [6, 14], periodo:  "mes", nota:  "Obligatorio por ley; la opción depende del país", opciones:  [{n:  "España (recomendado): Lawwwing Starter", p:  "9,90 €/mes con pago anual o 12 €/mes. Aviso legal, privacidad, cookies y banner", m:  ["eur"]}, {n:  "España, más barato: iubenda Essentials", p:  "5,99 US$/mes (unos 5,50 €) con pago anual; el aviso legal lo redactamos nosotros", m:  ["eur"]}, {n:  "México: aviso de privacidad (integral y simplificado)", p:  "lo redactamos nosotros, incluido", m:  ["mxn"]}, {n:  "México, si la web usa analítica o publicidad: CookieYes", p:  "gratis hasta 5.000 visitas al mes; Basic 9 €/mes (unos 190 MXN)", m:  ["mxn"]}, {n:  "Otros países: iubenda Essentials", p:  "5,99 US$/mes con pago anual", m:  ["usd"]}, {n:  "Otros países: Termly Starter", p:  "10 US$/mes con pago anual o 14 US$/mes", m:  ["usd"]}]}
      ],
      mensual: { opcional: "mant", texto: "Recomendado: mantenimiento mensual." },
      demos: [{ nombre: "ETERN-ME", url: "https://etern-me.com" }, { nombre: "Cotidiana", url: "https://cotidiana.app" }],
      preguntas: [
        ["¿La web es mía?", "Sí. Dominio, alojamiento y cuentas van a tu nombre desde el primer día."],
        ["¿Me vais a posicionar el primero en Google?", "Dejamos la web preparada para Google (SEO básico). Subir posiciones depende también de contenido y reseñas con el tiempo; nadie serio puede garantizar el primer puesto."]
      ]
    },
    {
      id: "tienda", icon: "shopping-bag", categoria: "Webs",
      titulo: "Tienda online o sistema de reservas",
      frase: "Tu negocio abierto 24 horas: vende o recibe reservas mientras duermes.",
      queEs: "Una web donde el cliente compra y paga con tarjeta, o reserva cita y recibe recordatorios. Con un panel para gestionar pedidos o reservas.",
      paraQuien: ["Tiendas que quieren vender fuera de su local", "Estéticas, clínicas, academias que dan citas", "Negocios que hoy gestionan pedidos por WhatsApp a mano"],
      senales: "Te dicen «me piden por WhatsApp y es un lío», «quiero cobrar por adelantado» o «se me olvidan las citas».",
      incluye: ["Versión para móvil, tablet y ordenador incluida", "Catálogo, carrito y pago con tarjeta (Stripe, TPV del banco o Mercado Pago)", "O agenda de citas con recordatorios", "Panel para gestionar pedidos o reservas", "Diseño a medida", "30 días de soporte tras el lanzamiento"],
      noIncluye: ["Subir cientos de productos (hasta 20 incluidos; el resto, aparte)", "Fotografía de producto", "Envíos internacionales complejos o conexión con almacenes", "Facturas oficiales (Verifactu en España, CFDI en México): las hace su programa de facturación o su gestoría"],
      necesitamos: ["Lista de productos con foto, precio y descripción (hasta 20 incluidos)", "Datos de la empresa y condiciones de envío y devolución", "Abrir su cuenta de Stripe o Mercado Pago (le ayudamos)"],
      plazo: "4–6 semanas",
      precio: { inicial: "tienda" },
      terceros: [
        {que:  "Dominio (la dirección de tu web)", quien:  "Cliente", costeEur:  [8, 16], costeMxn:  [500, 1200], costeUsd:  [17, 18], periodo:  "año", nota:  "Se renueva cada año y va a tu nombre", opciones:  [{n:  "DonDominio, .es", p:  "unos 8 € al año", m:  ["eur"]}, {n:  "DonDominio, .com", p:  "unos 16 € al año", m:  ["eur"]}, {n:  "Dominio .mx", p:  "unos 500–1.200 MXN al año, según el registrador", m:  ["mxn"]}, {n:  "Dominio .com", p:  "unos 17–18 US$ al año", m:  ["mxn", "usd"]}]},
        {que:  "Cobro con tarjeta (pasarela de pago)", quien:  "Cliente", costeEur:  null, periodo:  "venta", nota:  "Se descuenta de cada venta. Nosotros no cobramos comisión", opciones:  [{n:  "Stripe (España)", p:  "1,5 % + 0,25 € con tarjeta europea; 1,9 % tarjetas premium; 3,25 % internacionales", m:  ["eur", "usd"]}, {n:  "Stripe (México)", p:  "3,6 % + 3 MXN con tarjeta nacional; 4,4 % + 3 MXN internacional", m:  ["mxn"]}, {n:  "Mercado Pago (México)", p:  "3,49 % + IVA", m:  ["mxn"]}, {n:  "Conekta (México)", p:  "2,9 % + 2,5 MXN", m:  ["mxn"]}, {n:  "PayPal (México)", p:  "3,95 % + 4 MXN", m:  ["mxn"]}]},
        {que:  "Alojamiento y gestión de pedidos", quien:  "Cliente", costeEur:  [0, 23], costeMxn:  [0, 500], costeUsd:  [0, 25], periodo:  "mes", nota:  "Gratis si los pedidos se gestionan desde el panel de Stripe", opciones:  [{n:  "Cloudflare Pages + panel de Stripe", p:  "gratis"}, {n:  "Con stock, reservas o panel propio: Supabase Pro", p:  "25 US$/mes (unos 23 €), se cobra en dólares"}]},
        {que:  "Textos legales de tienda (condiciones de compra, devoluciones, cookies)", quien:  "Cliente", costeEur:  [16, 20], costeMxn:  [0, 190], costeUsd:  [15, 25], periodo:  "mes", nota:  "Obligatorio por ley para vender online", opciones:  [{n:  "España: Lawwwing Growth", p:  "15,90 €/mes con pago anual o 20 €/mes. Incluye condiciones de compra y botón de desistimiento", m:  ["eur"]}, {n:  "México: aviso de privacidad y términos de compra", p:  "los redactamos nosotros, incluido", m:  ["mxn"]}, {n:  "México, si usa analítica o publicidad: CookieYes", p:  "gratis hasta 5.000 visitas; Basic 9 €/mes (unos 190 MXN)", m:  ["mxn"]}, {n:  "Otros países: Termly Pro+", p:  "15 US$/mes con pago anual o 20 US$/mes", m:  ["usd"]}, {n:  "Otros países: iubenda Advanced", p:  "24,99 US$/mes con pago anual", m:  ["usd"]}]}
      ],
      mensual: { opcional: "mant", texto: "Muy recomendado: mantenimiento mensual (una tienda caída es dinero perdido)." },
      demos: [{ nombre: "Efsun · plataforma con reservas", url: "https://melinarivera.github.io/pyme-efsun/" }, { nombre: "Efsun · tienda", url: "https://melinarivera.github.io/tienda-esoterica/" }],
      preguntas: [
        ["¿Cobráis comisión por venta?", "No. Solo la pasarela de pago (Stripe, el banco o Mercado Pago) cobra su pequeña comisión. Nosotros no."],
        ["¿Puedo subir yo los productos?", "Sí, te enseñamos a hacerlo desde el panel."]
      ]
    },
    {
      id: "ia", icon: "bot", categoria: "IA y automatización",
      titulo: "Asistente de WhatsApp con IA",
      frase: "Responde a tus clientes al momento, a cualquier hora, y te pasa los que están listos para comprar.",
      queEs: "Un asistente que contesta en el WhatsApp del negocio (o en su web) con la información del negocio: precios, horarios, servicios, ubicación. Si no sabe algo, pasa la conversación a una persona. La versión «con citas» además agenda, envía recordatorios y guarda cada contacto en una ficha.",
      paraQuien: ["Negocios que reciben muchas preguntas repetidas por WhatsApp", "Estéticas, clínicas, academias (versión con citas)", "Consultoras de extranjería y despachos (filtran casos y piden cita)", "Negocios que pierden clientes por responder tarde"],
      senales: "Te dicen «me paso el día contestando lo mismo», «me escriben de noche» o «se me olvida responder».",
      incluye: ["Configuración con la información del negocio", "Respuestas 24/7 en WhatsApp o web", "Pase a una persona cuando hace falta", "Con citas: agenda, recordatorios y ficha de cada cliente", "La cuota mensual incluye la IA, el servidor y el mantenimiento"],
      noIncluye: ["Más de 1.000 conversaciones al mes (2.000 con citas): bloques extra aparte", "Mensajes de WhatsApp que cobra Meta (los paga el cliente a Meta)", "Asesoramiento legal o médico: el asistente nunca lo da", "Llamadas de voz"],
      necesitamos: ["Lista de preguntas frecuentes, precios, horarios y servicios", "El número de WhatsApp del negocio", "Una tarjeta de pago en Meta para los mensajes (le ayudamos a configurarlo)", "Con citas: acceso a su agenda o calendario"],
      plazo: "1–2 semanas (con citas: 2–3 semanas)",
      precio: { tope: "hasta 1.000 conversaciones al mes; con citas, 2.000", inicial: "ia", mensual: "ia_cuota", variante: { nombre: "Con citas (agenda + recordatorios + CRM)", inicial: "ia_citas", mensual: "ia_citas_cuota" } },
      terceros: [
        {que:  "Mensajes de WhatsApp (los cobra Meta)", quien:  "Cliente", costeEur:  [0, 20], costeMxn:  [0, 200], costeUsd:  [0, 22], periodo:  "mes", nota:  "Meta factura directamente a tu negocio; no añadimos margen", opciones:  [{n:  "Responder a clientes que te escriben", p:  "gratis las primeras 1.000 respuestas al mes; después ≈ 0,017 € cada una", m:  ["eur", "usd"]}, {n:  "Responder a clientes que te escriben", p:  "gratis las primeras 1.000 al mes; después ≈ 0,15 MXN cada una", m:  ["mxn"]}, {n:  "Recordatorios de citas", p:  "≈ 0,017 € cada uno", m:  ["eur", "usd"]}, {n:  "Recordatorios de citas", p:  "≈ 0,15 MXN cada uno", m:  ["mxn"]}, {n:  "Campañas y promociones", p:  "≈ 0,059 € cada mensaje", m:  ["eur", "usd"]}, {n:  "Campañas y promociones", p:  "desde ≈ 0,80 MXN cada mensaje (Meta lo subió en octubre de 2026)", m:  ["mxn"]}]},
        {que:  "IA (Claude)", quien:  "Nosotros", costeEur:  null, periodo:  "mes", nota:  "Incluida en la cuota: hasta 1.000 conversaciones al mes (2.000 con citas). Si prefieres pagarla con tu propia cuenta, la cuota baja"}
      ],
      demos: [{ nombre: "Demo estética", url: "https://melinarivera.github.io/MR_Portafolio/demos/asistente-whatsapp/#estetica" }, { nombre: "Demo extranjería", url: "https://melinarivera.github.io/MR_Portafolio/demos/asistente-whatsapp/#extranjeria" }],
      preguntas: [
        ["¿Y si la IA dice algo mal?", "Solo responde con la información que el negocio aprueba. Si no sabe, no se inventa nada: pasa la conversación a una persona."],
        ["¿Puedo seguir usando WhatsApp en mi móvil?", "Sí, con el mismo número. El asistente responde cuando tú no puedes."],
        ["¿Cuánto pagaré a Meta?", "Responder a quien te escribe es gratis hasta 1.000 respuestas al mes. Un negocio pequeño suele pagar entre 0 y 20 € al mes. Lo calculamos en el presupuesto."]
      ]
    },
    {
      id: "voz", icon: "phone-call", categoria: "IA y automatización",
      titulo: "Recepcionista de voz con IA",
      frase: "Contesta el teléfono por ti, a cualquier hora, y no se te escapa ni una llamada.",
      queEs: "Un asistente que atiende las llamadas del negocio con voz natural en español: da información (horarios, precios, servicios), toma citas o reservas y te envía un resumen de cada llamada por WhatsApp o email. Si la llamada lo necesita, la pasa a una persona. Se configura con la información del negocio y se activa desviando la línea cuando no puedes contestar (o siempre).",
      paraQuien: ["Restaurantes que pierden reservas en hora punta", "Clínicas, fisios y estéticas con recepción saturada", "Despachos y consultoras que reciben llamadas todo el día", "Negocios donde nadie puede coger el teléfono mientras atiende"],
      senales: "Te dicen «no doy abasto con el teléfono», «pierdo llamadas mientras atiendo» o «me llaman fuera de horario».",
      incluye: ["Configuración con la información del negocio y su forma de hablar", "Atiende 24/7 con voz natural, en español", "Toma citas o reservas en su agenda", "Resumen de cada llamada por WhatsApp o email", "Pasa la llamada a una persona cuando hace falta", "La cuota incluye la IA, la voz, el número y 200 minutos al mes"],
      noIncluye: ["Más de 200 minutos al mes: bloques de 100 minutos aparte", "Llamadas salientes de venta (solo atiende llamadas que entran)", "Consejo médico o legal: nunca lo da", "Cambiar de compañía telefónica"],
      necesitamos: ["Información del negocio: horarios, precios, servicios", "Cómo quiere que se atienda (tono, a quién pasar llamadas)", "Acceso a su agenda para las citas", "Activar el desvío de llamadas en su línea (le explicamos cómo)"],
      plazo: "2–3 semanas (incluye una semana de pruebas)",
      precio: { tope: "hasta 200 minutos de llamadas al mes", inicial: "voz", mensual: "voz_cuota", extra: { nombre: "Si necesitas más: 100 minutos extra", inicial: "voz_bloque_extra" } },
      terceros: [
        {que:  "Desvío de llamadas desde tu línea", quien:  "Cliente", costeEur:  null, periodo:  "mes", nota:  "Según tu operador; normalmente gratis"},
        {que:  "Voz, IA y número de teléfono", quien:  "Nosotros", costeEur:  null, periodo:  "mes", nota:  "Incluidos en la cuota (hasta 200 minutos al mes)", opciones:  [{n:  "Voz natural: ElevenLabs", p:  "incluido"}, {n:  "IA: Claude", p:  "incluido"}, {n:  "Número de teléfono", p:  "incluido"}]}
      ],
      demos: [{ nombre: "Llamada a un restaurante", url: "https://melinarivera.github.io/MR_Portafolio/demos/recepcionista-voz/#restaurante" }, { nombre: "Llamada a una clínica", url: "https://melinarivera.github.io/MR_Portafolio/demos/recepcionista-voz/#clinica" }],
      preguntas: [
        ["¿Se nota que es una máquina?", "La voz es muy natural, pero al empezar dice que es un asistente virtual del negocio: es lo honesto y lo que pide la ley."],
        ["¿Y si alguien quiere hablar con una persona?", "Le pasa la llamada a quien decidas, o toma el recado y te avisa al momento."],
        ["¿Cuántos minutos son 200?", "Unas 100 llamadas de 2 minutos al mes. Si te quedas corto, te avisamos antes y decides si añadir minutos."]
      ]
    },
    {
      id: "automatizacion", icon: "workflow", categoria: "IA y automatización",
      titulo: "Automatización de tareas",
      frase: "Lo que hoy haces a mano cada semana, que se haga solo.",
      queEs: "Un «flujo» que hace una tarea repetitiva sin que nadie la toque. Ejemplos: pasar facturas del email a una hoja de cálculo, enviar recordatorios de pago, crear un informe semanal, avisar cuando entra un pedido.",
      paraQuien: ["Gestorías y asesorías (facturas, plazos)", "Negocios que copian datos de un sitio a otro", "Cualquier pyme con tareas administrativas repetidas"],
      senales: "Te dicen «perdemos horas pasando datos», «siempre se nos olvida…» o «hacemos el mismo informe cada semana».",
      incluye: ["1 flujo automático por precio", "Pruebas con datos reales del cliente", "Explicación de cómo funciona"],
      noIncluye: ["Programas de pago que el cliente necesite (los paga él)", "Cambios en el flujo después de entregarlo (van al mantenimiento)"],
      necesitamos: ["Explicarnos la tarea paso a paso (20 minutos)", "Acceso a los programas que intervienen (correo, Excel, facturación…)", "Ejemplos reales para probar"],
      plazo: "1–2 semanas por flujo",
      precio: { inicial: "automatizacion", porUnidad: "flujo" },
      terceros: [
        {que:  "Herramienta de automatización", quien:  "Cliente", costeEur:  [0, 10], costeMxn:  [0, 200], costeUsd:  [0, 11], periodo:  "mes", nota:  "Depende de cuántas tareas haga al mes; te lo decimos antes de empezar", opciones:  [{n:  "Make, plan gratis", p:  "hasta 1.000 operaciones al mes"}, {n:  "Make Core", p:  "9 US$/mes (unos 8 €) con pago anual o 10,59 US$/mes; 10.000 operaciones"}]},
        {que:  "Programas que ya usas (Gmail, Excel, tu programa de facturas…)", quien:  "Cliente", costeEur:  null, periodo:  "mes", nota:  "Tu suscripción de siempre; no cambia"}
      ],
      mensual: { opcional: "mant", texto: "Si el flujo usa servidor o IA, necesita el mantenimiento mensual." },
      demos: [{ nombre: "Nexo · facturas con IA", url: "https://melinarivera.github.io/Nexo_Facturas/" }],
      preguntas: [["¿Qué pasa si cambio de programa?", "Se adapta el flujo; se presupuesta antes de tocarlo."]]
    },
    {
      id: "crm", icon: "users", categoria: "IA y automatización",
      titulo: "CRM o planner a medida",
      frase: "Todos tus clientes, citas y tareas en un solo sitio, en vez de libretas y Excel.",
      queEs: "Una herramienta para guardar clientes con su historial, reservas o ventas, y lanzar campañas (por WhatsApp o email) respetando la ley de protección de datos. Puede ser hecha a medida o configurar una que ya existe (HubSpot, Notion…).",
      paraQuien: ["Restaurantes (reservas, alérgenos, clientes habituales)", "Despachos y consultoras (casos y seguimiento)", "Negocios que llevan clientes en Excel o en el móvil"],
      senales: "Te dicen «lo llevo todo en Excel», «no sé quién es cliente habitual» o «quiero volver a contactar a clientes antiguos».",
      incluye: ["Una ficha por cliente con todo su historial, y grupos (habituales, nuevos, inactivos…)", "Reservas, agenda o seguimiento de ventas (en qué paso está cada cliente)", "Campañas por WhatsApp o email (con consentimiento)", "Exportar a Excel", "Formación para usarlo"],
      noIncluye: ["Licencias de programas de terceros (HubSpot, etc.)", "Pasar datos antiguos desordenados (se presupuesta aparte)", "App en tiendas de Apple o Google"],
      necesitamos: ["Su Excel o lista actual de clientes", "Qué quiere ver de cada cliente", "Quién del equipo lo va a usar"],
      plazo: "3–5 semanas (configurar uno existente: 1–2 semanas)",
      precio: { inicial: "crm", variante: { nombre: "Configurar uno existente (HubSpot, Notion…)", inicial: "crm_configurar" } },
      terceros: [
        {que:  "Base de datos con copias diarias", quien:  "Cliente", costeEur:  [23, 25], costeMxn:  [450, 500], costeUsd:  [25, 25], periodo:  "mes", nota:  "Recomendada desde el primer día", opciones:  [{n:  "Supabase Pro", p:  "25 US$/mes (unos 23 €), se cobra en dólares"}]},
        {que:  "Si prefieres configurar un CRM ya hecho", quien:  "Cliente", costeEur:  null, periodo:  "mes", nota:  "En lugar de la base de datos", opciones:  [{n:  "HubSpot, plan gratuito", p:  "gratis para empezar"}, {n:  "Notion", p:  "gratis o de pago según usuarios"}]}
      ],
      mensual: { opcional: "mant", texto: "Recomendado: mantenimiento mensual." },
      demos: [{ nombre: "Demo CRM restaurante", url: "https://melinarivera.github.io/MR_Portafolio/demos/crm-restaurante/" }, { nombre: "Nexo para gestorías", url: "https://melinarivera.github.io/Nexo_Facturas/" }],
      preguntas: [["¿Mis datos están seguros?", "Sí. Van en tu cuenta, con acceso solo para tu equipo, y firmamos un contrato de protección de datos (RGPD)."]]
    },
    {
      id: "redes", icon: "megaphone", categoria: "Marketing",
      titulo: "Redes sociales y reputación",
      frase: "Que tu negocio se vea activo, profesional y bien valorado en Instagram, Facebook y Google.",
      queEs: "Gestión mensual de las redes del negocio: plan de publicaciones, diseños, textos, respuesta a comentarios y reseñas de Google. En el plan Crecimiento, también reels y gestión de anuncios.",
      paraQuien: ["Negocios locales con redes abandonadas", "Estéticas, restaurantes, tiendas, academias", "Despachos que quieren dar confianza en LinkedIn y Google"],
      senales: "Te dicen «no tengo tiempo para redes», «publico cuando me acuerdo» o «tengo malas reseñas sin responder».",
      incluye: ["Esencial: 2 redes, 8 publicaciones al mes", "Crecimiento: 12 publicaciones + 4 reels y gestión de anuncios", "Calendario mensual y diseños propios", "Respuesta a reseñas y perfil de Google optimizado"],
      noIncluye: ["El dinero de los anuncios (lo paga el cliente a Meta o Google)", "Sesiones de fotos o vídeo presenciales", "Responder mensajes privados 24/7 (para eso: asistente de WhatsApp)", "Garantizar seguidores o ventas concretas"],
      necesitamos: ["Acceso a sus redes (Instagram, Facebook, Google)", "Fotos y novedades del negocio cada mes", "Aprobar el calendario de publicaciones"],
      plazo: "Arranca en 1 semana; se recomienda mínimo 3 meses para ver resultados",
      precio: { tope: "Esencial: 2 redes y 8 publicaciones al mes; Crecimiento: 12 publicaciones y 4 reels", mensual: "redes", variante: { nombre: "Plan Crecimiento (reels + anuncios)", mensual: "redes_crecimiento" }, extra: { nombre: "Auditoría de perfiles con plan de acción (pago único)", inicial: "auditoria_redes" } },
      terceros: [
        {que:  "Inversión en anuncios", quien:  "Cliente", costeEur:  null, periodo:  "mes", nota:  "La decides tú y se paga directamente a la plataforma", opciones:  [{n:  "Meta (Instagram y Facebook)", p:  "lo que tú decidas"}, {n:  "Google Ads", p:  "lo que tú decidas"}]},
        {que:  "Canva Pro y herramientas para programar publicaciones", quien:  "Nosotros", costeEur:  null, periodo:  "mes", nota:  "Incluidas en la cuota"}
      ],
      demos: [{ nombre: "Instagram de Melina", url: "https://www.instagram.com/melina_rivera_developer/" }],
      preguntas: [
        ["¿Hay permanencia?", "No. Recomendamos 3 meses para ver resultados, pero se cancela avisando con 30 días."],
        ["¿Me garantizáis clientes?", "No prometemos números. Sí un perfil activo, profesional y bien cuidado, y te enseñamos los resultados cada mes."]
      ]
    },
    {
      id: "avatar", icon: "clapperboard", categoria: "Marketing",
      titulo: "Vídeos con avatar IA",
      frase: "Vídeos para redes y web con un presentador virtual, sin ponerte delante de la cámara.",
      queEs: "Creamos vídeos cortos en los que un presentador virtual (un avatar con voz natural) explica los servicios del negocio, responde preguntas frecuentes o presenta novedades y cursos. Nosotros escribimos el guion, generamos el vídeo, ponemos subtítulos y lo entregamos listo para Instagram, TikTok, WhatsApp o la web. Si quiere, el avatar puede ser él mismo: con un par de minutos de grabación y su permiso, creamos su doble digital.",
      paraQuien: ["Negocios que saben que deben hacer vídeo pero no les gusta grabarse", "Academias y formadores (presentación de cursos, lecciones)", "Despachos y consultoras que quieren explicar trámites", "Tiendas y estéticas que quieren enseñar productos o tratamientos"],
      senales: "Te dicen «me da vergüenza salir en vídeo», «no tengo tiempo de grabar» o «el vídeo funciona pero no sé hacerlo».",
      incluye: ["Guion pensado para enganchar en los primeros segundos", "Vídeo de hasta 1 minuto con avatar y voz natural", "Subtítulos y formato vertical u horizontal", "Pack mensual: 4 vídeos al mes", "Licencias de la herramienta de vídeo incluidas"],
      noIncluye: ["Grabaciones con cámara real o sesiones de fotos", "Vídeos de más de 1 minuto (se presupuestan aparte)", "Publicar los vídeos (va en el plan de redes)", "Usar la cara o la voz de otra persona sin su permiso"],
      necesitamos: ["El tema de cada vídeo (nosotros escribimos el guion)", "Para su propio avatar: 2 minutos de vídeo hablando a cámara y su permiso firmado"],
      plazo: "Primer vídeo en 3–5 días desde que aprueba el guion",
      precio: { tope: "vídeos de hasta 1 minuto; el pack son 4 al mes", inicial: "avatar_video", porUnidad: "vídeo", variante: { nombre: "Pack mensual: 4 vídeos", mensual: "avatar_pack" }, extra: { nombre: "Su propio avatar (su cara y su voz, pago único)", inicial: "avatar_propio" } },
      terceros: [
        {que:  "Herramienta de vídeo con avatar y voz", quien:  "Nosotros", costeEur:  null, periodo:  "mes", nota:  "Incluida en el precio; los vídeos son tuyos", opciones:  [{n:  "HeyGen", p:  "incluido (también la voz)"}]}
      ],
      demos: [{ nombre: "Vídeo con avatar (presenta MR)", url: "https://melinarivera.github.io/MR_Portafolio/demos/avatar-video/" }],
      preguntas: [
        ["¿Los vídeos son míos?", "Sí. Te los entregamos en archivo y los publicas donde quieras, también en anuncios."],
        ["¿Se nota que es IA?", "Se ve muy natural. Recomendamos indicarlo en la descripción del vídeo: genera confianza y es lo que piden las normas de las redes."]
      ]
    },
    {
      id: "seo", icon: "map-pin", categoria: "Marketing",
      titulo: "Ficha de Google y SEO local",
      frase: "Que el negocio aparezca en Google Maps cuando alguien lo busca cerca.",
      queEs: "Dejamos completa y optimizada la ficha gratuita del negocio en Google (la que sale en Google Maps): categorías, horarios, servicios, fotos y textos con las palabras que usan sus clientes. Respondemos las reseñas pendientes y le damos plantillas para pedir reseñas nuevas.",
      paraQuien: ["Negocios de barrio: tiendas, estéticas, restaurantes, talleres", "Despachos y consultoras que reciben clientes en su oficina", "Cualquier negocio con local o zona de servicio"],
      senales: "Te dicen «no salgo en Google Maps», «tengo pocas reseñas» o «sale mi horario mal».",
      incluye: ["Ficha de Google completa: categorías, horarios, servicios y fotos", "Textos con las palabras que buscan sus clientes", "Respuesta a las reseñas pendientes", "Plantillas para pedir reseñas", "Revisión de que sus datos coinciden en internet"],
      noIncluye: ["Gestión mensual de reseñas (va en el plan de redes)", "Anuncios en Google", "Posicionar la web en buscadores a nivel nacional"],
      necesitamos: ["Acceso a su ficha de Google (o le ayudamos a crearla)", "Fotos del local y del equipo", "Horarios y servicios"],
      plazo: "1 semana (Google puede tardar unos días en verificar la ficha)",
      precio: { inicial: "seo_local" },
      terceros: [
        {que:  "Ficha de Google (Perfil de Empresa)", quien:  "Cliente", costeEur:  [0, 0], costeMxn:  [0, 0], costeUsd:  [0, 0], periodo:  "", nota:  "Gratuita y a tu nombre"}
      ],
      demos: [{ nombre: "Ficha de Google completa, antes y después", url: "https://melinarivera.github.io/MR_Portafolio/demos/ficha-google/" }],
      preguntas: [["¿Tengo que pagar algo a Google?", "No. La ficha de Google es gratis. Solo pagas nuestro trabajo de dejarla bien hecha."]]
    },
    {
      id: "uxui", icon: "pen-tool", categoria: "Diseño",
      titulo: "Diseño UX/UI",
      frase: "Ver y probar tu web o app antes de construirla, para no pagar dos veces.",
      queEs: "Diseñamos cómo se verá y cómo se usará una web o app antes de programarla: qué pantallas tiene, qué hay en cada una y por dónde va el usuario. Se entrega un prototipo en Figma que se puede tocar como si fuera real, y una guía de estilo (colores, letras, botones) para que todo sea coherente.",
      paraQuien: ["Emprendedores que van a invertir en una app y quieren validarla antes", "Negocios con una web que se ve anticuada o confunde a sus clientes", "Empresas que ya tienen programador pero no diseñador", "Cualquier cliente de web o app que quiera ver el resultado antes de pagar el desarrollo"],
      senales: "Te dicen «mi web no convence», «la gente entra y no compra», «quiero ver cómo quedaría antes» o «tengo programador pero queda feo».",
      incluye: ["Entrevista y mapa de lo que necesitan sus usuarios", "Web: diseño de hasta 5 pantallas (móvil y ordenador)", "App: hasta 15 pantallas y el recorrido completo que hace el usuario", "Prototipo que se puede tocar en el móvil como si fuera real (hecho en Figma)", "Guía de estilo: colores, letras y botones", "2 rondas de cambios"],
      noIncluye: ["Programar la web o la app (es otro servicio; si lo contratan junto, se descuenta parte del diseño)", "Logo o identidad de marca completa", "Fotos o ilustraciones a medida", "Pruebas con usuarios reales a gran escala"],
      necesitamos: ["Una reunión para entender a sus clientes", "Ejemplos de webs o apps que le gustan", "Su web o app actual, si existe"],
      plazo: "Web: 1–2 semanas · App: 3–4 semanas",
      precio: { inicial: "uxui", variante: { nombre: "Diseño de app completa (hasta 15 pantallas)", inicial: "uxui_app" }, extra: { nombre: "Auditoría UX de su web o app actual (informe de mejoras)", inicial: "auditoria_ux" } },
      terceros: [
        {que:  "Figma, para ver y comentar el diseño", quien:  "Cliente", costeEur:  [0, 0], costeMxn:  [0, 0], costeUsd:  [0, 0], periodo:  "", nota:  "Con el plan gratuito basta; el archivo es tuyo"},
        {que:  "Licencia de Figma para diseñar", quien:  "Nosotros", costeEur:  null, periodo:  "mes", nota:  "Incluida en el precio"}
      ],
      demos: [{ nombre: "Prototipo de app que se puede tocar", url: "https://melinarivera.github.io/MR_Portafolio/demos/prototipo-ux/" }, { nombre: "Kit de ventas (este mismo)", url: "https://melinarivera.github.io/kit-ventas/" }, { nombre: "Demo asistente WhatsApp", url: "https://melinarivera.github.io/MR_Portafolio/demos/asistente-whatsapp/#estetica" }, { nombre: "Demo CRM restaurante", url: "https://melinarivera.github.io/MR_Portafolio/demos/crm-restaurante/" }],
      preguntas: [
        ["¿Para qué pagar diseño si luego hay que programarlo?", "Porque cambiar un dibujo cuesta minutos y cambiar algo ya programado cuesta días. El diseño evita pagar dos veces."],
        ["¿Qué es una auditoría UX?", "Revisamos su web o app actual como si fuéramos sus clientes y le damos un informe con lo que les hace dudar o abandonar, y cómo arreglarlo."]
      ]
    },
    {
      id: "identidad", icon: "palette", categoria: "Diseño",
      titulo: "Identidad visual básica",
      frase: "Que el negocio se reconozca a primera vista y se vea igual en todas partes.",
      queEs: "Creamos la imagen básica del negocio: un logo sencillo, sus colores, sus tipografías y unas plantillas para redes. Todo recogido en una mini guía para que cualquier persona la use igual.",
      paraQuien: ["Negocios que empiezan y no tienen logo", "Negocios con un logo hecho a mano o que no se lee bien", "Quien va a contratar web o redes y no tiene marca"],
      senales: "Te dicen «no tengo logo», «cada publicación me sale distinta» o «mi logo lo hizo un amigo».",
      incluye: ["Logo sencillo: 2 propuestas y la versión final", "Versiones para redes, web y fondo oscuro", "Paleta de colores y tipografías", "Mini guía de marca en PDF (cómo usar el logo y los colores)", "5 plantillas de Canva para redes", "2 rondas de cambios"],
      noIncluye: ["Registro de la marca en la oficina de patentes", "Diseño de papelería impresa, rótulos o envases", "Ilustraciones o mascotas a medida"],
      necesitamos: ["Nombre del negocio y a quién se dirige", "Ejemplos de marcas que le gustan y que no", "Colores que prefiere o evita"],
      plazo: "2–3 semanas",
      precio: { inicial: "identidad" },
      terceros: [
        {que:  "Registro de la marca (opcional)", quien:  "Cliente", costeEur:  [128, 128], costeMxn:  [2500, 3500], costeUsd:  null, periodo:  "", nota:  "Protege el nombre y el logo; se paga a la oficina de patentes", opciones:  [{n:  "España: OEPM", p:  "127,88 € la primera clase y 82,84 € cada clase extra (tasas 2026)", m:  ["eur"]}, {n:  "México: IMPI", p:  "unos 2.500–3.500 MXN, más honorarios si lo tramita un gestor", m:  ["mxn"]}, {n:  "Otros países", p:  "según la oficina de cada país", m:  ["usd"]}]},
        {que:  "Canva, para editar las plantillas", quien:  "Cliente", costeEur:  [0, 0], costeMxn:  [0, 0], costeUsd:  [0, 0], periodo:  "", nota:  "Funciona con el plan gratuito"}
      ],
      demos: [{ nombre: "Tu marca en un minuto", url: "https://melinarivera.github.io/MR_Portafolio/demos/identidad-visual/" }, { nombre: "Piñatas Madrid (marca y web hechas)", url: "https://melinarivera.github.io/pinata/" }],
      preguntas: [["¿El logo es mío?", "Sí. Te entregamos todos los archivos y los derechos de uso."]]
    },
    {
      id: "formacion", icon: "graduation-cap", categoria: "Formación",
      titulo: "Formación en IA para equipos",
      frase: "Que tu equipo use la IA en su trabajo diario, con seguridad y sin perder tiempo.",
      queEs: "Un taller práctico de 2 horas en el que cada persona del equipo sale usando la IA (como Claude o ChatGPT) en 3 tareas reales de su puesto: correos, propuestas, resúmenes, contenidos o atención al cliente. Dos terceras partes del tiempo son práctica. Lo imparte Melina, con experiencia en recursos humanos y formación. Programa: qué hace bien la IA y en qué se equivoca (15 min) · cómo pedirle las cosas (20 min) · práctica con su trabajo (35 min) · privacidad y datos de clientes (15 min) · kit personal (25 min) · dudas (10 min).",
      paraQuien: ["Despachos, gestorías y consultoras", "Equipos comerciales y de atención al cliente", "Pymes que ya pagan alguna IA pero nadie la usa bien", "Academias y centros de formación"],
      senales: "Te dicen «hemos oído hablar de la IA pero no sabemos usarla», «cada uno la usa a su manera» o «me da miedo meter datos de clientes».",
      incluye: ["Formulario previo y llamada de 15 min para preparar casos con su trabajo real", "Taller de 2 horas, presencial u online, hasta 10 personas", "Guía en PDF con 15–20 instrucciones listas para copiar, hecha para su negocio", "Semáforo de datos: qué se puede meter en la IA y qué nunca", "Plantilla de normas de uso de IA para el equipo", "Constancia de asistencia (sirve como registro de formación y para FUNDAE)", "2 semanas de dudas por correo o WhatsApp", "Lista de 3 tareas del equipo que se podrían automatizar"],
      noIncluye: ["Licencias de las herramientas de IA", "Desplazamiento fuera de Madrid (se presupuesta aparte)", "Implantar automatizaciones (es otro servicio)", "Tramitar FUNDAE (lo hace la empresa o su gestoría; damos toda la documentación)"],
      necesitamos: ["Que cada persona rellene un formulario de 5 minutos", "Una sala con proyector o una videollamada", "Que cada asistente venga con su móvil u ordenador"],
      plazo: "Se agenda en 1–2 semanas. También: taller + sesión de seguimiento a los 15 días, o programa de 3 sesiones por puestos (a medida)",
      precio: { inicial: "formacion_ia", porUnidad: "taller" },
      terceros: [
        {que:  "Suscripción a la app de IA de cada persona (opcional)", quien:  "Cliente", costeEur:  [0, 20], costeMxn:  [0, 400], costeUsd:  [0, 20], periodo:  "mes", nota:  "Es la app de chat que usa cada empleado (como ChatGPT o Claude), con cuota fija al mes. No se paga por uso. Para empezar bastan los planes gratuitos", opciones:  [{n:  "Planes gratuitos (Claude, ChatGPT)", p:  "0 €"}, {n:  "Claude Pro o ChatGPT Plus", p:  "20 US$/mes por persona (unos 18 €)"}, {n:  "Claude Team (equipos)", p:  "desde 20 US$/mes por persona, con pago anual y mínimo 5"}]}
      ],
      demos: [{ nombre: "Muestra del taller: semáforo de datos", url: "https://melinarivera.github.io/MR_Portafolio/demos/semaforo-ia/" }, { nombre: "Tesovia (IA hecha por Melina)", url: "https://www.tesovia.com" }],
      preguntas: [
        ["¿La empresa puede recuperar el dinero del taller? (solo España)", "Sí, con FUNDAE: es el crédito de formación que toda empresa tiene por lo que paga a la Seguridad Social. Con 10 personas, la empresa puede recuperar entre 180 y 260 € del precio, según su crédito. Hay que comunicarlo en FUNDAE antes del taller; nosotros damos factura, programa, control de asistencia y constancias."],
        ["¿Es para gente que no sabe nada de tecnología?", "Sí. Se empieza desde cero y con ejemplos de su propio trabajo."],
        ["¿Es seguro meter datos de clientes en la IA?", "Lo explicamos en el taller: qué datos se pueden usar, cuáles no y cómo configurarlo."]
      ]
    },
    {
      id: "app", icon: "smartphone", categoria: "Apps",
      titulo: "App o SaaS a medida",
      frase: "Tu idea o tu herramienta interna, convertida en una aplicación que funciona.",
      queEs: "Una aplicación web hecha a medida: usuarios con contraseña, panel de administración y base de datos. Se empieza por una primera versión (MVP) con lo imprescindible y luego se amplía.",
      paraQuien: ["Emprendedores con una idea de producto", "Empresas que necesitan una herramienta interna propia", "Negocios cuyo proceso no encaja en ningún programa existente"],
      senales: "Te dicen «tengo una idea de app», «ningún programa hace lo que necesito» o «lo hacemos con 5 Excel distintos».",
      incluye: ["Funciona en móvil, tablet y ordenador, y se puede instalar en el móvil como una app", "Definición de la primera versión (MVP)", "Usuarios, roles y panel de administración", "Base de datos y servidor", "Publicación", "30 días de soporte"],
      noIncluye: ["Publicación en App Store / Google Play (se presupuesta aparte)", "Funciones fuera del MVP acordado", "Marketing de lanzamiento"],
      necesitamos: ["Explicar la idea y para quién es", "Qué tiene que hacer la primera versión (lo definimos juntos)", "Ejemplos o pantallas que le gusten"],
      plazo: "6–10 semanas según el alcance",
      precio: { inicial: "app" },
      terceros: [
        {que:  "Base de datos con copias diarias", quien:  "Cliente", costeEur:  [23, 25], costeMxn:  [450, 500], costeUsd:  [25, 25], periodo:  "mes", nota:  "Recomendada desde el primer día", opciones:  [{n:  "Supabase Pro", p:  "25 US$/mes (unos 23 €), se cobra en dólares"}]},
        {que:  "Alojamiento de la app", quien:  "Cliente", costeEur:  [0, 0], costeMxn:  [0, 0], costeUsd:  [0, 0], periodo:  "", nota:  "Gratis en la mayoría de los casos", opciones:  [{n:  "Cloudflare Pages", p:  "gratis"}]},
        {que:  "IA dentro de la app (solo si la lleva)", quien:  "Cliente", costeEur:  null, periodo:  "mes", nota:  "Aquí no es una suscripción: se paga por uso (tokens) a Anthropic (Claude) u OpenAI, con límite de gasto. Una app pequeña suele gastar pocos euros al mes; te lo calculamos antes"},
        {que:  "Publicarla en App Store o Google Play (casi nunca hace falta)", quien:  "Cliente", costeEur:  null, periodo:  "", nota:  "Nuestras apps funcionan desde el navegador y se instalan en el móvil sin pasar por las tiendas. Solo si quieres que aparezca en ellas", opciones:  [{n:  "Apple App Store", p:  "99 US$ al año (unos 90 €)"}, {n:  "Google Play", p:  "25 US$ una sola vez (unos 23 €)"}]}
      ],
      mensual: { opcional: "mant", texto: "Necesario: mantenimiento mensual." },
      demos: [{ nombre: "Tesovia", url: "https://www.tesovia.com" }, { nombre: "ETERN-ME", url: "https://etern-me.com" }, { nombre: "ZenWi", url: "https://zenwi.app" }],
      preguntas: [["¿Por qué un MVP y no todo de golpe?", "Para salir antes, probar con usuarios reales y gastar solo en lo que funciona."]]
    },
    {
      id: "mant", icon: "wrench", categoria: "Mantenimiento",
      titulo: "Mantenimiento mensual",
      frase: "Tu web siempre funcionando, segura y al día, sin preocuparte.",
      queEs: "Una cuota mensual para que la web o la herramienta siga funcionando: vigilamos que esté en línea, renovamos y revisamos dominio y certificados, hacemos copias de seguridad y los cambios pequeños. Es como el mantenimiento del coche: si no se hace, tarde o temprano algo falla.",
      paraQuien: ["Todo cliente con web, tienda, CRM o app", "Clientes que no quieren preocuparse de lo técnico"],
      senales: "Te dicen «¿y si se rompe?», «no sé renovar el dominio» o «quiero cambiar un precio de vez en cuando».",
      incluye: ["Vigilancia de que la web está en línea", "Certificado de seguridad (candado) y avisos de renovación", "Copias de seguridad", "Cambios pequeños de contenido (textos, precios, fotos)", "Soporte directo por WhatsApp"],
      noIncluye: ["Secciones o funciones nuevas (se presupuestan)", "El pago del dominio y del alojamiento (siguen a nombre del cliente)", "Rediseños"],
      necesitamos: ["Nada: solo avisarnos por WhatsApp cuando quiera un cambio"],
      plazo: "Desde el primer mes; sin permanencia",
      precio: { mensual: "mantenimiento" },
      terceros: [],
      demos: [{ nombre: "Informe mensual de ejemplo", url: "https://melinarivera.github.io/MR_Portafolio/demos/informe-mantenimiento/" }],
      preguntas: [["¿Es obligatorio?", "No, pero si no se mantiene, cualquier fallo o cambio se cobra aparte cuando pase."]]
    }
  ],

  /* Soluciones por tipo de negocio: problema → cómo lo resolvemos → servicios (id).
     "preset" rellena el presupuesto con la solución recomendada. */
  nichos: [
    {
      id: "estetica", icon: "flower-2", nombre: "Estéticas, peluquerías y belleza",
      resumen: "Más citas, menos huecos vacíos y menos tiempo al teléfono.",
      problemas: [
        ["Pierdes citas porque no puedes contestar el WhatsApp mientras atiendes", "Un asistente responde al momento, a cualquier hora, y deja la cita agendada", ["ia"]],
        ["Clientas que reservan y luego no vienen", "Recordatorio automático el día antes, con opción de confirmar o cambiar", ["ia"]],
        ["El teléfono suena en mitad de un tratamiento", "La recepcionista de voz contesta, informa y apunta la cita por ti", ["voz"]],
        ["Instagram parado y reseñas de Google sin responder", "Publicaciones cada semana y reseñas respondidas; ficha de Google al día", ["redes", "seo"]],
        ["Quieres enseñar tus tratamientos pero no te gusta grabarte", "Vídeos con un presentador virtual que explica cada tratamiento", ["avatar"]]
      ],
      demos: [{ nombre: "Demo asistente de estética", url: "https://melinarivera.github.io/MR_Portafolio/demos/asistente-whatsapp/#estetica" }],
      preset: { ia: "citas", redes: "esencial", seo: true }
    },
    {
      id: "extranjeria", icon: "scale", nombre: "Consultoras de extranjería y despachos",
      resumen: "Menos preguntas repetidas, expedientes en orden y un equipo que usa la IA con seguridad.",
      problemas: [
        ["Respondes 50 veces al día lo mismo: requisitos, documentos, precios", "Un asistente explica lo básico, filtra el caso y da cita solo a quien encaja", ["ia"]],
        ["Llamadas constantes que interrumpen el trabajo", "La recepcionista de voz atiende, toma el recado o da cita y te pasa un resumen", ["voz"]],
        ["Expedientes y plazos en Excel o en papel", "Un CRM con cada expediente, sus documentos y avisos de plazos", ["crm"]],
        ["Cada persona usa la IA a su manera, con datos delicados", "Taller para el equipo con normas claras de qué datos nunca se meten en la IA", ["formacion"]],
        ["Una web que no transmite confianza y pocas reseñas", "Web clara por áreas de trabajo y ficha de Google cuidada", ["web", "seo"]]
      ],
      demos: [{ nombre: "Demo asistente de extranjería", url: "https://melinarivera.github.io/MR_Portafolio/demos/asistente-whatsapp/#extranjeria" }],
      preset: { ia: "citas", crm: "medida", formacion: 1 }
    },
    {
      id: "gestorias", icon: "calculator", nombre: "Gestorías y asesorías",
      resumen: "Menos horas pasando datos y persiguiendo documentación.",
      problemas: [
        ["Los clientes mandan facturas en fotos, correos y papeles", "Una automatización que lee las facturas con IA y las deja ordenadas para contabilidad", ["automatizacion"]],
        ["Cada trimestre hay que perseguir la documentación", "Recordatorios automáticos por WhatsApp o email con lo que falta a cada cliente", ["automatizacion"]],
        ["Clientes que llaman para preguntar cómo va lo suyo", "Un CRM con el estado de cada cliente y avisos automáticos", ["crm"]],
        ["El equipo pierde horas en tareas que la IA haría en minutos", "Taller práctico de IA con sus tareas reales", ["formacion"]]
      ],
      demos: [{ nombre: "Nexo: facturas con IA", url: "https://melinarivera.github.io/Nexo_Facturas/" }],
      preset: { automatizacion: 2, crm: "medida", formacion: 1 }
    },
    {
      id: "restaurantes", icon: "utensils", nombre: "Restaurantes y bares",
      resumen: "Reservas que no se pierden y clientes que vuelven.",
      problemas: [
        ["El teléfono de reservas suena en plena hora punta", "La recepcionista de voz toma la reserva mientras tú atiendes la sala", ["voz"]],
        ["No sabes quiénes son tus clientes habituales ni sus alergias", "Un CRM con fichas, alérgenos, clientes VIP y clientes que hace tiempo que no vienen", ["crm"]],
        ["Mesas vacías por reservas que no se presentan", "Recordatorios automáticos y campañas para llenar los días flojos", ["crm"]],
        ["Sales mal en Google Maps o con el horario antiguo", "Ficha de Google completa, con fotos, carta y reseñas respondidas", ["seo"]],
        ["Nadie tiene tiempo de llevar Instagram", "Publicaciones cada semana con platos, novedades y eventos", ["redes"]]
      ],
      demos: [{ nombre: "Llamada para reservar", url: "https://melinarivera.github.io/MR_Portafolio/demos/recepcionista-voz/#restaurante" }, { nombre: "Demo CRM de restaurante", url: "https://melinarivera.github.io/MR_Portafolio/demos/crm-restaurante/" }],
      preset: { voz: true, crm: "medida", seo: true }
    },
    {
      id: "tiendas", icon: "store", nombre: "Tiendas y comercio de barrio",
      resumen: "Vender también a quien no pasa por la puerta.",
      problemas: [
        ["Solo vendes a quien pasa por delante", "Tienda online o catálogo con pedidos por WhatsApp", ["tienda"]],
        ["No sales en Google cuando te buscan cerca", "Ficha de Google optimizada para tu barrio", ["seo"]],
        ["Te escriben todo el día preguntando precios y disponibilidad", "Un asistente que responde al momento con tu catálogo", ["ia"]],
        ["No tienes logo ni una imagen que se reconozca", "Identidad visual básica y plantillas para redes", ["identidad"]],
        ["Tus novedades no se enteran", "Redes al día y vídeos cortos con presentador virtual", ["redes", "avatar"]]
      ],
      demos: [{ nombre: "Piñatas Madrid", url: "https://melinarivera.github.io/pinata/" }, { nombre: "Efsun · tienda", url: "https://melinarivera.github.io/tienda-esoterica/" }],
      preset: { tienda: true, seo: true, redes: "esencial" }
    },
    {
      id: "academias", icon: "school", nombre: "Academias y centros de formación",
      resumen: "Llenar grupos sin pasarte el día contestando mensajes.",
      problemas: [
        ["En época de matrículas no das abasto con las preguntas", "Un asistente que informa de cursos, horarios y precios y apunta a los interesados", ["ia"]],
        ["Te cuesta llenar los grupos", "Una página para cada curso y redes que atraen alumnos de tu zona", ["landing", "redes"]],
        ["Quieres vídeos de tus cursos pero no tienes tiempo de grabar", "Vídeos con un presentador virtual, o con tu propio avatar", ["avatar"]],
        ["Alumnos, pagos y asistencias repartidos en varios Excel", "Un CRM o planner con alumnos, grupos y pagos", ["crm"]]
      ],
      demos: [{ nombre: "Tesovia (IA para estudiar)", url: "https://www.tesovia.com" }],
      preset: { landing: true, ia: "basic", avatar: "pack" }
    },
    {
      id: "salud", icon: "stethoscope", nombre: "Clínicas, fisios y consultas",
      resumen: "Una recepción que no se satura y pacientes que no olvidan su cita.",
      problemas: [
        ["Recepción saturada de llamadas para pedir o cambiar citas", "La recepcionista de voz gestiona las citas y deja libre a tu equipo", ["voz"]],
        ["Pacientes que olvidan la cita", "Recordatorios automáticos con opción de confirmar o cambiar", ["ia"]],
        ["Una web antigua que no explica tus tratamientos", "Web clara, pensada para el móvil, con tus tratamientos y cómo reservar", ["web"]],
        ["Pocas reseñas en Google", "Ficha de Google completa y plantillas para pedir reseñas", ["seo"]]
      ],
      nota: "La IA nunca da consejo médico ni guarda datos de salud: solo gestiona citas e información general.",
      demos: [{ nombre: "Llamada para pedir cita", url: "https://melinarivera.github.io/MR_Portafolio/demos/recepcionista-voz/#clinica" }],
      preset: { voz: true, ia: "citas", seo: true }
    },
    {
      id: "oficina", icon: "building-2", nombre: "Pymes con equipo de oficina",
      resumen: "Que el equipo deje de hacer a mano lo que puede hacerse solo.",
      problemas: [
        ["Nadie del equipo sabe usar la IA, o la usa mal", "Taller práctico de 2 horas con sus tareas reales", ["formacion"]],
        ["Horas copiando datos de un programa a otro", "Automatizaciones que pasan los datos solos", ["automatizacion"]],
        ["Clientes y tareas repartidos en correos, Excel y libretas", "Un CRM a medida o el que ya usáis bien configurado", ["crm"]]
      ],
      demos: [{ nombre: "Nexo: facturas con IA", url: "https://melinarivera.github.io/Nexo_Facturas/" }],
      preset: { formacion: 1, automatizacion: 2, crm: "medida" }
    },
    {
      id: "emprendedores", icon: "lightbulb", nombre: "Emprendedores con una idea",
      resumen: "De la idea a algo que puedes enseñar y vender.",
      problemas: [
        ["Tienes una idea de app pero no sabes cuánto costará ni por dónde empezar", "Diseñamos las pantallas y un prototipo que se puede probar antes de programar", ["uxui"]],
        ["Necesitas una primera versión para enseñar a clientes o inversores", "Una app web con lo imprescindible (MVP), lista para usar", ["app"]],
        ["Aún no tienes marca ni dónde presentarte", "Identidad visual y una landing para captar a los primeros interesados", ["identidad", "landing"]]
      ],
      demos: [{ nombre: "Tesovia", url: "https://www.tesovia.com" }, { nombre: "ZenWi", url: "https://zenwi.app" }],
      preset: { uxui: "app", identidad: true, landing: true }
    }
  ],

  packs: [
    { id: "pack_arranque", titulo: "Pack Arranque", para: "Empezar a recibir clientes por internet", incluye: ["landing", "ia", "auditoria"], mensual: "ia_cuota" },
    { id: "pack_pyme_digital", titulo: "Pack Pyme Digital", para: "Profesionalizar la presencia online", incluye: ["web", "ia", "3 meses de redes Esencial"], mensual: "ia_cuota" },
    { id: "pack_organiza", titulo: "Pack Organiza tu negocio", para: "Dejar el Excel y el papel", incluye: ["crm", "2 automatizaciones", "formación"] }
  ],

  glosario: [
    ["Pago inicial", "Lo que pagas una vez por hacer el trabajo (la web, la app, la puesta en marcha). 50 % al empezar y 50 % al entregar."],
    ["Cuota mensual", "Lo que pagas cada mes por un servicio que sigue funcionando (asistente, redes, mantenimiento). Sin permanencia."],
    ["Mano de obra (nuestro trabajo)", "Diseño, programación, configuración, formación y soporte. Es lo que cobramos nosotros: el pago inicial y las cuotas."],
    ["Costes de terceros", "Lo que pagas directamente a otras empresas: dominio, alojamiento, iubenda, Meta, anuncios, pasarela de pago. No cobramos nada sobre eso."],
    ["Herramientas incluidas", "Programas que usamos para hacer tu trabajo (IA, diseño, vídeo, voz). Van dentro de nuestro precio: no tienes que contratarlos."],
    ["Mantenimiento", "Cuota mensual para que todo siga funcionando: vigilancia, seguridad, copias y cambios pequeños."],
    ["Dominio", "La dirección de la web (www.negocio.com). Se paga cada año, unos 10–15 €."],
    ["Alojamiento (hosting)", "El «terreno» donde vive la web. En webs sencillas es gratis con un alojamiento que permite uso comercial."],
    ["Textos legales", "Aviso legal, política de privacidad y de cookies que la ley exige en una web. Se hacen con una herramienta que los actualiza sola: en España recomendamos Lawwwing; en México se redacta el aviso de privacidad."],
    ["Versión para móvil (diseño adaptable)", "La misma web se ve bien en móvil, tablet y ordenador. Va incluida siempre."],
    ["SEO y SEO local", "Preparar la web o la ficha de Google para que salga cuando alguien busca ese servicio. «Local» es cuando lo buscan cerca."],
    ["Ficha de Google", "La tarjeta del negocio que sale en Google Maps con horario, fotos y reseñas. Es gratis."],
    ["CRM", "Programa para tener a todos los clientes ordenados: datos, historial, citas y seguimiento."],
    ["Pasarela de pago", "La empresa que cobra con tarjeta en la web (Stripe, Mercado Pago…). Se queda un pequeño % de cada venta."],
    ["Base de datos", "Donde se guarda la información de una app o CRM (clientes, pedidos…). Se paga al mes, a nombre del cliente."],
    ["Automatización o flujo", "Una tarea que se hace sola, sin que nadie la toque (por ejemplo, pasar facturas del correo a un Excel)."],
    ["Conversación (asistente de WhatsApp)", "Un cliente que escribe y al que se contesta en el mismo día, aunque se manden varios mensajes."],
    ["Avatar", "Un presentador virtual con voz que habla en los vídeos. Puede ser inventado o un doble digital del propio cliente."],
    ["Reel", "Vídeo corto y vertical para Instagram o TikTok."],
    ["FUNDAE", "En España, la empresa puede recuperar parte del precio de una formación con lo que ya paga a la Seguridad Social."],
    ["Suscripción o pago por uso", "Una suscripción es una cuota fija al mes (por ejemplo, ChatGPT Plus). Pago por uso es pagar según lo que se gasta (por ejemplo, la IA de un asistente, que va incluida en nuestra cuota)."],
    ["Meta", "La empresa dueña de WhatsApp, Instagram y Facebook. Cobra algunos mensajes de WhatsApp y los anuncios."],
    ["IA / tokens", "Lo que consume la inteligencia artificial al responder. Va incluido en la cuota del asistente."],
    ["Ronda de cambios", "Cada vez que revisas y pides ajustes. Incluimos 2 por proyecto."],
    ["MVP", "Primera versión de una app con lo imprescindible para empezar a usarla."],
    ["UX / UI", "UX es cómo se usa (que sea fácil y lleve al cliente a comprar). UI es cómo se ve (colores, letras, botones)."],
    ["Prototipo", "Diseño que se puede tocar en el móvil como si fuera la web o app real, pero sin programar."]
  ]
};
