pipeline {
    agent any
    
    stages {
        stage('linter') {
            steps {
                sh 'npm run ./sum.test.js'
            }
        }
        stage('test') {
            steps {
                sh 'npm run test'
            }
     
    }
}
}