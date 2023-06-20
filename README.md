# Portable-GOV-UK-Prototyping-Kit
##Overview
A portable instance of the GOV UK Prototyping Toolkit that can run on Windows hosts (no installation pre-requisites) or in a node-based docker container

##Docker builds
To build a custom docker images based on the assets directory please follow the steps outlined below (commands assume you are currently in the Portable-GOV-UK-Prototyping-Kit directory)

1. Elevate to root or a user belonging to the docker group
2. Clear any existing assets: rm -R -f /srv/Portable-GOV-UK-Prototyping-Kit 
3. Stop and remove existing containers if they exist: docker stop gov-uk-prototyping-toolkit || true && docker rm gov-uk-prototyping-toolkit || true
4. Remove your old docker image: docker rmi gov-uk-prototyping-toolkit:5.1 || true
5. Copy assets to working directory for improving build context transfer timings: cp -R ../Portable-GOV-UK-Prototyping-Kit /srv && cd /srv/Portable-GOV-UK-Prototyping-Kit
6. Build your custom docker image: docker build -t gov-uk-prototyping-toolkit:5.1 .
7. Launch a container based your custom image: docker run -d -p 8082:3000 --name gov-uk-prototyping-toolkit gov-uk-prototyping-toolkit:5.1

For ease of running the above commands in quick succession, copy the below to your clipboard and paste them into a terminal to semi-automate the process:

```
rm -R -f /srv/Portable-GOV-UK-Prototyping-Kit
docker stop gov-uk-prototyping-toolkit || true && docker rm gov-uk-prototyping-toolkit || true
docker rmi gov-uk-prototyping-toolkit:5.1 || true
cp -R ../Portable-GOV-UK-Prototyping-Kit /srv && cd /srv/Portable-GOV-UK-Prototyping-Kit
docker build -t gov-uk-prototyping-toolkit:5.1 .
docker run -d -p 8082:3000 --name gov-uk-prototyping-toolkit gov-uk-prototyping-toolkit:5.1
```

###Docker mount
During development if you want to mount an external volume to reflect changes into your Docker container quickly, you can simply map a directory on your host to your container's /usr/src/prototyping_kit/app folder. An example command for doing this has been provided below.

```
docker run -d -p 8082:3000 --name gov-uk-prototyping-toolkit -v /media/sf_vboxshare/Portable-GOV-UK-Prototyping-Kit/assets/app:/usr/src/prototyping_kit/app gov-uk-prototyping-toolkit:5.1
```# informed-testing-masterclass
