<?php

namespace App\DAO;

    use App\Models\Produto_menu;

    class Produto_menu_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Produto_menu $produto_menu) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Produto_menu values (
                    null,
                    :quantidade,
                    :id_produto,
                    :id_menu
                    );');
            $statement->execute([
                    'quantidade' => $produto_menu->get_quantidade(),
                    'id_produto' => $produto_menu->get_id_produto(),
                    'id_menu' => $produto_menu->get_id_menu()
                ]);
        }

        public function Select() : array
        {
            $produto_menu=$this->pdo
                ->query('SELECT * FROM Produto_menu')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $produto_menu;
        }

        public function Update(Produto_menu $produto_menu) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Produto_menu set quantidade=:quantidade, id_produto=:id_produto, id_menu=:id_menu Where id_produto_menu=:id_produto_menu');
            $statement->execute([
                'id_produto_menu' => $produto_menu->get_id_produto_menu(),
                'quantidade' => $produto_menu->get_quantidade(),
                'id_produto' => $produto_menu->get_id_produto(),
                'id_menu' => $produto_menu->get_id_menu()
            ]);
        }

        public function Delete(Produto_menu $produto_menu) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE FROM Produto_menu Where id_produto_menu=:id_produto_menu');
            $statement->execute([
                'id_produto_menu' => $produto_menu->get_id_produto_menu()
            ]);
        }
        
    }
?>