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
                    :numero_compras,
                    :id_utilizador
                    );');
            $statement->execute([
                    'numero_cartao' => $cliente->get_numero_cartao(),
                    'numero_compras' => $cliente->get_numero_compras(),
                    'id_utilizador' => $cliente->get_id_utilizador()
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
                ->prepare('UPDATE Cliente SET numero_cartao=:numero_cartao, numero_compras=:numero_compras, id_utilizador=:id_utilizador WHERE id_cliente=:id_cliente');
            $statement->execute([
                'id_cliente' => $cliente->get_id_cliente(),
                'numero_cartao' => $cliente->get_numero_cartao(),
                'numero_compras' => $cliente->get_numero_compras(),
                'id_utilizador' => $cliente->get_id_utilizador()
            ]);
        }

        public function Delete(Cliente $cliente) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE FROM Cliente WHERE id_cliente=:id_cliente');
            $statement->execute([
                'id_cliente' => $cliente->get_id_cliente()
            ]);
        }

        public function Update_purchase(Cliente $cliente) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Cliente SET numero_compras=:numero_compras WHERE numero_cartao=:numero_cartao');
            $statement->execute([
                'numero_cartao' => $cliente->get_numero_cartao(),
                'numero_compras' => $cliente->get_numero_compras(),
            ]);
        }
    }
?>