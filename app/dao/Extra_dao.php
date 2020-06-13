<?php

namespace App\DAO;
   
    use App\Models\Extra;

    class Extra_dao extends ConnectionDB
    {
        public function __construct()
        {
            parent::__construct();
        }

        public function Insert(Extra $extra) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Extra values (
                    null, 
                    :nome, 
                    :tipo,
                    :preco,
                    :foto
                    );');
            $statement->execute([
                'nome' => $extra->get_nome(),
                'tipo' => $extra->get_tipo(),
                'preco' => $extra->get_preco(),
                'foto' => $extra->get_foto()
            ]);
        }

        public function Select() : array
        {
            $extra=$this->pdo
                ->query('SELECT * FROM Extra')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $extra;
        }

        public function Update(Extra $extra) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Extra set nome=:nome, tipo=:tipo, preco=:preco and foto=:foto Where id_extra=:id_extra');
            $statement->execute([
                'id_extra' => $extra->get_id_extra(),
                'nome' => $extra->get_nome(),
                'tipo' => $extra->get_tipo(),
                'preco' => $extra->get_preco(),
                'foto' => $extra->get_foto()
            ]);
        }

        public function Delete(int $id_extra) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE Extra Where id_extra=:id_extra');
            $statement->execute([
                'id_extra' => $id_extra
            ]);
        }

    }
?>