<?php

namespace App\DAO;

    use App\Models\Ementa;
    use ConnectionDB;

    class Ementa_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Ementa $ementas) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Ementa values (
                    null, 
                    :descricao
                    );');
            $statement=$this->pdo
                ->execute([
                    'descricao' => $ementas->getDescricao()
                ]);
        }

        public function Select() : array
        {
            $ementas=$this->pdo
                ->query('SELECT * FROM Ementa')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $ementas;
        }

        public function Update(Ementa $ementas) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Ementa set descricao=:descricao Where id_ementa=:id_ementa');
                $statement=$this->pdo
                ->execute([
                    'id_compramenu' => $ementas->getId(),
                    'descricao' => $ementas->getDescricao()
                ]);
        }

        public function Delete(int $id_compramenu) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE Ementa Where id_ementa=:id_ementa');
            $statement=$this->pdo
                ->execute([
                    'id_compramenu' => $id_compramenu
                ]);
        }

    }
?>