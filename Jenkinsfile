#!/usr/bin/env groovy

node {
    stage('checkout') {
        checkout scm
    }

    stage('check java') {
        bat "java -version"
    }

    stage('clean') {
        bat "./gradlew clean --no-daemon"
    }

    stage('install tools') {
        bat "./gradlew yarn_install -PnodeInstall --no-daemon"
    }

    stage('backend tests') {
        try {
            bat "./gradlew test -PnodeInstall --no-daemon"
        } catch(err) {
            throw err
        } finally {
            junit '**/build/**/TEST-*.xml'
        }
    }

    stage('frontend tests') {
        try {
            bat "./gradlew yarn_test -PnodeInstall --no-daemon"
        } catch(err) {
            throw err
        } finally {
            junit '**/build/test-results/karma/TESTS-*.xml'
        }
    }

    stage('packaging') {
        bat "./gradlew bootRepackage -x test -Pprod -PnodeInstall --no-daemon"
        archiveArtifacts artifacts: '**/build/libs/*.war', fingerprint: true
    }


    def dockerImage
    stage('build docker') {
        bat "copy src/main/docker build/"
        bat "copy build/libs/*.war build/docker/"
        dockerImage = docker.build('todolist', 'build/docker')
    }

    stage('publish docker') {
        docker.withRegistry('https://registry.hub.docker.com', 'mggwxyz') {
            dockerImage.push 'latest'
        }
    }
}
