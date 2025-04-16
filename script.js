// Enhanced GPA Calculator Script
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const form = document.getElementById('gpa-form');
    const coursesContainer = document.getElementById('courses-container');
    const addCourseBtn = document.getElementById('add-course');
    const resultContainer = document.getElementById('result-container');
    const gpaResult = document.getElementById('gpa-result');
    const gpaMessage = document.getElementById('gpa-message');
    
    let courseCount = 3; // Initial number of courses
    
    // Add course row dynamically
    addCourseBtn.addEventListener('click', function() {
        courseCount++;
        
        const newRow = document.createElement('div');
        newRow.className = 'course-row';
        newRow.innerHTML = `
            <div class="input-group">
                <label for="course${courseCount}">Course Name</label>
                <input type="text" id="course${courseCount}" class="course-name" placeholder="e.g. COMP 101" required>
            </div>
            <div class="input-group">
                <label for="grade${courseCount}">Grade</label>
                <div class="select-wrapper">
                    <select id="grade${courseCount}" class="course-grade" required>
                        <option value="">Select grade</option>
                        <option value="4">A</option>
                        <option value="3">B</option>
                        <option value="2">C</option>
                        <option value="1">D</option>
                        <option value="0">F</option>
                    </select>
                    <span class="select-arrow">▼</span>
                </div>
            </div>
        `;
        
        coursesContainer.appendChild(newRow);
        
        // Smooth scroll to new row
        setTimeout(() => {
            newRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 10);
    });
    
    // Calculate GPA
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const gradeSelects = document.querySelectorAll('.course-grade');
        let totalPoints = 0;
        let validGrades = 0;
        let hasErrors = false;
        
        // Reset styles
        gradeSelects.forEach(select => {
            select.parentElement.style.borderColor = '';
        });
        
        // Validate and calculate
        gradeSelects.forEach(select => {
            if (select.value === '') {
                select.parentElement.style.borderColor = 'var(--error-color)';
                hasErrors = true;
            } else {
                totalPoints += parseFloat(select.value);
                validGrades++;
            }
        });
        
        if (hasErrors) {
            showErrorToast('Please select a grade for all courses');
            return;
        }
        
        const gpa = totalPoints / validGrades;
        displayResult(gpa);
    });
    
    // Display calculated result
    function displayResult(gpa) {
        gpaResult.textContent = gpa.toFixed(2);
        resultContainer.classList.remove('hidden');
        
        // Set appropriate message and color based on GPA
        if (gpa >= 3.5) {
            gpaMessage.textContent = 'Excellent performance! Keep up the great work!';
            gpaMessage.style.color = 'var(--success-color)';
        } else if (gpa >= 3.0) {
            gpaMessage.textContent = 'Very good performance. Well done!';
            gpaMessage.style.color = 'var(--success-color)';
        } else if (gpa >= 2.7) {
            gpaMessage.textContent = 'Good performance. You\'re doing well!';
            gpaMessage.style.color = '#2b6cb0';
        } else if (gpa >= 2.0) {
            gpaMessage.textContent = 'Satisfactory performance. Room for improvement.';
            gpaMessage.style.color = 'var(--warning-color)';
        } else {
            gpaMessage.textContent = 'Consider seeking academic advice for improvement.';
            gpaMessage.style.color = 'var(--error-color)';
        }
        
        // Smooth scroll to results
        setTimeout(() => {
            resultContainer.scrollIntoView({ behavior: 'smooth' });
        }, 10);
    }
    
    // Show error toast message
    function showErrorToast(message) {
        const toast = document.createElement('div');
        toast.className = 'error-toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
    
    // Reset results when grades are changed
    coursesContainer.addEventListener('change', function(e) {
        if (e.target.classList.contains('course-grade') && !resultContainer.classList.contains('hidden')) {
            resultContainer.classList.add('hidden');
        }
    });
});
