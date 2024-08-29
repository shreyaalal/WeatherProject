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
                bat '''
                git clone https://github.com/shreyaalal/WeatherProject.git
                cd WeatherProject
                '''
            }
        }
        stage('thirdjob') {
            steps {
                bat '''type nul > sample1.txt
                git add .
                git commit -m "first commit!"
                git push
                '''
            }
        }
    }
}
