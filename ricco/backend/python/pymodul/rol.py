
class Rol:
    
    def __init__(self, id_rol, nombre_rol ):
        self._id_rol = id_rol
        self._nombre_rol = nombre_rol
        
    @property
    def id_rol (self):
        return self._id_rol
    
    @id_rol.setter
    def id_rol(self, value):
        self._id_rol = value

    @property
    def nombre_rol (self):
        return self._nombre_rol
    
    @nombre_rol.setter
    def nombre_rol(self, value):
        self._nombre_rol = value
   
    def mostrar_datos_rol(self):
        print("Usted es un:{self.nombre_rol}")  