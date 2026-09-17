<p><img src="https://progra-fing-usach.github.io/IMGs/logo-fing.png" alt="LogoUSACH" width="40%" align="right" hspace="10px" vspace="0px"></p>

# 10145- FUNDAMENTOS DE PROGRAMACIÓN PARA INGENIERÍA

# CONTENIDOS Y FECHAS DE EVALUACIONES

## TEORÍA 

### CONTENIDOS
 
**UNIDAD 1: FUNDAMENTOS DE PROGRAMACIÓN**
1. Introducción a Python:
    * Tipos de datos: (`int`, `float`, `complex`, `boolean`, `str`).
    * Operadores aritméticos (+, -, *, /, //, %, **).
    * Precedencia.
    * Expresiones.
    * Funciones de cambio de tipo.
    * Operador asignación (=). 
    * Variables.
    * Reglas de nombres para variables.
2. I/O:
    * Función `input()`.
    * Función `print()`.
3. Control de flujo:
    * Operadores de comparación (<, <=, >, >=, !=, ==).
    * Operadores booleanos (`not`, `and`, `or`).
    * Control de flujo usando `if`.
    * Control de flujo alternativo usando `if-else`.
    * Control de flujo alternativo usando `if-elif-else`.
    * Anidamiento.
4. Iteración:
    * Concepto de iteración y tautología.
    * Iteración usando `while`.
    * Uso de variables para iterar y para acumular.
    * Trazas de código.
    * Iteración sobre objetos.
    * Iteración usando `for-in`.
    * Función `range()`.
    * Diferencias entre `for-in` y `while`.
 
 **UNIDAD 2: FUNCIONES Y ABSTRACCIÓN**
 5. Funciones nativas e importadas:
    * Concepto de función.
    * Funciones nativas.
    * Funciones importadas.
    * Uso de `pip` e instalación de módulos.
    * Consulta de documentación.
6. Funciones propias:
    * Sintaxis de funciones propias.
    * Uso de `return`.
    * Tiempo de definición versus tiempo de ejecución.
    * *Scope*.
    * *Keyword arguments*.
    * Parámetros por defecto
7. Strings:
    * Concepto de objeto, atributo y método.
    * Tipo de dato string.
    * Métodos de los strings.
    * Indexación básica.  
8.  Tipos de datos compuestos: Listas
    * Concepto de objeto.
    * Tipo de dato lista.
    * Métodos de las listas (selección, agregación, actualización y eliminación).
    * Recorridos de listas.
    * Listas de listas.
    * Mutabilidad.
    * Paso por referencia.
    * Listas de listas.
    * Conversión de *string* a listas (`split`, `strip`, `join`)

**UNIDAD 3: PROGRAMACIÓN PARA INGENIERÍA**

8. Archivos:
    * Tipo de dato archivo.
    * Métodos y atributos de los archivos.
    * Leer y escribir en archivos de texto plano y CSV
    * Acceder a archivos por ruta absoluta y relativa.
    * *Encoding* y mapas de caracteres.

9. Recursión:
    * Concepto de recursión.
    * Definición de funciones recursivas (Ecuaciones de recurrencia, caso base).
    * Limitaciones y ventajas de la recursión.
    * Recursión sobre objetos.

### RESUMEN DE EVALUACIONES

| Calificación            | Ponderación | Fecha                | Contenidos |
| ----------------------- | ------------| -------------------- | ---------- |
|Actividades en clases (A)| 10%         | En horario de clases |            |
|Prueba 1 (P1)            | 45%         | 13-07-26             | Strings |
|Prueba 2 (P2)           | 45%         | 18-12-26             | Hasta Recursión |
|Prueba Optativa (POR)<sup>1</sup> | -           | 08-01-27             | Hasta Recursión |
|Prueba Recuperativa (PER)<sup>2</sup> | -           | 04-01-27             | - |

Todas las evaluaciones son acumulativas, es decir, la materia de la evaluación anterior se incluye en las evaluaciones que siguen.

<sup>1</sup> La Prueba Optativa de Reemplazo (POR) reemplaza la nota que más perjudica al estudiante a todo evento, es decir, tanto si la nota es mejor, como si es peor a la nota original.

<sup>2</sup> La Prueba Especial Recuperativa (PER) reemplaza la nota de Prueba 1 o Prueba 2 según corresponda. La prueba solo pueden rendirla estudiantes debidamente justificados por la Dirección de Docencia de la Facultad de Ingeniería. Los contenidos solo contemplan la evaluación a recuperar.

El cálculo de la nota se hace siguiendo el siguiente algoritmo:

```python
if rindio_POR:
 reemplazo_P1 = 0.45 * (7.0 - P1)
 reemplazo_P2 = 0.45 * (7.0 - P2)
 reemplazo_A = 0.45 * (7.0 - A)
 if reemplazo_P1 >= reemplazo_P2 and reemplazo_P1 >= reemplazo_A:
  P1 = POR
 elif reemplazo_P2 >= reemplazo_A:
  P2 = POR
 else:
  A = POR

promedio_final = round(P1 * 0.45 + P2 * 0.45 + A * 0.10, 1)

if asistencia < 75:
 promedio_final = min([promedio_final, 3.5])     
```

## LABORATORIO
### RESUMEN DE EVALUACIONES

| Calificación | Ponderación | Fecha | Contenidos |
| ------------ | ------| -------- | ------- |
|Tarea 1 (T1)  | 25% | 24-10-26 | Hasta Iteración |
|Tarea 2 (T2)  | 25% | 07-11-26 | Hasta Funciones propias |
|Tarea 3 (T3)  | 25% | 28-11-26 | Hasta Listas |
|Tarea 4 (T4)  | 25% | 12-12-26 | Hasta Archivos |

El estudiante debe tener un **100%** de asistencia para aprobar la asignatura.

El cálculo de la nota se hace siguiendo el siguiente algoritmo:

```python
promedio_tareas = (T1 + T2 + T3 + T4)/4
promedio_final = round(promedio_tareas, 1)
if asistencia >= 1:
    promedio_final = promedio_final
else:
   promedio_final = min([promedio_final, 3.5])
```

## NOTA FINAL

La calificación final se calcula siguiendo el siguiente algoritmo:
```python
if promedio_teoria >= 4.0 and promedio_laboratorio >= 4.0:
  promedio_final = round((promedio_teoria + promedio_laboratorio)/2)
else:
  promedio_final = min(promedio_teoria, promedio_laboratorio)
```

Si el estudiante aprueba solo teoría o solo laboratorio, la calificación se guarda por dos semestres consecutivos de acuerdo al artículo 6.4 del reglamento complementario de la Facultad de Ingeniería.
