<?php

namespace App\DAO;
use App\Models\Utilizador;

class Utilizador_dao extends ConnectionDB
{
    public function __construct()
    {
        parent::__construct();
    }

    public function Select (): array
    {
        $utilizador = $this->pdo
        ->query ('SELECT
            id_utilizador,
            nome,
            telefone,
            email,
            morada,
            password,
            tipo,
            foto,
            nif
        From Utilizador;')
        -> fetchAll(\PDO::FETCH_ASSOC);

        return $utilizador;
    }

    public function Insert (Utilizador $utilizador): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO Utilizador values(
            null,
            :nome,
            :telefone,
            :email,
            :morada,
            :password,
            :tipo,
            :foto,
            :nif
        );');
        $statement->execute([
            'nome' => $utilizador->getnome(),
            'telefone' => $utilizador->gettelefone(),
            'email' => $utilizador->getemail(),
            'morada' => $utilizador->getmorada(),
            'password' => $utilizador->getpassword(),
            'tipo' => $utilizador->gettipo(),
            'foto' => $utilizador->getfoto(),
            'nif' => $utilizador->getnif()
        ]);
    }

    public function Update (Utilizador $utilizador): void
    {
        $statement = $this->pdo
            ->prepare('UPDATE Utilizador set nome=:nome and telefone=:telefone and email=:email and morada=:morada and password=:password and tipo=:tipo and foto=:foto and nif=:nif Where id_utilizador=:id_utilizador');
        $statement->execute([
            'id_utilizador' => $utilizador->getid_utilizador(),
            'nome' => $utilizador->getnome(),
            'telefone' => $utilizador->gettelefone(),
            'email' => $utilizador->getemail(),
            'morada' => $utilizador->getmorada(),
            'password' => $utilizador->getpassword(),
            'tipo' => $utilizador->gettipo(),
            'foto' => $utilizador->getfoto(),
            'nif' => $utilizador->getnif()
            ]);
    }

    public function Delete (int $id_utilizador): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM Utilizador WHERE id_utilizador = :id_utilizador');
       
        $statement->execute([
            'id_utilizador' => $id_utilizador
        ]);
    } 
    
    public function SelectByEmail (string $email): ?Utilizador
    {
        $statement = $this->pdo
            ->prepare ('SELECT
                    id_utilizador,
                    nome,
                    telefone,
                    email,
                    morada,
                    password,
                    tipo,
                    foto,
                    nif
                From utilizador
                where email=:email');
        $statement->bindParam('email', $email);
        $statement->execute();
        $utilizador=$statement->fetchAll(\PDO::FETCH_ASSOC);
        $utilizador= new Utilizador();
        if(count($utilizador)==0){
            $utilizador->setid_utilizador($utilizador[0]['id_utilizador'])
                ->setnome($utilizador[0]['nome'])
                ->settelefone($utilizador[0]['telefone'])
                ->setemail($utilizador[0]['email'])
                ->setmorada($utilizador[0]['morada'])
                ->setpassword($utilizador[0]['password'])
                ->settipo($utilizador[0]['tipo'])
                ->setfoto($utilizador[0]['foto'])
                ->setnif($utilizador[0]['nif']);
            return $utilizador;
        }
        return null;
    }
}
?>