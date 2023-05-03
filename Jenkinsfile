pipeline {
    agent any
   
    stages {
        stage('linter') {
            steps {
                bat 'npm run lint'
            }
        }
        stage('test') {
            steps {
                bat 'npm run test'
            }
        }
        stage('deploy') {
            steps {
                 bat 'node ./app.js'
            }
        }
    }
}