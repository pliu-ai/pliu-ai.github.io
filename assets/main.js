const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 80}ms`;
  observer.observe(item);
});

const yearNode = document.getElementById('currentYear');
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const langButtons = document.querySelectorAll('.lang-btn');
const translatableNodes = document.querySelectorAll('[data-zh][data-en]');

function setLanguage(lang) {
  translatableNodes.forEach((node) => {
    const nextText = node.dataset[lang];
    if (nextText) {
      node.textContent = nextText;
    }
  });

  langButtons.forEach((btn) => {
    const isCurrent = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', isCurrent);
    btn.setAttribute('aria-pressed', String(isCurrent));
  });

  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

setLanguage('en');
