<?php

namespace App\DAO;

    use App\Models\Compra_extra;

    class Compra_extra_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Compra_extra $compra_extra) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Compra_extra values (
                    null, 
                    :quantidade, 
                    :preco
                    );');
            $statement->execute([
                    'quantidade' => $compra_extra->get_quantidade(),
                    'preco' => $compra_extra->get_preco(),
                ]);
        }

        public function Select() : array
        {
            $compra_extra=$this->pdo
                ->query('SELECT * FROM Compra_extra')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $compra_extra;
        }

        public function Update(Compra_extra $compra_extra) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Compra_extra set quantidade=:quantidade and preco=:preco Where id_compra_extra=:id_compra_extra');
                $statement->execute([
                    'id_compra_extra' => $compra_extra->get_id_compra_extra(),
                    'quantidade' => $compra_extra->get_quantidade(),
                    'preco' => $compra_extra->get_preco(),
                ]);
        }

        public function Delete(int $id_compra_extra) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE Compra_extra Where id_compra_extra=:id_compra_extra');
            $statement->execute([
                    'id_compra_extra' => $id_compra_extra
                ]);
        }
        
    }
?>