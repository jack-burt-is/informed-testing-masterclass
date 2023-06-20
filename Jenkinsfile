stage('Pull latest source and archive'){
	node('master'){
		
		//Clean workspace before running build
		deleteDir()
	
		//Pull source from GIT
		git branch: 'master', credentialsId: 'git', url: 'https://github.com/InformedSolutions/Portable-GOV-UK-Prototyping-Kit' 
		
		//Stash all assets for use by docker node
		stash includes: '**/**', name: 'assets'
		
		//Archive GIT artifacts
		archiveArtifacts '**/**'
	}
}

stage ('Build docker image'){
	node('docker && release-candidate-utility'){
	
		//Unstash assets sourced on master
		unstash 'assets'
	
		//Remove any untagged images (i.e. intermediaries from prior builds)
		try{
			sh 'docker rmi $(docker images | grep "^<none>" | awk \'{print $3}\')'
		} catch (error){
			echo 'No images to remove'
		}
		
		//Remove any old images or containers
		sh 'docker stop gov-uk-prototyping-toolkit || echo \'No running gov-uk-prototyping-toolkit container to stop\''
		sh 'docker rm gov-uk-prototyping-toolkit || echo \'No existing gov-uk-prototyping-toolkit container to remove\''
		sh 'docker rmi gov-uk-prototyping-toolkit || echo \'No existing gov-uk-prototyping-toolkit image to remove\''
		
		//Build new image
		sh 'docker build -t gov-uk-prototyping-toolkit:5.1 .'
				
	}
}


stage ('Launch docker container'){
	node('docker && release-candidate-utility'){
		
	//Run container
	sh 'docker run -d -p 8099:3000 --name gov-uk-prototyping-toolkit gov-uk-prototyping-toolkit:5.1'
				
	}
}