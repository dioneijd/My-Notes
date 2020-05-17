# GIT COMMANDS

- Iniciar o controle do projeto via git
```
git init
```

- Adicionar o arquivo no stage de modificação
```
git add .
git add <nome do arquivo> 
```

- Mostrar os arquivos adicionados
```
git log 
```

- Mostrar os aruivos que foram modificados e os arquivos que foram modificados mais não estão adicionado na alteração
```
git status 
```

- Irá postar na branch todas as modificações
```
git commit -m "<mensagem da modificação>" 
```

- Adiciona os pontos na historia e comita ao mesmo tempo
```
git commit -am "<mensagem da modificação>" 
```

-
```
git show 
```

- Cria uma nova branch
```
git branch <NomeDaBranch> 
```

- Deletar a branch
```
git branch -D <NomeDaBranch> 
```

- Lista todas as branches
```
git branch 
```

- Altera para branch
```
git checkout <NomeDaBranch> 
```

- Cria uma nova branch e altera para essa branch
```
git checkout -b <NomeDaBranch> 
```

- Junta as branches, exemplo traz pra master a alterações de outra branch
```
git merge <NomeDaBranch> 
```

- Adiciona um novo repositorio remoto
```
git remote add origin <caminhoDoGitHub> 
```

- Lista todos o repositorios remotos
```
git remote -v 
```

- Fazer a primeira vez para criar o repositorio master no git hub
```
git push -u origin master 
```

- Empurra o projeto para git hub
```
git push 
```

- Baixa para o PC um projeto do git hub
```
git clone <caminhoDoGitHub> 
```

- Baixa para o PC um projeto do git hub, porem cria e baixa em uma nova pasta 
```
git clone <caminhoDoGitHub> <nomeDaNovaPasta> 
```

- 
```
git pull 
```
