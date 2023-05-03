pipeline {
    agent any
    
    triggers {
    pollSCM('*/5 * * * *')
}
  environment {
        resultadoSuma = ''
        resultadoResta = ''
    }
   
 
    parameters {
        string(name: 'suma', defaultValue: '', description: '¿Cuanto es 1+1?')
        string(name: 'resta', defaultValue: '', description: '¿ Y 2-1?')
    }
   
    stages {
        stage('Suma') {
            steps {
                script {
                    def result = bat(script: "node jenkinsScript/suma.js " + params.suma, returnStdout: true).trim()
                    if (result == "correcto") {
                         resultadoSuma = "correcto"
                    } else {
                        resultadoSuma = "incorrecto"
                    }
                }
            }
        }
        stage('Resta') {
            steps {
                script {
                    def result = bat(script: "node jenkinsScript/resta.js " + params.resta, returnStdout: true).trim()
                    if (result == "correcto") {
                        resultadoResta = "correcto"
                    } else {
                       resultadoResta = "incorrecto"
                    }
                }
            }
        }
        stage('Resultado') {
            steps {
                script {
                    if ( resultadoSuma == "incorrecto" &&  resultadoResta == "incorrecto") {
                        echo "Esto pinta muy mal"
                      } else if ( resultadoSuma == "correcto" &&  resultadoResta == "correcto") {
                        echo "El proyecto va viento en popa!!!"
                    } else {
                        echo "Alguna de las dos stages ha fallado"
                    }
                }
            }
        }
    }
}