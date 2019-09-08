const base = window.location;
const protocol = base.protocol;
const host = base.host;
const server = protocol + '//' + host;

export const environment = {
  production: false,

  // autentication: `${server}`
  autentication: `http://localhost:3001/api`
};
