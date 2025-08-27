document.querySelectorAll('section h2').forEach((heading) => {
  heading.addEventListener('click', () => {
    const content = heading.nextElementSibling;
    content.classList.toggle('hidden');
  });
});
