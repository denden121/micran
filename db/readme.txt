sudo docker rm -f $(sudo docker ps -a -q)
sudo docker volume prune
sudo docker-compose up -d
cat path/to/postgres-20200805-044934.sql | sudo docker exec -i micran_db_1 psql -U postgres -d postgres
