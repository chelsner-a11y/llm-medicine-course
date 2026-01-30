// LLM/AI in Medicine Course - Main JavaScript
// Charlotte Fresenius Medical School

class CourseManager {
    constructor() {
        this.currentModule = 1;
        this.totalModules = 4;
        this.moduleProgress = {
            1: { completed: false, score: 0, answers: {} },
            2: { completed: false, score: 0, answers: {} },
            3: { completed: false, score: 0, answers: {} },
            4: { completed: false, score: 0, answers: {} }
        };
        this.courseStartTime = null;
        this.moduleStartTime = null;
        
        this.init();
    }
    
    init() {
        this.loadProgress();
        this.setupEventListeners();
        this.updateProgressBar();
        this.updateNavigation();
        this.startCourse();
    }
    
    startCourse() {
        if (!this.courseStartTime) {
            this.courseStartTime = new Date().toISOString();
            this.saveProgress();
        }
    }
    
    startModule(moduleNumber) {
        this.moduleStartTime = new Date().toISOString();
        this.currentModule = moduleNumber;
        this.navigateToModule(moduleNumber);
        this.saveProgress();
    }
    
    setupEventListeners() {
        // Navigation event listeners
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-module')) {
                e.preventDefault();
                const moduleNumber = parseInt(e.target.dataset.module);
                this.navigateToModule(moduleNumber);
            }
            
            if (e.target.classList.contains('btn-next-module')) {
                e.preventDefault();
                this.nextModule();
            }
            
            if (e.target.classList.contains('btn-prev-module')) {
                e.preventDefault();
                this.previousModule();
            }
            
            if (e.target.classList.contains('btn-submit-assessment')) {
                e.preventDefault();
                this.submitAssessment();
            }
            
