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
                git config --global user.email "shreyalal2025@gmail.com"
                git config --global user.name "Shreya Lal"

                git commit -m "first commit!"
                git push
                '''
            }
        }
    }
}
