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
                tipo_entrega,
                preco,
                estado,
                id_funcionario,
                id_reserva
                From Take_away;')
            -> fetchAll(\PDO::FETCH_ASSOC);
        return $take_away;
    }

    public function Insert (Take_away $take_away): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO Take_away values(
            null,
            :tipo_entrega,
            :preco,
            :estado,
            :id_funcionario,
            :id_reserva
        );');
        $statement->execute([
            'tipo_entrega' => $take_away->gettipo_entrega(),
            'preco' => $take_away->getpreco(),
            'estado' => $take_away->getestado(),
            'id_funcionario' => $take_away->getid_funcionario(),
            'id_reserva' => $take_away->getid_reserva()
        ]);
    }

    public function Update (Take_away $take_away): void
    {
        $statement = $this->pdo
            ->prepare('UPDATE Take_away set tipo_entrega:=tipo_entrega , preco=:preco , estado=:estado , id_funcionario=:id_funcionario , id_reserva=:id_reserva Where id_take_away=:id_take_away');
        $statement->execute([
            'id_take_away' => $take_away->getid_take_away(),
            'tipo_entrega' => $take_away->gettipo_entrega(),
            'preco' => $take_away->getpreco(),
            'estado' => $take_away->getestado(),
            'id_funcionario' => $take_away->getid_funcionario(),
            'id_reserva' => $take_away->getid_reserva()
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