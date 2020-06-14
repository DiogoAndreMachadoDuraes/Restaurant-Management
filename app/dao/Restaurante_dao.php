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
                rua,
                codigo_postal,
                localizacao,
                telefone,
                email,
                fotografia
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
            :rua,
            :codigo_postal,
            :localizacao,
            :telefone,
            :email,
            :fotografia
        );');
        $statement->execute([
            'id_restaurante' => $restaurante->getid_restaurante(),
            'nome' => $restaurante->getnome(),
            'rua' => $restaurante->getrua(),
            'codigo_postal' => $restaurante->getcodigo_postal(),
            'localizacao' => $restaurante->getlocalizacao(),
            'telefone' => $restaurante->gettelefone(),
            'email' => $restaurante->getemail(),
            'fotografia' => $restaurante->getfotografia()
        ]);
    }

    public function Update (Restaurante $restaurante): void
    {
        $statement = $this->pdo
          ->prepare('UPDATE Restaurante set nome=:nome and localizacao=:localizacao and telefone=:telefone and email=:email Where id_restaurante=:id_restaurante');
        $statement->execute([
            'id_restaurante' => $restaurante->getid_restaurante(),
            'nome' => $restaurante->getnome(),
            'rua' => $restaurante->getrua(),
            'codigo_postal' => $restaurante->getcodigo_postal(),
            'localizacao' => $restaurante->getlocalizacao(),
            'telefone' => $restaurante->gettelefone(),
            'email' => $restaurante->getemail(),
            'fotografia' => $restaurante->getfotografia()
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