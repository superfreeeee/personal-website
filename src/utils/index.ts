export const copy = (text: string) => {
  const t = document.createTextNode(text);
  document.body.appendChild(t);

  const range = document.createRange();
  range.selectNodeContents(t);

  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  document.execCommand('copy');
  document.body.removeChild(t);
};
