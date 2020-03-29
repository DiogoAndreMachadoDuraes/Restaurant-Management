<?php

namespace App\DAO;
use App\Models\GestorModel;
use App\DAO\ConnectionDB;

class Gestor_dao extends ConnectionDB
{
    public function_construct()
    {
        parent::_construct();
    }

    public function Select (): array
    {
        $gestor = $this->pdo
        ->query ('SELECT
        id_gestor,
        nome,
        telefone,
        email
    From gestor;')
        fetchAll(\PDO::FETCH_ASSOC);

        return $gestor;
    }

    public function Insert (GestorModel $gestor): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO gestor values(
            :id_gestor,
            :nome,
            :telefone,
            :email
        );');
        $statement->execute([
            'id_gestor' => $id_gestor->getId_gestor(),
            'nome' => $nome->getNome(),
            'telefone' = $telefone->getTelefone(),
            'email' => $email->getEmail()
        ])
    }

    public function Update (GestorModel $gestor): int
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO gestor values(
           :id_gestor,
            :nome,
            :telefone,
            :email
        );');
        $statement->execute([
            'id_gestor' => $id_gestor->getId_gestor(),
            'nome' => $nome->getNome(),
            'telefone' = $telefone->getTelefone(),
            'email' => $email->getEmail()
        ])
    }


    public function Delete (int $id_gestor)
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM gestor WHERE id_gestor = :id_gestor');
       
        $statement->execute([
            'id_gestor' => $id_gestor
            ]);
    }
        
}
