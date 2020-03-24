<?php

//criaçao da classe alergenio

class alergenio
{                                
  public int $id_alerge;
  public string $tipo;
  public string $descricao;

   public function alergenio()
   {
     $this->id_alerge = $id_alerge;
     $this->tipo = $tipo;
     $this->descricao = $descricao;
   }

   public function CreatTable()
   {
    

    $sql = "CREATE TABLE Alergenio ( id_alerge  INT(50), tipo VARCHAR(50), descricao VARCHAR(50), PRIMARY KEY (id_alerge))";
    if ($con->query($sql) === TRUE){
        echo "tabela alergenio criada";
    } else{
        echo "Erro a criar a tabela: " . $con->error;
      }
      mysqli_close($con);
   }
    
   //Select
    
     public function Select ()
     {
    
     $sql = "SELECT * FROM alergenio";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
     }
     echo "<br>";
     while ($arr=mysqli_fetch_array($result)){
         echo "
         <table>
         <tr>
           <th>".$arr['id_alerge']."</th>
           <th>".$arr['tipo']."</th> 
           <th>".$arr['descricao']."</th>
         </tr>
         </table> ";
         //echo $arr["id_alerge"] . ' - ' . $arr["tipo"] . ' - ' . $arr["descricao"] . ' <br>';
       }
     mysqli_close($con);
     }
 
     //Update
 
   public function Update ($id_alerge, $tipo, $descricao)
     {
   

     $sql = "UPDATE alergenio SET tipo=@tipo, descricao=@descricao WHERE id_alerge=@id_alerge ";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
       }
     mysqli_close($con);
     }
 
     //Insert
 
     public function Insert ($id_alerge, $tipo, $descricao)
     {

     if(!$con) { trigger_error(mysqli_connect_error());}
 
     $sql = "INSERT INTO alergenio (id_alerge, tipo, descricao) VALUES (@id_alerge, @tipo, @descricao) ";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
       }
       mysqli_close($con);
     }
 
       //Delete
 
       public function Delete ($id_alerge, $tipo, $descricao)
     {  
      
       if(!$con) { trigger_error(mysqli_connect_error());}
 
       $sql = "DELETE FROM alergenio WHERE id_alerge=@id_alerge AND tipo=@tipo AND descricao=@descricao";
       $result = mysqli_query($con, $sql);
       if(!$result){
           die('Could not query:'.mysqli_error($con));
       }
         mysqli_close($con);
     }
} 
?>
