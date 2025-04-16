// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const form = document.getElementById('gpa-form');
    const coursesContainer = document.getElementById('courses-container');
    const addCourseBtn = document.getElementById('add-course');
    const calculateBtn = document.getElementById('calculate');
    const resultContainer = document.getElementById('result-container');
    const gpaResult = document.getElementById('gpa-result');
    const gpaMessage = document.getElementById('gpa-message');
    
    let courseCount = 3; // Initial number of courses
    
    // Add course row when "Add Another Course" button is clicked
    addCourseBtn.addEventListener('click', function() {
        courseCount++;
        
        // Create new course row
        const newRow = document.createElement('div');
        newRow.className = 'course-row';
        newRow.innerHTML = `
            <div class="input-group">
                <label for="course${courseCount}">Course Name</label>
                <input type="text" id="course${courseCount}" class="course-name" placeholder="e.g. COMP 101" required>
            </div>
            <div class="input-group">
                <label for="grade${courseCount}">Grade</label>
                <select id="grade${courseCount}" class="course-grade" required>
                    <option value="">Select grade</option>
                    <option value="4">A</option>
                    <option value="3">B</option>
                    <option value="2">C</option>
                    <option value="1">D</option>
                    <option value="0">F</option>
                </select>
            </div>
        `;
        
        // Add new row to container
        coursesContainer.appendChild(newRow);
        
        // Scroll to the new row for better UX
        newRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    
    // Calculate GPA when form is submitted
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission
        
        // Get all grade inputs
        const gradeSelects = document.querySelectorAll('.course-grade');
        let totalPoints = 0;
        let validGrades = 0;
        let hasErrors = false;
        
        // Reset any previous error states
        gradeSelects.forEach(select => {
            select.style.borderColor = '';
        });
        
        // Calculate total grade points
        gradeSelects.forEach(select => {
            if (select.value === '') {
                // Highlight missing grades
                select.style.borderColor = 'var(--error-color)';
                hasErrors = true;
            } else {
                totalPoints += parseFloat(select.value);
                validGrades++;
            }
        });
        
        if (hasErrors) {
            // Show error message if any grades are missing
            alert('Please select a grade for all courses before calculating.');
            return;
        }
        
        // Calculate GPA
        const gpa = totalPoints / validGrades;
        
        // Display result
        gpaResult.textContent = gpa.toFixed(2);
        resultContainer.classList.remove('hidden');
        
        // Add qualitative message based on GPA
        if (gpa >= 3.5) {
            gpaMessage.textContent = 'Excellent performance!';
            gpaMessage.style.color = 'var(--success-color)';
        } else if (gpa >= 2.7) {
            gpaMessage.textContent = 'Good performance.';
            gpaMessage.style.color = 'var(--primary-color)';
        } else if (gpa >= 2.0) {
            gpaMessage.textContent = 'Satisfactory performance.';
            gpaMessage.style.color = 'var(--secondary-color)';
        } else {
            gpaMessage.textContent = 'Consider seeking academic advice.';
            gpaMessage.style.color = 'var(--error-color)';
        }
        
        // Scroll to results for better UX
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Reset form when grades are changed after calculation
    coursesContainer.addEventListener('change', function() {
        if (!resultContainer.classList.contains('hidden')) {
            resultContainer.classList.add('hidden');
        }
    });
});
