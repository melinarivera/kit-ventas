/* Catálogo del kit de ventas.
   Los PRECIOS no se escriben aquí: se leen de MR_Portafolio/servicios/precios.json
   (las claves de "precio" apuntan a ese archivo). Aquí van los textos de cada servicio.
   Los costes de terceros son aproximados, en euros, y los paga SIEMPRE el cliente
   directamente a esa empresa. */
window.CATALOGO = {

  condiciones: [
    "Los precios son «desde»: el precio final lo confirma Melina por escrito tras una llamada gratuita de 20 minutos.",
    "Forma de pago de los proyectos: 50 % al empezar y 50 % al entregar.",
    "Las cuotas mensuales no tienen permanencia: se cancelan avisando con 30 días.",
    "El dominio, el alojamiento y las cuentas van siempre a nombre del cliente: si deja de trabajar con nosotros, se lo lleva todo.",
    "Incluye 2 rondas de cambios. Cambios fuera de lo acordado: se presupuestan aparte antes de hacerlos.",
    "Impuestos: España + IVA 21 %; México + IVA 16 %; otros países, según la factura (lo confirma Melina)."
  ],

  servicios: [
    {
      id: "landing", icono: "🚀", categoria: "Webs",
      titulo: "Landing page sencilla",
      frase: "Una página clara para que te encuentren en Google y te escriban por WhatsApp.",
      queEs: "Una sola página web que presenta el negocio (quién es, qué ofrece, precios o servicios, opiniones y cómo contactar) y lleva al cliente a escribir o llamar.",
      paraQuien: ["Autónomos y negocios que no tienen web", "Estéticas, peluquerías, consultoras, tiendas de barrio", "Profesionales que solo tienen Instagram", "Eventos o lanzamientos puntuales"],
      senales: "Te dicen «solo tengo Instagram», «me buscan y no salgo» o «quiero algo sencillo y barato».",
      incluye: ["1 página con hasta 6 secciones", "Diseño pensado para móvil", "Botón de WhatsApp, formulario y mapa", "SEO local básico (para aparecer en Google de su zona)", "Publicación en internet", "2 rondas de cambios"],
      noIncluye: ["Tienda o pagos online", "Blog o más páginas", "Varios idiomas", "Logo o fotos profesionales", "Redacción de textos largos (el cliente da la información, nosotros la ordenamos)"],
      plazo: "1–2 semanas desde que el cliente envía fotos y datos",
      precio: { inicial: "landing" },
      terceros: [
        { que: "Dominio (www.sunegocio.com)", quien: "Cliente", costeEur: [10, 15], periodo: "año" },
        { que: "Alojamiento (hosting)", quien: "Cliente", costeEur: null, periodo: "mes", nota: "Gratis en webs sencillas" },
        { que: "Textos legales (iubenda)", quien: "Cliente", costeEur: [0, 6], periodo: "mes" }
      ],
      mensual: { opcional: "mant", texto: "Opcional: mantenimiento mensual." },
      demos: [{ nombre: "Piñatas Madrid", url: "https://melinarivera.github.io/pinata/" }],
      preguntas: [
        ["¿Por qué no uso una web gratis tipo Wix?", "Puedes, pero tendrás que hacerla tú y pagar su plan para quitar anuncios y usar tu dominio. Aquí te la entregamos hecha, rápida, pensada para vender y es tuya."],
        ["¿Puedo cambiar cosas luego?", "Sí. Incluye 2 rondas de cambios; después, con el mantenimiento mensual, los cambios pequeños van incluidos."]
      ]
    },
    {
      id: "web", icono: "🏢", categoria: "Webs",
      titulo: "Web corporativa",
      frase: "Una web completa que genera confianza y explica bien todo lo que haces.",
      queEs: "Una web de 5 a 7 páginas (inicio, servicios, sobre nosotros, blog o catálogo, contacto…) con estructura pensada para que el visitante confíe y contacte.",
      paraQuien: ["Pymes con varios servicios que explicar", "Despachos, consultoras, gestorías, clínicas", "Negocios que quieren aparecer mejor en Google"],
      senales: "Te dicen «mi web es vieja», «no transmite lo que hacemos» o «necesito explicar varios servicios».",
      incluye: ["5–7 páginas", "Blog o catálogo de servicios", "SEO básico en cada página", "WhatsApp, formulario y analítica de visitas", "Aviso legal con sus datos + privacidad y cookies (iubenda)", "2 rondas de cambios"],
      noIncluye: ["Tienda o pagos online", "Más de 7 páginas o varios idiomas (se presupuesta aparte)", "Redacción completa de todos los textos", "Fotografía profesional"],
      plazo: "3–4 semanas desde que el cliente envía contenidos",
      precio: { inicial: "web" },
      terceros: [
        { que: "Dominio", quien: "Cliente", costeEur: [10, 15], periodo: "año" },
        { que: "Alojamiento (hosting)", quien: "Cliente", costeEur: [0, 10], periodo: "mes" },
        { que: "Textos legales (iubenda)", quien: "Cliente", costeEur: [0, 6], periodo: "mes" }
      ],
      mensual: { opcional: "mant", texto: "Recomendado: mantenimiento mensual." },
      demos: [{ nombre: "ETERN-ME", url: "https://etern-me.com" }, { nombre: "Cotidiana", url: "https://cotidiana.app" }],
      preguntas: [
        ["¿La web es mía?", "Sí. Dominio, alojamiento y cuentas van a tu nombre desde el primer día."],
        ["¿Me vais a posicionar el primero en Google?", "Dejamos la web preparada para Google (SEO básico). Subir posiciones depende también de contenido y reseñas con el tiempo; nadie serio puede garantizar el primer puesto."]
      ]
    },
    {
      id: "tienda", icono: "🛒", categoria: "Webs",
      titulo: "Tienda online o sistema de reservas",
      frase: "Tu negocio abierto 24 horas: vende o recibe reservas mientras duermes.",
      queEs: "Una web donde el cliente compra y paga con tarjeta, o reserva cita y recibe recordatorios. Con un panel para gestionar pedidos o reservas.",
      paraQuien: ["Tiendas que quieren vender fuera de su local", "Estéticas, clínicas, academias que dan citas", "Negocios que hoy gestionan pedidos por WhatsApp a mano"],
      senales: "Te dicen «me piden por WhatsApp y es un lío», «quiero cobrar por adelantado» o «se me olvidan las citas».",
      incluye: ["Catálogo, carrito y pago con tarjeta (Stripe, TPV del banco o Mercado Pago)", "O agenda de citas con recordatorios", "Panel para gestionar pedidos o reservas", "Diseño a medida", "30 días de soporte tras el lanzamiento"],
      noIncluye: ["Subir cientos de productos (hasta 20 incluidos; el resto, aparte)", "Fotografía de producto", "Envíos internacionales complejos o conexión con almacenes", "Facturación electrónica oficial"],
      plazo: "4–6 semanas",
      precio: { inicial: "tienda" },
      terceros: [
        { que: "Comisión de la pasarela de pago por cada venta", quien: "Cliente", costeEur: null, periodo: "venta", nota: "Un pequeño % de cada venta, según la pasarela" },
        { que: "Dominio", quien: "Cliente", costeEur: [10, 15], periodo: "año" },
        { que: "Alojamiento (hosting)", quien: "Cliente", costeEur: [3, 10], periodo: "mes" },
        { que: "Textos legales (iubenda)", quien: "Cliente", costeEur: [0, 6], periodo: "mes" }
      ],
      mensual: { opcional: "mant", texto: "Muy recomendado: mantenimiento mensual (una tienda caída es dinero perdido)." },
      demos: [{ nombre: "Efsun · plataforma con reservas", url: "https://melinarivera.github.io/pyme-efsun/" }, { nombre: "Efsun · tienda", url: "https://melinarivera.github.io/tienda-esoterica/" }],
      preguntas: [
        ["¿Cobráis comisión por venta?", "No. Solo la pasarela de pago (Stripe, el banco o Mercado Pago) cobra su pequeña comisión. Nosotros no."],
        ["¿Puedo subir yo los productos?", "Sí, te enseñamos a hacerlo desde el panel."]
      ]
    },
    {
      id: "ia", icono: "🤖", categoria: "IA y automatización",
      titulo: "Asistente de WhatsApp con IA",
      frase: "Responde a tus clientes al momento, a cualquier hora, y te pasa los que están listos para comprar.",
      queEs: "Un asistente que contesta en el WhatsApp del negocio (o en su web) con la información del negocio: precios, horarios, servicios, ubicación. Si no sabe algo, pasa la conversación a una persona. La versión «con citas» además agenda, envía recordatorios y guarda cada contacto en una ficha.",
      paraQuien: ["Negocios que reciben muchas preguntas repetidas por WhatsApp", "Estéticas, clínicas, academias (versión con citas)", "Consultoras de extranjería y despachos (filtran casos y piden cita)", "Negocios que pierden clientes por responder tarde"],
      senales: "Te dicen «me paso el día contestando lo mismo», «me escriben de noche» o «se me olvida responder».",
      incluye: ["Configuración con la información del negocio", "Respuestas 24/7 en WhatsApp o web", "Pase a una persona cuando hace falta", "Con citas: agenda, recordatorios y ficha de cada cliente", "La cuota mensual incluye la IA, el servidor y el mantenimiento"],
      noIncluye: ["Más de 1.000 conversaciones al mes (2.000 con citas): bloques extra aparte", "Mensajes de WhatsApp que cobra Meta (los paga el cliente a Meta)", "Asesoramiento legal o médico: el asistente nunca lo da", "Llamadas de voz"],
      plazo: "1–2 semanas (con citas: 2–3 semanas)",
      precio: { inicial: "ia", mensual: "ia_cuota", variante: { nombre: "Con citas (agenda + recordatorios + CRM)", inicial: "ia_citas", mensual: "ia_citas_cuota" } },
      terceros: [
        { que: "Mensajes de WhatsApp (Meta): responder a clientes", quien: "Cliente", costeEur: null, periodo: "mes", nota: "Gratis hasta 1.000 respuestas al mes; después ≈ 0,017 € cada una" },
        { que: "Recordatorios automáticos (Meta)", quien: "Cliente", costeEur: null, periodo: "mensaje", nota: "≈ 0,017 € cada recordatorio" },
        { que: "IA (Claude)", quien: "Nosotros", costeEur: null, periodo: "mes", nota: "Incluida en la cuota. Si el cliente prefiere pagarla con su propia cuenta, la cuota baja" }
      ],
      demos: [{ nombre: "Demo estética", url: "https://melinarivera.github.io/MR_Portafolio/demos/asistente-whatsapp/#estetica" }, { nombre: "Demo extranjería", url: "https://melinarivera.github.io/MR_Portafolio/demos/asistente-whatsapp/#extranjeria" }],
      preguntas: [
        ["¿Y si la IA dice algo mal?", "Solo responde con la información que el negocio aprueba. Si no sabe, no se inventa nada: pasa la conversación a una persona."],
        ["¿Puedo seguir usando WhatsApp en mi móvil?", "Sí, con el mismo número. El asistente responde cuando tú no puedes."],
        ["¿Cuánto pagaré a Meta?", "Responder a quien te escribe es gratis hasta 1.000 respuestas al mes. Un negocio pequeño suele pagar entre 0 y 20 € al mes. Lo calculamos en el presupuesto."]
      ]
    },
    {
      id: "automatizacion", icono: "⚙️", categoria: "IA y automatización",
      titulo: "Automatización de tareas",
      frase: "Lo que hoy haces a mano cada semana, que se haga solo.",
      queEs: "Un «flujo» que hace una tarea repetitiva sin que nadie la toque. Ejemplos: pasar facturas del email a una hoja de cálculo, enviar recordatorios de pago, crear un informe semanal, avisar cuando entra un pedido.",
      paraQuien: ["Gestorías y asesorías (facturas, plazos)", "Negocios que copian datos de un sitio a otro", "Cualquier pyme con tareas administrativas repetidas"],
      senales: "Te dicen «perdemos horas pasando datos», «siempre se nos olvida…» o «hacemos el mismo informe cada semana».",
      incluye: ["1 flujo automático por precio", "Pruebas con datos reales del cliente", "Explicación de cómo funciona"],
      noIncluye: ["Programas de pago que el cliente necesite (los paga él)", "Cambios en el flujo después de entregarlo (van al mantenimiento)"],
      plazo: "1–2 semanas por flujo",
      precio: { inicial: "automatizacion", porUnidad: "flujo" },
      terceros: [
        { que: "Herramientas que use el flujo (si son de pago)", quien: "Cliente", costeEur: null, periodo: "mes", nota: "Muchas veces 0 €; se avisa antes" }
      ],
      mensual: { opcional: "mant", texto: "Si el flujo usa servidor o IA, necesita el mantenimiento mensual." },
      demos: [{ nombre: "Nexo · facturas con IA", url: "https://melinarivera.github.io/Nexo_Facturas/" }],
      preguntas: [["¿Qué pasa si cambio de programa?", "Se adapta el flujo; se presupuesta antes de tocarlo."]]
    },
    {
      id: "crm", icono: "🗂️", categoria: "IA y automatización",
      titulo: "CRM o planner a medida",
      frase: "Todos tus clientes, citas y tareas en un solo sitio, en vez de libretas y Excel.",
      queEs: "Una herramienta para guardar clientes con su historial, reservas o ventas, y lanzar campañas (por WhatsApp o email) respetando la ley de protección de datos. Puede ser hecha a medida o configurar una que ya existe (HubSpot, Notion…).",
      paraQuien: ["Restaurantes (reservas, alérgenos, clientes habituales)", "Despachos y consultoras (casos y seguimiento)", "Negocios que llevan clientes en Excel o en el móvil"],
      senales: "Te dicen «lo llevo todo en Excel», «no sé quién es cliente habitual» o «quiero volver a contactar a clientes antiguos».",
      incluye: ["Fichas de cliente con historial y segmentos", "Reservas, agenda o embudo de ventas", "Campañas por WhatsApp o email (con consentimiento)", "Exportar a Excel", "Formación para usarlo"],
      noIncluye: ["Licencias de programas de terceros (HubSpot, etc.)", "Pasar datos antiguos desordenados (se presupuesta aparte)", "App en tiendas de Apple o Google"],
      plazo: "3–5 semanas (configurar uno existente: 1–2 semanas)",
      precio: { inicial: "crm", variante: { nombre: "Configurar uno existente (HubSpot, Notion…)", inicial: "crm_configurar" } },
      terceros: [
        { que: "Base de datos", quien: "Cliente", costeEur: [0, 25], periodo: "mes", nota: "Gratis al empezar; si crece mucho, desde 25 $/mes" },
        { que: "Licencias de HubSpot, Notion, etc. (si se usan)", quien: "Cliente", costeEur: null, periodo: "mes" }
      ],
      mensual: { opcional: "mant", texto: "Recomendado: mantenimiento mensual." },
      demos: [{ nombre: "Demo CRM restaurante", url: "https://melinarivera.github.io/MR_Portafolio/demos/crm-restaurante/" }, { nombre: "Nexo para gestorías", url: "https://melinarivera.github.io/Nexo_Facturas/" }],
      preguntas: [["¿Mis datos están seguros?", "Sí. Van en tu cuenta, con acceso solo para tu equipo, y firmamos un contrato de protección de datos (RGPD)."]]
    },
    {
      id: "redes", icono: "📣", categoria: "Marketing",
      titulo: "Redes sociales y reputación",
      frase: "Que tu negocio se vea activo, profesional y bien valorado en Instagram, Facebook y Google.",
      queEs: "Gestión mensual de las redes del negocio: plan de publicaciones, diseños, textos, respuesta a comentarios y reseñas de Google. En el plan Crecimiento, también reels y gestión de anuncios.",
      paraQuien: ["Negocios locales con redes abandonadas", "Estéticas, restaurantes, tiendas, academias", "Despachos que quieren dar confianza en LinkedIn y Google"],
      senales: "Te dicen «no tengo tiempo para redes», «publico cuando me acuerdo» o «tengo malas reseñas sin responder».",
      incluye: ["Esencial: 2 redes, 8 publicaciones al mes", "Crecimiento: 12 publicaciones + 4 reels y gestión de anuncios", "Calendario mensual y diseños propios", "Respuesta a reseñas y perfil de Google optimizado"],
      noIncluye: ["El dinero de los anuncios (lo paga el cliente a Meta o Google)", "Sesiones de fotos o vídeo presenciales", "Responder mensajes privados 24/7 (para eso: asistente de WhatsApp)", "Garantizar seguidores o ventas concretas"],
      plazo: "Arranca en 1 semana; se recomienda mínimo 3 meses para ver resultados",
      precio: { mensual: "redes", variante: { nombre: "Plan Crecimiento (reels + anuncios)", mensual: "redes_crecimiento" }, extra: { nombre: "Auditoría de perfiles con plan de acción (pago único)", inicial: "auditoria_redes" } },
      terceros: [
        { que: "Inversión en anuncios (Meta o Google)", quien: "Cliente", costeEur: null, periodo: "mes", nota: "Lo decide el cliente; se paga directo a la plataforma" }
      ],
      demos: [{ nombre: "Instagram de Melina", url: "https://www.instagram.com/melina_rivera_developer/" }],
      preguntas: [
        ["¿Hay permanencia?", "No. Recomendamos 3 meses para ver resultados, pero se cancela avisando con 30 días."],
        ["¿Me garantizáis clientes?", "No prometemos números. Sí un perfil activo, profesional y bien cuidado, y te enseñamos los resultados cada mes."]
      ]
    },
    {
      id: "app", icono: "📱", categoria: "Apps",
      titulo: "App o SaaS a medida",
      frase: "Tu idea o tu herramienta interna, convertida en una aplicación que funciona.",
      queEs: "Una aplicación web hecha a medida: usuarios con contraseña, panel de administración y base de datos. Se empieza por una primera versión (MVP) con lo imprescindible y luego se amplía.",
      paraQuien: ["Emprendedores con una idea de producto", "Empresas que necesitan una herramienta interna propia", "Negocios cuyo proceso no encaja en ningún programa existente"],
      senales: "Te dicen «tengo una idea de app», «ningún programa hace lo que necesito» o «lo hacemos con 5 Excel distintos».",
      incluye: ["Definición de la primera versión (MVP)", "Usuarios, roles y panel de administración", "Base de datos y servidor", "Publicación", "30 días de soporte"],
      noIncluye: ["Publicación en App Store / Google Play (se presupuesta aparte)", "Funciones fuera del MVP acordado", "Marketing de lanzamiento"],
      plazo: "6–10 semanas según el alcance",
      precio: { inicial: "app" },
      terceros: [
        { que: "Alojamiento y base de datos", quien: "Cliente", costeEur: [0, 30], periodo: "mes" },
        { que: "IA (si la app usa IA)", quien: "Cliente", costeEur: null, periodo: "mes", nota: "Según uso" }
      ],
      mensual: { opcional: "mant", texto: "Necesario: mantenimiento mensual." },
      demos: [{ nombre: "Tesovia", url: "https://www.tesovia.com" }, { nombre: "ETERN-ME", url: "https://etern-me.com" }, { nombre: "ZenWi", url: "https://zenwi.app" }],
      preguntas: [["¿Por qué un MVP y no todo de golpe?", "Para salir antes, probar con usuarios reales y gastar solo en lo que funciona."]]
    },
    {
      id: "mant", icono: "🛠️", categoria: "Mantenimiento",
      titulo: "Mantenimiento mensual",
      frase: "Tu web siempre funcionando, segura y al día, sin preocuparte.",
      queEs: "Una cuota mensual para que la web o la herramienta siga funcionando: vigilamos que esté en línea, renovamos y revisamos dominio y certificados, hacemos copias de seguridad y los cambios pequeños. Es como el mantenimiento del coche: si no se hace, tarde o temprano algo falla.",
      paraQuien: ["Todo cliente con web, tienda, CRM o app", "Clientes que no quieren preocuparse de lo técnico"],
      senales: "Te dicen «¿y si se rompe?», «no sé renovar el dominio» o «quiero cambiar un precio de vez en cuando».",
      incluye: ["Vigilancia de que la web está en línea", "Certificado de seguridad (candado) y avisos de renovación", "Copias de seguridad", "Cambios pequeños de contenido (textos, precios, fotos)", "Soporte directo por WhatsApp"],
      noIncluye: ["Secciones o funciones nuevas (se presupuestan)", "El pago del dominio y del alojamiento (siguen a nombre del cliente)", "Rediseños"],
      plazo: "Desde el primer mes; sin permanencia",
      precio: { mensual: "mantenimiento" },
      terceros: [],
      demos: [],
      preguntas: [["¿Es obligatorio?", "No, pero si no se mantiene, cualquier fallo o cambio se cobra aparte cuando pase."]]
    }
  ],

  packs: [
    { id: "pack_arranque", titulo: "Pack Arranque", para: "Empezar a recibir clientes por internet", incluye: ["landing", "ia", "auditoria"], mensual: "ia_cuota" },
    { id: "pack_pyme_digital", titulo: "Pack Pyme Digital", para: "Profesionalizar la presencia online", incluye: ["web", "ia", "3 meses de redes Esencial"], mensual: "ia_cuota" },
    { id: "pack_organiza", titulo: "Pack Organiza tu negocio", para: "Dejar el Excel y el papel", incluye: ["crm", "2 automatizaciones", "formación"] }
  ],

  glosario: [
    ["Pago inicial", "Lo que paga el cliente una vez por hacer el trabajo (la web, la app, la puesta en marcha). 50 % al empezar y 50 % al entregar."],
    ["Cuota mensual", "Lo que paga cada mes por un servicio que sigue funcionando (asistente, redes, mantenimiento). Sin permanencia."],
    ["Mano de obra (nuestro trabajo)", "Diseño, programación, configuración, formación y soporte. Es lo que cobramos nosotros: el pago inicial y las cuotas."],
    ["Costes de terceros", "Lo que el cliente paga directamente a otras empresas: dominio, alojamiento, iubenda, Meta, anuncios, pasarela de pago. Nosotros no cobramos nada sobre eso."],
    ["Mantenimiento", "Cuota mensual para que todo siga funcionando: vigilancia, seguridad, copias y cambios pequeños."],
    ["Dominio", "La dirección de la web (www.negocio.com). Se paga cada año, unos 10–15 €."],
    ["Alojamiento (hosting)", "El «terreno» donde vive la web. En webs sencillas puede ser gratis."],
    ["iubenda", "Servicio que genera y actualiza la política de privacidad y cookies para cumplir la ley."],
    ["Meta", "La empresa dueña de WhatsApp, Instagram y Facebook. Cobra algunos mensajes de WhatsApp y los anuncios."],
    ["IA / tokens", "Lo que consume la inteligencia artificial al responder. Va incluido en la cuota del asistente."],
    ["Ronda de cambios", "Una vez que el cliente revisa y pide ajustes. Incluimos 2 por proyecto."],
    ["MVP", "Primera versión de una app con lo imprescindible para empezar a usarla."]
  ]
};
