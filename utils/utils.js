const LANGUAGES = ["en", "it", "ro"];

export function checkLanguage(l, ...arg) {
  const total = arg.length;

  for(let i = 0; i <= total; i++) {
    if(l === LANGUAGES[i]) {
      return arg[i];
    }
  }
}