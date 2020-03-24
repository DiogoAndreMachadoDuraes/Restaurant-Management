<?php

include_once 'DAL/ConectionDB.php';
//criaçao da classe takeaway

class Takeaway
{                                
  public int $id_take;
  public string $preco;
  public string $data;
  public string $hora;
  public string $tipodeentrega;

   public function Takeaway()
   {
     $this->id_take = $id_take;
     $this->preco = $preco;
     $this->data = $data;
     $this->hora = $hora;
     $this->tipodeentrega = $tipodeentrega;
   }

   public function CreateTable()
   {
      $con=ConnectionDB::Connect();
    
    $sql = "CREATE TABLE Takeaway ( id_take  INT(50), preco VARCHAR(50), data VARCHAR(50), hora VARCHAR(50), tipodeentrega VARCHAR(50) PRIMARY KEY (id_take))";
    if ($con->query($sql) === TRUE){
        echo "tabela takeaway criada";
    } else{
        echo "Erro a criar a tabela: " . $con->error;
      }
      mysqli_close($con);
   }
    
   //Select
    
     public function Select ()
     {
      $con=ConnectionDB::Connect();

     $sql = "SELECT * FROM Takeaway";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
     }
     echo "<br>";
     while ($arr=mysqli_fetch_array($result)){
         echo "
         <table>
         <tr>
           <th>".$arr['id_take']."</th>
           <th>".$arr['preco']."</th> 
           <th>".$arr['data']."</th>
           <th>".$arr['hora']."</th>
           <th>".$arr['tipodeentrega']."</th>
         </tr>
         </table> ";
         //echo $arr["id_take"] . ' - ' . $arr["preco"] . ' - ' . $arr["data"] . ' - ' . $arr["hora"] . ' - ' . $arr["tipodeentrega"] . ' <br>';
       }
     mysqli_close($con);
     }
 
     //Update
 
   public function Update ($id_take, $preco, $data, $hora, $tipodeentrega)
     {
      $con=ConnectionDB::Connect();
   
     $sql = "UPDATE Takeaway SET preco=@preco, data=@data, hora=@hora, tipodeentrega=@tipodeentrega WHERE id_take=@id_take ";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
       }
     mysqli_close($con);
     }
 
     //Insert
 
     public function Insert ($id_take, $preco, $data, $hora, $tipodeentrega)
     {
 $con=ConnectionDB::Connect();
      
     if(!$con) { trigger_error(mysqli_connect_error());}
 
     $sql = "INSERT INTO Takeaway (id_take, preco, data, hora, tipodeentrega) VALUES (@id_take, @preco, @data, @hora, @tipodeentrega) ";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
       }
       mysqli_close($con);
     }
 
       //Delete
 
       public function Delete ($id_take, $preco, $data, $hora, $tipodeentrega)
     {  
          $con=ConnectionDB::Connect();
      

       if(!$con) { trigger_error(mysqli_connect_error());}
 
       $sql = "DELETE FROM Takeaway WHERE id_take=@id_take AND preco=@preco AND data=@data AND hora=@hora AND tipodeentrega=@tipodeentrega";
       $result = mysqli_query($con, $sql);
       if(!$result){
           die('Could not query:'.mysqli_error($con));
       }
         mysqli_close($con);
     }
} 
?>
