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
                    :pagamento
                    );');
            $statement->execute([
                'pagamento' => $reserva->getPagamento()
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
                ->prepare('UPDATE Reserva SET pagamento=:pagamento WHERE id_reserva=:id_reserva');
                $statement->execute([
                    'id_reserva' => $reserva->getId_reserva(),
                    'pagamento' => $reserva->getPagamento()
                ]);
        }

        public function Delete(int $id_reserva) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE FROM Reserva WHERE id_reserva=:id_reserva');
            $statement->execute([
                    'id_reserva' => $id_reserva
            ]);
        }
    }
?>