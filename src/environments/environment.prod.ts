const base = window.location;
const protocol = base.protocol;
const host = base.host;
const server = protocol + '//' + host;

export const environment = {
  production: true,
  // url: `${server}:3001/api`
  url: `http://localhost:3001/api`
};
