class Compra:
    def __init__(self, id_compra, fecha, id_usuario, precio_total, id_detalle):
        self._id_compra = id_compra
        self._fecha = fecha
        self._id_usuario =id_usuario
        self._precio_total = precio_total
        self. _id_detalle = id_detalle
        
    @property
    def id_compra (self):
        return self._id_compra
    
    @id_compra.setter
    def id_compra(self, value):
        self._id_compra = value

    @property
    def fecha (self):
        return self._fecha
    
    @fecha.setter
    def fecha(self, value):
        self._fecha = value 

    def id_usuario (self):
        return self._id_usuario
    
    @id_usuario.setter
    def id_usuario(self, value):
        self._id_usuario = value

    @property
    def precio_total (self):
        return self._precio_total
    
    @precio_total.setter
    def precio_total(self, value):
        self._precio_total = value   

    @property
    def id_detalle (self):
        return self._id_detalle
    
    @id_detalle.setter
    def id_detalle (self, value):  
        self._id_detalle = value 

        
        
                
