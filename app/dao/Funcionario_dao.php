<?php

namespace App\DAO;
use App\Models\Funcionario;

class Funcionario_dao extends ConnectionDB
{
    public function __construct()
    {
        parent::__construct();
    }

    public function Select (): array
    {
        $funcionario = $this->pdo
            ->query ('SELECT
                id_funcionario,
                id_restaurante,
                id_utilizador
                From Funcionario;')
            ->fetchAll(\PDO::FETCH_ASSOC);

        return $funcionario;
    }

    public function Insert (Funcionario $funcionario): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO Funcionario values(
            null,
            :id_restaurante,
            :id_utilizador
        );');
        $statement->execute([
            'id_restaurante' => $funcionario->getid_restaurante(),
            'id_utilizador' => $funcionario->getid_utilizador()
        ]);
    }

    public function Update (Funcionario $funcionario): void
    {
        $statement = $this->pdo
            ->prepare('UPDATE Funcionario set id_restaurante=:id_restaurante and id_utilizador=:id_utilizador Where id_funcionario=:id_funcionario');
        $statement->execute([
            'id_funcionario' => $funcionario->getid_funcionario(),
            'id_restaurante' => $funcionario->getid_restaurante(),
            'id_utilizador' => $funcionario->getid_utilizador()
        ]);
    }

    public function Delete (Funcionario $funcionario): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM Funcionario WHERE id_funcionario = :id_funcionario');
       
        $statement->execute([
            'id_funcionario' => $funcionario -> getid_funcionario()
        ]);
    }       
}
?>