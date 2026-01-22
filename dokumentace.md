# 📌 Návrh databáze k maturitní práci

## 📝 1. Název databáze
Databáze pro evidentci knížek k ústní maturitě z češtiny

---

## 🎯 2. Popis databáze

**Příklad:**  
Tato databáze slouží k evidenci všech knížek, které si maturant může vybrat ke svojí zkoušce. Budou ji používat převážně žáci, ale také učitelé, kteří budou mít právo upravovat záznamy.

---

## 🗂 3. Struktura databáze (tabulky)
*Popište jednotlivé tabulky v databázi, jejich účel a hlavní atributy.*

### **Tabulka 1: knihy**
**Popis:**  
*Tato tabulka eviduje všechny knihy a důležité informace o nich*  

| Sloupec | Popis | Datový typ | null
|---------|-----------|--------|-----
| id | Unikátní identifikátor | int(4)| ne
| názevKnihy | Jméno knihy | varchar(255) | ne
| idAutor | autor knihy | int(4) | ne
| idZanru | žánr knihy | int(3) | ne 
| idObdobi | Období vzniku knihy | int(3) | ne
| idAdmin | Autor záznamu v databázi | int(3) | ne

### **Tabulka 2: autori**
**Popis:**  
*Tato tabulka eviduje všechny autory*  

| Sloupec | Popis | Datový typ | Null
|---------|-------|------------|------
| id | Unikátní identifikátor | int(4) | ne
| jmeno | Jméno autora | varchar(150) | ano
| prijmení | Příjmení autora | varchar(200) | ne

### **Tabulka 3: obdobi**
**Popis:**  
*Tato tabulka eviduje všechny období, ve kterých byly knihy napsané*

| Sloupec | Popis | Datový typ | Null
|---------|-------|------------|------
| id | Unikátní identifikátor | int(3) | ne
| nazev | Název období | varchar(100) | ne

### **Tabulka 4: zanry**
**Popis:**  
*Tato tabulka eviduje všechny žánry, ve kterých knihy mohou být napsány*  

| Sloupec | Popis | Datový typ | Null
|---------|-------|------------|------
| id | Unikátní identifikátor | int(3) | ne
| nazev | Název zanru | varchar(50) | ne

### **Tabulka 5: admin**
**Popis:**  
*Tato tabulka eviduje všechny uživatelé, kteří mají právo na přidávání záznamů, měnění a odstraňování záznamů* 

| Sloupec | Popis | Datový typ | Null
|---------|-------|------------|------
| id | Unikátní identifikátor | int(4) | ne
| uzivatelskeJmeno | Jméno, pod kterým se uživatel přhlašuje | varchar(255) | ne
| heslo | Heslo, pod kterým se uživatel přihlašuje | varchar(255) | ne
| jmeno | Pravé jméno uživatele | varchar(150) | ne
| prijmení | Pravé přijmení uživatele | varchar(200) | ne
| email | Kontaktní email uživatele | varchar(255) | ne

---

## 🔗 4. Vztahy mezi tabulkami

📌 **Příklad vztahů**:  
- Každý autor (tabulka autori) může mít napsáno více knih (tabulka knihy) →  **1:N**  
- Každý žánr (tabulka zanry) může být přiřazen více knihám (tabulka knihy) → **1:N**
- Každé období (tabulka obdobi) může obsahovat více knih (tabulka knihy) → **1:N**
- Každý administrátor (tabulka admin) může spravovat (vložit) více knih (tabulka knihy) → **1:N**
---

## 🛠 5. SQL skripty (`CREATE TABLE`)
```sql
CREATE TABLE `admin` (
  `id` int(3) NOT NULL,
  `uzivatelskeJmeno` varchar(255) NOT NULL,
  `heslo` varchar(255) NOT NULL,
  `jmeno` varchar(150) NOT NULL,
  `prijmeni` varchar(200) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `autori` (
  `id` int(4) NOT NULL,
  `jmeno` varchar(150) DEFAULT NULL,
  `prijmeni` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `knihy` (
  `id` int(4) NOT NULL,
  `nazevKnihy` varchar(255) NOT NULL,
  `idAutor` int(4) NOT NULL,
  `idZanru` int(3) NOT NULL,
  `idObdobi` int(3) NOT NULL,
  `idAdmin` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `obdobi` (
  `id` int(3) NOT NULL,
  `nazev` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `zanry` (
  `id` int(3) NOT NULL,
  `nazev` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
