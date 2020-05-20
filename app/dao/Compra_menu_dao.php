<?php

namespace App\DAO;

    use App\Models\Compra_menu;

    class Compra_menu_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Compra_menu $compra_menu) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Compra_menu values (
                    null, 
                    :quantidade, 
                    :preco
                    );');
            $statement->execute([
                    'quantidade' => $compra_menu->get_quantidade(),
                    'preco' => $compra_menu->get_preco(),
                ]);
        }

        public function Select() : array
        {
            $compra_menu=$this->pdo
                ->query('SELECT * FROM Compra_menu')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $compra_menu;
        }

        public function Update(Compra_menu $compra_menu) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Compra_menu set quantidade=:quantidade and preco=:preco Where id_compra_menu=:id_compra_menu');
            $statement->execute([
                'id_compra_menu' => $compra_menu->get_id_compra_menu(),
                'quantidade' => $compra_menu->get_quantidade(),
                'preco' => $compra_menu->get_preco(),
            ]);
        }

        public function Delete(int $id_compra_menu) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE Compra_menu Where id_compra_menu=:id_compra_menu');
            $statement->execute([
                'id_compra_menu' => $id_compra_menu
            ]);
        }
    }
?>