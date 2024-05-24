const accordionQuestions = document.querySelectorAll('#faq-accordion .faq-item .faq-question')

for (let question of accordionQuestions) {
    question.addEventListener('click', function() {
        const item = this.closest('.faq-item')

        if (item.classList.contains('open')) {
            item.classList.remove('open')
        } else {
            item.classList.add('open')
        }
    })
}