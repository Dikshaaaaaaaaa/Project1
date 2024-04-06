const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Toggle Resume Section';
        document.body.insertBefore(toggleButton, document.querySelector('#resume'));

        toggleButton.addEventListener('click', function() {
            const resumeSection = document.getElementById('resume');
            resumeSection.classList.toggle('hidden');
        });
 