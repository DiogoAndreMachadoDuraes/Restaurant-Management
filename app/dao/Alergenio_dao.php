<?php

namespace App\DAO;

use App\Models\Alergenio;

class Alergenio_dao extends ConnectionDB
{
    public function __construct ()
    {
        parent::__construct();
    }

    public function Select (): array
    {
        $alergenio = $this->pdo
            ->query ('SELECT
                id_alergenio,
                tipo,
                descricao
            From Alergenio;')
        ->fetchAll (\PDO::FETCH_ASSOC);

        return $alergenio;
    }

    public function Insert (Alergenio $alergenio): void
    {
        $statement = $this->pdo
            ->prepare ('INSERT INTO Alergenio values(
                :id_alergenio,
                :tipo,
                :descricao
            );');
        $statement->execute([
            'id_alergenio' => $alergenio->getid_alergenio(),
            'tipo' => $alergenio->gettipo(),
            'descricao' => $alergenio->getdescricao()
        ]);
    }

    public function Update (Alergenio $alergenio): void
    {
        $statement = $this->pdo
            ->prepare('UPDATE Aergenio set tipo=:tipo and descricao=:descricao Where id_alergenio=:id_alergenio');
        $statement->execute([
            'id_alergenio' => $alergenio->getid_alergenio(),
            'tipo' => $alergenio->gettipo(),
            'descricao' => $alergenio->getdescricao()
        ]);
    }

    public function Delete (int $id_alergenio): void
    {
        $statement = $this->pdo
            ->prepare ('DELETE FROM Alergenio WHERE id_alergenio = :id_alergenio');
        $statement->execute([
            'id_alergenio' => $id_alergenio
        ]);
    }  
}
?>