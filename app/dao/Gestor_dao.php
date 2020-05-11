<?php

namespace App\DAO;

use App\Models\Gestor;

class Gestor_dao extends ConnectionDB
{
    public function __construct()
    {
        parent::__construct();
    }

    public function Select (): array
    {
        $gestor = $this->pdo
            ->query ('SELECT
                id_gestor,
                nif_gestor
                From gestor;')
            ->fetchAll(\PDO::FETCH_ASSOC);
        return $gestor;
    }

    public function Insert (Gestor $gestor): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO gestor values(
            :id_gestor,
            :nif_gestor
        );');
        $statement->execute([
            'id_gestor' => $gestor->getId_gestor(),
            'nif_gestor' => $gestor->getNif_gestor()
        ]);
    }

    public function Update (Gestor $gestor): void
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO gestor values(
           :id_gestor,
           :nif_gestor
        );');
        $statement->execute([
            'id_gestor' => $gestor->getId_gestor(),
            'nif_gestor' => $gestor->getNif_gestor()
        ]);
    }

    public function Delete (int $id_gestor): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM gestor WHERE id_gestor = :id_gestor');
       
        $statement->execute([
            'id_gestor' => $id_gestor
        ]);
    }    
}
?>