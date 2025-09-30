<p><img src="https://progra-fing-usach.github.io/IMGs/logo-fing.png" alt="LogoUSACH" width="40%" align="right" hspace="10px" vspace="0px"></p>

# 10145- FUNDAMENTOS DE PROGRAMACIÓN PARA INGENIERÍA

# CONTENIDOS Y FECHAS DE EVALUACIONES

## TEORÍA 

### CONTENIDOS
 
**UNIDAD 1: FUNDAMENTOS DE PROGRAMACIÓN**
1. Introducción a Python:
    * Tipos de datos: (int, float, complex, boolean, str).
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
    * Función input().
    * Función print().
3. Control de flujo:
    * Operadores de comparación (<, <=, >, >=, !=, ==).
    * Operadores booleanos (not, and, or).
    * Control de flujo usando if.
    * Control de flujo alternativo usando if-else.
    * Control de flujo alternativo usando if-elif-else.
    * Anidamiento.
4. Iteración:
    * Concepto de iteración y tautología.
    * Iteración usando while.
    * Uso de variables para iterar y para acumular.
    * Trazas de código.
    * Iteración sobre objetos.
    * Iteración usando for-in.
    * Función range().
    * Diferencias entre for-in y while.
5.  Tipos de datos compuestos: Listas
    * Concepto de objeto.
    * Tipo de dato lista.
    * Métodos de las listas (selección, agregación, actualización y eliminación).
    * Recorridos de listas.
    * Listas de listas.
    * Mutabilidad.
    * Paso por referencia.
    * Listas de listas.
    * Conversión de string a listas (split, strip, join)

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

| Calificación            | Ponderación | Fecha   | Contenidos |
| ----------------------- | ------------| ------- | ---------- |
|Actividades en clases (A)| 15%         | En horario de clases | |
|Control 1 (C1)| 6.25%| 13-09-25 | Hasta Decisiones |
|Control 2 (C2)| 6.25%| 04-10-25 | Hasta Listas |
|Control 3 (C3)| 6.25%| 30-10-25 | Hasta Funciones |
|Control 4 (C4)| 6.25%| 15-11-25 | Hasta Archivos |
|Prueba 1 (P1) | 30%| 18-10-25 | Hasta Listas (incluyendo Listas de listas) |
|Prueba 2 (P2) | 30%| 29-11-25 | Hasta Recursión |
|Prueba Optativa (POR) | - | 08-12-25 | Hasta Recursión |

El estudiante debe tener un **75%** de asistencia para aprobar la asignatura. Todas las evaluaciones son acumulativas, es decir, la materia de la evaluación anterior se incluye en las evaluaciones que siguen.

El cálculo de la nota se hace siguiendo el siguiente algoritmo:

```python
promedio_controles = (C1 + C2 + C3 + C4)/4
promedio_pruebas = (P1 + P2)/2
promedio_final = round(A * 0.15 + promedio_controles * 0.25 + promedio_pruebas * 0.6, 1)
if asistencia >= 0.75:
  if promedio_final >= 4.0:
    promedio_final = promedio_final
  else:
    promedio_pruebas = (P1 + P2 + POR - min(P1, P2, POR))/2
    promedio_final = round(A * 0.15 + promedio_controles * 0.25 + promedio_pruebas * 0.6, 1)
else:
   promedio_final = min([promedio_final, 3.5])
```


### PLANIFICACIÓN SEMANA A SEMANA

#### CALENDARIO DE GUÍAS Y TAREAS

| Semana | Fecha    | Temario semanal*                   | Evaluaciones          |
|--------|----------|------------------------------------|-----------------------|
| 1      | 18-08-25 | 01. Elementos básicos de Python    |                       |
| 2      | 25/08/25 | Strings e I/O                      |                       |
| 3      | 01/09/25 | Decisiones                         |                       |
| 4      | 08/09/25 | Ciclos `while`                     | C1                    |
| X      | 15/09/25 | Receso universitario               |                       |
| 5      | 22/09/25 | Ciclos `for-in` y anidación        |                       |
| 6      | 29/09/25 | Listas                             | C2                    |
| 7      | 06/10/25 | Listas de listas                   |                       |
| 8      | 13/10/25 | Semana de pruebas                  | P1                    |
| 9      | 20/10/25 | Funciones nativas e importadas     |                       |
| 10     | 27/10/25 | Funciones propias                  | C3                    |
| 11     | 03/11/25 | Funciones propias y recursión      |                       |
| 12     | 10/11/25 | Archivos                           | C4                    |
| 13     | 17/11/25 | Archivos                           |                       |
| 14     | 24/11/25 |                                    | P2                    |
| 15     | 01/12/25 |                                    |                       |
| 16     | 08/12/25 |                                    | POR                   |
| 17     | 15/12/25 |                                    |                       |

* Puede variar dependiendo de feriados, suspensiones y otros.

## LABORATORIO

### RESUMEN DE EVALUACIONES

| Calificación  | Ponderación | Fecha    | Contenidos                   |
| ------------- |------ ------| -------- | ---------------------------- |
| Tarea 1 (T1)  | 16.7%       | 30-09-25 | Hasta Listas                 |
| Tarea 2 (T2)  | 16.7%       | 25-10-25 | Hasta Funciones propias      |
| Tarea 3 (T3)  | 16.7%       | 22-11-25 | Hasta Recursión              |
| Proyecto (P1) | 2%          | 06-10-25 | Inscripción de grupos        |
| Proyecto (P2) | 8%          | 27-10-25 | Primer avance (presentación) |
| Proyecto (P3) | 40%         | 01-12-25 | Proyecto terminado           |

El estudiante debe tener un **100%** de asistencia para aprobar la asignatura.

El cálculo de la nota se hace siguiendo el siguiente algoritmo:

```python
promedio_tareas = (T1 + T2 + T3 - min(T1, T2, T3))/2
promedio_tareas = round(promedio_tareas, 1)
promedio_proyecto (P1 * 0.02 + P2 * 0.18 + P3 * 0.8)
promedio_proyecto = round(promedio_proyecto, 1)
promedio_final = round((promedio_tareas + promedio_proyecto)/2, 1)
if asistencia >= 1:
  if promedio_tareas >= 4.0 and promedio_proyecto >= 4.0:
    promedio_final = promedio_final
  else:
    promedio_min([promedio_tareas, promedio_proyecto])
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
