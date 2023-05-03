pipeline {
    agent any
    
    triggers {
    pollSCM('*/5 * * * *')
}
   
 
    parameters {
        string(name: 'suma', defaultValue: '', description: '¿Cuanto es 1+1?')
        string(name: 'resta', defaultValue: '', description: '¿ Y 2-1?')
    }
    environment {
        ResultadoSuma = ''
        ResultadoResta = ''
    }
    stages {
        stage('Suma') {
            steps {
                script {
                    def result = bat(script: "node jenkinsScript/suma.js ${params.suma}", returnStdout: true).trim()
                    if (result == "correcto") {
                         ResultadoSuma = "correcot"
                    } else {
                        ResultadoSuma = "incorrecto"
                    }
                }
            }
        }
        stage('Resta') {
            steps {
                script {
                    def result = bat(script: "node jenkinsScript/resta.js ${params.resta}", returnStdout: true).trim()
                    if (result == "correcto") {
                        ResultadoResta = "correcto"
                    } else {
                       ResultadoResta = "incorrecto"
                    }
                }
            }
        }
        stage('Resultado') {
            steps {
                script {
                    if ( ResultadoSuma == "incorrecto" &&  ResultadoResta == "incorrecto") {
                        echo "Esto pinta muy mal"
                      } else if ( ResultadoSuma == "correcto" &&  ResultadoResta == "correcto") {
                        echo "El proyecto va viento en popa!!!"
                    } else {
                        echo "Alguna de las dos stages ha fallado"
                    }
                }
            }
        }
    }
}