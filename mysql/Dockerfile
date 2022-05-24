FROM mysql:latest

# env do MYSQL
ENV MYSQL_ROOT_PASSWORD=secret
ENV MYSQL_DATABASE=inventario
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=password

# copiar o query dump < adicionar o seu proprio
COPY ./Dump20220503.sql  ./docker-entrypoint-initdb.d/Dump20220503.sql

EXPOSE 3306

# remover um bug causado pelo group by
RUN echo 'sql-mode= "STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION"' >> /etc/mysql/my.cnf



