<?php

namespace App\DAO;

    use App\Models\Cartao_fidelizacao;

    class Cartao_fidelizacao_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Cartao_fidelizacao $cartao_fidelizacao) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Cartao_fidelizacao VALUES (
                    null,
                    :N_compras
                );');
            $statement->execute([
                    'N_compras' => $cartao_fidelizacao->getN_compras()
                ]);
        }

        public function Select() : array
        {
            $cartao_fidelizacao=$this->pdo
                ->query('SELECT * FROM Cartao_fidelizacao')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $cartao_fidelizacao;
        }

        public function Update(Cartao_fidelizacao $cartao_fidelizacao) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Cartao_fidelizacao SET n_compras=:n_compras WHERE id_cartao_fidelizacao=:id_cartao_fidelizacao');
                $statement->execute([
                    'id_cartao_fidelizacao' => $cartao_fidelizacao->getId_cartao_fidelizacao(),
                    'n_compras' => $cartao_fidelizacao->getN_compras()
                ]);
        }

        public function Delete(int $id_cartao_fidelizacao) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE FROM Cartao_fidelizacao WHERE id_cartao_fidelizacao=:id_cartao_fidelizacao');
            $statement->execute([
                    'id_cartao_fidelizacao' => $id_cartao_fidelizacao
                ]);
        }
    }
?>