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
            nif,
            nome,
            data_nascimento,
            sexo,
            telefone,
            morada,
            foto,
            email,
            password,
            tipo
        From Utilizador;')
        -> fetchAll(\PDO::FETCH_ASSOC);

        return $utilizador;
    }

    public function Insert (Utilizador $utilizador): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO Utilizador values(
            null,
            :nif,
            :nome,
            :data_nascimento,
            :sexo,
            :telefone,
            :morada,
            :foto,
            :email,
            :password,
            :tipo
        );');
        $statement->execute([
            'nif' => $utilizador->getnif(),
            'nome' => $utilizador->getnome(),
            'data_nascimento' => $utilizador->getdata_nascimento(),
            'sexo' => $utilizador->getsexo(),
            'telefone' => $utilizador->gettelefone(),
            'morada' => $utilizador->getmorada(),
            'foto' => $utilizador->getfoto(),
            'email' => $utilizador->getemail(),
            'password' => $utilizador->getpassword(),
            'tipo' => $utilizador->gettipo()
        ]);
    }

    public function Update (Utilizador $utilizador): void
    {
        $statement = $this->pdo
            ->prepare('UPDATE Utilizador set nif=:nif , nome=:nome , data_nascimento=:data_nascimento , sexo=:sexo , telefone=:telefone , morada=:morada , foto=:foto , email=:email , password=:password , tipo=:tipo Where id_utilizador=:id_utilizador');
        $statement->execute([
            'id_utilizador' => $utilizador->getid_utilizador(),
            'nif' => $utilizador->getnif(),
            'nome' => $utilizador->getnome(),
            'data_nascimento' => $utilizador->getdata_nascimento(),
            'sexo' => $utilizador->getsexo(),
            'telefone' => $utilizador->gettelefone(),
            'morada' => $utilizador->getmorada(),
            'foto' => $utilizador->getfoto(),
            'email' => $utilizador->getemail(),
            'password' => $utilizador->getpassword(),
            'tipo' => $utilizador->gettipo()
            ]);
    }

    public function Delete ( Utilizador $utilizador): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM Utilizador WHERE id_utilizador = :id_utilizador');
       
        $statement->execute([
            'id_utilizador' => $utilizador -> getid_utilizador()
        ]);
    } 
    
    public function SelectByEmail (string $email): ?Utilizador
    {
        $statement = $this->pdo
            ->prepare ('SELECT
                    id_utilizador,
                    nif,
                    nome,
                    data_nascimento,
                    sexo,
                    telefone,
                    morada,
                    foto,
                    email,
                    password,
                    tipo
                        From Utilizador
                            where email=:email');
        $statement->bindParam('email', $email);
        $statement->execute();
        $utilizadores=$statement->fetchAll(\PDO::FETCH_ASSOC);
        if(count($utilizadores)!==0)
            $utilizador= new Utilizador();
            $utilizador->setid_utilizador($utilizadores[0]['id_utilizador'])
            ->setnif($utilizadores[0]['nif'])
            ->setnome($utilizadores[0]['nome'])
            ->setdata_nascimento($utilizadores[0]['data_nascimento'])
            ->setsexo($utilizadores[0]['sexo'])
            ->settelefone($utilizadores[0]['telefone'])
            ->setmorada($utilizadores[0]['morada'])
            ->setfoto($utilizadores[0]['foto'])
            ->setemail($utilizadores[0]['email'])
            ->setpassword($utilizadores[0]['password'])
            ->settipo($utilizadores[0]['tipo']);
            return $utilizador;
        return null;
    }
}
?>