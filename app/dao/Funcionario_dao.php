<?php

namespace App\DAO;
use App\Models\Funcionario;
use ConnectionDB;

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
        nome,
        telefone,
        email
    From funcionaio;')
       -> fetchAll(\PDO::FETCH_ASSOC);

        return $funcionario;
    }

    public function Insert (Funcionario $funcionario): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO funcionario values(
            :id_funcionario,
            :nome,
            :telefone,
            :email
        );');
        $statement->execute([
            'id_funcionario' => $funcionario->getId_funcionario(),
            'nome' => $funcionario->getNome(),
            'telefone' => $funcionario->getTelefone(),
            'email' => $funcionario->getEmail()
        ]);
    }

    public function Update (Funcionario $funcionario): void
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO funcionario values(
            :id_funcionario,
            :nome,
            :telefone,
            :email
        );');
        $statement->execute([
            'id_funcionario' => $funcionario->getId_funcionario(),
            'nome' => $funcionario->getNome(),
            'telefone' => $funcionario->getTelefone(),
            'email' => $funcionario->getEmail()
        ]);
    }

    public function Delete (int $id_funcionario): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM funcionario WHERE id_funcionario = :id_funcionario');
       
        $statement->execute([
            'id_funcionario' => $id_funcionario ()
            ]);
    }       
}
?>