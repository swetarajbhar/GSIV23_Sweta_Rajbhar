export const toAbsoluteUrl = (pathname) => {
    console.log('PUBLIC URL: ', process.env.REACT_APP_PUBLIC_URL);
    return process.env.REACT_APP_PUBLIC_URL + pathname};        