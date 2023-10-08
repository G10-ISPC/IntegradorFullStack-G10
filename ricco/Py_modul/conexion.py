import mysql.connector

from mysql.connector import Error


class DAO():
   
   def __init__(self):
       try:
          self. connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password='123456',
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
          
   def modificar_datos (self, productos):   
      if self.connection.is_connected():
           try:
              cursor = self.connection.cursor()
              sql = "UPDATE productos SET nombre_producto = '{0}', descripcion = '{1}', precio = '{2}' WHERE id_producto = '{3}'"
              cursor.execute(sql.format(productos[1], productos[2], productos[3], productos[0]))
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