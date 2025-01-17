// Armazena as respostas corretas para cada pergunta
const correctAnswers = {
    q1: '32', // Pergunta 1
    q2: '42', // Pergunta 2
    q3: '48', // Pergunta 3
    q4: '7',  // Pergunta 4
    q5: '5',  // Pergunta 5
    q6: 'Brasília', // Pergunta 6
    q7: '160', // Pergunta 7
    q8: '2/3'  // Pergunta 8
};

// Armazena as respostas do usuário
let userAnswers = {};

// Função para mostrar a próxima pergunta
function nextQuestion(questionNumber) {
    var currentQuestion = document.getElementById('q' + (questionNumber - 1));
    var nextQuestion = document.getElementById('q' + questionNumber);
    
    // Ocultar a pergunta atual
    currentQuestion.classList.add('hidden');
    // Exibir a próxima pergunta
    nextQuestion.classList.remove('hidden');
}

// Função para calcular a pontuação
function calculateScore() {
    let score = 0;

    // Verifica as respostas do usuário
    for (let question in correctAnswers) {
        let userAnswer = userAnswers[question];
        if (userAnswer === correctAnswers[question]) {
            score++;
        }
    }

    // Exibe a pontuação
    alert('Sua pontuação é: ' + score + ' de ' + Object.keys(correctAnswers).length);

    // Exibe o Dashboard após a pontuação
    showDashboard(score);
}

// Função para armazenar a resposta do usuário
function saveAnswer(question, answer) {
    userAnswers[question] = answer;
}

// Função para exibir o Dashboard com a pontuação
function showDashboard(score) {
    // Esconde o quiz
    document.querySelector('.quiz-container').style.display = 'none';

    // Exibe o dashboard
    const dashboard = document.getElementById('dashboard');
    dashboard.style.display = 'block';

    // Exemplo de como usar o Chart.js para exibir a pontuação no gráfico
    const ctx = document.getElementById('scoreChart').getContext('2d');
    const scoreChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sua Pontuação'],
            datasets: [{
                label: 'Pontuação',
                data: [score],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        }
    });
}

// Função para reiniciar o quiz
function resetQuiz() {
    // Esconde o dashboard
    document.getElementById('dashboard').style.display = 'none';
    
    // Exibe o quiz novamente
    document.querySelector('.quiz-container').style.display = 'block';
    
    // Reinicia as perguntas
    const questions = document.querySelectorAll('.question');
    questions.forEach(function(question) {
        question.classList.add('hidden');
    });
    
    // Exibe a primeira pergunta
    document.getElementById('q1').classList.remove('hidden');

    // Limpa as respostas do usuário
    userAnswers = {};
}

// Função para configurar gráficos com Chart.js
function setupCharts() {
    const ctx1 = document.getElementById('scoreChart').getContext('2d');
    const ctx2 = document.getElementById('distributionChart').getContext('2d');
    const ctx3 = document.getElementById('performanceChart').getContext('2d');
    const ctx4 = document.getElementById('skillRadarChart').getContext('2d');
    const ctx5 = document.getElementById('accuracyChart').getContext('2d');

    // Gráfico de Pontuação
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Pergunta 1', 'Pergunta 2', 'Pergunta 3', 'Pergunta 4', 'Pergunta 5'],
            datasets: [{
                label: 'Pontuação',
                data: [8, 6, 9, 7, 10],
                borderColor: '#ff6f61',
                backgroundColor: 'rgba(255, 111, 97, 0.2)',
                fill: true,
                tension: 0.4,
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 14
                        },
                        color: '#ffffff'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ffffff'
                    }
                },
                y: {
                    ticks: {
                        color: '#ffffff'
                    }
                }
            }
        }
    });

    // Gráfico de Distribuição
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Rápido', 'Médio', 'Lento'],
            datasets: [{
                label: 'Distribuição',
                data: [40, 35, 25],
                backgroundColor: '#6c5ce7',
                borderColor: '#6c5ce7',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 14
                        },
                        color: '#ffffff'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ffffff'
                    }
                },
                y: {
                    ticks: {
                        color: '#ffffff'
                    }
                }
            }
        }
    });

    // Gráfico de Performance
    new Chart(ctx3, {
        type: 'radar',
        data: {
            labels: ['Velocidade', 'Precisão', 'Criatividade', 'Raciocínio Lógico'],
            datasets: [{
                label: 'Performance',
                data: [8, 7, 9, 8],
                borderColor: '#00cec9',
                backgroundColor: 'rgba(0, 206, 201, 0.3)',
                borderWidth: 3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 14
                        },
                        color: '#ffffff'
                    }
                }
            }
        }
    });

    // Gráfico Radar de Habilidades
    new Chart(ctx4, {
        type: 'radar',
        data: {
            labels: ['Matemática', 'Raciocínio Lógico', 'Criatividade', 'Memória'],
            datasets: [{
                label: 'Habilidades',
                data: [7, 9, 6, 8],
                borderColor: '#fab1a0',
                backgroundColor: 'rgba(250, 177, 160, 0.4)',
                borderWidth: 3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 14
                        },
                        color: '#ffffff'
                    }
                }
            }
        }
    });

    // Gráfico de Acuracidade
    new Chart(ctx5, {
        type: 'pie',
        data: {
            labels: ['Acertos', 'Erros'],
            datasets: [{
                data: [75, 25],
                backgroundColor: ['#28a745', '#dc3545'],
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 14
                        },
                        color: '#ffffff'
                    }
                }
            }
        }
    });
}

// Chama a função para inicializar os gráficos
setupCharts();