            if (e.target.classList.contains('btn-generate-certificate')) {
                e.preventDefault();
                this.generateCertificate();
            }
        });
        
        // Assessment form listeners
        document.addEventListener('change', (e) => {
            if (e.target.type === 'radio' && e.target.name.startsWith('q')) {
                this.saveAssessmentAnswer(e.target.name, e.target.value);
            }
        });
    }
    
    navigateToModule(moduleNumber) {
        if (moduleNumber < 1 || moduleNumber > this.totalModules) return;
        
        // Check if previous modules are completed (except for module 1)
        if (moduleNumber > 1) {
            for (let i = 1; i < moduleNumber; i++) {
                if (!this.moduleProgress[i].completed) {
                    this.showAlert('warning', `Bitte schließen Sie zuerst Modul ${i} ab, bevor Sie zu Modul ${moduleNumber} wechseln.`);
                    return;
                }
            }
        }
        
        this.currentModule = moduleNumber;
        this.loadModuleContent(moduleNumber);
        this.updateNavigation();
        this.saveProgress();
    }
    
    loadModuleContent(moduleNumber) {
        const contentArea = document.getElementById('module-content');
        if (!contentArea) return;
        
        // Add fade out effect
        contentArea.style.opacity = '0';
        
        setTimeout(() => {
            // Load module content based on module number
            switch(moduleNumber) {
                case 1:
                    this.loadModule1Content();
                    break;
                case 2:
                    this.loadModule2Content();
                    break;
                case 3:
                    this.loadModule3Content();
                    break;
                case 4:
                    this.loadModule4Content();
                    break;
            }
            
            // Add fade in effect
            contentArea.style.opacity = '1';
            contentArea.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
    
    loadModule1Content() {
        fetch('modules/module1.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('module-content').innerHTML = html;
                // Re-run any module-specific scripts
                const scripts = document.getElementById('module-content').querySelectorAll('script');
                scripts.forEach(script => {
                    const newScript = document.createElement('script');
                    newScript.textContent = script.textContent;
                    document.head.appendChild(newScript);
                    document.head.removeChild(newScript);
                });
            })
            .catch(error => {
                console.error('Error loading Module 1:', error);
                document.getElementById('module-content').innerHTML = '<div class="alert alert-error"><p>Fehler beim Laden von Modul 1. Bitte versuchen Sie es erneut.</p></div>';
            });
    }
    
    loadModule2Content() {
        fetch('modules/module2.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('module-content').innerHTML = html;
                // Re-run any module-specific scripts
                const scripts = document.getElementById('module-content').querySelectorAll('script');
                scripts.forEach(script => {
                    const newScript = document.createElement('script');
                    newScript.textContent = script.textContent;
                    document.head.appendChild(newScript);
                    document.head.removeChild(newScript);
                });
            })
            .catch(error => {
                console.error('Error loading Module 2:', error);
                document.getElementById('module-content').innerHTML = '<div class="alert alert-error"><p>Fehler beim Laden von Modul 2. Bitte versuchen Sie es erneut.</p></div>';
            });
    }
    
    loadModule3Content() {
        fetch('modules/module3.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('module-content').innerHTML = html;
                // Re-run any module-specific scripts
                const scripts = document.getElementById('module-content').querySelectorAll('script');
                scripts.forEach(script => {
                    const newScript = document.createElement('script');
                    newScript.textContent = script.textContent;
                    document.head.appendChild(newScript);
                    document.head.removeChild(newScript);
                });
            })
            .catch(error => {
                console.error('Error loading Module 3:', error);
                document.getElementById('module-content').innerHTML = '<div class="alert alert-error"><p>Fehler beim Laden von Modul 3. Bitte versuchen Sie es erneut.</p></div>';
            });
    }
    
    loadModule4Content() {
        fetch('modules/module4.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('module-content').innerHTML = html;
                // Re-run any module-specific scripts
                const scripts = document.getElementById('module-content').querySelectorAll('script');
                scripts.forEach(script => {
                    const newScript = document.createElement('script');
                    newScript.textContent = script.textContent;
                    document.head.appendChild(newScript);
                    document.head.removeChild(newScript);
                });
            })
            .catch(error => {
                console.error('Error loading Module 4:', error);
                document.getElementById('module-content').innerHTML = '<div class="alert alert-error"><p>Fehler beim Laden von Modul 4. Bitte versuchen Sie es erneut.</p></div>';
            });
    }
    
    // Certificate generation
    generateCertificate() {
        // Check if all modules are completed
        const allCompleted = Object.values(this.moduleProgress).every(module => module.completed);
        
        if (!allCompleted) {
            alert('Sie müssen alle Module erfolgreich abschließen, um ein Zertifikat zu erhalten.');
            return;
        }
        
        // Calculate overall score
        const totalQuestions = Object.values(this.moduleProgress).reduce((sum, module) => sum + module.totalQuestions, 0);
        const correctAnswers = Object.values(this.moduleProgress).reduce((sum, module) => sum + module.correctAnswers, 0);
        const overallScore = Math.round((correctAnswers / totalQuestions) * 100);
        
        // Get completion date
        const completionDate = new Date().toLocaleDateString('de-DE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Generate certificate HTML
        const certificateHTML = this.createCertificateHTML(overallScore, completionDate);
        
        // Open certificate in new window
        const certificateWindow = window.open('', '_blank', 'width=800,height=600');
        certificateWindow.document.write(certificateHTML);
        certificateWindow.document.close();
        
        // Trigger print dialog
        certificateWindow.onload = function() {
            certificateWindow.print();
        };
    }
    
    createCertificateHTML(score, completionDate) {
        return `
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zertifikat - Grundlagen der LLM/AI-Verwendung in der Medizin</title>
    <style>
        body {
            font-family: 'Georgia', serif;
            margin: 0;
            padding: 40px;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .certificate {
            background: white;
            padding: 60px;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            max-width: 700px;
            width: 100%;
            text-align: center;
            border: 8px solid #8B1538;
            position: relative;
        }
        
        .certificate::before {
            content: '';
            position: absolute;
            top: 20px;
            left: 20px;
            right: 20px;
            bottom: 20px;
            border: 2px solid #C41E3A;
            border-radius: 12px;
        }
        
        .header {
            margin-bottom: 40px;
        }
        
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #8B1538;
            margin-bottom: 10px;
        }
        
        .institution {
            font-size: 18px;
            color: #666;
            margin-bottom: 30px;
        }
        
        .certificate-title {
            font-size: 36px;
            font-weight: bold;
            color: #8B1538;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        
        .course-title {
            font-size: 24px;
            color: #333;
            margin-bottom: 40px;
            font-style: italic;
        }
        
        .recipient {
            font-size: 20px;
            margin-bottom: 30px;
            color: #666;
        }
        
        .completion-info {
            margin: 30px 0;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 10px;
            border-left: 4px solid #C41E3A;
        }
        
        .score {
            font-size: 18px;
            font-weight: bold;
            color: #8B1538;
            margin-bottom: 10px;
        }
        
        .date {
            font-size: 16px;
            color: #666;
        }
        
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #eee;
            font-size: 14px;
            color: #888;
        }
        
        .signature-line {
            margin-top: 40px;
            border-top: 1px solid #333;
            width: 200px;
            margin-left: auto;
            margin-right: auto;
            padding-top: 10px;
            font-size: 14px;
            color: #666;
        }
        
        @media print {
            body {
                background: white;
                padding: 0;
            }
            
            .certificate {
                box-shadow: none;
                border-radius: 0;
                max-width: none;
            }
        }
    </style>
</head>
<body>
    <div class="certificate">
        <div class="header">
            <div class="logo">Christian Elsner</div>
            <div class="institution">LLM Anwendung in der Medizin</div>
        </div>
        
        <div class="certificate-title">Zertifikat</div>
        
        <div class="course-title">
            Grundlagen der LLM/AI-Verwendung in der Medizin
        </div>
        
        <div class="recipient">
            Hiermit wird bestätigt, dass der/die Teilnehmer/in erfolgreich den Kurs<br>
            <strong>"Fundamentals of LLM/AI Usage in Medicine"</strong><br>
            abgeschlossen hat.
        </div>
        
        <div class="completion-info">
            <div class="score">Gesamtergebnis: ${score}% (${score >= 60 ? 'Bestanden' : 'Nicht bestanden'})</div>
            <div class="date">Abschlussdatum: ${completionDate}</div>
        </div>
        
        <div class="footer">
            <p>Dieser Kurs umfasste vier Module:</p>
            <p>• Modul 1: Einführung in Generative AI für die Medizin<br>
            • Modul 2: LLM-System zur Tumordokumentation<br>
            • Modul 3: AI-Copiloten in der Primärversorgung (PENDA-Studie)<br>
            • Modul 4: Ethischer Einsatz von KI im Gesundheitswesen</p>
        </div>
        
        <div class="signature-line">
            Christian Elsner
        </div>
    </div>
</body>
</html>`;
    }
    
    // Enhanced progress tracking
    updateOverallProgress() {
        const completedModules = Object.values(this.moduleProgress).filter(module => module.completed).length;
        const overallProgress = (completedModules / this.totalModules) * 100;
        
        // Update progress bar
        const progressBar = document.querySelector('.progress-fill');
        if (progressBar) {
            progressBar.style.width = overallProgress + '%';
        }
        
        // Update progress text
        const progressText = document.querySelector('.progress-text');
        if (progressText) {
            progressText.textContent = `${completedModules} von ${this.totalModules} Modulen abgeschlossen (${Math.round(overallProgress)}%)`;
        }
        
        // Show certificate button if all modules completed
        if (completedModules === this.totalModules) {
            const certBtn = document.getElementById('certificate-btn');
            if (certBtn) {
                certBtn.style.display = 'inline-block';
            }
            
            // Show completion message
            this.showCompletionMessage();
        }
    }
    
    showCompletionMessage() {
        const totalQuestions = Object.values(this.moduleProgress).reduce((sum, module) => sum + module.totalQuestions, 0);
        const correctAnswers = Object.values(this.moduleProgress).reduce((sum, module) => sum + module.correctAnswers, 0);
        const overallScore = Math.round((correctAnswers / totalQuestions) * 100);
        
        const message = `
            <div class="alert alert-success" style="margin: 20px 0; text-align: center;">
                <h3>🎉 Herzlichen Glückwunsch!</h3>
                <p>Sie haben alle Module erfolgreich abgeschlossen!</p>
                <p><strong>Gesamtergebnis: ${overallScore}% (${correctAnswers}/${totalQuestions} Fragen richtig)</strong></p>
                <p>Sie können jetzt Ihr Zertifikat generieren und herunterladen.</p>
            </div>
        `;
        
        const moduleContent = document.getElementById('module-content');
        if (moduleContent && !document.querySelector('.completion-message')) {
            const completionDiv = document.createElement('div');
            completionDiv.className = 'completion-message';
            completionDiv.innerHTML = message;
            moduleContent.appendChild(completionDiv);
        }
    }
    
    nextModule() {
        if (this.currentModule < this.totalModules) {
            this.navigateToModule(this.currentModule + 1);
        }
    }
    
    previousModule() {
        if (this.currentModule > 1) {
            this.navigateToModule(this.currentModule - 1);
        }
    }
    
    saveAssessmentAnswer(questionName, answer) {
        const moduleNumber = this.currentModule;
        if (!this.moduleProgress[moduleNumber].answers) {
            this.moduleProgress[moduleNumber].answers = {};
        }
        this.moduleProgress[moduleNumber].answers[questionName] = answer;
        this.saveProgress();
    }
    
    submitAssessment() {
        const moduleNumber = this.currentModule;
        const answers = this.moduleProgress[moduleNumber].answers;
        const correctAnswers = this.getCorrectAnswers(moduleNumber);
        
        let score = 0;
        let totalQuestions = Object.keys(correctAnswers).length;
        
        for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
            if (answers[question] === correctAnswer) {
                score++;
            }
        }
        
        const percentage = Math.round((score / totalQuestions) * 100);
        this.moduleProgress[moduleNumber].score = percentage;
        this.moduleProgress[moduleNumber].correctAnswers = score;
        this.moduleProgress[moduleNumber].totalQuestions = totalQuestions;
        
        // Module is completed if score is 60% or higher
        if (percentage >= 60) {
            this.moduleProgress[moduleNumber].completed = true;
            this.showAssessmentResult(true, percentage, score, totalQuestions);
        } else {
            this.showAssessmentResult(false, percentage, score, totalQuestions);
        }
        
        // Update overall progress
        this.updateOverallProgress();
        
        this.updateProgressBar();
        this.updateNavigation();
        this.saveProgress();
    }
    
    getCorrectAnswers(moduleNumber) {
        // This will be populated with correct answers for each module
        const correctAnswers = {
            1: {
                'q1': 'a', // Example: correct answer for question 1 is option 'a'
                'q2': 'b',
                'q3': 'c',
                'q4': 'a',
                'q5': 'b'
            },
            2: {
                'q1': 'b',
                'q2': 'a',
                'q3': 'c',
                'q4': 'b'
            },
            3: {
                'q1': 'a',
                'q2': 'c',
                'q3': 'b',
                'q4': 'a'
            },
            4: {
                'q1': 'b',
                'q2': 'a',
                'q3': 'c',
                'q4': 'b',
                'q5': 'a'
            }
        };
        
        return correctAnswers[moduleNumber] || {};
    }
    
    showAssessmentResult(passed, percentage, score, total) {
        const resultDiv = document.getElementById('assessment-result');
        if (!resultDiv) return;
        
        const resultClass = passed ? 'alert-success' : 'alert-error';
        const resultText = passed ? 
            `Herzlichen Glückwunsch! Sie haben die Lernzielkontrolle bestanden.` :
            `Sie haben die Mindestpunktzahl nicht erreicht. Bitte wiederholen Sie das Modul.`;
        
        resultDiv.innerHTML = `
            <div class="alert ${resultClass}">
                <h3>Ergebnis der Lernzielkontrolle</h3>
                <p>${resultText}</p>
                <p><strong>Ihre Punktzahl: ${score}/${total} (${percentage}%)</strong></p>
                ${passed ? '<p>Sie können nun zum nächsten Modul wechseln.</p>' : '<p>Mindestpunktzahl: 60%</p>'}
            </div>
        `;
        
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    }
    
    updateProgressBar() {
        const completedModules = Object.values(this.moduleProgress).filter(m => m.completed).length;
        const progressPercentage = (completedModules / this.totalModules) * 100;
        
        const progressFill = document.querySelector('.progress-fill');
        const progressText = document.querySelector('.progress-text');
        
        if (progressFill) {
            progressFill.style.width = `${progressPercentage}%`;
        }
        
        if (progressText) {
            progressText.textContent = `Fortschritt: ${completedModules}/${this.totalModules} Module abgeschlossen (${Math.round(progressPercentage)}%)`;
        }
    }
    
    updateNavigation() {
        const navModules = document.querySelectorAll('.nav-module');
        
        navModules.forEach((navModule, index) => {
            const moduleNumber = index + 1;
            navModule.classList.remove('active', 'completed');
            
            if (moduleNumber === this.currentModule) {
                navModule.classList.add('active');
            } else if (this.moduleProgress[moduleNumber].completed) {
                navModule.classList.add('completed');
            }
        });
    }
    
    showAlert(type, message) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type}`;
        alertDiv.innerHTML = `<p>${message}</p>`;
        
        const container = document.querySelector('.container');
        if (container) {
            container.insertBefore(alertDiv, container.firstChild);
            
            // Remove alert after 5 seconds
            setTimeout(() => {
                alertDiv.remove();
            }, 5000);
        }
    }
    
    generateCertificate() {
        const allModulesCompleted = Object.values(this.moduleProgress).every(m => m.completed);
        
        if (!allModulesCompleted) {
            this.showAlert('warning', 'Bitte schließen Sie alle Module ab, um ein Zertifikat zu erhalten.');
            return;
        }
        
        const averageScore = Object.values(this.moduleProgress).reduce((sum, m) => sum + m.score, 0) / this.totalModules;
        const completionDate = new Date().toLocaleDateString('de-DE');
        const studentName = this.getStudentName();
        
        this.createCertificatePDF(studentName, completionDate, Math.round(averageScore));
    }
    
    getStudentName() {
        let name = localStorage.getItem('studentName');
        if (!name) {
            name = prompt('Bitte geben Sie Ihren Namen für das Zertifikat ein:');
            if (name) {
                localStorage.setItem('studentName', name);
            } else {
                name = 'Kursteilnehmer/in';
            }
        }
        return name;
    }
    
    createCertificatePDF(studentName, completionDate, averageScore) {
        // Create certificate content
        const certificateContent = `
            <div style="width: 800px; height: 600px; margin: 0 auto; padding: 60px; border: 5px solid #8B1538; background: white; font-family: 'Segoe UI', sans-serif; text-align: center;">
                <div style="border: 2px solid #E91E63; padding: 40px; height: 100%;">
                    <h1 style="color: #8B1538; font-size: 36px; margin-bottom: 30px;">ZERTIFIKAT</h1>
                    <h2 style="color: #E91E63; font-size: 24px; margin-bottom: 40px;">Erfolgreiche Teilnahme</h2>
                    
                    <p style="font-size: 18px; margin-bottom: 30px;">Hiermit wird bescheinigt, dass</p>
                    
                    <h3 style="color: #8B1538; font-size: 28px; margin: 30px 0; border-bottom: 2px solid #E91E63; padding-bottom: 10px;">${studentName}</h3>
                    
                    <p style="font-size: 18px; margin-bottom: 20px;">den Lernkurs</p>
                    
                    <h4 style="color: #E91E63; font-size: 22px; margin: 20px 0;">"Grundlagen der LLM/AI-Verwendung in der Medizin"</h4>
                    
                    <p style="font-size: 16px; margin: 30px 0;">erfolgreich abgeschlossen hat.</p>
                    
                    <div style="display: flex; justify-content: space-between; margin-top: 60px; font-size: 14px;">
                        <div>
                            <p>Datum: ${completionDate}</p>
                            <p>Durchschnittliche Punktzahl: ${averageScore}%</p>
                        </div>
                        <div>
                            <p style="border-top: 1px solid #8B1538; padding-top: 10px; margin-top: 30px;">Christian Elsner</p>
                            <p style="font-style: italic;">Dozent & Kursersteller</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Create a new window for printing
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Kurszertifikat - ${studentName}</title>
                <style>
                    body { margin: 0; padding: 20px; }
                    @media print {
                        body { margin: 0; }
                        .no-print { display: none; }
                    }
                </style>
            </head>
            <body>
                ${certificateContent}
                <div class="no-print" style="text-align: center; margin-top: 20px;">
                    <button onclick="window.print()" style="padding: 10px 20px; background: #8B1538; color: white; border: none; border-radius: 5px; cursor: pointer;">Zertifikat drucken/speichern</button>
                    <button onclick="window.close()" style="padding: 10px 20px; background: #E91E63; color: white; border: none; border-radius: 5px; cursor: pointer; margin-left: 10px;">Schließen</button>
                </div>
            </body>
            </html>
        `);
        printWindow.document.close();
    }
    
    saveProgress() {
        const progressData = {
            currentModule: this.currentModule,
            moduleProgress: this.moduleProgress,
            courseStartTime: this.courseStartTime,
            lastSaved: new Date().toISOString()
        };
        
        localStorage.setItem('llm-medicine-course-progress', JSON.stringify(progressData));
    }
    
    loadProgress() {
        const savedProgress = localStorage.getItem('llm-medicine-course-progress');
        if (savedProgress) {
            try {
                const progressData = JSON.parse(savedProgress);
                this.currentModule = progressData.currentModule || 1;
                this.moduleProgress = progressData.moduleProgress || this.moduleProgress;
                this.courseStartTime = progressData.courseStartTime;
            } catch (e) {
                console.error('Error loading progress:', e);
            }
        }
    }
    
    resetProgress() {
        if (confirm('Möchten Sie wirklich den gesamten Kursfortschritt zurücksetzen?')) {
            localStorage.removeItem('llm-medicine-course-progress');
            localStorage.removeItem('studentName');
            location.reload();
        }
    }
    
    exportProgress() {
        const progressData = {
            currentModule: this.currentModule,
            moduleProgress: this.moduleProgress,
            courseStartTime: this.courseStartTime,
            exportDate: new Date().toISOString()
        };
        
        const dataStr = JSON.stringify(progressData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = 'kurs-fortschritt.json';
        link.click();
    }
}

// Utility functions
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function showChatGPTNotice() {
    const notice = document.createElement('div');
    notice.className = 'alert alert-info';
    notice.innerHTML = `
        <h4>Hinweis zu ChatGPT</h4>
        <p>Für die interaktiven Case Studies in diesem Kurs benötigen Sie einen kostenlosen ChatGPT-Account. 
        Bitte registrieren Sie sich unter <a href="https://chat.openai.com" target="_blank" class="external-link">chat.openai.com</a>, 
        falls Sie noch keinen Account haben.</p>
    `;
    
    const container = document.querySelector('.container');
    if (container) {
        container.insertBefore(notice, container.firstChild);
    }
}

// Initialize course when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.courseManager = new CourseManager();
    showChatGPTNotice();
    
    // Add smooth scrolling to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Export for global access
window.CourseManager = CourseManager;

