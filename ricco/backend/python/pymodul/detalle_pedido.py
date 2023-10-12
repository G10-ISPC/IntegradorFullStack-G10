class Detalle_pedido:
    def __init__(self, id_detalle, id_producto, id_compra, cantidad, precio_calculado ):
        self. _id_detalle = id_detalle  
        self. _id_producto = id_producto            
        self._id_compra = id_compra
        self._cantidad = cantidad
        self._precio_calculado = precio_calculado
        
    @property
    def id_detalle (self):
        return self._id_detalle
    
    @id_detalle.setter
    def id_detalle (self, value):  
        self._id_detalle = value 

    @property
    def id_producto (self):
        return self._id_producto
    
    @id_producto.setter
    def id_producto(self, value):
        self._id_producto = value

    @property
    def id_compra (self):
        return self._id_compra
    
    @id_compra.setter
    def id_compra(self, value):
        self._id_compra = value

    @property
    def cantidad (self):
        return self._cantidad
    
    @cantidad.setter
    def cantidad(self, value):
        self._cantidad = value 
      
    @property
    def precio_calculado (self):
        return self._precio_calculado
    
    @precio_calculado.setter
    def precio_calculado(self, value):
        self._precio_calculado = value   
