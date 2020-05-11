<?php

namespace App\DAO;

    use App\Models\Reserva;

    class Reserva_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Reserva $reservas) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Reserva VALUES (
                    null, 
                    :pagamento
                    );');
            $statement->execute([
                'pagamento' => $reservas->getPagamento()
            ]);
        }

        public function Select() : array
        {
            $reservas=$this->pdo
                ->query('SELECT id_reserva, pagamento FROM Reserva')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $reservas;
        }

        public function Update(Reserva $reservas) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Reserva SET pagamento=:pagamento WHERE id_reserva=:id_reserva');
                $statement->execute([
                    'id_reserva' => $reservas->getId(),
                    'pagamento' => $reservas->getPagamento()
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