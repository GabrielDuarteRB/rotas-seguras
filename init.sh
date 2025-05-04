#!/bin/bash

criarTudo() {
    echo "Criando recurso"
    docker exec -it api-policial sh -c "nest g resource --no-spec "
}

$1