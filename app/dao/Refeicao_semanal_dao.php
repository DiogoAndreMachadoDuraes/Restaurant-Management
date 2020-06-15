<?php

namespace App\DAO;

    use App\Models\Refeicao_semanal;

    class Refeicao_semanal_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Refeicao_semanal $refeicao_semanal) : void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Refeicao_semanal values (
                    null,
                    :dia_semana, 
                    :data, 
                    :hora,
                    :id_restaurante,
                    :id_ementa
                );');
            $statement->execute([
                'dia_semana' => $refeicao_semanal->get_dia_semana(),
                'data' => $refeicao_semanal->get_data(),
                'hora' => $refeicao_semanal->get_hora(),
                'id_restaurante' => $refeicao_semanal->get_id_restaurante(),
                'id_ementa' => $refeicao_semanal->get_id_ementa()
            ]);
        }

        public function Select() : array
        {
            $refeicao_semanal=$this->pdo
                ->query('SELECT * FROM Refeicao_semanal')
                ->fetchAll(\PDO::FETCH_ASSOC);
            return $refeicao_semanal;
        }

        public function Update(Refeicao_semanal $refeicao_semanal) : void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Refeicao_semanal set dia_semana=:dia_semana, data=:data, hora=:hora, id_restaurante=:id_restaurante and id_ementa=:id_ementa Where id_refeicao_semanal=:id_refeicao_semanal');
            $statement->execute([
                'id_refeicao_semanal' => $refeicao_semanal->get_id_refeicao_semanal(),
                'dia_semana' => $refeicao_semanal->get_dia_semana(),
                'data' => $refeicao_semanal->get_data(),
                'hora' => $refeicao_semanal->get_hora(),
                'id_restaurante' => $refeicao_semanal->get_id_restaurante(),
                'id_ementa' => $refeicao_semanal->get_id_ementa()
            ]);
        }

        public function Delete(int $id_refeicao_semanal) : void
        {
            $statement=$this->pdo
                ->prepare('DELETE Refeicao_semanal Where id_refeicao_semanal=:id_refeicao_semanal');
            $statement->execute([
                'id_refeicao_semanal' => $id_refeicao_semanal
            ]);
        }
    }
?>