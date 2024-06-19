FROM node:20-alpine AS build


# create a user with permissions to run the app
# -S -> create a system user
# -G -> add the user to a group
# This is done to avoid running the app as root ( root user )
# If the app is run as root, any vulnerability in the app can be exploited to gain access to the host system
# It's a good practice to run the app as a non-root user
RUN addgroup app && adduser -S -G app app

# set the user to run the app
USER app

WORKDIR /app

# copy package.json and package-lock.json to the working directory
# This is done before copying the rest of the files to take advantage of Docker’s cache
# If the package.json and package-lock.json files haven’t changed, Docker will use the cached dependencies
COPY package*.json ./

# sometimes the ownership of the files in the working directory is changed to root
# and thus the app can't access the files and throws an error -> EACCES: permission denied
# to avoid this, change the ownership of the files to the root user
# 작업 디렉토리 ( /app )의 권한을 변경하기 위해서 임시로 root유저로 변경 ( app -> root )
USER root

# change the ownership of the /app directory to the app user
# chown -R <user>:<group> <directory>
# chown command changes the user and/or group ownership of for given file.
# 루트 유저로 변경 후, /app 디렉토리의 권한 변경
RUN chown -R app:app .

# change the user back to the app user
# 다시 app유저로 변경
USER app

# install dependencies
RUN npm install

# Copy all files and build the app
COPY . .
RUN npm run build

# Step 2: Serve the application using Nginx
FROM nginx:alpine


# Copy the build output to Nginx's static files directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]