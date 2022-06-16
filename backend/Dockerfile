FROM node:alpine
RUN addgroup app && adduser -S -G app app
WORKDIR /app
COPY ./package*.json .
RUN npm install
COPY . . 
EXPOSE 4000
CMD ["npm", "start"] 
