FROM node:20
WORKDIR /server
COPY package*.json ./
RUN npm install --force
COPY ./ ./
CMD [ "npm", "run" , "dev" ]