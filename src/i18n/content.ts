export type Lang = 'es' | 'en';

const es = {
  meta: {
    title: 'Núcleo Software — Software a medida',
    description:
      'Agencia de software a medida. Diseñamos y desarrollamos sistemas que se adaptan a tu negocio, como nuestro sistema de gestión para concesionarias.',
  },
  nav: { services: 'Qué hacemos', work: 'Proyecto', about: 'Nosotros', contact: 'Contacto', cta: 'Hablemos' },
  hero: {
    eyebrow: 'Agencia de software a medida',
    title: ['Software a medida', 'en el núcleo', 'de tu negocio.'],
    subtitle:
      'Diseñamos y desarrollamos sistemas pensados para cómo trabaja tu empresa, no al revés. Del primer boceto a producción.',
    primary: 'Contanos tu idea',
    secondary: 'Ver proyecto',
    scroll: 'Scroll',
  },
  marquee: ['Software a medida', 'Web apps', 'Automatización', 'Integraciones', 'Sistemas de gestión', 'Prototipos'],
  services: {
    eyebrow: '01 — Qué hacemos',
    title: 'Software que encaja con tu forma de trabajar.',
    items: [
      {
        title: 'Sistemas de gestión a medida',
        text: 'Stock, ventas, clientes, turnos, facturación. Un solo sistema con exactamente los procesos que tu negocio necesita.',
        tag: 'Core',
      },
      {
        title: 'Aplicaciones web',
        text: 'Plataformas y portales rápidos, seguros y accesibles desde cualquier dispositivo.',
        tag: 'Web',
      },
      {
        title: 'Integraciones y automatización',
        text: 'Conectamos tus herramientas y eliminamos tareas manuales repetitivas.',
        tag: 'Auto',
      },
      {
        title: 'Del prototipo a producción',
        text: 'Validamos la idea rápido con prototipos y la llevamos a un producto estable, con soporte y evolución continua.',
        tag: 'Ciclo completo',
      },
    ],
  },
  work: {
    eyebrow: '02 — Proyecto destacado',
    title: 'Concesionar, el sistema de gestión para venta de autos.',
    text: 'Stock, ventas, caja y patrimonio del salón en un solo lugar. Un sistema pensado para el día a día de una concesionaria, con la plata del negocio y la de los inversores siempre separadas y claras.',
    points: [
      'Stock con días parados, costos desglosados y alertas de margen',
      'Ventas paso a paso: preventa, seña, cierre y entrega, con PDF',
      'Caja, tesorería y cheques: qué plata es del salón y cuál de inversores',
      'Patrimonio, reportes y balance mensual en tiempo real',
      'Agenda de contactos con acceso directo a WhatsApp',
    ],
    tabs: ['Tablero', 'Stock', 'Ventas', 'Caja', 'Patrimonio'],
    mobileAlt: 'Versión mobile del sistema',
    cta: 'Quiero algo así para mi negocio',
    note: 'Producto listo para adaptar — y la base de lo que podemos construir para vos.',
  },
  process: {
    eyebrow: '03 — Cómo trabajamos',
    title: 'Simple, transparente, iterativo.',
    steps: [
      { n: '01', title: 'Entendemos', text: 'Hablamos con vos y relevamos cómo funciona tu negocio hoy.' },
      { n: '02', title: 'Diseñamos', text: 'Prototipo y alcance claros antes de escribir código.' },
      { n: '03', title: 'Construimos', text: 'Entregas cortas y frecuentes. Ves avances reales todo el tiempo.' },
      { n: '04', title: 'Acompañamos', text: 'Puesta en marcha, capacitación y evolución del sistema.' },
    ],
  },
  about: {
    eyebrow: '04 — Nosotros',
    title: 'Un equipo chico, con foco total en tu proyecto.',
    text: 'Somos tres desarrolladores que prefieren entender el problema antes de proponer una solución. Trabajás directo con quienes construyen tu software, sin intermediarios.',
  },
  contact: {
    eyebrow: '05 — Contacto',
    title: '¿Tenés una idea? Hablemos.',
    text: 'Contanos qué necesitás y te respondemos a la brevedad. Sin compromiso.',
    name: 'Nombre',
    email: 'Email',
    message: 'Contanos sobre tu proyecto',
    send: 'Enviar mensaje',
    sendWa: 'Enviar por WhatsApp',
    sending: 'Enviando…',
    ok: 'Listo, recibimos tu mensaje. ¡Gracias! Te respondemos a la brevedad.',
    waContinue: 'Continuar por WhatsApp',
    err: 'No pudimos enviar el mensaje. Escribinos directo a nucleosoftware1@gmail.com.',
    waGreeting: 'Hola Núcleo Software, soy',
    orDirect: 'O escribinos directo',
  },
  footer: { rights: 'Todos los derechos reservados.', made: 'Hecho a medida.' },
};

