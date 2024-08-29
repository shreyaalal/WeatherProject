pipeline {
    agent any

    stages {
        stage('cloning') {
            steps {
                withCredentials([string(credentialsId: 'github-token-id', variable: 'GITHUB_TOKEN')]) {
                    bat '''
                    REM Set the folder name and repository URL
                    set "FOLDER_NAME=weatherapi"
                    set "REPO_URL=https://github.com/shreyaalal/WeatherProject.git"
                    
                    REM Check if the folder exists
                    if exist "%FOLDER_NAME%" (
                        echo Removing existing folder "%FOLDER_NAME%"...
                        rmdir /s /q "%FOLDER_NAME%"
                    )
                    
                    REM Clone the repository
                    echo Cloning repository from "%REPO_URL%"...
                    git clone "%REPO_URL%" "%FOLDER_NAME%"
                    '''
                }
            }
        }

        stage('version update') {
            steps {
                bat '''
                @echo off
                setlocal
                
                REM Change directory to weatherapi
                cd weatherapi
                
                REM Set the version file name
                set "NUMBER_FILE=version.txt"
                
                REM Read the number from the file
                set /p number=<"%NUMBER_FILE%"
                
                REM Increment the number
                set /a number+=1
                
                REM Write the new number back to the file
                echo %number% > "%NUMBER_FILE%"
                
                echo Version number updated to %number%.
                
                endlocal
                '''
            }
        }

        stage('push version') {
            steps {
                withCredentials([string(credentialsId: 'github-token-id', variable: 'GITHUB_TOKEN')]) {
                    bat '''
                    cd empfrontend
                    git config --global user.email "shreyalal2025@gmail.com"
                    git config --global user.name "Shreya Lal"
                    git checkout main
                    git pull
                    git add .
                    git commit -m "update version"
                    git push https://%GITHUB_TOKEN%@github.com/shreyaalal/WeatherProject.git
                    '''
                }
            }
        }
    }
}
