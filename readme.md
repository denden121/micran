#Readme
 Для развертывания проекта нужно: 
  
    1.Запустить сборку Docker контейнеров командой. 
    docker-compose up --build                                                                    >
    2. После сборки можно закрыть остановить работу 
    с помощью прерывания процесса (ctrl+c).
    3. Для удобства работы можно запустить в detach режиме с помощью команды
    docker-compose up -d
    4. Для заполнения бд тестовыми данными нужно использовать команду
    /path/to/sql_dump.sql |sudo docker exec -i micran_db_1 psql -U postgres -d postgres
  