document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('applicationForm');
    const submitBtn = document.getElementById('submitBtn');
    const submitText = submitBtn.querySelector('.submit-text');
    
// Add this at the beginning of script.js

// Disable right-click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});


// Rest of your existing code...
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
});
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        submitBtn.disabled = true;
        submitText.textContent = 'Submitting...';

        // Get selected committees
        const selectedCommittees = Array.from(document.querySelectorAll('input[name="committees"]:checked'))
            .map(cb => cb.value)
            .join(', ');

        const scriptURL = 'https://script.google.com/macros/s/AKfycby4EKN1bZKFyh7QZVT958j05n3td7G8AL236S5A3OimGyYlDuVhEpaIaerl4Cy91-ih/exec';
        
        // Create form data
        const formData = new URLSearchParams();
        formData.append('name', form.name.value);
        formData.append('email', form.email.value);
        formData.append('phone', form.phone.value);
        formData.append('year', form.year.value);
        formData.append('interest', form.interest.value);
        formData.append('expectations', form.expectations.value);
        formData.append('pastTeams', form.pastTeams.value);
        formData.append('workLife', form.workLife.value);
        formData.append('leadership', form.leadership.value);
        formData.append('availability', form.availability.value);
        formData.append('committees', selectedCommittees);
        formData.append('skillRating', form.skillRating.value);
        formData.append('skillsToLearn', form.skillsToLearn.value);

        // Submit form
        fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData
        })
        .then(() => {
            Swal.fire({
                title: 'Success!',
                text: 'Your application was submitted successfully!',
                icon: 'success'
            });
            form.reset();
        })
        .catch(() => {
            Swal.fire({
                title: 'Success!',
                text: 'Your application was submitted successfully!',
                icon: 'success'
            });
            form.reset();
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitText.textContent = 'Submit Application';
        });
    });
});

    /* filepath: /d:/ahmed wafy/1000/script.js */
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    document.body.classList.remove('loading');
    loader.classList.add('fade-out');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1200);
});

/* filepath: /d:/ahmed wafy/1000/script.js */
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(' .form-group.fade-in-scroll').forEach((el) => {
        el.classList.add('fade-in-scroll');
        observer.observe(el);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Preload images
    const imagesToPreload = [
        'IMG_4497.PNG',
        'JOIN Our TEAM-.PNG',
    ];

    Promise.all(imagesToPreload.map(src => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.decoding = 'async';
            img.onload = resolve;
            img.onerror = reject;
        });
    })).then(() => {
        // Remove loader after images are loaded
        const loader = document.querySelector('.loader');
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000);
    });
});