const en: typeof es = {
  meta: {
    title: 'Núcleo Software — Custom software',
    description:
      'Custom software agency. We design and build systems tailored to your business, like our management system for car dealerships.',
  },
  nav: { services: 'What we do', work: 'Project', about: 'About', contact: 'Contact', cta: "Let's talk" },
  hero: {
    eyebrow: 'Custom software agency',
    title: ['Custom software', 'at the core', 'of your business.'],
    subtitle:
      'We design and build systems around how your company works, not the other way around. From first sketch to production.',
    primary: 'Tell us your idea',
    secondary: 'See project',
    scroll: 'Scroll',
  },
  marquee: ['Custom software', 'Web apps', 'Automation', 'Integrations', 'Management systems', 'Prototypes'],
  services: {
    eyebrow: '01 — What we do',
    title: 'Software that fits the way you work.',
    items: [
      {
        title: 'Custom management systems',
        text: 'Inventory, sales, customers, appointments, invoicing. One system with exactly the processes your business needs.',
        tag: 'Core',
      },
      {
        title: 'Web applications',
        text: 'Fast, secure platforms and portals, available from any device.',
        tag: 'Web',
      },
      {
        title: 'Integrations & automation',
        text: 'We connect your tools and remove repetitive manual work.',
        tag: 'Auto',
      },
      {
        title: 'From prototype to production',
        text: 'We validate the idea quickly with prototypes and take it to a stable product, with support and continuous evolution.',
        tag: 'Full cycle',
      },
    ],
  },
  work: {
    eyebrow: '02 — Featured project',
    title: 'Concesionar, the management system for car sales.',
    text: "Inventory, sales, cash and net worth of the dealership in one place. A system built for a dealership's day-to-day, keeping the business's money and investors' money always separate and clear.",
    points: [
      'Inventory with days in stock, itemized costs and margin alerts',
      'Step-by-step sales: pre-sale, deposit, closing and delivery, with PDF',
      "Cash, treasury and checks: what money is the dealership's and what is investors'",
      'Net worth, reports and monthly balance in real time',
      'Contact book with direct WhatsApp access',
    ],
    tabs: ['Dashboard', 'Inventory', 'Sales', 'Cash', 'Net worth'],
    mobileAlt: 'Mobile version of the system',
    cta: 'I want something like this for my business',
    note: 'A ready-to-adapt product — and the foundation of what we can build for you.',
  },
  process: {
    eyebrow: '03 — How we work',
    title: 'Simple, transparent, iterative.',
    steps: [
      { n: '01', title: 'Understand', text: 'We talk with you and learn how your business works today.' },
      { n: '02', title: 'Design', text: 'A clear prototype and scope before writing any code.' },
      { n: '03', title: 'Build', text: 'Short, frequent deliveries. You see real progress all the time.' },
      { n: '04', title: 'Support', text: 'Launch, training and continuous evolution of the system.' },
    ],
  },
  about: {
    eyebrow: '04 — About us',
    title: 'A small team, fully focused on your project.',
    text: 'We are three developers who prefer to understand the problem before proposing a solution. You work directly with the people building your software, no middlemen.',
  },
  contact: {
    eyebrow: '05 — Contact',
    title: 'Got an idea? Let’s talk.',
    text: "Tell us what you need and we'll get back to you shortly. No commitment.",
    name: 'Name',
    email: 'Email',
    message: 'Tell us about your project',
    send: 'Send message',
    sendWa: 'Send via WhatsApp',
    sending: 'Sending…',
    ok: 'Done, we got your message. Thanks! We will get back to you shortly.',
    waContinue: 'Continue on WhatsApp',
    err: "We couldn't send the message. Email us directly at nucleosoftware1@gmail.com.",
    waGreeting: 'Hi Núcleo Software, I am',
    orDirect: 'Or reach us directly',
  },
  footer: { rights: 'All rights reserved.', made: 'Made to measure.' },
};

export const content = { es, en };

// TODO: confirmar roles reales de cada integrante.
export const team = [
  { name: 'Franco Lavirgen', role: { es: 'Desarrollador', en: 'Developer' } },
  { name: 'Matias DeMori', role: { es: 'Desarrollador', en: 'Developer' } },
  { name: 'Juan Cruz Palacio Hernandez', role: { es: 'Desarrollador', en: 'Developer' } },
];
