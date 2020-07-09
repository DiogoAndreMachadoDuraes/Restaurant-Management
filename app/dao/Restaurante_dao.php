<?php

namespace App\DAO;

use App\Models\Restaurante;

class Restaurante_dao extends ConnectionDB
{
    public function __construct()
    {
        parent::__construct();
    }

    public function Select(): array
    {
        $restaurante=$this->pdo
            ->query('SELECT * FROM Restaurante')
            ->fetchAll(\PDO::FETCH_ASSOC);
        return $restaurante;
    }

    public function Insert (Restaurante $restaurante): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO Restaurante values(
            null,
            :nome,
            :rua,
            :codigo_postal,
            :localizacao,
            :telefone,
            :email,
            :foto
        );');
        $statement->execute([
            'nome' => $restaurante->getnome(),
            'rua' => $restaurante->getrua(),
            'codigo_postal' => $restaurante->getcodigo_postal(),
            'localizacao' => $restaurante->getlocalizacao(),
            'telefone' => $restaurante->gettelefone(),
            'email' => $restaurante->getemail(),
            'foto' => $restaurante->getfoto()
        ]);
    }

    public function Update (Restaurante $restaurante): void
    {
        $statement = $this->pdo
          ->prepare('UPDATE Restaurante set nome=:nome , rua=:rua , codigo_postal=:codigo_postal , localizacao=:localizacao , telefone=:telefone , email=:email , foto=:foto Where id_restaurante=:id_restaurante');
        $statement->execute([
            'id_restaurante' => $restaurante->getid_restaurante(),
            'nome' => $restaurante->getnome(),
            'rua' => $restaurante->getrua(),
            'codigo_postal' => $restaurante->getcodigo_postal(),
            'localizacao' => $restaurante->getlocalizacao(),
            'telefone' => $restaurante->gettelefone(),
            'email' => $restaurante->getemail(),
            'foto' => $restaurante->getfoto()
        ]);
    }

    public function Delete ( Restaurante $restaurante): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM Restaurante WHERE id_restaurante = :id_restaurante');
       
        $statement->execute([
            'id_restaurante' => $restaurante -> getid_restaurante()
        ]);
    }    
}
?>