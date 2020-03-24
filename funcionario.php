<?php

include_once 'DAL/ConectionDB.php';
//criaçao da classe alergenio

class Funcionario
{                                
  public int $id_funcionario;
  public string $nome;
  public string $telefone;
  public string $email;

   public function Funcionario()
   {
     $this->id_funcionario = $id_funcionario;
     $this->nome = $nome;
     $this->telefone = $telefone;
     $this->email = $email;
   }

   public function CreateTable()
   {
     
     
 $con=ConnectionDB::Connect();
   
    $sql = "CREATE TABLE Funcionario ( id_funcionario  INT(50), nome VARCHAR(50), telefone VARCHAR(50), email VARCHAR(50) PRIMARY KEY (id_funcionario))";
    if ($con->query($sql) === TRUE){
        echo "tabela funcionario criada";
    } else{
        echo "Erro a criar a tabela: " . $con->error;
      }
      mysqli_close($con);
   }
    
   //Select
    
     public function Select ()
     {
     
 $con=ConnectionDB::Connect();

     $sql = "SELECT * FROM Funcionario";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
     }
     echo "<br>";
     while ($arr=mysqli_fetch_array($result)){
         echo "
         <table>
         <tr>
           <th>".$arr['id_funcionario']."</th>
           <th>".$arr['nome']."</th> 
           <th>".$arr['telefone']."</th>
           <th>".$arr['email']."</th>
         </tr>
         </table> ";
         //echo $arr["id_funcionario"] . ' - ' . $arr["nome"] . ' - ' . $arr["telefone"] . ' - ' . $arr["email"] . ' <br>';
       }
     mysqli_close($con);
     }
 
     //Update
 
   public function Update ($id_funcionario, $nome, $telefone, $email)
     {
     
 $con=ConnectionDB::Connect();
      
     $sql = "UPDATE Funcionario SET nome=@nome, telefone=@telefone, email=@email WHERE id_funcionario=@id_funcionario ";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
       }
     mysqli_close($con);
     }
 
     //Insert
 
     public function Insert ($id_funcionario, $nome, $telefone, $email)
     {

 $con=ConnectionDB::Connect();
     

     if(!$con) { trigger_error(mysqli_connect_error());}
 
     $sql = "INSERT INTO Funcionario (id_funcionario, nome, telefone, email) VALUES (@id_funcionario, @nome, @telefone, @email) ";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
       }
       mysqli_close($con);
     }
 
       //Delete
 
       public function Delete ($id_funcionario, $nome, $telefone, $email)
     {  
     
 $con=ConnectionDB::Connect();

       if(!$con) { trigger_error(mysqli_connect_error());}
 
       $sql = "DELETE FROM Funcionario WHERE id_funcionario=@id_funcionario AND nome=@nome AND telefone=@telefone AND email=@email";
       $result = mysqli_query($con, $sql);
       if(!$result){
           die('Could not query:'.mysqli_error($con));
       }
         mysqli_close($con);
     }
} 
?>
