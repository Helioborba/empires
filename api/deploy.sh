docker build -t "gaborba2100e404/alpine-dev-api" ./
docker push gaborba2100e404/alpine-dev-api; 
docker tag gaborba2100e404/alpine-dev-api registry.heroku.com/alpine-dev-api/web
docker push registry.heroku.com/alpine-dev-api/web;
heroku container:release web --app alpine-dev-api; 
# docker push gaborba2100e404/docker_api;
# docker push registry.heroku.com/$HEROKU_API/web; 
# heroku container:release web --app $HEROKU_API; 
# docker push gaborba2100e404/docker_nginx; 
# docker push registry.heroku.com/$HEROKU_NGINX/web;
# heroku container:release web --app $HEROKU_NGINX;