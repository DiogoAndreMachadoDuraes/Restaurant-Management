<?php

include_once 'DAL/ConectionDB.php';
//criaçao da classe gestor

class Gestor
{                                
  public int $id_gestor;
  public string $nome;
  public string $telefone;
  public string $email;

   public function Gestor()
   {
     $this->id_gestor = $id_gestor;
     $this->nome = $nome;
     $this->telefone = $telefone;
     $this->email = $email;
   }

   public function CreateTable()
   {
   
 $con=ConnectionDB::Connect();

    $sql = "CREATE TABLE Gestor ( id_gestor  INT(50), nome VARCHAR(50), telefone VARCHAR(50), email VARCHAR(50) PRIMARY KEY (id_gestor))";
    if ($con->query($sql) === TRUE){
        echo "tabela gestor criada";
    } else{
        echo "Erro a criar a tabela: " . $con->error;
      }
      mysqli_close($con);
   }
    
   //Select
    
     public function Select ()
     {
     
 $con=ConnectionDB::Connect();

     $sql = "SELECT * FROM Gestor";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
     }
     echo "<br>";
     while ($arr=mysqli_fetch_array($result)){
         echo "
         <table>
         <tr>
           <th>".$arr['id_gestor']."</th>
           <th>".$arr['nome']."</th> 
           <th>".$arr['telefone']."</th>
           <th>".$arr['email']."</th>
         </tr>
         </table> ";
         //echo $arr["id_gestor"] . ' - ' . $arr["nome"] . ' - ' . $arr["telefone"] . ' - ' . $arr["email"] . ' <br>';
       }
     mysqli_close($con);
     }
 
     //Update
 
   public function Update ($id_gestor, $nome, $telefone, $email)
     {
     
 $con=ConnectionDB::Connect();
     
     $sql = "UPDATE Gestor SET nome=@nome, telefone=@telefone, email=@email WHERE id_gestor=@id_gestor ";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
       }
     mysqli_close($con);
     }
 
     //Insert
 
     public function Insert ($id_gestor, $nome, $telefone, $email)
     {
       
 $con=ConnectionDB::Connect();

     if(!$con) { trigger_error(mysqli_connect_error());}
 
     $sql = "INSERT INTO Gestor (id_gestor, nome, telefone, email) VALUES (@id_gestor, @nome, @telefone, @email) ";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
       }
       mysqli_close($con);
     }
 
       //Delete
 
       public function Delete ($id_gestor, $nome, $telefone, $email)
     {  
      
 $con=ConnectionDB::Connect();

       if(!$con) { trigger_error(mysqli_connect_error());}
 
       $sql = "DELETE FROM Gestor WHERE id_gestor=@id_gestor AND nome=@nome AND telefone=@telefone AND email=@email";
       $result = mysqli_query($con, $sql);
       if(!$result){
           die('Could not query:'.mysqli_error($con));
       }
         mysqli_close($con);
     }
} 
?>
