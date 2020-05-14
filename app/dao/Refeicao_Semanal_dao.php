<?php

namespace App\DAO;

    use App\Models\Refeicao_Semanal;

    class Refeicao_Semanal_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Refeicao_Semanal $refeicao_semanal) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Refeicao_Semanal values (
                    null, 
                    :dia, 
                    :hora
                );');
            $statement->execute([
                'dia' => $refeicao_semanal->getDia(),
                'hora' => $refeicao_semanal->getHora()
            ]);
        }

        public function Select() : array
        {
            $refeicao_semanal=$this->pdo
                ->query('SELECT * FROM Refeicao_Semanal')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $refeicao_semanal;
        }

        public function Update(Refeicao_Semanal $refeicao_semanal) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Refeicao_Semanal set dia=:dia and hora=:hora Where id_refeicao_semanal=:id_refeicao_semanal');
            $statement->execute([
                'id_refeicao_semanal' => $refeicao_semanal->getId_refeicao_semanal(),
                'dia' => $refeicao_semanal->getDia(),
                'hora' => $refeicao_semanal->getHora()
            ]);
        }

        public function Delete(int $id_refeicao_semanal) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE Refeicao_Semanal Where id_refeicao_semanal=:id_refeicao_semanal');
            $statement->execute([
                'id_refeicao_semanal' => $id_refeicao_semanal
            ]);
        }
    }
?>