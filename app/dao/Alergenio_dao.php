<?php

namespace App\DAO;
use ConnectionDB;
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
                id_alerge,
                tipo,
                descricao
            From alergenio;')
        ->fetchAll (\PDO::FETCH_ASSOC);

        return $alergenio;
    }

    public function Insert (Alergenio $alergenio): void
    {
        $statement = $this->pdo
            ->prepare ('INSERT INTO alergenio values(
                :id_alerge,
                :tipo,
                :descricao
            );');
        $statement->execute([
            'id_alerge' => $alergenio->getId_alerge(),
            'tipo' => $alergenio->getTipo(),
            'descricao' => $alergenio->getDescricao()
        ]);
    }

    public function Update (Alergenio $alergenio): void
    {
        $statement = $this->pdo
            ->prepare ('UPDATE INTO alergenio values(
            :id_alerge,
            :tipo,
            :descricao
            );');
        $statement->execute([
            'id_alerge' => $alergenio->getId_alerge(),
            'tipo' => $alergenio->getTipo(),
            'descricao' => $alergenio->getDescricao()
        ]);
    }

    public function Delete (int $id_alerge): void
    {
        $statement = $this->pdo
            ->prepare ('DELETE FROM alergenio WHERE id_alerge = :id_alerge');
        $statement->execute([
            'id_alerge' => $id_alerge
        ]);
    }  
}
?>