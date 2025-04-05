class LoginService {
    constructor() {
        this.form = document.getElementById("loginForm");
        this.emailInput = document.getElementById("email");
        this.passwordInput = document.getElementById("password");
        this.init();
    }

    init() {
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();

        const email = this.emailInput.value.trim();
        const password = this.passwordInput.value.trim();

        if (this.validateInputs(email, password)) {
            this.login(email, password);
        }
    }

    validateInputs(email, password) {
        if (!email || !password) {
            this.showError("Todos los campos son obligatorios");
            return false;
        }

        if (!this.isValidEmail(email)) {
            this.showError("Correo electrónico inválido");
            return false;
        }

        return true;
    }

    isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    showError(message) {
        alert(message); // Podría mejorarse con un toast o modal
    }

    login(email, password) {
        console.log(`Login exitoso con ${email}`);
        alert("¡Bienvenido! Redirigiendo...");
        this.form.reset();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new LoginService();
});