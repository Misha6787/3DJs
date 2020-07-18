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

    const validinput = event => {
        const target = event.target;
        let formBtn;
        if (target.closest('form') !== null) {
            formBtn = target.closest('form').querySelector('.form-btn');
        }
        if (target.getAttribute('name') === 'user_phone') {
            const item = target;
            if (item.value.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)) {
                item.style.border = '';
                formBtn.removeAttribute('disabled');
            } else {
                item.style.border = '2px solid red';
                formBtn.setAttribute('disabled', 'disabled');
            }
        } else if (target.getAttribute('name') === 'user_name') {
            const item = target;
            if (item.value.match(/^[?!,.а-яА-ЯёЁ0-9\s]+$/)) {
                item.style.border = '';
                formBtn.removeAttribute('disabled');
            } else {
                item.style.border = '2px solid red';
                formBtn.setAttribute('disabled', 'disabled');
            }
        } else if (target.getAttribute('name') === 'user_message') {
            const item = target;
            if (item.value.match(/^[?!,.а-яА-ЯёЁ0-9\s]+$/)) {
                item.style.border = '';
                formBtn.removeAttribute('disabled');
            } else {
                item.style.border = '2px solid red';
                formBtn.setAttribute('disabled', 'disabled');
            }
        } else if (target.getAttribute('name') === 'user_email') {
            const item = target;
            if (item.value.match(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/)) {
                item.style.border = '';
                formBtn.removeAttribute('disabled');
            } else {
                item.style.border = '2px solid red';
                formBtn.setAttribute('disabled', 'disabled');
            }
        }
        let inputs;
        if (target.closest('form') !== null) {
            inputs = target.closest('form').querySelectorAll('input');
            inputs.forEach(item => {
                if (item.style.border === '2px solid red') {
                    formBtn.setAttribute('disabled', 'disabled');
                }
            });
        }
    };
    document.body.addEventListener('keyup', validinput);
    document.body.addEventListener('focusout', validinput);

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
                val = val.trim();
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
            setTimeout(() => {
                statusMessage.textContent = '';
            }, 3000);
        }
    });
};

export default sendForm;
