<?php
require 'controleDeAcesso.php';
require 'conexao.php';

$stmt = $bd->query('SELECT id, nome FROM usuarios');

$stmt->execute();

echo "<a href='formUsuario.php'>+ Novo Usuário</a><br>
        <form method='post'>
        <table border='1'>
        <tr>
            <td>E-mail</td><td>Nome</td><td>&nbsp;</td><td>&nbsp;</td>
        </tr>";

while($reg = $stmt->fetch(PDO::FETCH_ASSOC)){

    echo "  <tr>
                <td>{$reg['id']}</td>
                <td>{$reg['nome']}</td>
                <td><button name='id' formaction='editarUsuario.php' 
                        value='{$reg['id']}'>Editar</button></td>
                <td><button name='id' formaction='apagarUsuario.php' 
                        value='{$reg['id']}'>Apagar</button></td>
            </tr>";
}

echo "<table></form><br><a href='index.php'>Menu</a>";