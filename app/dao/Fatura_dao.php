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
                nif_cliente,
                id_reserva
            From Fatura;')
        ->fetchAll (\PDO::FETCH_ASSOC);

        return $fatura;
    }
 
    public function Insert (Fatura $fatura): void
    { 
        $statement = $this->pdo
        ->prepare ('INSERT INTO Fatura values(
            null,
            :taxa,
            :iva,
            :nif_cliente,
            :id_reserva
        );');
        $statement->execute([
            'taxa' => $fatura->gettaxa(),
            'iva' => $fatura->getiva(),
            'nif_cliente' => $fatura->getnif_cliente(),
            'id_reserva' => $fatura->getid_reserva()
        ]);
    }

    public function Update (Fatura $fatura): void
    {
        $statement = $this->pdo
            ->prepare('UPDATE Fatura set taxa=:taxa , iva=:iva , nif_cliente=:nif_cliente and id_reserva Where id_fatura=:id_fatura');
        $statement->execute([
            'id_fatura' => $fatura->getid_fatura(),
            'taxa' => $fatura->gettaxa(),
            'iva' => $fatura->getiva(),
            'nif_cliente' => $fatura->getnif_cliente(),
            'id_reserva' => $fatura->getid_reserva()
        ]);
    }

    public function Delete (int $id_fatura): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM Fatura WHERE id_fatura = :id_fatura');
       
        $statement->execute([
            'id_fatura' => $id_fatura
        ]);
    }
}
?>