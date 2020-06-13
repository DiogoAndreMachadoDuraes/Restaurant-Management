<?php

namespace App\DAO;

    use App\Models\Ementa;

    class Ementa_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Ementa $ementa) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Ementa values (
                    null,
                    :nome,
                    :descricao
                    );');
            $statement->execute([
                'nome' => $ementa->get_nome(),
                'descricao' => $ementa->get_descricao()
            ]);
        }

        public function Select() : array
        {
            $ementa=$this->pdo
                ->query('SELECT * FROM Ementa')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $ementa;
        }

        public function Update(Ementa $ementa) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Ementa set descricao=:descricao and nome=:nome Where id_ementa=:id_ementa');
            $statement->execute([
                'id_ementa' => $ementa->get_id_ementa(),
                'nome' => $ementa->get_nome(),
                'descricao' => $ementa->get_descricao()
            ]);
        }

        public function Delete(int $id_ementa) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE Ementa Where id_ementa=:id_ementa');
            $statement->execute([
                'id_ementa' => $id_ementa
            ]);
        }

    }
?>