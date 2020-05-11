<?php

namespace App\DAO;

    use App\Models\RefeicaoSemanal;

    class RefeicaoSemanal_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(RefeicaoSemanal $refeicoes) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO RefeicaoSemanal values (
                    null, 
                    :dia, 
                    :hora
                );');
            $statement->execute([
                'dia' => $refeicoes->getDia(),
                'hora' => $refeicoes->getHora()
            ]);
        }

        public function Select() : array
        {
            $refeicoes=$this->pdo
                ->query('SELECT * FROM RefeicaoSemanal')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $refeicoes;
        }

        public function Update(RefeicaoSemanal $refeicoes) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE RefeicaoSemanal set dia=:dia and hora=:hora Where id_semana=:id_semana');
            $statement->execute([
                'id_semana' => $refeicoes->getId(),
                'dia' => $refeicoes->getDia(),
                'hora' => $refeicoes->getHora()
            ]);
        }

        public function Delete(int $id_semana) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE RefeicaoSemanal Where id_semana=:id_semana');
            $statement->execute([
                'id_semana' => $id_semana
            ]);
        }
    }
?>