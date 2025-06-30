FROM node:22-slim
WORKDIR /myapp
COPY index.js /myapp/index.js
RUN npm install express
CMD ["node", "/myapp/index.js"]
