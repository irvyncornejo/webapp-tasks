FROM node:18.16.0

WORKDIR /app-front

COPY package.json ./
RUN npm install --save-dev vite
RUN npm install --force

ENV PATH="./node_modules/.bin:$PATH"
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
