<?php

namespace App\DAO;

    use App\Models\Reserva;

    class Reserva_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Reserva $reserva) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Reserva VALUES (
                    null, 
                    :estado,
                    :id_cliente
                    );');
            $statement->execute([
                'estado' => $reserva->get_estado(),
                'id_cliente' => $reserva->get_id_cliente()
            ]);
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
                ->prepare('UPDATE Reserva SET estado=:estado, id_cliente=:id_cliente WHERE id_reserva=:id_reserva');
                $statement->execute([
                    'id_reserva' => $reserva->get_id_reserva(),
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