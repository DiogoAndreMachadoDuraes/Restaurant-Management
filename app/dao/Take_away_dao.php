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
                tipo_entrega,
                id_reserva,
                id_funcionario
                From Take_away;')
            -> fetchAll(\PDO::FETCH_ASSOC);
        return $take_away;
    }

    public function Insert (Take_away $take_away): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO Take_away values(
            null,
            :preco,
            :data,
            :hora,
            :tipo_entrega,
            :id_reserva,
            :id_funcionario
        );');
        $statement->execute([
            'preco' => $take_away->getpreco(),
            'data' => $take_away->getdata(),
            'hora' => $take_away->gethora(),
            'tipo_entrega' => $take_away->gettipo_entrega(),
            'id_reserva' => $take_away->getid_reserva(),
            'id_funcionario' => $take_away->getid_funcionario()
        ]);
    }

    public function Update (Take_away $take_away): void
    {
        $statement = $this->pdo
            ->prepare('UPDATE Take_away set preco=:preco , data=:data , hora=:hora , tipo_entrega=:tipo_entrega , id_reserva=:id_reserva , id_funcionario=:id_funcionario Where id_take_away=:id_take_away');
        $statement->execute([
            'id_take_away' => $take_away->getid_take_away(),
            'preco' => $take_away->getpreco(),
            'data' => $take_away->getdata(),
            'hora' => $take_away->gethora(),
            'tipo_entrega' => $take_away->gettipo_entrega(),
            'id_reserva' => $take_away->getid_reserva(),
            'id_funcionario' => $take_away->getid_funcionario()
        ]);
    }

    public function Delete (Take_away $take_away): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM Take_away WHERE id_take_away = :id_take_away');
       
        $statement->execute([
            'id_take_away' => $take_away -> getid_take_away()
        ]);
    }    
}
?>