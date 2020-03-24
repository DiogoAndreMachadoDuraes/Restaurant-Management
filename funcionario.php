<?php

//criaçao da classe alergenio

class funcionario
{                                
  public int $id_funcionario;
  public string $nome;
  public string $telefone;
  public string $email;

   public function funcionario()
   {
     $this->id_funcionario = $id_funcionario;
     $this->nome = $nome;
     $this->telefone = $telefone;
     $this->email = $email;
   }

   public function CreatTable()
   {
   
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
     

     $sql = "SELECT * FROM funcionario";
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
      
     $sql = "UPDATE funcionario SET nome=@nome, telefone=@telefone, email=@email WHERE id_funcionario=@id_funcionario ";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
       }
     mysqli_close($con);
     }
 
     //Insert
 
     public function Insert ($id_funcionario, $nome, $telefone, $email)
     {

     

     if(!$con) { trigger_error(mysqli_connect_error());}
 
     $sql = "INSERT INTO funcionario (id_funcionario, nome, telefone, email) VALUES (@id_funcionario, @nome, @telefone, @email) ";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
       }
       mysqli_close($con);
     }
 
       //Delete
 
       public function Delete ($id_funcionario, $nome, $telefone, $email)
     {  
     

       if(!$con) { trigger_error(mysqli_connect_error());}
 
       $sql = "DELETE FROM funcionario WHERE id_funcionario=@id_funcionario AND nome=@nome AND telefone=@telefone AND email=@email";
       $result = mysqli_query($con, $sql);
       if(!$result){
           die('Could not query:'.mysqli_error($con));
       }
         mysqli_close($con);
     }
} 
?>
