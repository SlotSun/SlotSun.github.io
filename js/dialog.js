document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.jp-name').forEach(span => {
    const textLength = span.textContent.trim().length;

    let lenClass = 'len4'; // 默认 4
    if (textLength <= 1) lenClass = 'len1';
    else if (textLength === 2) lenClass = 'len2';
    else if (textLength === 3) lenClass = 'len3';

    span.classList.add(lenClass);
  });

});