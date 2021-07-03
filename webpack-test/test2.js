export default function addHtmlToRoot4(message) {
  const h1 = document.createElement('h1');
  h1.innerText = message;
  document.getElementById('root4').appendChild(h1);
}