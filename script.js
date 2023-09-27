function showTab(tabIndex) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab, index) => {
        if (index === tabIndex) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    });
}

// Mostrar la primera pestaña al cargar la página
showTab(0);
