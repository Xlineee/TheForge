document.querySelectorAll('details').forEach(detail => {
    const summary = detail.querySelector('summary');
    const content = document.createElement('div');

    while (detail.children.length > 1) {
        content.appendChild(detail.children[1]);
    }
    content.style.overflow = 'hidden';
    content.style.height = '0';
    content.style.opacity = 0;
    content.style.transition = 'height 0.3s ease, opacity 0.3s ease';
    detail.appendChild(content);

    summary.addEventListener('click', e => {
        e.preventDefault();
        if (detail.hasAttribute('open')) {
            const height = content.scrollHeight;
            content.style.height = height + 'px';
            content.style.opacity = 1;
            requestAnimationFrame(() => {
                content.style.height = '0';
                content.style.opacity = 0;
            });
            setTimeout(() => {
                detail.removeAttribute('open');
            }, 300);
        } else {
            detail.setAttribute('open', '');
            const height = content.scrollHeight;
            content.style.height = '0';
            content.style.opacity = 0;
            requestAnimationFrame(() => {
                content.style.height = height + 'px';
                content.style.opacity = 1;
            });
            setTimeout(() => {
                content.style.height = 'auto';
            }, 300);
        }
    });
});
