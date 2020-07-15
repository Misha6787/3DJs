/* eslint-disable operator-assignment */
/* eslint-disable strict */
'use strict';
const sendForm = () => {
    const errorMessage = 'Что то пошло не так...',
        loadMessage = document.createElement('div'),
        successMessage = 'Спасибо мы скоро с вами свяжемся';
    loadMessage.style.cssText = `
        display: block;
        position: relative;
        z-index: 99999;
        width: 30px;
        height: 30px;
        margin: auto;
        background: url('http://hello-site.ru//main/images/preloads/tail-spin.svg') center center no-repeat;
        background-size: 22px;
    `;
    const postData = body  =>
        fetch('server.php', {
            method: 'POST',
            cache: 'default',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: white; margin-top: 10px; margin-bottom: 10px';

    document.body.addEventListener('keyup', event => {
        const target = event.target;
        if (target.getAttribute('name') === 'user_phone') {
            const item = target;
            item.value = item.value.replace(/\D/g, '');
        } else if (target.getAttribute('name') === 'user_name') {
            const item = target;
            item.value = item.value.replace(/(^[a-zA-z0-9]{1,}$)/, '');
        } else if (target.getAttribute('name') === 'user_message') {
            const item = target;
            item.value = item.value.replace(/(^[a-zA-z]{1,}$)/, '');
        }
    });
    document.body.addEventListener('submit', event => {
        event.preventDefault();
        const target = event.target;
        if (target.closest('form')) {
            const form = target.closest('form');
            statusMessage.textContent = '';
            form.appendChild(statusMessage);
            statusMessage.insertAdjacentElement('beforebegin', loadMessage);
            const body = {};
            const formData = new FormData(form);
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body)
                .then(response => {
                    loadMessage.remove();
                    if (response.status !== 200) {
                        throw new Error('status networn not 200');
                    }
                    statusMessage.textContent = successMessage;
                })
                .catch(() => {
                    loadMessage.remove();
                    statusMessage.textContent = errorMessage;
                });
            [...form.elements].forEach(item => {
                if (item.tagName.toLowerCase() === 'input') {
                    item.value = '';
                }
            });
        }
    });
};

export default sendForm;
