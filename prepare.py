import os


path = os.getcwd().replace("\\","/")

handle = open("docker-compose.yamlx", "r")
data = handle.readlines() 
handle.close()


handle = open("docker-compose.yaml", "w")
for i in data:
    i = i.replace("{PATH}",path)
    handle.write(i) 
    




