<?php

namespace App\DAO;
   
    use App\Models\Extra;
    use ConnectionDB;

    class Extra_dao extends ConnectionDB
    {
        public function __construct()
        {
            parent::__construct();
        }

        public function Insert(Extra $extras) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Extra values (
                    null, 
                    :nome_extra, 
                    :tipo
                    );');
            $statement=$this->pdo
                ->execute([
                    'nome_extra' => $extras->getNome(),
                    'tipo' => $extras->getTipo()
                ]);
        }

        public function Select() : array
        {
            $extras=$this->pdo
                ->query('SELECT * FROM Extra')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $extras;
        }

        public function Update(Extra $extras) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Extra set nome_extra=:nome_extra and tipo=:tipo Where id_extra=:id_extra');
                $statement=$this->pdo
                ->execute([
                    'id_extra' => $extras->getId(),
                    'nome_extra' => $extras->getNome(),
                    'tipo' => $extras->getTipo()
                ]);
        }

        public function Delete(int $id_extra) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE Extra Where id_extra=:id_extra');
            $statement=$this->pdo
                ->execute([
                    'id_extra' => $id_extra
                ]);
        }

    }
?>