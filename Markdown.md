# Utilizando init.sh

Este script foi criado para facilitar a criação dos módulos no seu projeto NestJS, incluindo controller, module, dto, entity e service.


## Dar Permissão ao Script

Antes de utilizar o script, você precisa garantir que ele tenha permissão de execução. Execute o seguinte comando no seu terminal:

```bash
chmod +x ./init.sh
```

Isso garante que o script possa ser executado corretamente.

## Criar Módulos Nest

Você pode utilizar o script para criar os módulos automaticamente. Para criar todos os componentes (controller, module, dto, entity, service) de um módulo, execute o seguinte comando:

```bash
./init.sh criarTudo
```

Apos executado, ira gerar 3 perguntas em sequencia.

1. Nome do arquivo (nome da sua escolha);
2. Transport Layer (Por padrão vamos usar o rest api);
3. Se deseja criar o crud automaticamente;
