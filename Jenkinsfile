pipeline {
    agent any

    stages {
        stage('firstjob') {
            steps {
                echo 'Hello World-Dev'
            }
        }
        stage('secondjob') {
            steps {
                sh '''
                git clone https://github.com/shreyaalal/WeatherProject.git
                '''
            }
        }
        stage('thirdjob') {
            steps {
                sh '''touch sample1.txt
                git add .
                git commit -m "first commit!"
                git push
                '''
            }
        }
    }
}
