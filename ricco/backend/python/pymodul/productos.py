

class Producto:
    def __init__(self, id_producto, nombre_producto, descripcion, precio):
        self._id_producto = id_producto
        self._nombre_producto =nombre_producto
        self._descripcion = descripcion
        self. precio = precio
        
    @property
    def id_producto (self):
        return self._id_producto
    
    @id_producto.setter
    def id_producto(self, value):
        self._id_producto = value
  
    @property
    def nombre_producto (self):
        return self._nombre_producto
    
    @nombre_producto.setter
    def nombre_producto(self, value):
        self._nombre_producto = value 
 
    @property
    def descripcion (self):
        return self._descripcion
    
    @descripcion.setter
    def descripcion(self, value):
        self._descripcion = value

    @property
    def precio (self):
        return self._precio
    
    @precio.setter
    def precio(self, value):
        self._precio = value   


    def mostrar_datos_productos(self):
        print("Código del producto: {self.id_producto}")
        print("Producto: {self.nombre_producto}")
        print("Descripción: {self.descripcion}")
        print("Precio: {self.precio}")
        
        
 