// Функция для показа сообщения в зависимости от кнопки мыши
function showAlert(event) {
    if (event.button === 0) { // Левая кнопка мыши
        alert("Был щелчок левой кнопкой!");
    } else if (event.button === 2) { // Правая кнопка мыши
        alert("Был щелчок правой кнопкой!");
    }
}

// Запрет контекстного меню при щелчке правой кнопкой мыши
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});


