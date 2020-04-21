<?php

namespace App\DAO;
use ConnectionDB;
use App\Models\Restaurante;

class Restaurante_dao extends ConnectionDB
{
    public function __construct()
    {
        parent::__construct();
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
       -> fetchAll(\PDO::FETCH_ASSOC);

        return $restaurante;
    }

    public function Insert (Restaurante $restaurante): void
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
            'id_restaurante' => $restaurante->getId_restaurante(),
            'nome' => $restaurante->getNome(),
            'localizacao' => $restaurante->getLocalizacao(),
            'telefone' => $restaurante->getTelefone(),
            'email' => $restaurante->getEmail()
        ]);
    }

    public function Update (Restaurante $restaurante): void
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
            'id_restaurante' => $restaurante->getId_restaurante(),
            'nome' => $restaurante->getNome(),
            'localizacao' => $restaurante->getLocalizacao(),
            'telefone' => $restaurante->getTelefone(),
            'email' => $restaurante->getEmail()
        ]);
    }

    public function Delete (int $id_restaurante): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM restaurante WHERE id_restaurate = :id_restaurante');
       
        $statement->execute([
            'id_restaurante' => $id_restaurante
            ]);
    }    
}
?>