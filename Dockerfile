FROM node

COPY package.json package.json
COPY index.js index.js

RUN npm install

EXPOSE 8080

CMD ["node", "index.js"]

