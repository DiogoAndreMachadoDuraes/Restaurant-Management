<?php

//criaçao da classe restaurante

class restaurante
{                                
  public int $id_restaurante;
  public string $nome;
  public string $localizacao;
  public string $telefone;
  public string $email;

   public function alergenio()
   {
     $this->id_restaurante = $id_restaurante;
     $this->nome = $nome;
     $this->localizacao = $localizacao;
     $this->telefone = $telefone;
     $this->email = $email;
   }

   public function CreatTable()
   {
    $con=new mysqli("localhost","root", "","ementasderestaurante") or die("Falha na conexao:");

    $sql = "CREATE TABLE Restaurante ( id_restaurante INT(50), nome VARCHAR(50), localizacao VARCHAR(50), telefone VARCHAR(50), email VARCHAR(50) PRIMARY KEY (id_restaurante))";
    if ($con->query($sql) === TRUE){
        echo "tabela restaurante criada";
    } else{
        echo "Erro a criar a tabela: " . $con->error;
      }
      mysqli_close($con);
   }
    
   //Select
    
     public function Select ()
     {
      $con=new mysqli("localhost","root", "","ementasderestaurante") or die("Falha na conexao:");

     $sql = "SELECT * FROM restaurante";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
     }
     echo "<br>";
     while ($arr=mysqli_fetch_array($result)){
         echo "
         <table>
         <tr>
           <th>".$arr['id_restaurante']."</th>
           <th>".$arr['nome']."</th> 
           <th>".$arr['localizacao']."</th>
           <th>".$arr['telefone']."</th>
           <th>".$arr['email']."</th>
         </tr>
         </table> ";
         //echo $arr["id_restaurante"] . ' - ' . $arr["nome"] . ' - ' . $arr["localizacao"] . ' - ' . $arr["telefone"] . ' - ' . $arr["email"] . ' <br>';
       }
     mysqli_close($con);
     }
 
     //Update
 
   public function Update ($id_restaurante, $nome, $localizacao, $telefone, $email)
     {
      $con=new mysqli("localhost","root", "","ementasderestaurante") or die("Falha na conexao:");

     $sql = "UPDATE restaurante SET , nome=@nome, localizacao=@localizacao, telefone=@telefone, email=@email WHERE id_restaurante=@id_restaurante ";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
       }
     mysqli_close($con);
     }
 
     //Insert
 
     public function Insert ($id_restaurante, $nome, $localizacao, $telefone, $email)
     {

      $con=new mysqli("localhost","root", "","ementasderestaurante") or die("Falha na conexao:");

     if(!$con) { trigger_error(mysqli_connect_error());}
 
     $sql = "INSERT INTO restaurante (id_restaurante, nome, localizacao, telefone, email) VALUES (@id_restaurante, @nome, @localizacao, @telefone, @email) ";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
       }
       mysqli_close($con);
     }
 
       //Delete
 
       public function Delete ($id_restaurante, $nome, $localizacao, $telefone, $email)
     {  
      $con=new mysqli("localhost","root", "","ementasderestaurante") or die("Falha na conexao:");

       if(!$con) { trigger_error(mysqli_connect_error());}
 
       $sql = "DELETE FROM restaurante WHERE id_restaurante=@id_restaurante AND nome=@nome AND localizacao=@localizacao AND telefone=@telefone AND email=@email";
       $result = mysqli_query($con, $sql);
       if(!$result){
           die('Could not query:'.mysqli_error($con));
       }
         mysqli_close($con);
     }
} 
?>
