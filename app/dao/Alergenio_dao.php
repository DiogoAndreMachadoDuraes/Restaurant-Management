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
                descricao,
                id_extra,
                id_produto
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
                :descricao,
                :id_extra,
                :id_produto
            );');
        $statement->execute([
            'id_alergenio' => $alergenio->getid_alergenio(),
            'tipo' => $alergenio->gettipo(),
            'descricao' => $alergenio->getdescricao(),
            'id_extra'=>$alergenio->getid_extra(),
            'id_produto'=>$alergenio->getid_produto()
        ]);
    }

    public function Update (Alergenio $alergenio): void
    {
        $statement = $this->pdo
            ->prepare('UPDATE Alergenio set tipo=:tipo , descricao=:descricao , id_extra=:id_extra and id_produto=:id_produto Where id_alergenio=:id_alergenio');
        $statement->execute([
            'id_alergenio' => $alergenio->getid_alergenio(),
            'tipo' => $alergenio->gettipo(),
            'descricao' => $alergenio->getdescricao(),
            'id_extra'=>$alergenio->getid_extra(),
            'id_produto'=>$alergenio->getid_produto()
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