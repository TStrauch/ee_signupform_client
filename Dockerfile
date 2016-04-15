FROM nginx

RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN apt-get install -y git-all

# fix naming problem for node (symlink)
RUN ln -s /usr/bin/nodejs /usr/bin/node

RUN npm install -g npm

RUN npm install -g grunt-cli
RUN npm install -g bower

RUN mkdir /etc/nginx/logs && touch /etc/nginx/logs/static.log
ADD ./nginx.conf /etc/nginx/conf.d/default.conf

RUN mkdir /src
ADD ./src/package.json /src/package.json
ADD ./src/bower.json /src/bower.json
ADD ./src/.bowerrc /src/.bowerrc
ADD ./src/.jshintrc /src/.jshintrc
ADD ./src/Gruntfile.js /src/Gruntfile.js

WORKDIR /src

RUN npm install
RUN bower install --config.interactive=false --allow-root

ADD ./src/app /src/app
