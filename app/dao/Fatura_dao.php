<?php

namespace App\DAO;

use App\Models\Fatura;

class Fatura_dao extends ConnectionDB
{
    public function __construct()
    {
        parent::__construct();
    }

    public function Select (): array
    {
        $fatura = $this->pdo
            ->query ('SELECT
                id_fatura,
                iva,
                taxa
            From fatura;')
        ->fetchAll (\PDO::FETCH_ASSOC);

        return $fatura;
    }
 
    public function Insert (Fatura $fatura): void
    { 
        $statement = $this->pdo
        ->prepare ('INSERT INTO fatura values(
            :id_fatura,
            :iva,
            :taxa
        );');
        $statement->execute([
            'id_fatura' => $fatura->getId_fatura(),
            'iva' => $fatura->getIva(),
            'taxa' => $fatura->getTaxa()
        ]);
    }

    public function Update (Fatura $fatura): void
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO fatura values(
            :id_fatura,
            :iva,
            :taxa
        );');
        $statement->execute([
            'id_fatura' => $fatura->getId_fatura(),
            'iva' => $fatura->getIva(),
            'taxa' => $fatura->getTaxa()
        ]);
    }

    public function Delete (int $id_fatura): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM fatura WHERE id_fatura = :id_fatura');
       
        $statement->execute([
            'id_fatura' => $id_fatura
        ]);
    }
}

?>