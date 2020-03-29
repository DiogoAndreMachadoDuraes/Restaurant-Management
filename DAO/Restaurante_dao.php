<?php

namespace App\DAO;
use App\Models\RestauranteModel;
use App\DAO\ConnectionDB;

class Restaurante_dao extends ConnectionDB
{
    public function_construct()
    {
        parent::_construct();
    }

    public function Select(): array
    {
        $restaurante = $this->pdo
        ->query ('SELECT
        id_restaurante,
        nome,
        localizacao,
        telefone,
        email
    From restautante;')
        fetchAll(\PDO::FETCH_ASSOC);

        return $restaurante;
    }

    public function Insert (RestauranteModel $restaurante): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO restaurante values(
            :id_restaurante,
            :nome,
            :localizacao,
            :telefone,
            :email
        );');
        $statement->execute([
            'id_restaurante' => $id_alerge->getId_restaurante(),
            'nome' => $tipo->getNome(),
            'localizacao' = $localizacao->getLocalizacao()
            'telefone' = $telefone->getTelefone()
            'email' = $email->getEmail()
        ])
    }

    public function Update (RestauarnteModel $restaurante): int
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO restaurante values(
            :id_restaurante,
            :nome,
            :localizacao,
            :telefone,
            :email
        );');
        $statement->execute([
            'id_restaurante' => $id_restaurante->getId_restaurante(),
            'nome' => $nome->getNome(),
            'localizacao' = $localizacao->getLocalizacao()
            'telefone' = $telefone->getTelefone()
            'email' = $email->getEmail()
        ])
    }


    public function Delete (int $id_restaurante)
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM restaurante WHERE id_restaurate = :id_restaurante');
       
        $statement->execute([
            'id_restaurante' => $id_restaurante ()
            ]);
    }
        
}
