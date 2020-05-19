<?php

namespace App\DAO;

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
                From Restautante;')
            -> fetchAll(\PDO::FETCH_ASSOC);
        return $restaurante;
    }

    public function Insert (Restaurante $restaurante): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO Restaurante values(
            :id_restaurante,
            :nome,
            :localizacao,
            :telefone,
            :email
        );');
        $statement->execute([
            'id_restaurante' => $restaurante->getid_restaurante(),
            'nome' => $restaurante->getnome(),
            'localizacao' => $restaurante->getlocalizacao(),
            'telefone' => $restaurante->gettelefone(),
            'email' => $restaurante->getemail()
        ]);
    }

    public function Update (Restaurante $restaurante): void
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO Restaurante values(
            :id_restaurante,
            :nome,
            :localizacao,
            :telefone,
            :email
        );');
        $statement->execute([
            'id_restaurante' => $restaurante->getid_restaurante(),
            'nome' => $restaurante->getnome(),
            'localizacao' => $restaurante->getlocalizacao(),
            'telefone' => $restaurante->gettelefone(),
            'email' => $restaurante->getemail()
        ]);
    }

    public function Delete (int $id_restaurante): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM Restaurante WHERE id_restaurate = :id_restaurante');
       
        $statement->execute([
            'id_restaurante' => $id_restaurante
        ]);
    }    
}
?>