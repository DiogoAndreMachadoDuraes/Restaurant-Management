<?php

namespace App\DAO;

    use App\Models\Compramenu;

    class Compramenu_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Compramenu $comprasmenus) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Compramenu values (
                    :id_compramenu, 
                    :quantidade, 
                    :preco_menu
                    );');
            $statement->execute([
                    'quantidade' => $comprasmenus->getQuantidade(),
                    'preco_menu' => $comprasmenus->getPreco(),
                ]);
        }

        public function Select() : array
        {
            $comprasmenus=$this->pdo
                ->query('SELECT * FROM Compramenu')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $comprasmenus;
        }

        public function Update(Compramenu $comprasmenus) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Compramenu set quantidade=:quantidade and preco_menu=:preco_menu Where id_compramenu=:id_compramenu');
                $statement->execute([
                    'id_compramenu' => $comprasmenus->getId(),
                    'quantidade' => $comprasmenus->getQuantidade(),
                    'preco_menu' => $comprasmenus->getPreco(),
                ]);
        }

        public function Delete(int $id_compramenu) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE Compramenu Where id_compramenu=:id_compramenu');
            $statement->execute([
                    'id_compramenu' => $id_compramenu
                ]);
        }
    }
?>