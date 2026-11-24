// Datos de contacto y configuración global. Editar acá.
export const SITE = {
  name: 'Núcleo Software',
  email: 'nucleosoftware1@gmail.com',
  // Formato internacional para wa.me: 54 + 9 + código de área + número, sin signos.
  whatsapp: '5492914421914',
  whatsappDisplay: '+54 291 442-1914',
  // Clave pública de Web3Forms (gratis, https://web3forms.com) para enviar el mail desde el formulario.
  // Se define en .env como PUBLIC_WEB3FORMS_KEY
  web3formsKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '',
};
