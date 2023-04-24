pipeline {
  agent any

  stages {
    stage('linter') {
      steps {
        sh 'npm run lint' // Ejecuta el linter sobre el proyecto
      }
    }
    stage('test') {
      steps {
        sh 'npm run test' // Ejecuta los tests de Jest del proyecto
      }
    }
  }
}