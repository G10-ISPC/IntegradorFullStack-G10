import mysql.connector

from mysql.connector import Error


class DAO():
   
   def __init__(self):
       try:
          self. connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password='',
            database='bd_ricco'
        )
       except Error as ex:
         print ("Error al intentar conexión: {0}".format(ex))

   def lista_productos(self):
       if self.connection.is_connected():
           try:
              cursor = self.connection.cursor()
              cursor.execute("SELECT * FROM productos ORDER BY nombre_producto ASC")
              resultados = cursor.fetchall()
              return resultados
           
           except Error as ex: 
              print ("Error al intentar conexión: {0}".format(ex))

   def registrar_producto(self, producto):
       if self.connection.is_connected():
           try:
              cursor = self.connection.cursor()
              sql = "INSERT INTO productos (id_producto, nombre_producto, descripcion, precio ) VALUES ('{0}','{1}','{2}','{3}')"
              cursor.execute(sql.format (producto [0], producto[1], producto[2], producto[3]))     
              self.connection.commit()
              print("¡Producto registrado con éxito!\n")
              
           except Error as ex: 
              print ("Error al intentar conexión: {0}".format(ex))          
          
   def modificar_datos (self, id_producto, nvo_nombre, nva_descripcion, nvo_precio):
      
      if self.connection.is_connected():
           try:
              cursor = self.connection.cursor()
              sql = "UPDATE productos SET nombre_producto = %s, descripcion = %s, precio = %s WHERE id_producto = %s"
              values =(id_producto, nvo_nombre, nva_descripcion, nvo_precio)
              cursor.execute (sql, values ) 
              self.connection.commit()
              print("¡Producto modificado con éxito!\n")
           except Error as ex: 
              print ("Error al intentar conexión: {0}".format(ex)) 
              
   def eliminar_producto(self, id_producto):
    if self.connection.is_connected():
           try:
             cursor = self.connection.cursor()
             sql = "DELETE FROM productos WHERE id_producto = %s"
             cursor.execute(sql, (id_producto,))
             self.connection.commit()
             print("¡Producto eliminado con éxito!\n")
           except Error as ex:
             print("Error al intentar conexión: {0}".format(ex))                 