const init = () => {
    const button_eye_el = document.querySelector('.c-form__eye-button');
    const eye_el = document.querySelector('.c-form__eye');
    const password_el = document.querySelector('#password');

    const change_type_input = (element, value) => {
        element.type = value;
    }

    const define_aria_label = (element, value) => {
        element.setAttribute('aria-label', value)
    }

    const change_icon = (visible) => {
        const types_eye = ['./assets/eye.svg', './assets/eye-off.svg'];
        visible ?  eye_el.src = types_eye[0] : eye_el.src = types_eye[1];
    }

    if(button_eye_el && eye_el) {
        
        let visible = false;
        button_eye_el.addEventListener('click', function(e) {
            e.preventDefault();
            visible = !visible;
            if (visible) {
                change_type_input(password_el, 'text');
                define_aria_label(button_eye_el, 'esconder a senha');
                change_icon(visible);
            } else {
                change_type_input(password_el, 'password');
                define_aria_label(button_eye_el, 'mostrar a senha');
                change_icon(visible);
            }
        } )
    }
}

init();
