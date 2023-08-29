# MemoryGame-WorldCup2022
Jogo da Memória desenvolvido com o tema copa do mundo de 2022 em HTML, CSS, JavaScript, PHP e banco de dados Aurora.

# Configuração do banco de dados
- Criar o banco com o nome MyDb, usuario root e senha vazia, caso alguma configuração seja diferente precisa alterar no `operations/connection.php`
- Criar tabela usuarios:
```
CREATE TABLE `usuarios` (
	`codigo` INT NOT NULL,
	`nome` VARCHAR(100) NOT NULL DEFAULT '',
	`data_nasc` DATE NOT NULL,
	`cpf` VARCHAR(14) NOT NULL DEFAULT '',
	`telefone` VARCHAR(15) NOT NULL DEFAULT '',
	`email` VARCHAR(100) NOT NULL DEFAULT '',
	`usuario` VARCHAR(50) NOT NULL DEFAULT '',
	`senha` VARCHAR(50) NOT NULL DEFAULT '',
	PRIMARY KEY (`codigo`)
);
```
- Criar tabela partidas:
```
CREATE TABLE `partidas` (
  `codigo` int(11) NOT NULL,
  `codigo_usuario` int(11) NOT NULL,
  `modo_jogo` int(11) NOT NULL,
  `tamanho_tabuleiro` int(11) NOT NULL,
  `tempo` varchar(10) NOT NULL,
  `data` date NOT NULL,
  `resultado` int(11) NOT NULL,
  `pontuacao` INT(10) NOT NULL,
  PRIMARY KEY (`codigo`),
  KEY `codigo_usuario` (`codigo_usuario`),
  CONSTRAINT `partidas_ibfk_1` FOREIGN KEY (`codigo_usuario`) REFERENCES `usuarios` (`codigo`)
) ;
```
Obs sobre a tabela partidas: 
- modo_jogo = 0-classico 1-contra o tempo
- resultado = 0-perdeu   1-ganhou

Iniciar o jogo no login.html

# Vídeo de Demonstração
youtu.be/bux9YYzLfyo
