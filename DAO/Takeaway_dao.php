<?php

namespace App\DAO;
use App\Models\TakeawayModel;
use App\DAO\ConnectionDB;

class Takeaway_dao extends ConnectionDB
{
    public function_construct()
    {
        parent::_construct();
    }

    public function Select (): array
    {
        $takeaway = $this->pdo
        ->query ('SELECT
        id_take,
        preco,
        data,
        hora,
        tipodeentrega
    From takeaway;')
        fetchAll(\PDO::FETCH_ASSOC);

        return $takeaway;
    }

    public function Insert (TakeawayModel $takeaway): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO takeaway values(
            :id_take,
            :preco,
            :data,
            :hora,
            :tipodeentrega
        );');
        $statement->execute([
            'id_take' => $id_take->getId_take(),
            'preco' => $preco->getPreco(),
            'data' = $data->getData(),
            'hora' = $hora->getHora(),
            'tipodeentrega' = $tipodeentrega->getTipodeentrega()
        ])
    }

    public function Update (TakeawayModel $takeaway): int
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO takeaway values(
            :id_take,
            :preco,
            :data,
            :hora,
            :tipodeentrega
        );');
        $statement->execute([
            'id_take' => $id_take->getId_take(),
            'preco' => $preco->getPreco(),
            'data' = $data->getData(),
            'hora' = $hora->getHora(),
            'tipodeentrega' = $tipodeentrega->getTipodeentrega()
        ])
    }


    public function Delete (int $id_take)
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM takeaway WHERE id_take = :id_take');
       
        $statement->execute([
            'id_take' => $id_take ()
            ]);
    }
        
}
