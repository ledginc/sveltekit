FROM node:22-alpine AS sk-build
WORKDIR /usr/src/app

ARG TZ=Europe/Stockholm
ARG PUBLIC_HELLO

COPY package*.json ./
RUN apk --no-cache add curl tzdata
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN npm install

COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app

ARG TZ=Europe/Stockholm
RUN apk --no-cache add curl tzdata
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY --from=sk-build /usr/src/app/package.json /app/package.json
COPY --from=sk-build /usr/src/app/package-lock.json /app/package-lock.json
RUN npm install --only=production

COPY --from=sk-build /usr/src/app/build /app/build

EXPOSE 3000
CMD ["node", "build/index.js"]