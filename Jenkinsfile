pipeline {
    agent { docker {
            image 'node:14.4'
            args '-p 9000:9000'
        } }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deliver') {
            steps {
                sh './ci/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './ci/scripts/kill.sh'
            }
        }
    }
}