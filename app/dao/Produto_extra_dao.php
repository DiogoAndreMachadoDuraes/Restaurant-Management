<?php

namespace App\DAO;

    use App\Models\Produto_extra;

    class Produto_extra_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Produto_extra $Produto_extra) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Produto_extra values (
                    null,
                    :quantidade
                    );');
            $statement->execute([
                    'quantidade' => $Produto_extra->get_quantidade(),
                ]);
        }

        public function Select() : array
        {
            $Produto_extra=$this->pdo
                ->query('SELECT * FROM Produto_extra')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $Produto_extra;
        }

        public function Update(Produto_extra $Produto_extra) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Produto_extra set quantidade=:quantidade Where id_produto_extra=:id_produto_extra');
            $statement->execute([
                'id_produto_extra' => $Produto_extra->get_id_produto_extra(),
                'quantidade' => $Produto_extra->get_quantidade(),
            ]);
        }

        public function Delete(int $id_produto_extra) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE Produto_extra Where id_produto_extra=:id_produto_extra');
            $statement->execute([
                'id_produto_extra' => $id_produto_extra
            ]);
        }
        
    }
?>