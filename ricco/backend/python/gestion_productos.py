from conexion import DAO

#import funciones

from pymodul.usuarios import Usuario

def gestion_productos():
    continuar = True
    while(continuar):
        opcionCorrecta = False
        while (not opcionCorrecta):
            print("\n")
            print("====Gestión de Productos====")
            print("1.- Lista de Producto: ")
            print("2.- Ingresar Producto: ")  
            print("3.- Modificar producto:  ")
            print("4.- Eliminar Producto: ")
            print("5.- Salir")
            print("\n")
            opcion = int(input("Seleccione la opción: "))
            print("\n")
            if opcion < 1 or opcion > 5: 
                print("Opción incorrecta, ingrese una opción nuevamente...")
            elif opcion == 5:
                continuar = False
                print("Gracias por utilizar el sistema!")
                print(" ")
                break

            else:
                opcionCorrecta = True
                ejecutar_opcion(opcion)

def ejecutar_opcion(opcion):
    dao = DAO()
    #usuario_instance = Usuario (None, None, None, None)
    #usuario = Usuario()
    #producto = Producto()
    if opcion == 1:
        try:
            productos = dao.lista_productos()
            if len(productos) > 0:
                Usuario.admin_ver_productos()  
                #usuario_instance.admin_ver_productos(productos)
            else:
                print("No hay productos")
        except Exception as e:
            print("Ocurrio un error", str(e))

    elif opcion == 2:
        producto = Usuario.admin_crear_productos()
        try:
            dao.registrar_producto(producto)
        except Exception as e:
            print("Ocurrio un error", str(e))   
    elif opcion == 3:
        nuevo_producto = Usuario.admin_modificar_productos()
        try:
            dao.modificar_datos(nuevo_producto)
        except Exception as e:
            print("Ocurrio un error", str(e))
    elif opcion == 4:
        id_producto= Usuario.admin_eliminar_productos()
        try:
            dao.eliminar_producto(id_producto)
        except Exception as e:
            print("Ocurrio un error", str(e))
    elif opcion == 5:
        print("Gracias por utilizar el sistema!")
        print(" ")
    else:
        print("Opción no válida.")
        
gestion_productos()