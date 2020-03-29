<?php

namespace App\DAO;
use App\Models\FuncionarioModel;
use App\DAO\ConnectionDB;

class Funcionario_dao extends ConnectionDB
{
    public function_construct()
    {
        parent::_construct();
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
        fetchAll(\PDO::FETCH_ASSOC);

        return $funcionario;
    }

    public function Insert (FuncionarioModel $funcionario): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO funcionario values(
            :id_funcionario,
            :nome,
            :telefone,
            :email
        );');
        $statement->execute([
            'id_funcionario' => $id_funcionario->getId_funcionario(),
            'nome' => $nome->getNome(),
            'telefone' = $telefone->getTelefone(),
            'email' = $email->getEmail()
        ])
    }

    public function Update (FuncionarioModel $funcionario): int
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO funcionario values(
            :id_funcionario,
            :nome,
            :telefone,
            :email
        );');
        $statement->execute([
            'id_funcionario' => $id_funcionario->getId_funcionario(),
            'nome' => $nome->getNome(),
            'telefone' = $telefone->getTelefone(),
            'email' = $email->getEmail()
        ])
    }


    public function Delete (int $id_funcionario)
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM funcionario WHERE id_funcionario = :id_funcionario');
       
        $statement->execute([
            'id_funcionario' => $id_funcionario ()
            ]);
    }
        
}
