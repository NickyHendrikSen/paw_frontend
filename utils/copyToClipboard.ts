const copyToClipboard = (text: string) => {
  if (!text) {
    return false
  };

  const input = document.createElement('input');
  input.value = text;
  document.body.appendChild(input);
  input.select();

  document.execCommand('copy');

  document.body.removeChild(input);
  return true;
};

export default copyToClipboard;