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
                id_funcionario
                From Funcionaio;')
            ->fetchAll(\PDO::FETCH_ASSOC);

        return $funcionario;
    }

    public function Insert (Funcionario $funcionario): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO Funcionario values(
            :id_funcionario
        );');
        $statement->execute([
            'id_funcionario' => $funcionario->getid_funcionario(),
        ]);
    }

    public function Update (Funcionario $funcionario): void
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO Funcionario values(
            :id_funcionario
        );');
        $statement->execute([
            'id_funcionario' => $funcionario->getid_funcionario(),
        ]);
    }

    public function Delete (int $id_funcionario): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM Funcionario WHERE id_funcionario = :id_funcionario');
       
        $statement->execute([
            'id_funcionario' => $id_funcionario()
        ]);
    }       
}
?>