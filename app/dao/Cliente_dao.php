<?php

namespace App\DAO;

    use App\Models\Cliente;

    class Cliente_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Cliente $cliente) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Cliente VALUES (
                    null, 
                    :numero_cartao,
                    :n_compras
                    );');
            $statement->execute([
                    'numero_cartao' => $cliente->get_numero_cartao(),
                    'n_compras' => $cliente->get_n_compras()
                ]);
        }

        public function Select() : array
        {
            $cliente=$this->pdo
                ->query('SELECT * FROM Cliente')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $cliente;
        }

        public function Update(Cliente $cliente) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Cliente SET numero_cartao=:numero_cartao and n_compras=:n_compras WHERE id_cliente=:id_cliente');
            $statement->execute([
                'id_cliente' => $cliente->get_id_cliente(),
                'numero_cartao' => $cliente->set_numero_cartao(),
                'n_compras' => $cliente->set_n_compras()
            ]);
        }

        public function Delete(int $id_cliente) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE FROM Cliente WHERE id_cliente=:id_cliente');
            $statement->execute([
                'id_cliente' => $id_cliente
            ]);
        }
    }
?>