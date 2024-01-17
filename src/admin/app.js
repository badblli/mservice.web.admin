// import Logo from './extensions/Logo.png';
// import Favicon from './extensions/Favicon.png';

const config = {
  // auth: {
  //   logo: Logo,
  // },
  // head: {
  //   favicon: Favicon,
  // },
  // menu: {
  //   logo: Logo
  // },
  tutotials: false,
  notifications: { release: false },
  locales: [
    'ar',
    'fr',
    'cs',
    'de',
    'dk',
    'es',
    'he',
    'id',
    'it',
    'ja',
    'ko',
    'ms',
    'nl',
    'no',
    'pl',
    'pt-BR',
    'pt',
    'ru',
    'sk',
    'sv',
    'th',
    'tr',
    'uk',
    'vi',
    'zh-Hans',
    'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
