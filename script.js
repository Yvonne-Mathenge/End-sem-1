/* Enhanced Base Styles */
:root {
    --primary-color: #003366; /* USIU blue */
    --primary-light: #3d5d8a;
    --secondary-color: #E57200; /* USIU orange */
    --secondary-light: #ff9d3f;
    --accent-color: #4CAF50;
    --light-bg: #f8fafc;
    --card-bg: #ffffff;
    --text-color: #2d3748;
    --light-text: #718096;
    --border-color: #e2e8f0;
    --error-color: #e53e3e;
    --success-color: #38a169;
    --warning-color: #dd6b20;
    --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --transition: all 0.2s ease-in-out;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--light-bg);
}

.background-wrapper {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

/* Calculator Container */
.calculator-container {
    background-color: var(--card-bg);
    border-radius: 12px;
    box-shadow: var(--shadow-lg);
    padding: 2.5rem;
    max-width: 800px;
    width: 100%;
    position: relative;
    overflow: hidden;
}

.calculator-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
}

/* Header Styles */
.calculator-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.calculator-header .logo {
    border-radius: 8px;
    box-shadow: var(--shadow-sm);
}

.calculator-header h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 0.25rem;
}

.calculator-header .subtitle {
    font-size: 1rem;
    color: var(--light-text);
    font-weight: 400;
}

/* Form Styles */
#gpa-form {
    margin-bottom: 2rem;
}

.courses-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.course-row {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    background-color: rgba(237, 242, 247, 0.3);
    padding: 1.25rem;
    border-radius: 8px;
    transition: var(--transition);
}

.course-row:hover {
    background-color: rgba(237, 242, 247, 0.6);
    box-shadow: var(--shadow-sm);
}

.input-group {
    flex: 1;
    min-width: 200px;
}

.input-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text-color);
    font-size: 0.95rem;
}

.input-group input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    font-size: 1rem;
    transition: var(--transition);
    background-color: var(--card-bg);
}

.input-group input:focus {
    outline: none;
    border-color: var(--primary-light);
    box-shadow: 0 0 0 3px rgba(0, 51, 102, 0.1);
}

.select-wrapper {
    position: relative;
}

.select-wrapper select {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    font-size: 1rem;
    appearance: none;
    background-color: var(--card-bg);
    transition: var(--transition);
    cursor: pointer;
}

.select-wrapper select:focus {
    outline: none;
    border-color: var(--primary-light);
    box-shadow: 0 0 0 3px rgba(0, 51, 102, 0.1);
}

.select-arrow {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    pointer-events: none;
    color: var(--light-text);
    font-size: 0.8rem;
}

/* Button Styles */
.buttons-container {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 2rem;
}

.btn {
    padding: 0.85rem 1.75rem;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.btn.primary {
    background-color: var(--primary-color);
    color: white;
    box-shadow: 0 2px 4px rgba(0, 51, 102, 0.2);
}

.btn.primary:hover {
    background-color: var(--primary-light);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 51, 102, 0.3);
}

.btn.secondary {
    background-color: white;
    color: var(--primary-color);
    border: 1px solid var(--border-color);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.btn.secondary:hover {
    background-color: #f7fafc;
    border-color: var(--primary-light);
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-icon {
    font-size: 1.1rem;
}

/* Result Container */
.result-container {
    background-color: var(--card-bg);
    border-radius: 12px;
    padding: 0;
    margin-top: 1rem;
    box-shadow: var(--shadow-md);
    overflow: hidden;
}

.result-card {
    padding: 2rem;
    text-align: center;
}

.result-card h2 {
    margin-bottom: 1.5rem;
    color: var(--primary-color);
    font-family: 'Montserrat', sans-serif;
}

.gpa-circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 1.5rem;
    box-shadow: var(--shadow-md);
}

.gpa-result {
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
    font-family: 'Montserrat', sans-serif;
}

.gpa-message {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    font-weight: 500;
}

.grade-scale {
    background-color: #f7fafc;
    padding: 1.5rem;
    border-radius: 8px;
    margin-top: 1.5rem;
}

.grade-scale h3 {
    margin-bottom: 1rem;
    color: var(--primary-color);
    font-size: 1.1rem;
}

.scale-list {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.scale-list li {
    font-size: 0.95rem;
    color: var(--text-color);
}

.grade-letter {
    font-weight: 600;
    color: var(--primary-color);
}

.hidden {
    display: none;
}

/* Responsive Design */
@media (max-width: 768px) {
    .background-wrapper {
        padding: 1.5rem;
    }
    
    .calculator-container {
        padding: 1.75rem;
    }
    
    .calculator-header {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
    
    .course-row {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }
    
    .input-group {
        min-width: 100%;
    }
    
    .buttons-container {
        flex-direction: column;
    }
    
    .btn {
        width: 100%;
        justify-content: center;
    }
    
    .gpa-circle {
        width: 120px;
        height: 120px;
    }
    
    .gpa-result {
        font-size: 2rem;
    }
}

@media (max-width: 480px) {
    .background-wrapper {
        padding: 1rem;
    }
    
    .calculator-container {
        padding: 1.5rem;
    }
    
    .result-card {
        padding: 1.5rem;
    }
    
    .scale-list {
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
    }
}
