<?php

namespace App\DAO;

use App\Models\Administrador;

class Administrador_dao extends ConnectionDB
{
    public function __construct()
    {
        parent::__construct();
    }

    public function Select (): array
    {
        $administrador = $this->pdo
            ->query ('SELECT
                id_administrador
                From Administrador;')
            ->fetchAll(\PDO::FETCH_ASSOC);
        return $administrador;
    }

    public function Insert (Administrador $administrador): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO Administrador values(
            :id_administrador
        );');
        $statement->execute([
            'id_administrador' => $administrador->getid_administrador(),
        ]);
    }

    public function Update (Administrador $administrador): void
    {
        $statement = $this->pdo
            ->prepare('UPDATE Administrador Where id_administrador=:id_administrador');
        $statement->execute([
            'id_administrador' => $administrador->getid_administrador()
        ]);
    }

    public function Delete (int $id_administrador): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM Administrador WHERE id_administrador = :id_administrador');
       
        $statement->execute([
            'id_administrador' => $id_administrador
        ]);
    }    
}
?>