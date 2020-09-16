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
                taxa,
                valor_total,
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
            :iva,
            :taxa,
            :valor_total,
            :nif_cliente,
            :id_reserva
        );');
        $statement->execute([
            'iva' => $fatura->getiva(),
            'taxa' => $fatura->gettaxa(),
            'valor_total' => $fatura->getvalor_total(),
            'nif_cliente' => $fatura->getnif_cliente(),
            'id_reserva' => $fatura->getid_reserva()
        ]);
    }

    public function Update (Fatura $fatura): void
    {
        $statement = $this->pdo
            ->prepare('UPDATE Fatura set iva=:iva , taxa=:taxa , valor_total=:valor_total , nif_cliente=:nif_cliente , id_reserva=:id_reserva Where id_fatura=:id_fatura');
        $statement->execute([
            'id_fatura' => $fatura->getid_fatura(),
            'iva' => $fatura->getiva(),
            'taxa' => $fatura->gettaxa(),
            'valor_total' => $fatura->getvalor_total(),
            'nif_cliente' => $fatura->getnif_cliente(),
            'id_reserva' => $fatura->getid_reserva()
        ]);
    }

    public function Delete ( Fatura $fatura): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM Fatura WHERE id_fatura = :id_fatura');
       
        $statement->execute([
            'id_fatura' => $fatura -> getid_fatura()
        ]);
    }
}
?>