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
                taxa,
                iva,
                nif_cliente
            From fatura;')
        ->fetchAll (\PDO::FETCH_ASSOC);

        return $fatura;
    }
 
    public function Insert (Fatura $fatura): void
    { 
        $statement = $this->pdo
        ->prepare ('INSERT INTO fatura values(
            :id_fatura,
            :taxa,
            :iva,
            :nif_cliente
        );');
        $statement->execute([
            'id_fatura' => $fatura->getid_fatura(),
            'taxa' => $fatura->gettaxa(),
            'iva' => $fatura->getiva(),
            'nif_cliente' => $fatura->getnif_cliente()
        ]);
    }

    public function Update (Fatura $fatura): void
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO fatura values(
            :id_fatura,
            :taxa,
            :iva,
            :nif_cliente
        );');
        $statement->execute([
            'id_fatura' => $fatura->getid_fatura(),
            'taxa' => $fatura->gettaxa(),
            'iva' => $fatura->getiva(),
            'nif_cliente' => $fatura->getnif_cliente()
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