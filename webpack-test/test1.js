const addHtmlToRoot2 = (message) => {
  const h1 = document.createElement('h1');
  h1.innerText = message;
  document.getElementById('root2').appendChild(h1);
} // 클래스나 함수를 내보낼 땐 세미콜론을 붙이지 마세요.

const addHtmlToRoot3 = (message) => {
  const h1 = document.createElement('h1');
  h1.innerText = message;
  document.getElementById('root3').appendChild(h1);
} // 클래스나 함수를 내보낼 땐 세미콜론을 붙이지 마세요.

export {addHtmlToRoot2, addHtmlToRoot3}

