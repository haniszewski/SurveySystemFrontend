FROM debian:bookworm

ENV SHELL=/bin/bash

WORKDIR /app

COPY . /app

RUN apt update && \
    apt upgrade -y && \
    apt install -y ca-certificates curl gnupg && \
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg && \
    echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_18.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list && \
    apt update && \
    apt install -y nodejs && \
    npm install -g pnpm && \
    pnpm i && pnpm build

EXPOSE 3000

CMD ["npm","run" ,"start","--","-H","0.0.0.0"]
