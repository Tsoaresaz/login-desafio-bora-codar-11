(function () {

    function init() {
        const inputs_element = document.querySelectorAll('input[required]');
        fieldValidity(inputs_element)
    }
    init();

    function fieldValidity(inputs) {
        Array.from(inputs).forEach((input) => {

            input.addEventListener('blur', (e) => {

                const message = mountMessage(input);
                showMessage(input, message);
            });

            input.addEventListener('invalid', e => e.preventDefault()); // remove a mensagem de validação padrão do navegador
        });

    };

    function messageError() {
        const message = {
            email: {
                valueMissing: 'o campo de e-mail não pode ser vazio',
                patternMismatch: 'preencha com um e-mail válido',
                tooShort: 'preencha com um e-mail válido',
                typeMismatch: 'preencha um e-mail válido'
            },
            password: {
                valueMissing: 'o campo de senha não pode ser vazio',
                tooShort: 'informe a senha correta',
            }
        }

        return message;
    }

    function typesError() {
        return [
            'valueMissing',
            'patternMismatch',
            'tooShort',
            'customError',
            'typeMismatch'
        ];
    }

    function mountMessage(input) {
        let message = '';

        const message_error = messageError();
        const types_error = typesError();
        types_error.forEach((error) => {
            if (input.validity[error]) {
                if (message_error[input.name]) {
                    message = message_error[input.name][error];
                }
            }
        });

        return message;
    }

    function showMessage(input, message) {
        const parent_element = input.parentNode;

        const informative_element = parent_element.querySelector('.c-form__informative');

        if (message !== undefined) {
            if (message.length > 0) {
                input.classList.add('c-form__input--danger')
            } else {
                input.classList.remove('c-form__input--danger')
            }
        } else {
            return;
        }

        informative_element.textContent = message;
    }

}());