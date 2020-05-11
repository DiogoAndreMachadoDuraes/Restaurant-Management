<?php

namespace App\DAO;

use App\Models\Takeaway;

class Takeaway_dao extends ConnectionDB
{
    public function __construct()
    {
        parent::__construct();
    }

    public function Select (): array
    {
        $takeaway = $this->pdo
            ->query ('SELECT
                id_take,
                preco,
                dia,
                hora,
                tipodeentrega
                From takeaway;')
            -> fetchAll(\PDO::FETCH_ASSOC);
        return $takeaway;
    }

    public function Insert (Takeaway $takeaway): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO takeaway values(
            :id_take,
            :preco,
            :dia,
            :hora,
            :tipodeentrega
        );');
        $statement->execute([
            'id_take' => $takeaway->getId_take(),
            'preco' => $takeaway->getPreco(),
            'dia' => $takeaway->getDia(),
            'hora' => $takeaway->getHora(),
            'tipodeentrega' => $takeaway->getTipodeentrega()
        ]);
    }

    public function Update (Takeaway $takeaway): void
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO takeaway values(
            :id_take,
            :preco,
            :dia,
            :hora,
            :tipodeentrega
        );');
        $statement->execute([
            'id_take' => $takeaway->getId_take(),
            'preco' => $takeaway->getPreco(),
            'dia' => $takeaway->getDia(),
            'hora' => $takeaway->getHora(),
            'tipodeentrega' => $takeaway->getTipodeentrega()
        ]);
    }

    public function Delete (int $id_take): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM takeaway WHERE id_take = :id_take');
       
        $statement->execute([
            'id_take' => $id_take
        ]);
    }    
}
?>