function toggleMenu() {
    document.querySelector('.menu').classList.toggle('open');
}

function toggleAnswer(button) {
    const answer = button.nextElementSibling;
    answer.classList.toggle('visible');
}

function filterQuestions() {
    const query = document.getElementById('search').value.toLowerCase();
    document.querySelectorAll('.question').forEach(question => {
        const text = question.textContent.toLowerCase();
        question.style.display = text.includes(query) ? 'block' : 'none';
    });
}
