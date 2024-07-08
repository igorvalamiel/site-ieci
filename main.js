function abrir(button) {
    const listId = button.innerText;
    const list = document.getElementById(listId);
    if (list.style.display == 'none') list.style.display = 'block';
    else list.style.display = 'none';
}