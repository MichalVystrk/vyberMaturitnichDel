<?php
$books = [
    'category1' => [
        ['id' => 1,  'author' => 'William Shakespeare',                'title' => 'Hamlet',                              'genre' => 'drama'],
        ['id' => 2,  'author' => 'Miguel de Cervantes',                'title' => 'Don Quixote',                         'genre' => 'próza'],
        ['id' => 3,  'author' => 'Johann Wolfgang von Goethe',        'title' => 'Faust',                               'genre' => 'drama'],
        ['id' => 4,  'author' => 'Daniel Defoe',                      'title' => 'Robinson Crusoe',                     'genre' => 'próza'],
        ['id' => 5,  'author' => 'Jonathan Swift',                    'title' => 'Gulliverovy cesty',                  'genre' => 'próza'],
        ['id' => 6,  'author' => 'Kliment Gottwald',                  'title' => 'Český kníže Václav',                 'genre' => 'poetry'],
        ['id' => 7,  'author' => 'František Přemysl Šulc',            'title' => 'Cestopis československého žáka',     'genre' => 'próza'],
        ['id' => 8,  'author' => 'Václav Kliment Klicpera',           'title' => 'Hadrián z Římstalů',                 'genre' => 'drama'],
        ['id' => 9,  'author' => 'Jean Racine',                       'title' => 'Faidra',                              'genre' => 'drama'],
        ['id' => 10, 'author' => 'Ludvig Holberg',                    'title' => 'Ján Křestitel',                       'genre' => 'drama'],

        // additional items (same authors / extra works)
        ['id' => 41, 'author' => 'William Shakespeare',                'title' => 'Romeo a Julie',                       'genre' => 'drama'],
        ['id' => 42, 'author' => 'Johann Wolfgang von Goethe',        'title' => 'Utrpení mladého Werthera',           'genre' => 'próza'],
        ['id' => 43, 'author' => 'Miguel de Cervantes',                'title' => 'Novely a povídky',                   'genre' => 'próza'],

        // více děl stejných autorů
        ['id' => 53, 'author' => 'William Shakespeare',                'title' => 'Sonety',                              'genre' => 'poetry'],
        ['id' => 54, 'author' => 'William Shakespeare',                'title' => 'Macbeth',                             'genre' => 'drama'],
        ['id' => 55, 'author' => 'Johann Wolfgang von Goethe',        'title' => 'Divoký lovec',                        'genre' => 'drama'],
    ],
    'category2' => [
        ['id' => 11, 'author' => 'Jane Austen',                       'title' => 'Pýcha a předsudek',                   'genre' => 'próza'],
        ['id' => 12, 'author' => 'Charlotte Brontë',                  'title' => 'Jane Eyrová',                         'genre' => 'próza'],
        ['id' => 13, 'author' => 'Charles Dickens',                   'title' => 'Oliver Twist',                        'genre' => 'próza'],
        ['id' => 14, 'author' => 'Gustave Flaubert',                  'title' => 'Paní Bovaryová',                      'genre' => 'próza'],
        ['id' => 15, 'author' => 'Victor Hugo',                       'title' => 'Chrám Notre-Dame',                    'genre' => 'próza'],
        ['id' => 16, 'author' => 'Alexander Dumas',                   'title' => 'Hrabě Monte Christo',                'genre' => 'próza'],
        ['id' => 17, 'author' => 'Honoré de Balzac',                  'title' => 'Otec Goriot',                         'genre' => 'próza'],
        ['id' => 18, 'author' => 'Jaroslav Hašek',                    'title' => 'Osudy dobrého vojáka Švejka',         'genre' => 'próza'],
        ['id' => 19, 'author' => 'Karel Čapek',                       'title' => 'Krakatit',                            'genre' => 'próza'],
        ['id' => 20, 'author' => 'Božena Němcová',                    'title' => 'Babička',                             'genre' => 'próza'],
        ['id' => 21, 'author' => 'Smetana',                           'title' => 'Kde domov můj',                       'genre' => 'poetry'],
        ['id' => 22, 'author' => 'Petr Bezruč',                       'title' => 'Slezské písně',                       'genre' => 'poetry'],

        // additional items (duplicates / same authors)
        ['id' => 44, 'author' => 'Jane Austen',                       'title' => 'Rozum a cit',                         'genre' => 'próza'],
        ['id' => 45, 'author' => 'Charles Dickens',                   'title' => 'Vánoční koleda',                      'genre' => 'próza'],

        // více děl stejných autorů
        ['id' => 56, 'author' => 'Jane Austen',                       'title' => 'Emma',                                'genre' => 'próza'],
        ['id' => 57, 'author' => 'Charles Dickens',                   'title' => 'Dům u kraje',                         'genre' => 'próza'],
    ],
    'category3' => [
        ['id' => 23, 'author' => 'George Orwell',                     'title' => '1984',                                'genre' => 'próza'],
        ['id' => 24, 'author' => 'Franz Kafka',                       'title' => 'Proces',                              'genre' => 'próza'],
        ['id' => 25, 'author' => 'Albert Camus',                      'title' => 'Cizinec',                             'genre' => 'próza'],
        ['id' => 26, 'author' => 'Ernest Hemingway',                  'title' => 'Stařec a moře',                       'genre' => 'próza'],
        ['id' => 27, 'author' => 'J.D. Salinger',                     'title' => 'Muž, který chytá v žitě',            'genre' => 'próza'],
        ['id' => 28, 'author' => 'William Faulkner',                  'title' => 'Mientras agonizo',                    'genre' => 'próza'],
        ['id' => 29, 'author' => 'Ray Bradbury',                      'title' => 'Ilustrovaný muž',                     'genre' => 'próza'],
        ['id' => 30, 'author' => 'Samuel Beckett',                    'title' => 'Čekám na Godota',                     'genre' => 'drama'],
        ['id' => 31, 'author' => 'Tennessee Williams',                'title' => 'Tramvaj do stanice touha',            'genre' => 'drama'],
        ['id' => 32, 'author' => 'Arthur Miller',                     'title' => 'Prodej smrti',                        'genre' => 'drama'],

        // additional items
        ['id' => 46, 'author' => 'Franz Kafka',                       'title' => 'Proměna',                             'genre' => 'próza'],
        ['id' => 47, 'author' => 'George Orwell',                     'title' => 'Zvířecí farma',                       'genre' => 'próza'],
        ['id' => 48, 'author' => 'Tennessee Williams',                'title' => 'Noční koncert',                       'genre' => 'drama'],

        // více děl stejných autorů
        ['id' => 58, 'author' => 'George Orwell',                     'title' => 'Cesta k Wigan Pier',                  'genre' => 'próza'],
        ['id' => 59, 'author' => 'Franz Kafka',                       'title' => 'Zámek',                               'genre' => 'próza'],
        ['id' => 60, 'author' => 'Ray Bradbury',                      'title' => '451 stupňů Fahrenheita',              'genre' => 'próza'],
    ],
    'category4' => [
        ['id' => 33, 'author' => 'Bohumil Hrabal',                    'title' => 'Příliš hlučná samota',                'genre' => 'próza'],
        ['id' => 34, 'author' => 'Milan Kundera',                     'title' => 'Nesnesitelná lehkost bytí',           'genre' => 'próza'],
        ['id' => 35, 'author' => 'Václav Havel',                      'title' => 'Audience',                            'genre' => 'drama'],
        ['id' => 36, 'author' => 'Ivan Klíma',                        'title' => 'Můj zlatý řemeslo',                   'genre' => 'próza'],
        ['id' => 37, 'author' => 'Darina Gabzdilová',                 'title' => 'Nebeské bílé město',                  'genre' => 'próza'],
        ['id' => 38, 'author' => 'Vladimír Holan',                    'title' => 'Noc s Hamletem',                     'genre' => 'poetry'],
        ['id' => 39, 'author' => 'Miroslav Holub',                    'title' => 'Anděl na kolečkách',                  'genre' => 'poetry'],
        ['id' => 40, 'author' => 'Josef Kajetán Tyl',                 'title' => 'Fidlovačka',                          'genre' => 'drama'],

        // additional items
        ['id' => 49, 'author' => 'Milan Kundera',                     'title' => 'Žert',                                'genre' => 'próza'],
        ['id' => 50, 'author' => 'Bohumil Hrabal',                    'title' => 'Obsluhoval jsem anglického krále',    'genre' => 'próza'],
        ['id' => 51, 'author' => 'Václav Havel',                      'title' => 'Dopisy Olze',                         'genre' => 'drama'],
        ['id' => 52, 'author' => 'Karel Čapek',                       'title' => 'R.U.R.',                              'genre' => 'drama'],

        // více děl stejných autorů
        ['id' => 61, 'author' => 'Milan Kundera',                     'title' => 'Idiot',                               'genre' => 'próza'],
        ['id' => 62, 'author' => 'Bohumil Hrabal',                    'title' => 'Slavnosti sněženek',                  'genre' => 'próza'],
        ['id' => 63, 'author' => 'Václav Havel',                      'title' => 'Largo Desolato',                      'genre' => 'drama'],
        ['id' => 64, 'author' => 'Karel Čapek',                       'title' => 'Válka s mloky',                       'genre' => 'próza'],
    ],

    // extra pool with mixed duplicates (optional additional category)
    'extras' => [
        ['id' => 65, 'author' => 'William Shakespeare',               'title' => 'Zkrocení zlé ženy',                   'genre' => 'drama'],
        ['id' => 66, 'author' => 'Charles Dickens',                   'title' => 'Velké naděje',                        'genre' => 'próza'],
        ['id' => 67, 'author' => 'Jane Austen',                       'title' => 'Mansfield Park',                      'genre' => 'próza'],
        ['id' => 68, 'author' => 'Franz Kafka',                       'title' => 'Dopis otci',                          'genre' => 'próza'],
        ['id' => 69, 'author' => 'George Orwell',                     'title' => 'Hořký vítr',                          'genre' => 'próza'],
        ['id' => 70, 'author' => 'Bohumil Hrabal',                    'title' => 'Městečko u moře',                     'genre' => 'próza'],
    ],
];