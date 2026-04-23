<p><img src="https://progra-fing-usach.github.io/IMGs/logo-fing.png" alt="LogoUSACH" width="40%" align="right" hspace="10px" vspace="0px"></p>

# 10110 - FUNDAMENTOS DE COMPUTACIÓN Y PROGRAMACIÓN

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
2. Strings e I/O:
    * Concepto de objeto, atributo y método.
    * Tipo de dato string.
    * Métodos de los strings.
    * Indexación básica.
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
5.  Tipos de datos compuestos: Listas
    * Concepto de objeto.
    * Tipo de dato lista.
    * Métodos de las listas (selección, agregación, actualización y eliminación).
    * Recorridos de listas.
    * Listas de listas.
    * Mutabilidad.
    * Paso por referencia.
    * Listas de listas.
    * Conversión de *string* a listas (`split`, `strip`, `join`)

**UNIDAD 2: FUNCIONES Y ABSTRACCIÓN**

6. Funciones nativas e importadas:
    * Concepto de función.
    * Funciones nativas.
    * Funciones importadas.
    * Uso de `pip` e instalación de módulos.
    * Consulta de documentación.
7. Funciones propias:
    * Sintaxis de funciones propias.
    * Uso de `return`.
    * Tiempo de definición versus tiempo de ejecución.
    * *Scope*.
    * *Keyword arguments*.
    * Parámetros por defecto


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
|Prueba 1 (P1)            | 45%         | 06-06-26             | Hasta Listas (incluyendo Listas de listas) |
|Prueba 2 (P2)            | 45%         | 11-07-26             | Hasta Recursión |
|Prueba Optativa (POR)    | -           | 25-07-26             | Hasta Recursión |

Todas las evaluaciones son acumulativas, es decir, la materia de la evaluación anterior se incluye en las evaluaciones que siguen.

El cálculo de la nota se hace siguiendo el siguiente algoritmo:

```python
promedio_pruebas = (P1 + P2)/2
promedio_final = round(A * 0.1 + promedio_pruebas * 0.9, 1)

if promedio_final >= 4.0:
  promedio_final = promedio_final
else:
  promedio_pruebas = (P1 + P2 + POR - min(P1, P2, POR))/2
  promedio_final = round(A * 0.1 + promedio_pruebas * 0.9, 1)
```

### PLANIFICACIÓN SEMANA A SEMANA

#### CALENDARIO DE GUÍAS Y TAREAS

| Semana | Fecha      | Tema                                                                       | Evaluaciones Teoría | Evaluaciones Lab |
| :----- | :--------- | :------------------------------------------------------------------------- | :------------------ | :--------------- |
| 1      | 30/03/2026 | Introducción y elementos básicos (Tipos de datos, operadores, expresiones) |                     |                  |
| 2      | 06/04/2026 | Strings e I/O                                                              |                     |                  |
| 3      | 13/04/2026 | Decisiones                                                                 |                     |                  |
| 4      | 20/04/2026 | Ciclos `while` y `for-in`                                                  |                     |                  |
| 5      | 27/04/2026 | Listas                                                                     |                     | T1               |
| 6      | 04/05/2026 | Listas de listas                                                           |                     |                  |
| 7      | 11/05/2026 |                                                                            |                     |                  |
| X      | 18/05/2026 | Semana de receso                                                           | Semana de receso    | Semana de receso |
| 8      | 25/05/2026 | Funciones nativas e importadas                                             |                     | T2               |
| 9      | 01/06/2026 |                                                                            | P1                  |                  |
| 10     | 08/06/2026 | Funciones propias                                                          |                     |                  |
| 11     | 15/06/2026 | Funciones propias y recursión                                              |                     |                  |
| 12     | 22/06/2026 | Archivos                                                                   |                     |                  |
| 13     | 29/06/2026 | Archivos                                                                   |                     | T3               |
| 14     | 06/07/2026 |                                                                            | P2                  |                  |
| 15     | 13/07/2026 |                                                                            | PER                 |                  |
| 16     | 20/07/2026 |                                                                            | POR                 |                  |
| 17     | 27/07/2026 |                                                                            |                     |                  |

* Puede variar dependiendo de feriados, suspensiones y otros.

## LABORATORIO
### RESUMEN DE EVALUACIONES

| Calificación | Ponderación | Fecha | Contenidos |
| ------------ | ------| -------- | ------- |
|Tarea 1 (T1)  | 33.3% | 27-04-26 | Hasta Listas |
|Tarea 2 (T2)  | 33.3% | 25-05-26 | Hasta Funciones propias |
|Tarea 3 (T3)  | 33.3% | 20-06-26 | Hasta Recursión |

El estudiante debe tener un **100%** de asistencia para aprobar la asignatura.

El cálculo de la nota se hace siguiendo el siguiente algoritmo:

```python
promedio_tareas = (T1 + T2 + T3 - min(T1, T2, T3))/2
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
