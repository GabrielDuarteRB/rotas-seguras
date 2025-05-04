#!/bin/bash

criarTudo() {
    echo "Criando recurso"
    docker exec -it api-policial sh -c "nest g resource --no-spec --skip-import"
}

$1