import decimal

from pymodul.productos import Producto

class Usuario:  
    producto=Producto
    
    def __init__(self, id_usuario, apellido, nombre, email, telefono, clave_usuario, id_direccion, id_rol ):
        self._id_usuario = id_usuario
        self._apellido = apellido 
        self._nombre = nombre
        self. _email = email
        self. _telefono = telefono
        self. _clave_usuario = clave_usuario
        self. _id_direccion = id_direccion
        self. _id_rol = id_rol  

    @property
    def id_usuario (self):
        return self._id_usuario
    
    @id_usuario.setter
    def id_usuario(self, value):
        self._id_usuario = value    
        
    @property
    def apellido (self):
        return self._apellido
    
    @apellido.setter
    def apellido(self, value):
        self._apellido = value
        
    @property
    def nombre (self):
        return self._nombre
    
    @nombre.setter
    def nombre(self, value):
        self._nombre = value 
        
    @property
    def email (self):
        return self._email
    
    @email.setter
    def email(self, value):
        self._email = value  
        
    @property
    def telefono (self):
        return self._telefono
    
    @telefono.setter
    def telefono(self, value):
        self._telefono = value
        
    @property
    def clave_usuario (self):
        return self._clave_usuario

        
    @property
    def id_direccion (self):
        return self._id_direccion
    
    @id_direccion.setter
    def id_direccion(self, value):
        self._id_direccion = value
               
        
    @property
    def id_rol (self):
        return self._id_rol
    
    @id_rol.setter
    def id_rol(self, value):
        self._id_rol = value   
        


    def clien_registrarse(self,dao):
        try:
            query = "INSERT INTO usuarios (apellido, nombre, email, telefono, clave_usuario, id_direccion, id_rol) VALUES (%s, %s, %s, %s, %s, %s, %s)"
            values = (self._apellido, self._nombre, self._email, self._telefono, self._clave_usuario, """self._id_direccion, self._id_rol""")
            dao.execute_query(query, values)
        except Exception as e:
            print(f"Error al registrar usuario: {str(e)}")
        finally:    
            dao.__del__()

    def iniciar_sesion(self, dao, email, clave_usuario):
        try:
            query = "SELECT * FROM usuarios WHERE email = %s AND clave_usuario = %s"
            values = (email, clave_usuario)
            dao.execute_query(query, values)
            usuario_data = dao.fetch_one()
            if usuario_data:
                # Crear una instancia de Usuario con los datos recuperados de la base de datos
                usuario_iniciado = Usuario(usuario_data)
                return usuario_iniciado
            else:
                return None
        except Exception as e:
            print(f"Error al iniciar sesión: {str(e)}")
        finally:    
            dao.__del__()

    def admin_ver_productos(self, prod):
        print("\n Nuestros productos \n")
        contador = 1
        for cur in prod:
            datos = "{0}. id_producto: {1} / nombre_producto: {2} / descripcion: {3} / precio: {4}"
            print(datos.format(contador, cur[0], cur[1], cur[2], cur[3]))
            contador = contador + 1
        print(" ")
        
    def admin_crear_productos(self):
        id_producto = int(input("Ingrese el número de orden del producto: "))  
        nombre_producto = input("Ingrese el nombre del producto: ")
        descripcion = input("Ingrese la descripción del producto: ")
        precio = decimal.Decimal(input("Ingrese el precio del producto: "))
        print("")
        
        producto = (id_producto, nombre_producto,descripcion, precio)   
        return producto
        
    def admin_modificar_productos(self):
        id_producto = int(input("Ingrese el número de orden del producto que desea cambiar: ")) 
        nvo_nombre = input ("Ingresar nuevo nombre: ")
        nva_descripcion = input("Ingrese la nueva descripción del producto: ") 
        nvo_precio = decimal.Decimal (input ("Ingresar el nuevo precio: "))
        print(" ")
    
        nuevo_producto = (id_producto, nvo_nombre, nva_descripcion, nvo_precio)
        return nuevo_producto

        
    def admin_eliminar_productos(self):
        id_producto = int(input("Ingrese el ID del producto que desea eliminar: "))
        print(" ")
    
        return id_producto
    def clien_ver_menu(self):
        pass
    
    def clien_seleccionar_productos(self):
        pass
    
    def clien_quitar_productos(self):
        pass
    
    def clien_realizar_compra(self):
        pass
        
    def cerrar_sesion(self):
        pass
                                                