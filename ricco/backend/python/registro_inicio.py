from pymodul.usuarios import Usuario

from pymodul.rol import Rol

from conexion import DAO

if __name__ == "__main__":
    dao = DAO()
    
    while True:
        print("\n==== Menú ====")
        print("1. Registrar usuario")
        print("2. Iniciar sesión")
        print("3. Cerrar sesión")

        opcion = input("Selecciona una opción: ")

        if opcion == "1":
            print("\nRegistro de Usuario")
            apellido = input("Apellido: ")
            nombre = input("Nombre: ")
            email = input("Email: ")
            telefono = input("Teléfono: ")
            clave_usuario = input("Contraseña: ")
            id_direccion = input("ID de dirección: ")  
            id_rol = 2 

            nuevo_usuario = Usuario(None, apellido, nombre, email, telefono, clave_usuario, id_direccion, id_rol)
            nuevo_usuario.clien_registrarse(dao)
            print("Usuario registrado exitosamente como cliente.")

        elif opcion == "2":
            print("\nIniciar Sesión")
            email = input("Email: ")
            clave_usuario = input("Contraseña: ")

            usuario = Usuario(None, None, None, email, None, clave_usuario, None, None)
            usuario_iniciado = usuario.iniciar_sesion()
            
            if usuario_iniciado:
                print(f"Bienvenido, {usuario_iniciado.nombre} ({usuario_iniciado.id_rol})")
            else:
                print("Credenciales incorrectas.")

        elif opcion == "3":
            print("¡Hasta luego!")
            break

        else:
            print("Opción no válida. Por favor, selecciona una opción válida.")