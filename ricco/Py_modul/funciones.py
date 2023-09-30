import decimal

def lista_productos(producto):
    
    print("\n Nuestros productos \n")
    contador = 1
    for cur in producto:
        datos = "{0}. id_producto: {1} / nombre_producto: {2} / descripcion: {3} / precio: {4}"
        print(datos.format(contador, cur[0], cur[1], cur[2], cur[3]))
        contador = contador + 1
        print(" ")

def datos_para_registro ():
    
    id_producto = int(input("Ingrese el número de orden del producto: "))  
    nombre_producto = input("Ingrese el nombre del producto: ")
    descripcion = input("Ingrese la descripción del producto: ")
    precio= decimal.Decimal(input("Ingrese el precio del producto: ")) 
    print(" ")
    
    producto = (id_producto, nombre_producto,descripcion, precio)   
    return producto

def datos_para_nvoproducto ():
    id_producto = int(input("Ingrese el número de orden del producto que desea cambiar: ")) 
    nvo_nombre = input ("Ingresar nuevo nombre: ")
    nva_descripcion = input("Ingrese la nueva descripción del producto: ") 
    nvo_precio = decimal.Decimal (input ("Ingresar el nuevo precio: "))
    print(" ")
    
    nuevo_producto = (id_producto, nvo_nombre, nva_descripcion, nvo_precio)
    return nuevo_producto

def datos_para_eliminar ():
    id_producto = int(input("Ingrese el ID del producto que desea eliminar: "))
    print(" ")
    
    return id_producto