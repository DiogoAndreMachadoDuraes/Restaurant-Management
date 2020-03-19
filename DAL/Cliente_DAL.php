<?php

    include_once 'Cliente.php';
    include_once 'DAL/ConectionDB.php';

    class Cliente_DAL
    {

        static public function CreateTable ()
        {
            $con=ConectionDB::Connect();
            $sql = "CREATE TABLE Cliente (Nif INT(9), Nome VARCHAR(40), Telefone VARCHAR(13), Email VARCHAR(50), Morada VARCHAR(60), PRIMARY KEY (Nif))";
            if ($con->query($sql) === TRUE) {
                echo "Tabela Cliente criada com sucesso";
            } else {
                echo "Erro a criar a tabela Cliente: " . $con->error;
            }
            $con->close();
        }

        static public function Insert($Nif, $Nome, $Telefone, $Email, $Morada)
        {
            $con=ConectionDB::Connect();
            $sql = ("INSERT INTO Cliente (Nif, Nome, Telefone, Email, Morada) VALUES ('$Nif', '$Nome', '$Telefone', '$Email', '$Morada')");
            if ($con->query($sql) === TRUE) {
                echo "Cliente criado com sucesso";
            } else {
                echo "Erro a criar Cliente: " . $sql . "<br>" . $con->error;
            }
            $con->close();
        }

        static public function Select()
        {
            $con=ConectionDB::Connect();
            $sql = "SELECT * FROM Cliente";
            $result = $con->query($sql);
            if (mysqli_num_rows($result) > 0) {
                // output data of each row
                while($row = mysqli_fetch_assoc($result)) {
                    echo "Nif: " . $row["Nif"]. " - Nome: " . $row["Nome"]. "- Telefone: " . $row["Telefone"]. "- Email: " . $row["Email"]. "- Morada: " . $row["Morada"]."<br>";
                }
            } else {
                echo "0 results";
            }
            $con->close();
        }

        static public function Update($Nif, $Nome, $Telefone, $Email, $Morada)
        {
            $con=ConectionDB::Connect();
            $sql = ("UPDATE Cliente SET Nome='$Nome', Telefone='$Telefone', Email='$Email', Morada='$Morada' WHERE Nif=$Nif");
            if ($con->query($sql) === TRUE) {
                echo "Cliente modificado com sucesso";
            } else {
                echo "Erro Cliente nao modificado: " . $sql . "<br>" . $con->error;
            }
            $con->close();
        }

        static public function Delete($Nif, $Nome, $Telefone, $Email, $Morada)
        {
            $con=ConectionDB::Connect();
            $sql = ("DELETE FROM Cliente WHERE Nif=$Nif");
            if ($con->query($sql) === TRUE) {
                echo "Cliente eliminado com sucesso";
            } else {
                echo "Erro Cliente nao eliminado: " . $sql . "<br>" . $con->error;
            }
            $con->close();
        }
    }
?>