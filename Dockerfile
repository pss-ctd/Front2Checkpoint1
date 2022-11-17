# latest nginx
FROM nginx:latest
# copy project files to nginx
COPY . /usr/share/nginx/html
# expose port 82
EXPOSE 82
# run nginx
CMD ["nginx", "-g", "daemon off;"]