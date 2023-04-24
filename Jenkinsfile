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
    stage('deploy') {
      steps {
        sh 'npm run build' // Genera el build del proyecto
        sh 'npm install -g serve' // Instala serve
        sh 'serve -s build -l 3000 & disown' // Despliega la aplicación en el puerto 3000
      }
    }
  }
}