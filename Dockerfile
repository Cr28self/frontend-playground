# set the base image to create the image for react app
# docker built -t( tag ) 
FROM node:21-alpine


# pnpm 설치
RUN npm install -g pnpm

# set the working directory to /app
WORKDIR /app

# copy package.json and package-lock.json to the working directory
# This is done before copying the rest of the files to take advantage of Docker’s cache
# If the package.json and package-lock.json files haven’t changed, Docker will use the cached dependencies
# 종속성 파일 복사 및 설치
COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install

# npm 설치 ( 이미지에 설치됨 )
RUN pnpm install

# copy the rest of the files to the working directory
# 나머지 전체 파일을 작업 디렉토리로 복사
COPY . .

# expose port 5173 to tell Docker that the container listens on the specified network ports at runtime
EXPOSE 5173

# command to run the app
CMD ["pnpm", "run", "dev"]