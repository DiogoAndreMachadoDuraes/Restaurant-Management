<?php

namespace App\DAO;

    use App\Models\Reserva;

    class Reserva_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Reserva $reserva) : int
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Reserva VALUES (
                    null,
                    :data,
                    :hora,
                    :quantidade_pessoas,
                    :data_marcada,
                    :hora_marcada, 
                    :estado,
                    :id_cliente
                    );');
            $statement->execute([
                'data' => $reserva->get_data(),
                'hora' => $reserva->get_hora(),
                'quantidade_pessoas' => $reserva->get_quantidade_pessoas(),
                'data_marcada' => $reserva->get_data_marcada(),
                'hora_marcada' => $reserva->get_hora_marcada(),
                'estado' => $reserva->get_estado(),
                'id_cliente' => $reserva->get_id_cliente()
            ]);
            $id=$this->pdo->lastInsertId();
            return $id;
        }

        public function Select() : array
        {
            $reserva=$this->pdo
                ->query('SELECT * FROM Reserva')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $reserva;
        }

        public function Update(Reserva $reserva) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Reserva SET data=:data, hora=:hora, quantidade_pessoas=:quantidade_pessoas, data_marcada=:data_marcada, hora_marcada=:hora_marcada, estado=:estado, id_cliente=:id_cliente WHERE id_reserva=:id_reserva');
                $statement->execute([
                    'id_reserva' => $reserva->get_id_reserva(),
                    'data' => $reserva->get_data(),
                    'hora' => $reserva->get_hora(),
                    'quantidade_pessoas' => $reserva->get_quantidade_pessoas(),
                    'data_marcada' => $reserva->get_data_marcada(),
                    'hora_marcada' => $reserva->get_hora_marcada(),
                    'estado' => $reserva->get_estado(),
                    'id_cliente' => $reserva->get_id_cliente()
                ]);
        }

        public function Delete(Reserva $reserva) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE FROM Reserva WHERE id_reserva=:id_reserva;');
            $statement->execute([
                'id_reserva' => $reserva->get_id_reserva()
            ]);
        }
    }
?>