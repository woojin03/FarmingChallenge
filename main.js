document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.querySelector('[name="username"]').value;
    const password = document.querySelector('[name="password"]').value;

    const popupToast = document.querySelector('.popup-toast');

    if (username === '1234' && password === '1234') {
        popupToast.textContent = '로그인이 성공적으로 이루어졌습니다.';
        popupToast.style.backgroundColor = '#4CAF50';
        popupToast.style.display = 'block';
    } else {
        popupToast.textContent = 'ID 혹은 PW가 잘못되었습니다.';
        popupToast.style.backgroundColor = '#FF5733';
        popupToast.style.display = 'block';
    }

    const loginForm = document.querySelector('.login-form');
    loginForm.classList.add('submitted');
});