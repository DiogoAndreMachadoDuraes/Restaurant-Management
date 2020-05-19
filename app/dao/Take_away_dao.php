<?php

namespace App\DAO;

use App\Models\Take_away;

class Take_away_dao extends ConnectionDB
{
    public function __construct()
    {
        parent::__construct();
    }

    public function Select (): array
    {
        $take_away = $this->pdo
            ->query ('SELECT
                id_take_away,
                preco,
                data,
                hora,
                tipo_entrega
                From take_away;')
            -> fetchAll(\PDO::FETCH_ASSOC);
        return $take_away;
    }

    public function Insert (Take_away $take_away): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO take_away values(
            :id_take_away,
            :preco,
            :data,
            :hora,
            :tipo_entrega
        );');
        $statement->execute([
            'id_take_away' => $take_away->getid_take_away(),
            'preco' => $take_away->getpreco(),
            'data' => $take_away->getdata(),
            'hora' => $take_away->gethora(),
            'tipo_entrega' => $take_away->gettipo_entrega()
        ]);
    }

    public function Update (Take_away $take_away): void
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO take_away values(
            :id_take_away,
            :preco,
            :data,
            :hora,
            :tipo_entrega
        );');
        $statement->execute([
            'id_take_away' => $take_away->getid_take_away(),
            'preco' => $take_away->getpreco(),
            'data' => $take_away->getdata(),
            'hora' => $take_away->getHora(),
            'tipo_entrega' => $take_away->gettipo_entrega()
        ]);
    }

    public function Delete (int $id_take_away): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM take_away WHERE id_take_away = :id_take_away');
       
        $statement->execute([
            'id_take_away' => $id_take_away
        ]);
    }    
}
?>