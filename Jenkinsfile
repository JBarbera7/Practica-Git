pipeline {
  agent any
  
  parameters {
    string(name: 'persona_a_saludar', defaultValue: 'Mundo', description: 'La persona a saludar')
  }
  
  stages {
    stage('execution') {
      steps {
        bat 'node index.js --persona_a_saludar="${params.persona_a_saludar}"'
      }
    }
  }
}