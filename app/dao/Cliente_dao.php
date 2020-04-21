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
                    :nif, 
                    :nome, 
                    :telefone, 
                    :email, 
                    :morada
                    );');
            $statement=$this->pdo
                ->execute([
                    'nif' => $clientes->getNif(),
                    'nome' => $clientes->getNome(),
                    'telefone' => $clientes->getTelefone(),
                    'email' => $clientes->getEmail(),
                    'morada' => $clientes->getMorada()
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
                ->prepare('UPDATE Cliente SET nome=:nome, telefone=:telefone, email=email, morada=morada WHERE nif=:nif');
                $statement=$this->pdo
                ->execute([
                    'nif' => $clientes->getNif(),
                    'nome' => $clientes->getNome(),
                    'telefone' => $clientes->getTelefone(),
                    'email' => $clientes->getEmail(),
                    'morada' => $clientes->getMorada()
                ]);
        }

        public function Delete(int $nif) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE FROM Cliente WHERE nif=:nif');
            $statement=$this->pdo
                ->execute([
                    'nif' => $nif
                ]);
        }

    }
?>