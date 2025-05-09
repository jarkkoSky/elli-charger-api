FROM denoland/deno:2.1.5

WORKDIR /app

COPY . .
RUN deno cache main.ts

USER deno

CMD ["run", "--allow-net", "--allow-env", "--env-file", "--unsafely-ignore-certificate-errors", "main.ts"]