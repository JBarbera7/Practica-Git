pipeline {
    agent any
   
    parameters {
        string(name: 'persona_a_saludar', defaultValue: 'Mundo', description: 'Persona a saludar')
    }
    stages {
        stage('Non-Parallel Stage') {
            steps {
                bat "node index.js ${params.persona_a_saludar}"
            }
        }
        stage('Parallel Stage') {
            failFast true
            parallel {
                stage('Branch A') {
                    agent any
                    steps {
                        echo "Hola desde la rama A"
                    }
                }
                stage('Branch B') {
                    agent any
                    steps {
                        echo "Hola desde la rama b"
                    }
                }
            }
        }
    }
}
