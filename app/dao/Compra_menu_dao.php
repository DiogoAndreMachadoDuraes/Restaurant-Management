<?php

namespace App\DAO;

    use App\Models\Compra_menu;

    class Compra_menu_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Compra_menu $comprasmenus) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Compra_menu values (
                    null, 
                    :quantidade, 
                    :preco
                    );');
            $statement->execute([
                    'quantidade' => $comprasmenus->getQuantidade(),
                    'preco' => $comprasmenus->getPreco(),
                ]);
        }

        public function Select() : array
        {
            $comprasmenus=$this->pdo
                ->query('SELECT * FROM Compra_menu')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $comprasmenus;
        }

        public function Update(Compra_menu $comprasmenus) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Compra_menu set quantidade=:quantidade and preco=:preco Where id_compra_menu=:id_compra_menu');
                $statement->execute([
                    'id_compra_menu' => $comprasmenus->getId(),
                    'quantidade' => $comprasmenus->getQuantidade(),
                    'preco' => $comprasmenus->getPreco(),
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