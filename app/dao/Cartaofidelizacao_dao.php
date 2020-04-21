<?php

namespace App\DAO;

    use App\Models\Cartaofidelizacao;
    use ConnectionDB;

    class Cartaofidelizacao_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Cartaofidelizacao $cartoes) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Cartaofidelizacao VALUES (
                    null,
                    :N_compras
                );');
            $statement=$this->pdo
                ->execute([
                    'N_compras' => $cartoes->getN_compras()
                ]);
        }

        public function Select() : array
        {
            $cartoes=$this->pdo
                ->query('SELECT * FROM Cartaofidelizacao')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $cartoes;
        }

        public function Update(Cartaofidelizacao $cartoes) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Cartaofidelizacao SET n_compras=:n_compras WHERE id_Cartao=:id_cartao');
                $statement=$this->pdo
                ->execute([
                    'id_cartao' => $cartoes->getID(),
                    'n_compras' => $cartoes->getN_compras()
                ]);
        }

        public function Delete(int $id_cartao) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE FROM Cartaofidelizacao WHERE id_cartao=:id_cartao');
            $statement=$this->pdo
                ->execute([
                    'id_cartao' => $id_cartao
                ]);
        }
    }
?>