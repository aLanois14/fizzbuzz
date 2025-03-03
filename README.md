# FizzBuzz - TDD en Node.js

## Règles du jeu

| **Entrée (n)** | **Sortie attendue** | **Raison**                                         |
| -------------- | ------------------- | -------------------------------------------------- |
| `1`            | `1`                 | Aucun critère                                      |
| `2`            | `"fizzbuzz"`        | Divisible par **2**                                |
| `3`            | `"fizz"`            | Divisible par **3**                                |
| `4`            | `"fizzbuzz"`        | Divisible par **2**                                |
| `5`            | `"buzz"`            | Divisible par **5**                                |
| `6`            | `"fizzbuzz"`        | Divisible par **2** et **3** (priorité à fizzbuzz) |
| `10`           | `"buzz"`            | Divisible par **5**                                |
| `15`           | `"fizz"`            | Divisible par **3**, mais pas **2**                |
| `30`           | `"fizzbuzz"`        | Divisible par **2**, priorité à fizzbuzz           |
| `7`            | `7`                 | Aucun critère                                      |
| `0`            | `"fizzbuzz"`        | 0 est divisible par tout                           |
