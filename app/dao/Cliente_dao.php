<?php

namespace App\DAO;

    use App\Models\Cliente;
    use ConnectionDB;

    class Cliente_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Cliente $clientes) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Cliente VALUES (
                    :id_cliente, 
                    :nif_cliente,
                    );');
            $statement=$this->pdo
                ->execute([
                    'id_cliente' => $clientes->getId_cliente(),
                    'nif_cliente' => $clientes->getNif_cliente(),
                ]);
        }

        public function Select() : array
        {
            $clientes=$this->pdo
                ->query('SELECT * FROM Cliente')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $clientes;
        }

        public function Update(Cliente $clientes) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Cliente SET nif_cliente=:nif_cliente WHERE id_cliente=:id_cliente');
                $statement=$this->pdo
                ->execute([
                    'id_cliente' => $clientes->getId_cliente(),
                    'nif_cliente' => $clientes->getNif_cliente(),
                ]);
        }

        public function Delete(int $id_cliente) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE FROM Cliente WHERE id_cliente=:id_cliente');
            $statement=$this->pdo
                ->execute([
                    'id_cliente' => $id_cliente
                ]);
        }
    }
?>