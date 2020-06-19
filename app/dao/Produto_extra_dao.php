<?php

namespace App\DAO;

    use App\Models\Produto_extra;

    class Produto_extra_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Produto_extra $produto_extra) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Produto_extra values (
                    null,
                    :quantidade,
                    :id_produto,
                    :id_extra
                    );');
            $statement->execute([
                    'quantidade' => $produto_extra->get_quantidade(),
                    'id_produto' => $produto_extra->get_id_produto(),
                    'id_extra' => $produto_extra->get_id_extra()
                ]);
        }

        public function Select() : array
        {
            $produto_extra=$this->pdo
                ->query('SELECT * FROM Produto_extra')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $produto_extra;
        }

        public function Update(Produto_extra $produto_extra) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Produto_extra set quantidade=:quantidade, id_produto=:id_produto, id_extra=:id_extra Where id_produto_extra=:id_produto_extra');
            $statement->execute([
                'id_produto_extra' => $produto_extra->get_id_produto_extra(),
                'quantidade' => $produto_extra->get_quantidade(),
                'id_produto' => $produto_extra->get_id_produto(),
                'id_extra' => $produto_extra->get_id_extra()
            ]);
        }

        public function Delete(Produto_extra $produto_extra) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE FROM Produto_extra Where id_produto_extra=:id_produto_extra');
            $statement->execute([
                'id_produto_extra' => $produto_extra->get_id_produto_extra()
            ]);
        }
        
    }
?>