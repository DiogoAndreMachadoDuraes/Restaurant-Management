<?php

namespace App\DAO;

    use App\Models\Compraextra;
    use ConnectionDB;

    class Compraextra_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Compraextra $comprasextras) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Compraextra values (
                    null, 
                    :quantidade, 
                    :preco_extra
                    );');
            $statement=$this->pdo
                ->execute([
                    'quantidade' => $comprasextras->getQuantidade(),
                    'preco_extra' => $comprasextras->getPreco(),
                ]);
        }

        public function Select() : array
        {
            $comprasextras=$this->pdo
                ->query('SELECT * FROM Compraextra')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $comprasextras;
        }

        public function Update(Compraextra $comprasextras) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Compraextra set quantidade=:quantidade and preco_extra=:preco_extra Where id_compraextra=:id_compraextra');
                $statement=$this->pdo
                ->execute([
                    'id_compraextra' => $comprasextras->getId(),
                    'quantidade' => $comprasextras->getQuantidade(),
                    'preco_extra' => $comprasextras->getPreco(),
                ]);
        }

        public function Delete(int $id_compraextra) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE Compraextra Where id_compraextra=:id_compraextra');
            $statement=$this->pdo
                ->execute([
                    'id_compraextra' => $id_compraextra
                ]);
        }
        
    }
?>