<?php

namespace App\DAO;

    use App\Models\Compra_produto;

    class Compra_produto_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Compra_produto $compra_produto) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Compra_produto values (
                    null,
                    :quantidade,
                    :preco,
                    :id_produto,
                    :id_reserva
                    );');
            $statement->execute([
                    'quantidade' => $compra_produto->get_quantidade(),
                    'preco' => $compra_produto->get_preco(),
                    'id_produto' => $compra_produto->get_id_produto(),
                    'id_reserva' => $compra_produto->get_id_reserva(),
                ]);
        }

        public function Select() : array
        {
            $compra_produto=$this->pdo
                ->query('SELECT * FROM Compra_produto')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $compra_produto;
        }

        public function Update(Compra_produto $compra_produto) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Compra_produto set quantidade=:quantidade, preco=:preco, id_produto=:id_produto, id_reserva=:id_reserva Where id_compra_produto=:id_compra_produto');
            $statement->execute([
                'id_compra_produto' => $compra_produto->get_id_compra_produto(),
                'quantidade' => $compra_produto->get_quantidade(),
                'preco' => $compra_produto->get_preco(),
                'id_produto' => $compra_produto->get_id_produto(),
                'id_reserva' => $compra_produto->get_id_reserva(),
            ]);
        }

        public function Delete(Compra_produto $compra_produto) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE FROM Compra_produto Where id_compra_produto=:id_compra_produto');
            $statement->execute([
                'id_compra_produto' => $compra_produto->get_id_compra_produto()
            ]);
        }
        
    }
?>