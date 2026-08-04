const teams=['Atalanta','Bologna','Cagliari','Como','Fiorentina','Frosinone','Genoa','Inter','Juventus','Lazio','Lecce','Milan','Monza','Napoli','Parma','Roma','Sassuolo','Torino','Udinese','Venezia'];
const blank=()=>({coach:'',module:'',formation:'',lineup:[],roster:[],penalties:'',freeKicks:'',corners:'',arrivals:'',departures:'',talks:'',recommended:'',bets:'',young:'',reliable:'',avoid:'',watch:'',notes:'',updated:'Da compilare'});
const base=Object.fromEntries(teams.map(t=>[t,blank()]));
const DATA_VERSION=28;
const editorialDefaults={
  Atalanta:{
    coach:'Maurizio Sarri',module:'4-3-3',
    formation:'Carnesecchi; Bellanova, Scalvini, Hien, Ahanor; Éderson, Gaetano, Pašalić; De Ketelaere, Scamacca, Raspadori',
    lineup:[
      {name:'Marco Carnesecchi',short:'Carnesecchi',pos:'POR'},
      {name:'Raoul Bellanova',short:'Bellanova',pos:'TD'},
      {name:'Giorgio Scalvini',short:'Scalvini',pos:'DC'},
      {name:'Isak Hien',short:'Hien',pos:'DC'},
      {name:'Honest Ahanor',short:'Ahanor',pos:'TS'},
      {name:'Éderson',short:'Éderson',pos:'CC'},
      {name:'Gianluca Gaetano',short:'Gaetano',pos:'CC'},
      {name:'Mario Pašalić',short:'Pašalić',pos:'CC'},
      {name:'Charles De Ketelaere',short:'De Ketelaere',pos:'AD'},
      {name:'Gianluca Scamacca',short:'Scamacca',pos:'PC'},
      {name:'Giacomo Raspadori',short:'Raspadori',pos:'AS'}
    ],
    roster:[
      {name:'Marco Carnesecchi',role:'Portiere',status:'Titolare',tags:['Top reparto']},
      {name:'Marco Sportiello',role:'Portiere',status:'Riserva',tags:['Affidabile']},
      {name:'Paolo Vismara',role:'Portiere',status:'Gerarchia aperta',tags:['Giovane']},
      {name:'Mattia Sonzogni',role:'Portiere',status:'Aggregato',tags:['Giovane']},
      {name:'Raoul Bellanova',role:'Difensore',status:'Titolare',tags:['Bonus','Da comprare']},
      {name:'Giorgio Scalvini',role:'Difensore',status:'Titolare',tags:['Top','Osservato']},
      {name:'Isak Hien',role:'Difensore',status:'Titolare',tags:['Affidabile']},
      {name:'Honest Ahanor',role:'Difensore',status:'Titolare',tags:['Giovane','Scommessa']},
      {name:'Odilon Kossounou',role:'Difensore',status:'Ballottaggio',tags:['Affidabile']},
      {name:'Berat Djimsiti',role:'Difensore',status:'Ballottaggio',tags:['Affidabile']},
      {name:'Davide Zappacosta',role:'Difensore',status:'Ballottaggio',tags:['Bonus']},
      {name:'Sead Kolašinac',role:'Difensore',status:'Da valutare',tags:['Esperienza']},
      {name:'Mitchel Bakker',role:'Difensore',status:'In rosa',tags:['Da seguire']},
      {name:'Giovanni Bonfanti',role:'Difensore',status:'In rosa',tags:['Giovane']},
      {name:'Lorenzo Bernasconi',role:'Difensore',status:'Aggregato',tags:['Giovane']},
      {name:'Giorgio Cittadini',role:'Difensore',status:'Aggregato',tags:['Giovane']},
      {name:'Ljubo Puljić',role:'Difensore',status:'Aggregato',tags:['Giovane']},
      {name:'Éderson',role:'Centrocampista',status:'Titolare',tags:['Top','Da comprare']},
      {name:'Gianluca Gaetano',role:'Centrocampista',status:'Titolare',tags:['Nuovo acquisto','Scommessa']},
      {name:'Mario Pašalić',role:'Centrocampista',status:'Titolare',tags:['Bonus','Affidabile']},
      {name:'Marten de Roon',role:'Centrocampista',status:'Ballottaggio',tags:['Affidabile']},
      {name:'Lazar Samardžić',role:'Centrocampista',status:'Ballottaggio',tags:['Scommessa','Piazzati']},
      {name:'Ibrahim Sulemana',role:'Centrocampista',status:'In rosa',tags:['Da seguire']},
      {name:'Nicola Zalewski',role:'Centrocampista',status:'In rosa',tags:['Jolly']},
      {name:'Samuel Giovane',role:'Centrocampista',status:'Aggregato',tags:['Giovane']},
      {name:'Sergej Levak',role:'Centrocampista',status:'Aggregato',tags:['Giovane','Scommessa']},
      {name:'Charles De Ketelaere',role:'Attaccante',status:'Titolare',tags:['Top','Da comprare']},
      {name:'Gianluca Scamacca',role:'Attaccante',status:'Titolare',tags:['Top','Rigorista']},
      {name:'Giacomo Raspadori',role:'Attaccante',status:'Titolare',tags:['Piazzati','Osservato']},
      {name:'Nikola Krstović',role:'Attaccante',status:'Ballottaggio',tags:['Da seguire']},
      {name:'Daniel Maldini',role:'Attaccante',status:'In rosa',tags:['Da valutare']},
      {name:'El Bilal Touré',role:'Attaccante',status:'In rosa',tags:['Da valutare']},
      {name:'Dominic Vavassori',role:'Attaccante',status:'Aggregato',tags:['Giovane']},
      {name:'Vanja Vlahović',role:'Attaccante',status:'Aggregato',tags:['Giovane']}
    ],
    penalties:'Scamacca\nSamardžić\nDe Ketelaere',
    freeKicks:'Raspadori\nSamardžić\nDe Ketelaere',
    corners:'Raspadori\nSamardžić\nZappacosta',
    arrivals:'Gianluca Gaetano',
    departures:'Marco Palestra\nBen Godfrey',
    talks:'Mercato ancora aperto: verificare uscite e nuovi innesti prima dell’asta',
    recommended:'Charles De Ketelaere\nGianluca Scamacca\nÉderson',
    bets:'Gianluca Gaetano\nLazar Samardžić\nHonest Ahanor',
    young:'Honest Ahanor\nSergej Levak\nLjubo Puljić',
    reliable:'Marten de Roon\nMario Pašalić\nIsak Hien',
    watch:'Giacomo Raspadori\nGiorgio Scalvini\nRaoul Bellanova',
    avoid:'',
    notes:'Scheda test: rosa provvisoria di preparazione estiva. Aggiornare titolarità, mercato e disponibilità prima dell’asta.',
    updated:'Aggiornata 2 agosto 2026',source:'Scheda editoriale test • rosa provvisoria'
  },
  Bologna:{
    coach:'Domenico Tedesco',module:'4-2-3-1',
    formation:'Skorupski; João Mário, Lucumí, Heggem, Miranda; Ferguson, Moro; Orsolini, Bernardeschi, Cambiaghi; Dovbyk',
    lineup:[
      {name:'Łukasz Skorupski',short:'Skorupski',pos:'POR'},{name:'João Mário',short:'João Mário',pos:'TD'},{name:'Jhon Lucumí',short:'Lucumí',pos:'DC'},{name:'Torbjørn Heggem',short:'Heggem',pos:'DC'},{name:'Juan Miranda',short:'Miranda',pos:'TS'},
      {name:'Lewis Ferguson',short:'Ferguson',pos:'CC'},{name:'Nikola Moro',short:'Moro',pos:'CC'},{name:'Riccardo Orsolini',short:'Orsolini',pos:'AD'},{name:'Federico Bernardeschi',short:'Bernardeschi',pos:'TRQ'},{name:'Nicolò Cambiaghi',short:'Cambiaghi',pos:'AS'},{name:'Artem Dovbyk',short:'Dovbyk',pos:'PC'}
    ],
    roster:[
      {name:'Łukasz Skorupski',role:'Portiere',status:'Titolare',tags:['Affidabile']},{name:'Federico Ravaglia',role:'Portiere',status:'Riserva',tags:['Da seguire']},{name:'Massimo Pessina',role:'Portiere',status:'Aggregato',tags:['Giovane']},
      {name:'João Mário',role:'Difensore',status:'Titolare',tags:['Bonus']},{name:'Jhon Lucumí',role:'Difensore',status:'Titolare',tags:['Affidabile']},{name:'Torbjørn Heggem',role:'Difensore',status:'Titolare',tags:['Scommessa']},{name:'Juan Miranda',role:'Difensore',status:'Titolare',tags:['Bonus']},{name:'Sam Beukema',role:'Difensore',status:'Ballottaggio',tags:['Affidabile']},{name:'Nadir Zortea',role:'Difensore',status:'Ballottaggio',tags:['Da seguire']},
      {name:'Lewis Ferguson',role:'Centrocampista',status:'Titolare',tags:['Top','Da comprare']},{name:'Nikola Moro',role:'Centrocampista',status:'Titolare',tags:['Affidabile']},{name:'Remo Freuler',role:'Centrocampista',status:'Ballottaggio',tags:['Affidabile']},{name:'Giovanni Fabbian',role:'Centrocampista',status:'Ballottaggio',tags:['Scommessa','Bonus']},
      {name:'Riccardo Orsolini',role:'Attaccante',status:'Titolare',tags:['Top','Rigorista']},{name:'Federico Bernardeschi',role:'Attaccante',status:'Titolare',tags:['Piazzati','Scommessa']},{name:'Nicolò Cambiaghi',role:'Attaccante',status:'Titolare',tags:['Scommessa']},{name:'Artem Dovbyk',role:'Attaccante',status:'Titolare',tags:['Top','Da comprare']},{name:'Thijs Dallinga',role:'Attaccante',status:'Ballottaggio',tags:['Da seguire']}
    ],
    penalties:'Orsolini\nDovbyk\nBernardeschi',freeKicks:'Orsolini\nBernardeschi\nFerguson',corners:'Orsolini\nBernardeschi\nMiranda',
    arrivals:'Artem Dovbyk\nJoão Mário',departures:'Santiago Castro',talks:'Gerarchie offensive da verificare durante il precampionato.',
    recommended:'Riccardo Orsolini\nArtem Dovbyk\nLewis Ferguson',bets:'Federico Bernardeschi\nGiovanni Fabbian\nNicolò Cambiaghi',young:'Giovanni Fabbian\nMassimo Pessina',reliable:'Łukasz Skorupski\nJhon Lucumí\nLewis Ferguson',watch:'Artem Dovbyk\nRiccardo Orsolini\nJuan Miranda',avoid:'',
    notes:'Scheda pre-asta provvisoria. Mercato aperto: verificare gerarchie e disponibilità prima dell’asta.',updated:'Aggiornata 3 agosto 2026',source:'Lotto contenuti RC18 • rosa e formazione provvisorie'
  },
  Cagliari:{
    coach:'Fabio Pisacane',module:'3-5-2',
    formation:'Caprile; Zappa, Mina, Obert; Idrissi, Adopo, Prati, Deiola, Zé Pedro; Esposito, Borrelli',
    lineup:[
      {name:'Elia Caprile',short:'Caprile',pos:'POR'},{name:'Gabriele Zappa',short:'Zappa',pos:'DC'},{name:'Yerry Mina',short:'Mina',pos:'DC'},{name:'Adam Obert',short:'Obert',pos:'DC'},{name:'Riyad Idrissi',short:'Idrissi',pos:'ED'},
      {name:'Michel Adopo',short:'Adopo',pos:'CC'},{name:'Matteo Prati',short:'Prati',pos:'REG'},{name:'Alessandro Deiola',short:'Deiola',pos:'CC'},{name:'Zé Pedro',short:'Zé Pedro',pos:'ES'},{name:'Sebastiano Esposito',short:'Esposito',pos:'SS'},{name:'Gennaro Borrelli',short:'Borrelli',pos:'PC'}
    ],
    roster:[
      {name:'Elia Caprile',role:'Portiere',status:'Titolare',tags:['Top reparto']},{name:'Boris Radunović',role:'Portiere',status:'Riserva',tags:['Affidabile']},
      {name:'Gabriele Zappa',role:'Difensore',status:'Titolare',tags:['Affidabile']},{name:'Yerry Mina',role:'Difensore',status:'Titolare',tags:['Bonus','Rischio cartellini']},{name:'Adam Obert',role:'Difensore',status:'Titolare',tags:['Da seguire']},{name:'Riyad Idrissi',role:'Difensore',status:'Titolare',tags:['Giovane','Scommessa']},{name:'Mateusz Wieteska',role:'Difensore',status:'Ballottaggio',tags:['Affidabile']},{name:'Juan Rodríguez',role:'Difensore',status:'Ballottaggio',tags:['Giovane']},
      {name:'Michel Adopo',role:'Centrocampista',status:'Titolare',tags:['Affidabile']},{name:'Matteo Prati',role:'Centrocampista',status:'Titolare',tags:['Scommessa']},{name:'Alessandro Deiola',role:'Centrocampista',status:'Titolare',tags:['Bonus']},{name:'Jacopo Fazzini',role:'Centrocampista',status:'Ballottaggio',tags:['Scommessa','Bonus']},{name:'Harry Winks',role:'Centrocampista',status:'Ballottaggio',tags:['Piazzati']},
      {name:'Sebastiano Esposito',role:'Attaccante',status:'Titolare',tags:['Top','Piazzati']},{name:'Gennaro Borrelli',role:'Attaccante',status:'Titolare',tags:['Scommessa']},{name:'Kingstone Mutandwa',role:'Attaccante',status:'Ballottaggio',tags:['Giovane','Scommessa']}
    ],
    penalties:'Sebastiano Esposito\nYerry Mina',freeKicks:'Sebastiano Esposito\nHarry Winks',corners:'Sebastiano Esposito\nHarry Winks',
    arrivals:'Harry Winks\nKingstone Mutandwa',departures:'Gianluca Gaetano',talks:'Attacco e corsie ancora soggetti al mercato.',
    recommended:'Elia Caprile\nSebastiano Esposito\nYerry Mina',bets:'Jacopo Fazzini\nGennaro Borrelli\nRiyad Idrissi',young:'Riyad Idrissi\nKingstone Mutandwa\nJuan Rodríguez',reliable:'Elia Caprile\nGabriele Zappa\nMichel Adopo',watch:'Sebastiano Esposito\nMatteo Prati\nJacopo Fazzini',avoid:'',
    notes:'Scheda pre-asta provvisoria. Verificare il mercato e la composizione definitiva del reparto offensivo.',updated:'Aggiornata 3 agosto 2026',source:'Lotto contenuti RC18 • rosa e formazione provvisorie'
  },
  Como:{
    coach:'Cesc Fàbregas',module:'4-2-3-1',
    formation:'Butez; Van der Brempt, Diego Carlos, Jacobo Ramón, Álex Valle; Caqueret, Perrone; Assane Diao, Nico Paz, Jesús Rodríguez; Morata',
    lineup:[
      {name:'Jean Butez',short:'Butez',pos:'POR'},{name:'Ignace Van der Brempt',short:'Van der Brempt',pos:'TD'},{name:'Diego Carlos',short:'Diego Carlos',pos:'DC'},{name:'Jacobo Ramón',short:'J. Ramón',pos:'DC'},{name:'Álex Valle',short:'Álex Valle',pos:'TS'},
      {name:'Maxence Caqueret',short:'Caqueret',pos:'CC'},{name:'Máximo Perrone',short:'Perrone',pos:'CC'},{name:'Assane Diao',short:'Diao',pos:'AD'},{name:'Nicolás Paz',short:'Nico Paz',pos:'TRQ'},{name:'Jesús Rodríguez',short:'J. Rodríguez',pos:'AS'},{name:'Álvaro Morata',short:'Morata',pos:'PC'}
    ],
    roster:[
      {name:'Jean Butez',role:'Portiere',status:'Titolare',tags:['Affidabile']},{name:'Noel Törnqvist',role:'Portiere',status:'Riserva',tags:['Giovane']},{name:'Henrique Menke',role:'Portiere',status:'Gerarchia aperta',tags:['Giovane']},{name:'Mauro Vigorito',role:'Portiere',status:'In rosa',tags:['Esperienza']},
      {name:'Ignace Van der Brempt',role:'Difensore',status:'Titolare',tags:['Bonus']},{name:'Diego Carlos',role:'Difensore',status:'Titolare',tags:['Affidabile']},{name:'Jacobo Ramón',role:'Difensore',status:'Titolare',tags:['Giovane','Scommessa']},{name:'Álex Valle',role:'Difensore',status:'Titolare',tags:['Bonus','Giovane']},{name:'Kaiki Bruno',role:'Difensore',status:'Ballottaggio',tags:['Giovane']},{name:'Andrés Cuenca',role:'Difensore',status:'Ballottaggio',tags:['Giovane']},{name:'Ivan Smolčić',role:'Difensore',status:'In rosa',tags:['Da seguire']},{name:'Marc Oliver Kempf',role:'Difensore',status:'In rosa',tags:['Affidabile']},{name:'Edoardo Goldaniga',role:'Difensore',status:'In rosa',tags:['Esperienza']},
      {name:'Maxence Caqueret',role:'Centrocampista',status:'Titolare',tags:['Affidabile']},{name:'Máximo Perrone',role:'Centrocampista',status:'Titolare',tags:['Scommessa']},{name:'Nicolás Paz',role:'Centrocampista',status:'Titolare',tags:['Top','Piazzati']},{name:'Martin Baturina',role:'Centrocampista',status:'Ballottaggio',tags:['Scommessa','Bonus']},{name:'Lucas Da Cunha',role:'Centrocampista',status:'Ballottaggio',tags:['Affidabile']},{name:'Luis Milla',role:'Centrocampista',status:'In rosa',tags:['Piazzati']},{name:'Mattia Liberali',role:'Centrocampista',status:'In rosa',tags:['Giovane']},{name:'Adrian Lahdo',role:'Centrocampista',status:'Aggregato',tags:['Giovane']},
      {name:'Assane Diao',role:'Attaccante',status:'Titolare',tags:['Top','Giovane']},{name:'Jesús Rodríguez',role:'Attaccante',status:'Titolare',tags:['Scommessa']},{name:'Álvaro Morata',role:'Attaccante',status:'Titolare',tags:['Top','Rigorista']},{name:'Anastasios Douvikas',role:'Attaccante',status:'Ballottaggio',tags:['Da seguire']},{name:'Nicolas Kühn',role:'Attaccante',status:'Ballottaggio',tags:['Scommessa']},{name:'Jayden Addai',role:'Attaccante',status:'In rosa',tags:['Giovane']}
    ],
    penalties:'Álvaro Morata\nNicolás Paz\nAnastasios Douvikas',freeKicks:'Nicolás Paz\nLuis Milla\nMartin Baturina',corners:'Nicolás Paz\nLuis Milla\nJesús Rodríguez',
    arrivals:'Luis Milla\nKaiki Bruno\nAndrés Cuenca',departures:'Da verificare',talks:'Rosa profonda: diversi ballottaggi offensivi da seguire nel precampionato.',
    recommended:'Nicolás Paz\nAssane Diao\nÁlvaro Morata',bets:'Martin Baturina\nJesús Rodríguez\nÁlex Valle',young:'Assane Diao\nJacobo Ramón\nMattia Liberali',reliable:'Jean Butez\nMaxence Caqueret\nDiego Carlos',watch:'Nicolás Paz\nAssane Diao\nMartin Baturina',avoid:'',
    notes:'Rosa ufficiale caricata come base; gerarchie e formazione sono valutazioni pre-asta provvisorie.',updated:'Aggiornata 3 agosto 2026',source:'Rosa ufficiale Como • valutazioni pre-asta RC18'
  },
  Fiorentina:{
    coach:'Stefano Pioli',module:'3-4-2-1',
    formation:'De Gea; Pongračić, Comuzzo, Ranieri; Dodô, Fagioli, Brescianini, Gosens; Gudmundsson, Fazzini; Kean',
    lineup:[
      {name:'David de Gea',short:'De Gea',pos:'POR'},{name:'Marin Pongračić',short:'Pongračić',pos:'DC'},{name:'Pietro Comuzzo',short:'Comuzzo',pos:'DC'},{name:'Luca Ranieri',short:'Ranieri',pos:'DC'},{name:'Dodô',short:'Dodô',pos:'ED'},{name:'Nicolò Fagioli',short:'Fagioli',pos:'CC'},{name:'Marco Brescianini',short:'Brescianini',pos:'CC'},{name:'Robin Gosens',short:'Gosens',pos:'ES'},{name:'Albert Gudmundsson',short:'Gudmundsson',pos:'TRQ'},{name:'Jacopo Fazzini',short:'Fazzini',pos:'TRQ'},{name:'Moise Kean',short:'Kean',pos:'PC'}
    ],
    roster:[
      {name:'David de Gea',role:'Portiere',status:'Titolare',tags:['Top reparto','Affidabile']},{name:'Oliver Christensen',role:'Portiere',status:'Riserva',tags:['Da seguire']},{name:'Tommaso Martinelli',role:'Portiere',status:'Aggregato',tags:['Giovane']},
      {name:'Marin Pongračić',role:'Difensore',status:'Titolare',tags:['Affidabile']},{name:'Pietro Comuzzo',role:'Difensore',status:'Titolare',tags:['Giovane','Scommessa']},{name:'Luca Ranieri',role:'Difensore',status:'Titolare',tags:['Affidabile']},{name:'Dodô',role:'Difensore',status:'Titolare',tags:['Bonus','Top reparto']},{name:'Robin Gosens',role:'Difensore',status:'Titolare',tags:['Bonus','Da comprare']},{name:'Fabiano Parisi',role:'Difensore',status:'Ballottaggio',tags:['Da seguire']},{name:'Matías Moreno',role:'Difensore',status:'Rotazione',tags:['Giovane']},
      {name:'Nicolò Fagioli',role:'Centrocampista',status:'Titolare',tags:['Piazzati','Da comprare']},{name:'Marco Brescianini',role:'Centrocampista',status:'Titolare',tags:['Bonus','Scommessa']},{name:'Jacopo Fazzini',role:'Centrocampista',status:'Titolare',tags:['Giovane','Scommessa']},{name:'Rolando Mandragora',role:'Centrocampista',status:'Ballottaggio',tags:['Piazzati','Affidabile']},{name:'Cher Ndour',role:'Centrocampista',status:'Rotazione',tags:['Giovane']},
      {name:'Albert Gudmundsson',role:'Attaccante',status:'Titolare',tags:['Top','Rigorista']},{name:'Moise Kean',role:'Attaccante',status:'Titolare',tags:['Top','Da comprare']},{name:'Lucas Beltrán',role:'Attaccante',status:'Ballottaggio',tags:['Da seguire']},{name:'Christian Kouamé',role:'Attaccante',status:'Rotazione',tags:['Jolly']}
    ],
    penalties:'Gudmundsson\nKean\nMandragora',freeKicks:'Gudmundsson\nFagioli\nMandragora',corners:'Fagioli\nGudmundsson\nDodô',
    arrivals:'Marco Brescianini\nJacopo Fazzini',departures:'Da verificare',talks:'Gerarchie offensive da controllare nel precampionato e dopo gli ultimi movimenti di mercato.',
    recommended:'Moise Kean\nAlbert Gudmundsson\nRobin Gosens',bets:'Marco Brescianini\nJacopo Fazzini\nPietro Comuzzo',young:'Pietro Comuzzo\nJacopo Fazzini\nTommaso Martinelli',reliable:'David de Gea\nLuca Ranieri\nNicolò Fagioli',watch:'Dodô\nMoise Kean\nAlbert Gudmundsson',avoid:'',
    notes:'Scheda pre-asta provvisoria. Verificare modulo e gerarchie dopo le ultime amichevoli.',updated:'Aggiornata 3 agosto 2026',source:'Lotto contenuti RC20 • rosa pre-season provvisoria'
  },
  Frosinone:{
    coach:'Da confermare',module:'4-3-3',
    formation:'Cerofolini; Oyono, Monterisi, Romagnoli, Marchizza; Gelli, Mazzitelli, Garritano; Caso, Ambrosino, Ghedjemis',
    lineup:[
      {name:'Michele Cerofolini',short:'Cerofolini',pos:'POR'},{name:'Anthony Oyono',short:'Oyono',pos:'TD'},{name:'Ilario Monterisi',short:'Monterisi',pos:'DC'},{name:'Simone Romagnoli',short:'Romagnoli',pos:'DC'},{name:'Riccardo Marchizza',short:'Marchizza',pos:'TS'},{name:'Francesco Gelli',short:'Gelli',pos:'CC'},{name:'Luca Mazzitelli',short:'Mazzitelli',pos:'CC'},{name:'Luca Garritano',short:'Garritano',pos:'CC'},{name:'Giuseppe Caso',short:'Caso',pos:'AD'},{name:'Giuseppe Ambrosino',short:'Ambrosino',pos:'PC'},{name:'Fares Ghedjemis',short:'Ghedjemis',pos:'AS'}
    ],
    roster:[
      {name:'Michele Cerofolini',role:'Portiere',status:'Titolare',tags:['Affidabile']},{name:'Pierluigi Frattali',role:'Portiere',status:'Riserva',tags:['Esperienza']},
      {name:'Anthony Oyono',role:'Difensore',status:'Titolare',tags:['Bonus']},{name:'Ilario Monterisi',role:'Difensore',status:'Titolare',tags:['Affidabile']},{name:'Simone Romagnoli',role:'Difensore',status:'Titolare',tags:['Esperienza']},{name:'Riccardo Marchizza',role:'Difensore',status:'Titolare',tags:['Piazzati']},{name:'Sergio Kalaj',role:'Difensore',status:'Rotazione',tags:['Da seguire']},
      {name:'Francesco Gelli',role:'Centrocampista',status:'Titolare',tags:['Affidabile']},{name:'Luca Mazzitelli',role:'Centrocampista',status:'Titolare',tags:['Piazzati','Rigorista']},{name:'Luca Garritano',role:'Centrocampista',status:'Titolare',tags:['Jolly']},{name:'Ebrima Darboe',role:'Centrocampista',status:'Ballottaggio',tags:['Da seguire']},
      {name:'Giuseppe Caso',role:'Attaccante',status:'Titolare',tags:['Scommessa','Bonus']},{name:'Giuseppe Ambrosino',role:'Attaccante',status:'Titolare',tags:['Giovane','Scommessa']},{name:'Fares Ghedjemis',role:'Attaccante',status:'Titolare',tags:['Da seguire']},{name:'Walid Cheddira',role:'Attaccante',status:'Ballottaggio',tags:['Rigorista']}
    ],
    penalties:'Mazzitelli\nCheddira\nCaso',freeKicks:'Marchizza\nMazzitelli\nCaso',corners:'Marchizza\nCaso\nGarritano',
    arrivals:'Da aggiornare',departures:'Da aggiornare',talks:'Scheda ponte: verificare categoria, rosa definitiva e allenatore prima dell’asta.',
    recommended:'Luca Mazzitelli\nRiccardo Marchizza\nGiuseppe Caso',bets:'Giuseppe Ambrosino\nFares Ghedjemis\nAnthony Oyono',young:'Giuseppe Ambrosino\nSergio Kalaj',reliable:'Michele Cerofolini\nIlario Monterisi\nFrancesco Gelli',watch:'Luca Mazzitelli\nGiuseppe Caso\nRiccardo Marchizza',avoid:'',
    notes:'Scheda provvisoria da verificare integralmente: mantenuta perché presente nell’elenco squadre dell’app.',updated:'Aggiornata 3 agosto 2026',source:'Lotto contenuti RC20 • scheda ponte da verificare'
  },
  Genoa:{
    coach:'Patrick Vieira',module:'4-2-3-1',
    formation:'Leali; Sabelli, De Winter, Vásquez, Aarón Martín; Frendrup, Masini; Messias, Malinovskyi, Vitinha; Pinamonti',
    lineup:[
      {name:'Nicola Leali',short:'Leali',pos:'POR'},{name:'Stefano Sabelli',short:'Sabelli',pos:'TD'},{name:'Koni De Winter',short:'De Winter',pos:'DC'},{name:'Johan Vásquez',short:'Vásquez',pos:'DC'},{name:'Aarón Martín',short:'A. Martín',pos:'TS'},{name:'Morten Frendrup',short:'Frendrup',pos:'CC'},{name:'Patrizio Masini',short:'Masini',pos:'CC'},{name:'Junior Messias',short:'Messias',pos:'AD'},{name:'Ruslan Malinovskyi',short:'Malinovskyi',pos:'TRQ'},{name:'Vitinha',short:'Vitinha',pos:'AS'},{name:'Andrea Pinamonti',short:'Pinamonti',pos:'PC'}
    ],
    roster:[
      {name:'Nicola Leali',role:'Portiere',status:'Titolare',tags:['Affidabile']},{name:'Daniele Sommariva',role:'Portiere',status:'Riserva',tags:['Esperienza']},
      {name:'Stefano Sabelli',role:'Difensore',status:'Titolare',tags:['Affidabile']},{name:'Koni De Winter',role:'Difensore',status:'Titolare',tags:['Top reparto','Giovane']},{name:'Johan Vásquez',role:'Difensore',status:'Titolare',tags:['Affidabile']},{name:'Aarón Martín',role:'Difensore',status:'Titolare',tags:['Bonus','Piazzati']},{name:'Mattia Bani',role:'Difensore',status:'Ballottaggio',tags:['Bonus']},{name:'Alessandro Marcandalli',role:'Difensore',status:'Rotazione',tags:['Giovane']},
      {name:'Morten Frendrup',role:'Centrocampista',status:'Titolare',tags:['Top reparto','Affidabile']},{name:'Patrizio Masini',role:'Centrocampista',status:'Titolare',tags:['Scommessa']},{name:'Ruslan Malinovskyi',role:'Centrocampista',status:'Titolare',tags:['Piazzati','Bonus']},{name:'Milan Badelj',role:'Centrocampista',status:'Rotazione',tags:['Esperienza']},
      {name:'Junior Messias',role:'Attaccante',status:'Titolare',tags:['Bonus','Da seguire']},{name:'Vitinha',role:'Attaccante',status:'Titolare',tags:['Scommessa']},{name:'Andrea Pinamonti',role:'Attaccante',status:'Titolare',tags:['Rigorista','Da comprare']},{name:'Caleb Ekuban',role:'Attaccante',status:'Rotazione',tags:['Jolly']}
    ],
    penalties:'Pinamonti\nMalinovskyi\nMessias',freeKicks:'Malinovskyi\nAarón Martín\nMessias',corners:'Aarón Martín\nMalinovskyi\nMessias',
    arrivals:'Da aggiornare',departures:'Da aggiornare',talks:'Verificare la permanenza dei giocatori in prestito e le gerarchie offensive.',
    recommended:'Andrea Pinamonti\nMorten Frendrup\nAarón Martín',bets:'Vitinha\nPatrizio Masini\nKoni De Winter',young:'Koni De Winter\nAlessandro Marcandalli\nPatrizio Masini',reliable:'Morten Frendrup\nJohan Vásquez\nNicola Leali',watch:'Andrea Pinamonti\nRuslan Malinovskyi\nAarón Martín',avoid:'',
    notes:'Scheda pre-asta provvisoria: aggiornare gli ultimi movimenti prima della lista definitiva.',updated:'Aggiornata 3 agosto 2026',source:'Lotto contenuti RC20 • base Genoa pre-season'
  },
  Inter:{
    coach:'Cristian Chivu',module:'3-5-2',
    formation:'Sommer; Pavard, Akanji, Bastoni; Dumfries, Barella, Çalhanoğlu, Sučić, Dimarco; Lautaro, Thuram',
    lineup:[
      {name:'Yann Sommer',short:'Sommer',pos:'POR'},{name:'Benjamin Pavard',short:'Pavard',pos:'DC'},{name:'Manuel Akanji',short:'Akanji',pos:'DC'},{name:'Alessandro Bastoni',short:'Bastoni',pos:'DC'},{name:'Denzel Dumfries',short:'Dumfries',pos:'ED'},{name:'Nicolò Barella',short:'Barella',pos:'CC'},{name:'Hakan Çalhanoğlu',short:'Çalhanoğlu',pos:'REG'},{name:'Petar Sučić',short:'Sučić',pos:'CC'},{name:'Federico Dimarco',short:'Dimarco',pos:'ES'},{name:'Lautaro Martínez',short:'Lautaro',pos:'PC'},{name:'Marcus Thuram',short:'Thuram',pos:'PC'}
    ],
    roster:[
      {name:'Yann Sommer',role:'Portiere',status:'Titolare',tags:['Top reparto','Affidabile']},{name:'Josep Martínez',role:'Portiere',status:'Ballottaggio',tags:['Da seguire']},
      {name:'Benjamin Pavard',role:'Difensore',status:'Titolare',tags:['Affidabile']},{name:'Manuel Akanji',role:'Difensore',status:'Titolare',tags:['Top reparto']},{name:'Alessandro Bastoni',role:'Difensore',status:'Titolare',tags:['Top','Bonus']},{name:'Denzel Dumfries',role:'Difensore',status:'Titolare',tags:['Bonus','Da comprare']},{name:'Federico Dimarco',role:'Difensore',status:'Titolare',tags:['Top','Piazzati']},{name:'Carlos Augusto',role:'Difensore',status:'Ballottaggio',tags:['Bonus']},{name:'Yann Bisseck',role:'Difensore',status:'Rotazione',tags:['Scommessa']},
      {name:'Nicolò Barella',role:'Centrocampista',status:'Titolare',tags:['Top','Affidabile']},{name:'Hakan Çalhanoğlu',role:'Centrocampista',status:'Titolare',tags:['Rigorista','Piazzati']},{name:'Petar Sučić',role:'Centrocampista',status:'Titolare',tags:['Scommessa','Giovane']},{name:'Piotr Zieliński',role:'Centrocampista',status:'Ballottaggio',tags:['Bonus']},{name:'Henrikh Mkhitaryan',role:'Centrocampista',status:'Rotazione',tags:['Esperienza']},
      {name:'Lautaro Martínez',role:'Attaccante',status:'Titolare',tags:['Top assoluto','Rigorista']},{name:'Marcus Thuram',role:'Attaccante',status:'Titolare',tags:['Top','Da comprare']},{name:'Ange-Yoan Bonny',role:'Attaccante',status:'Rotazione',tags:['Scommessa']},{name:'Francesco Pio Esposito',role:'Attaccante',status:'Rotazione',tags:['Giovane','Scommessa']}
    ],
    penalties:'Lautaro Martínez\nÇalhanoğlu\nThuram',freeKicks:'Çalhanoğlu\nDimarco\nBarella',corners:'Dimarco\nÇalhanoğlu\nBarella',
    arrivals:'Manuel Akanji\nPetar Sučić',departures:'Da aggiornare',talks:'Rosa profonda: controllare turnover, gestione europea e gerarchia dei portieri.',
    recommended:'Lautaro Martínez\nFederico Dimarco\nHakan Çalhanoğlu',bets:'Petar Sučić\nFrancesco Pio Esposito\nAnge-Yoan Bonny',young:'Petar Sučić\nFrancesco Pio Esposito\nYann Bisseck',reliable:'Nicolò Barella\nAlessandro Bastoni\nYann Sommer',watch:'Marcus Thuram\nDenzel Dumfries\nFederico Dimarco',avoid:'',
    notes:'Squadra di prima fascia. Considerare il turnover, ma i top restano riferimenti assoluti.',updated:'Aggiornata 3 agosto 2026',source:'Lotto contenuti RC20 • rosa Inter pre-season'
  },
  Juventus:{
    coach:'Igor Tudor',module:'3-4-2-1',
    formation:'Di Gregorio; Kalulu, Bremer, Gatti; Cambiaso, Locatelli, Koopmeiners, Kostić; Conceição, Yildiz; Jonathan David',
    lineup:[
      {name:'Michele Di Gregorio',short:'Di Gregorio',pos:'POR'},{name:'Pierre Kalulu',short:'Kalulu',pos:'DC'},{name:'Gleison Bremer',short:'Bremer',pos:'DC'},{name:'Federico Gatti',short:'Gatti',pos:'DC'},{name:'Andrea Cambiaso',short:'Cambiaso',pos:'ED'},{name:'Manuel Locatelli',short:'Locatelli',pos:'CC'},{name:'Teun Koopmeiners',short:'Koopmeiners',pos:'CC'},{name:'Filip Kostić',short:'Kostić',pos:'ES'},{name:'Francisco Conceição',short:'Conceição',pos:'TRQ'},{name:'Kenan Yildiz',short:'Yildiz',pos:'TRQ'},{name:'Jonathan David',short:'David',pos:'PC'}
    ],
    roster:[
      {name:'Michele Di Gregorio',role:'Portiere',status:'Titolare',tags:['Top reparto','Affidabile']},{name:'Mattia Perin',role:'Portiere',status:'Riserva',tags:['Affidabile']},
      {name:'Pierre Kalulu',role:'Difensore',status:'Titolare',tags:['Affidabile']},{name:'Gleison Bremer',role:'Difensore',status:'Titolare',tags:['Top reparto']},{name:'Federico Gatti',role:'Difensore',status:'Titolare',tags:['Bonus']},{name:'Andrea Cambiaso',role:'Difensore',status:'Titolare',tags:['Top','Bonus']},{name:'Emil Holm',role:'Difensore',status:'Ballottaggio',tags:['Bonus']},{name:'Juan Cabal',role:'Difensore',status:'Rotazione',tags:['Da seguire']},
      {name:'Manuel Locatelli',role:'Centrocampista',status:'Titolare',tags:['Affidabile']},{name:'Teun Koopmeiners',role:'Centrocampista',status:'Titolare',tags:['Bonus','Piazzati']},{name:'Weston McKennie',role:'Centrocampista',status:'Ballottaggio',tags:['Jolly','Bonus']},{name:'Khéphren Thuram',role:'Centrocampista',status:'Ballottaggio',tags:['Scommessa']},
      {name:'Francisco Conceição',role:'Attaccante',status:'Titolare',tags:['Scommessa','Bonus']},{name:'Kenan Yildiz',role:'Attaccante',status:'Titolare',tags:['Top','Da comprare']},{name:'Jonathan David',role:'Attaccante',status:'Titolare',tags:['Top','Rigorista']},{name:'Dušan Vlahović',role:'Attaccante',status:'Ballottaggio',tags:['Rigorista','Da verificare']}
    ],
    penalties:'Jonathan David\nVlahović\nKoopmeiners',freeKicks:'Koopmeiners\nYildiz\nConceição',corners:'Koopmeiners\nConceição\nCambiaso',
    arrivals:'Jonathan David\nEmil Holm',departures:'Da aggiornare',talks:'Monitorare il dualismo offensivo e gli ultimi movimenti sulle fasce.',
    recommended:'Kenan Yildiz\nJonathan David\nAndrea Cambiaso',bets:'Francisco Conceição\nKhéphren Thuram\nEmil Holm',young:'Kenan Yildiz\nFrancisco Conceição\nJuan Cabal',reliable:'Michele Di Gregorio\nGleison Bremer\nManuel Locatelli',watch:'Teun Koopmeiners\nJonathan David\nDušan Vlahović',avoid:'',
    notes:'Scheda pre-asta provvisoria. Verificare mercato attaccanti e titolarità sulle fasce.',updated:'Aggiornata 3 agosto 2026',source:'Lotto contenuti RC20 • rosa Juventus pre-season'
  },
  Lazio:{
    coach:'Gennaro Gattuso',module:'4-3-3',
    formation:'Mandas; Lazzari, Doekhi, Romagnoli, Nuno Tavares; Rovella, Dele-Bashiru, Taylor; Isaksen, Dia, Zaccagni',
    lineup:[
      {name:'Christos Mandas',short:'Mandas',pos:'POR'},{name:'Manuel Lazzari',short:'Lazzari',pos:'TD'},{name:'Danilho Doekhi',short:'Doekhi',pos:'DC'},{name:'Alessio Romagnoli',short:'Romagnoli',pos:'DC'},{name:'Nuno Tavares',short:'Nuno Tavares',pos:'TS'},{name:'Nicolò Rovella',short:'Rovella',pos:'REG'},{name:'Fisayo Dele-Bashiru',short:'Dele-Bashiru',pos:'CC'},{name:'Kenneth Taylor',short:'Taylor',pos:'CC'},{name:'Gustav Isaksen',short:'Isaksen',pos:'AD'},{name:'Boulaye Dia',short:'Dia',pos:'PC'},{name:'Mattia Zaccagni',short:'Zaccagni',pos:'AS'}
    ],
    roster:[
      {name:'Christos Mandas',role:'Portiere',status:'Titolare',tags:['Da seguire']},{name:'Edoardo Motta',role:'Portiere',status:'Riserva',tags:['Giovane']},{name:'Ivan Furlanetto',role:'Portiere',status:'Recupero',tags:['Da verificare']},
      {name:'Manuel Lazzari',role:'Difensore',status:'Titolare',tags:['Bonus']},{name:'Danilho Doekhi',role:'Difensore',status:'Titolare',tags:['Top reparto']},{name:'Alessio Romagnoli',role:'Difensore',status:'Titolare',tags:['Affidabile']},{name:'Nuno Tavares',role:'Difensore',status:'Titolare',tags:['Bonus','Da comprare']},{name:'Luca Pellegrini',role:'Difensore',status:'Ballottaggio',tags:['Piazzati']},{name:'Adam Marušić',role:'Difensore',status:'Rotazione',tags:['Affidabile']},{name:'Oliver Provstgaard',role:'Difensore',status:'Rotazione',tags:['Giovane']},
      {name:'Nicolò Rovella',role:'Centrocampista',status:'Titolare',tags:['Affidabile']},{name:'Fisayo Dele-Bashiru',role:'Centrocampista',status:'Titolare',tags:['Scommessa','Bonus']},{name:'Kenneth Taylor',role:'Centrocampista',status:'Titolare',tags:['Scommessa']},{name:'Danilo Cataldi',role:'Centrocampista',status:'Ballottaggio',tags:['Piazzati']},{name:'Reda Belahyane',role:'Centrocampista',status:'Rotazione',tags:['Giovane']},
      {name:'Gustav Isaksen',role:'Attaccante',status:'Titolare',tags:['Scommessa']},{name:'Boulaye Dia',role:'Attaccante',status:'Titolare',tags:['Rigorista','Da comprare']},{name:'Mattia Zaccagni',role:'Attaccante',status:'Titolare',tags:['Top','Rigorista']},{name:'Tijjani Noslin',role:'Attaccante',status:'Ballottaggio',tags:['Jolly']},{name:'Petar Ratkov',role:'Attaccante',status:'Rotazione',tags:['Giovane']}
    ],
    penalties:'Zaccagni\nDia\nCataldi',freeKicks:'Zaccagni\nCataldi\nPellegrini',corners:'Zaccagni\nIsaksen\nPellegrini',arrivals:'Danilho Doekhi\nKenneth Taylor\nPetar Ratkov',departures:'Da aggiornare',talks:'Verificare la gerarchia dei portieri e il recupero degli infortunati durante il precampionato.',recommended:'Mattia Zaccagni\nNuno Tavares\nBoulaye Dia',bets:'Fisayo Dele-Bashiru\nKenneth Taylor\nGustav Isaksen',young:'Reda Belahyane\nOliver Provstgaard\nPetar Ratkov',reliable:'Alessio Romagnoli\nNicolò Rovella\nAdam Marušić',watch:'Nuno Tavares\nBoulaye Dia\nDanilho Doekhi',avoid:'',notes:'Scheda pre-asta provvisoria. Gattuso è il nuovo allenatore; verificare modulo e gerarchie dopo le amichevoli.',updated:'Aggiornata 3 agosto 2026',source:'Lotto contenuti RC23 • rosa Lazio pre-season'
  },
  Lecce:{
    coach:'Eusebio Di Francesco',module:'4-3-3',
    formation:'Falcone; Veiga, Gaspar, Tiago Gabriel, Gallo; Ramadani, Coulibaly, Gandelman; Pierotti, Cheddira, Banda',
    lineup:[{name:'Wladimiro Falcone',short:'Falcone',pos:'POR'},{name:'Danilo Veiga',short:'Veiga',pos:'TD'},{name:'Kialonda Gaspar',short:'Gaspar',pos:'DC'},{name:'Tiago Gabriel',short:'Tiago Gabriel',pos:'DC'},{name:'Antonino Gallo',short:'Gallo',pos:'TS'},{name:'Ylber Ramadani',short:'Ramadani',pos:'REG'},{name:'Lassana Coulibaly',short:'Coulibaly',pos:'CC'},{name:'Omri Gandelman',short:'Gandelman',pos:'CC'},{name:'Santiago Pierotti',short:'Pierotti',pos:'AD'},{name:'Walid Cheddira',short:'Cheddira',pos:'PC'},{name:'Lameck Banda',short:'Banda',pos:'AS'}],
    roster:[{name:'Wladimiro Falcone',role:'Portiere',status:'Titolare',tags:['Top reparto','Affidabile']},{name:'Christian Früchtl',role:'Portiere',status:'Riserva',tags:['Da seguire']},{name:'Danilo Veiga',role:'Difensore',status:'Titolare',tags:['Bonus']},{name:'Kialonda Gaspar',role:'Difensore',status:'Titolare',tags:['Affidabile']},{name:'Tiago Gabriel',role:'Difensore',status:'Titolare',tags:['Giovane','Scommessa']},{name:'Antonino Gallo',role:'Difensore',status:'Titolare',tags:['Bonus']},{name:'Corrie Ndaba',role:'Difensore',status:'Rotazione',tags:['Da seguire']},{name:'Ylber Ramadani',role:'Centrocampista',status:'Titolare',tags:['Affidabile']},{name:'Lassana Coulibaly',role:'Centrocampista',status:'Titolare',tags:['Affidabile']},{name:'Omri Gandelman',role:'Centrocampista',status:'Titolare',tags:['Bonus','Scommessa']},{name:'Þórir Helgason',role:'Centrocampista',status:'Ballottaggio',tags:['Piazzati']},{name:'Santiago Pierotti',role:'Attaccante',status:'Titolare',tags:['Scommessa']},{name:'Walid Cheddira',role:'Attaccante',status:'Titolare',tags:['Rigorista']},{name:'Lameck Banda',role:'Attaccante',status:'Titolare',tags:['Bonus','Da seguire']},{name:'Francesco Camarda',role:'Attaccante',status:'Ballottaggio',tags:['Giovane','Scommessa']},{name:'Nikola Štulić',role:'Attaccante',status:'Rotazione',tags:['Da verificare']}],
    penalties:'Cheddira\nGandelman\nRamadani',freeKicks:'Helgason\nGallo\nBanda',corners:'Gallo\nHelgason\nBanda',arrivals:'Da aggiornare',departures:'Da aggiornare',talks:'Di Francesco confermato: monitorare il centravanti titolare e la crescita di Camarda.',recommended:'Wladimiro Falcone\nAntonino Gallo\nOmri Gandelman',bets:'Francesco Camarda\nTiago Gabriel\nSantiago Pierotti',young:'Francesco Camarda\nTiago Gabriel\nDanilo Veiga',reliable:'Wladimiro Falcone\nYlber Ramadani\nKialonda Gaspar',watch:'Walid Cheddira\nLameck Banda\nOmri Gandelman',avoid:'',notes:'Rosa giovane e da monitorare. Valori e gerarchie sono provvisori fino alla chiusura del mercato.',updated:'Aggiornata 3 agosto 2026',source:'Lotto contenuti RC23 • rosa Lecce pre-season'
  },
  Milan:{
    coach:'Rúben Amorim',module:'3-4-2-1',
    formation:'Maignan; Tomori, Mario Gila, Pavlović; Jiménez, Fofana, Reijnders, Theo Hernández; Pulisic, Leão; Gonçalo Ramos',
    lineup:[{name:'Mike Maignan',short:'Maignan',pos:'POR'},{name:'Fikayo Tomori',short:'Tomori',pos:'DC'},{name:'Mario Gila',short:'Mario Gila',pos:'DC'},{name:'Strahinja Pavlović',short:'Pavlović',pos:'DC'},{name:'Álex Jiménez',short:'Jiménez',pos:'ED'},{name:'Youssouf Fofana',short:'Fofana',pos:'CC'},{name:'Tijjani Reijnders',short:'Reijnders',pos:'CC'},{name:'Theo Hernández',short:'Theo',pos:'ES'},{name:'Christian Pulisic',short:'Pulisic',pos:'TRQ'},{name:'Rafael Leão',short:'Leão',pos:'TRQ'},{name:'Gonçalo Ramos',short:'G. Ramos',pos:'PC'}],
    roster:[{name:'Mike Maignan',role:'Portiere',status:'Titolare',tags:['Top reparto']},{name:'Lorenzo Torriani',role:'Portiere',status:'Riserva',tags:['Giovane']},{name:'Fikayo Tomori',role:'Difensore',status:'Titolare',tags:['Affidabile']},{name:'Mario Gila',role:'Difensore',status:'Titolare',tags:['Nuovo acquisto','Top reparto']},{name:'Strahinja Pavlović',role:'Difensore',status:'Titolare',tags:['Bonus']},{name:'Álex Jiménez',role:'Difensore',status:'Titolare',tags:['Giovane','Bonus']},{name:'Theo Hernández',role:'Difensore',status:'Titolare',tags:['Top','Piazzati']},{name:'Youssouf Fofana',role:'Centrocampista',status:'Titolare',tags:['Affidabile']},{name:'Tijjani Reijnders',role:'Centrocampista',status:'Titolare',tags:['Top','Bonus']},{name:'Ruben Loftus-Cheek',role:'Centrocampista',status:'Ballottaggio',tags:['Bonus']},{name:'Christian Pulisic',role:'Attaccante',status:'Titolare',tags:['Top','Rigorista']},{name:'Rafael Leão',role:'Attaccante',status:'Titolare',tags:['Top assoluto','Da comprare']},{name:'Gonçalo Ramos',role:'Attaccante',status:'Titolare',tags:['Nuovo acquisto','Rigorista']},{name:'Sankhoun Diawara',role:'Attaccante',status:'Rotazione',tags:['Giovane','Scommessa']},{name:'Francesco Camarda',role:'Attaccante',status:'In prestito/da verificare',tags:['Giovane']}],
    penalties:'Pulisic\nGonçalo Ramos\nTheo Hernández',freeKicks:'Theo Hernández\nPulisic\nReijnders',corners:'Pulisic\nReijnders\nTheo Hernández',arrivals:'Rúben Amorim\nMario Gila\nGonçalo Ramos',departures:'Da aggiornare',talks:'Nuovo sistema a tre: verificare adattamento degli esterni e gerarchie offensive.',recommended:'Rafael Leão\nChristian Pulisic\nTheo Hernández',bets:'Gonçalo Ramos\nÁlex Jiménez\nSankhoun Diawara',young:'Álex Jiménez\nSankhoun Diawara\nLorenzo Torriani',reliable:'Mike Maignan\nTijjani Reijnders\nFikayo Tomori',watch:'Gonçalo Ramos\nMario Gila\nRafael Leão',avoid:'',notes:'Scheda pre-asta ad alto potenziale. Amorim è il nuovo tecnico; il modulo sarà verificato nelle amichevoli.',updated:'Aggiornata 3 agosto 2026',source:'Lotto contenuti RC23 • rosa Milan pre-season'
  },
  Monza:{
    coach:'Ivan Jurić',module:'3-4-2-1',
    formation:'Pizzignacco; Izzo, Caldirola, Carboni; Birindelli, Pessina, Bianco, Kyriakopoulos; Caprari, Ciurria; Mota',
    lineup:[{name:'Semuel Pizzignacco',short:'Pizzignacco',pos:'POR'},{name:'Armando Izzo',short:'Izzo',pos:'DC'},{name:'Luca Caldirola',short:'Caldirola',pos:'DC'},{name:'Andrea Carboni',short:'Carboni',pos:'DC'},{name:'Samuele Birindelli',short:'Birindelli',pos:'ED'},{name:'Matteo Pessina',short:'Pessina',pos:'CC'},{name:'Alessandro Bianco',short:'Bianco',pos:'CC'},{name:'Giorgos Kyriakopoulos',short:'Kyriakopoulos',pos:'ES'},{name:'Gianluca Caprari',short:'Caprari',pos:'TRQ'},{name:'Patrick Ciurria',short:'Ciurria',pos:'TRQ'},{name:'Dany Mota',short:'Mota',pos:'PC'}],
    roster:[{name:'Semuel Pizzignacco',role:'Portiere',status:'Titolare',tags:['Scommessa']},{name:'Andrea Mazza',role:'Portiere',status:'Riserva',tags:['Giovane']},{name:'Armando Izzo',role:'Difensore',status:'Titolare',tags:['Affidabile']},{name:'Luca Caldirola',role:'Difensore',status:'Titolare',tags:['Esperienza']},{name:'Andrea Carboni',role:'Difensore',status:'Titolare',tags:['Da seguire']},{name:'Samuele Birindelli',role:'Difensore',status:'Titolare',tags:['Bonus']},{name:'Giorgos Kyriakopoulos',role:'Difensore',status:'Titolare',tags:['Bonus','Piazzati']},{name:'Matteo Pessina',role:'Centrocampista',status:'Titolare',tags:['Top reparto','Rigorista']},{name:'Alessandro Bianco',role:'Centrocampista',status:'Titolare',tags:['Scommessa']},{name:'Pedro Obiang',role:'Centrocampista',status:'Rotazione',tags:['Affidabile']},{name:'Patrick Ciurria',role:'Centrocampista',status:'Titolare',tags:['Bonus']},{name:'Gianluca Caprari',role:'Attaccante',status:'Titolare',tags:['Piazzati','Scommessa']},{name:'Dany Mota',role:'Attaccante',status:'Titolare',tags:['Da comprare']},{name:'Samuele Vignato',role:'Attaccante',status:'Rotazione',tags:['Giovane']},{name:'Kevin Maussi Martins',role:'Attaccante',status:'Rotazione',tags:['Giovane','Scommessa']}],
    penalties:'Pessina\nCaprari\nMota',freeKicks:'Caprari\nKyriakopoulos\nPessina',corners:'Kyriakopoulos\nCaprari\nCiurria',arrivals:'Ivan Jurić',departures:'Da aggiornare',talks:'Jurić può valorizzare esterni e trequartisti: verificare il centravanti titolare.',recommended:'Matteo Pessina\nGiorgos Kyriakopoulos\nDany Mota',bets:'Alessandro Bianco\nKevin Maussi Martins\nSemuel Pizzignacco',young:'Kevin Maussi Martins\nSamuele Vignato\nAndrea Mazza',reliable:'Armando Izzo\nMatteo Pessina\nLuca Caldirola',watch:'Gianluca Caprari\nPatrick Ciurria\nDany Mota',avoid:'',notes:'Monza neopromosso e in costruzione. Scheda provvisoria da aggiornare con gli ultimi acquisti.',updated:'Aggiornata 3 agosto 2026',source:'Lotto contenuti RC23 • rosa Monza pre-season'
  },
  Napoli:{
    coach:'Antonio Conte',module:'3-4-2-1',
    formation:'Meret; Di Lorenzo, Rrahmani, Buongiorno; Politano, Anguissa, Lobotka, Spinazzola; McTominay, De Bruyne; Lukaku',
    lineup:[{name:'Alex Meret',short:'Meret',pos:'POR'},{name:'Giovanni Di Lorenzo',short:'Di Lorenzo',pos:'DC'},{name:'Amir Rrahmani',short:'Rrahmani',pos:'DC'},{name:'Alessandro Buongiorno',short:'Buongiorno',pos:'DC'},{name:'Matteo Politano',short:'Politano',pos:'ED'},{name:'André-Frank Zambo Anguissa',short:'Anguissa',pos:'CC'},{name:'Stanislav Lobotka',short:'Lobotka',pos:'REG'},{name:'Leonardo Spinazzola',short:'Spinazzola',pos:'ES'},{name:'Scott McTominay',short:'McTominay',pos:'TRQ'},{name:'Kevin De Bruyne',short:'De Bruyne',pos:'TRQ'},{name:'Romelu Lukaku',short:'Lukaku',pos:'PC'}],
    roster:[{name:'Alex Meret',role:'Portiere',status:'Titolare',tags:['Top reparto','Affidabile']},{name:'Vanja Milinković-Savić',role:'Portiere',status:'Ballottaggio',tags:['Da seguire']},{name:'Giovanni Di Lorenzo',role:'Difensore',status:'Titolare',tags:['Bonus','Affidabile']},{name:'Amir Rrahmani',role:'Difensore',status:'Titolare',tags:['Affidabile']},{name:'Alessandro Buongiorno',role:'Difensore',status:'Titolare',tags:['Top reparto']},{name:'Leonardo Spinazzola',role:'Difensore',status:'Titolare',tags:['Bonus']},{name:'Mathías Olivera',role:'Difensore',status:'Ballottaggio',tags:['Affidabile']},{name:'André-Frank Zambo Anguissa',role:'Centrocampista',status:'Titolare',tags:['Bonus']},{name:'Stanislav Lobotka',role:'Centrocampista',status:'Titolare',tags:['Affidabile']},{name:'Scott McTominay',role:'Centrocampista',status:'Titolare',tags:['Top','Da comprare']},{name:'Kevin De Bruyne',role:'Centrocampista',status:'Titolare',tags:['Top assoluto','Piazzati']},{name:'Matteo Politano',role:'Attaccante',status:'Titolare',tags:['Piazzati','Bonus']},{name:'Romelu Lukaku',role:'Attaccante',status:'Titolare',tags:['Top','Rigorista']},{name:'David Neres',role:'Attaccante',status:'Ballottaggio',tags:['Scommessa']},{name:'Mattia Esposito',role:'Attaccante',status:'Rotazione',tags:['Nuovo acquisto','Giovane']}],
    penalties:'Lukaku\nDe Bruyne\nPolitano',freeKicks:'De Bruyne\nPolitano\nMcTominay',corners:'Politano\nDe Bruyne\nSpinazzola',arrivals:'Mattia Esposito\nDa aggiornare',departures:'Jesper Lindstrøm\nDa aggiornare',talks:'Rosa profonda: attenzione al turnover e alla possibile alternanza tra moduli.',recommended:'Scott McTominay\nKevin De Bruyne\nRomelu Lukaku',bets:'David Neres\nMattia Esposito\nLeonardo Spinazzola',young:'Mattia Esposito',reliable:'Giovanni Di Lorenzo\nAlex Meret\nStanislav Lobotka',watch:'Kevin De Bruyne\nScott McTominay\nRomelu Lukaku',avoid:'',notes:'Napoli di prima fascia. Conte resta il riferimento tecnico; valutare prezzi premium e turnover.',updated:'Aggiornata 3 agosto 2026',source:'Lotto contenuti RC23 • rosa Napoli pre-season'
  },
  Parma:{
    coach:'Carlos Cuesta',module:'4-3-3',
    formation:'Suzuki; Delprato, Circati, Valenti, Valeri; Bernabé, Keita, Sohm; Man, Bonny, Almqvist',
    lineup:[{name:'Zion Suzuki',short:'Suzuki',pos:'POR'},{name:'Enrico Delprato',short:'Delprato',pos:'TD'},{name:'Alessandro Circati',short:'Circati',pos:'DC'},{name:'Lautaro Valenti',short:'Valenti',pos:'DC'},{name:'Emanuele Valeri',short:'Valeri',pos:'TS'},{name:'Adrián Bernabé',short:'Bernabé',pos:'CC'},{name:'Mandela Keita',short:'Keita',pos:'CC'},{name:'Simon Sohm',short:'Sohm',pos:'CC'},{name:'Dennis Man',short:'Man',pos:'AD'},{name:'Ange-Yoan Bonny',short:'Bonny',pos:'PC'},{name:'Pontus Almqvist',short:'Almqvist',pos:'AS'}],
    roster:[{name:'Zion Suzuki',role:'Portiere',status:'Titolare',tags:['Affidabile','Giovane']},{name:'Edoardo Corvi',role:'Portiere',status:'Riserva',tags:['Giovane']},{name:'Enrico Delprato',role:'Difensore',status:'Titolare',tags:['Top reparto','Affidabile']},{name:'Alessandro Circati',role:'Difensore',status:'Titolare',tags:['Giovane']},{name:'Lautaro Valenti',role:'Difensore',status:'Titolare',tags:['Da seguire']},{name:'Emanuele Valeri',role:'Difensore',status:'Titolare',tags:['Bonus','Piazzati']},{name:'Botond Balogh',role:'Difensore',status:'Ballottaggio',tags:['Rotazione']},{name:'Adrián Bernabé',role:'Centrocampista',status:'Titolare',tags:['Top reparto','Piazzati']},{name:'Mandela Keita',role:'Centrocampista',status:'Titolare',tags:['Scommessa']},{name:'Simon Sohm',role:'Centrocampista',status:'Titolare',tags:['Bonus']},{name:'Hernani',role:'Centrocampista',status:'Ballottaggio',tags:['Rigorista']},{name:'Dennis Man',role:'Attaccante',status:'Titolare',tags:['Top','Bonus']},{name:'Ange-Yoan Bonny',role:'Attaccante',status:'Titolare',tags:['Scommessa','Giovane']},{name:'Pontus Almqvist',role:'Attaccante',status:'Titolare',tags:['Da seguire']},{name:'Milan Đurić',role:'Attaccante',status:'Rotazione',tags:['Esperienza']}],
    penalties:'Hernani\nBonny\nBernabé',freeKicks:'Bernabé\nValeri\nMan',corners:'Bernabé\nMan\nValeri',arrivals:'Da aggiornare',departures:'Da aggiornare',talks:'Verificare il centravanti titolare e la gestione dei giovani durante il precampionato.',recommended:'Dennis Man\nAdrián Bernabé\nEmanuele Valeri',bets:'Ange-Yoan Bonny\nMandela Keita\nAlessandro Circati',young:'Zion Suzuki\nAnge-Yoan Bonny\nAlessandro Circati',reliable:'Enrico Delprato\nAdrián Bernabé\nZion Suzuki',watch:'Dennis Man\nSimon Sohm\nAnge-Yoan Bonny',avoid:'',notes:'Parma da monitorare per sviluppo e continuità. Scheda pre-asta provvisoria.',updated:'Aggiornata 3 agosto 2026',source:'Lotto contenuti RC25 • rosa Parma pre-season'
  },
  Roma:{
    coach:'Gian Piero Gasperini',module:'3-4-2-1',
    formation:'Svilar; Mancini, Ndicka, Hermoso; Rensch, Koné, Cristante, Angeliño; Soulé, Dybala; Ferguson',
    lineup:[{name:'Mile Svilar',short:'Svilar',pos:'POR'},{name:'Gianluca Mancini',short:'Mancini',pos:'DC'},{name:'Evan Ndicka',short:'Ndicka',pos:'DC'},{name:'Mario Hermoso',short:'Hermoso',pos:'DC'},{name:'Devyne Rensch',short:'Rensch',pos:'ED'},{name:'Manu Koné',short:'Koné',pos:'CC'},{name:'Bryan Cristante',short:'Cristante',pos:'CC'},{name:'Angeliño',short:'Angeliño',pos:'ES'},{name:'Matías Soulé',short:'Soulé',pos:'TRQ'},{name:'Paulo Dybala',short:'Dybala',pos:'TRQ'},{name:'Evan Ferguson',short:'Ferguson',pos:'PC'}],
    roster:[{name:'Mile Svilar',role:'Portiere',status:'Titolare',tags:['Top reparto','Affidabile']},{name:'Pierluigi Gollini',role:'Portiere',status:'Riserva',tags:['Esperienza']},{name:'Gianluca Mancini',role:'Difensore',status:'Titolare',tags:['Bonus','Affidabile']},{name:'Evan Ndicka',role:'Difensore',status:'Titolare',tags:['Top reparto']},{name:'Mario Hermoso',role:'Difensore',status:'Titolare',tags:['Da seguire']},{name:'Devyne Rensch',role:'Difensore',status:'Titolare',tags:['Bonus','Giovane']},{name:'Angeliño',role:'Difensore',status:'Titolare',tags:['Piazzati','Bonus']},{name:'Manu Koné',role:'Centrocampista',status:'Titolare',tags:['Top reparto']},{name:'Bryan Cristante',role:'Centrocampista',status:'Titolare',tags:['Affidabile']},{name:'Lorenzo Pellegrini',role:'Centrocampista',status:'Ballottaggio',tags:['Piazzati','Bonus']},{name:'Matías Soulé',role:'Attaccante',status:'Titolare',tags:['Scommessa','Bonus']},{name:'Paulo Dybala',role:'Attaccante',status:'Titolare',tags:['Top assoluto','Rigorista']},{name:'Evan Ferguson',role:'Attaccante',status:'Titolare',tags:['Nuovo acquisto','Scommessa']},{name:'Artem Dovbyk',role:'Attaccante',status:'Ballottaggio',tags:['Rigorista','Da verificare']},{name:'Tommaso Baldanzi',role:'Attaccante',status:'Rotazione',tags:['Giovane']}],
    penalties:'Dybala\nDovbyk\nPellegrini',freeKicks:'Dybala\nPellegrini\nSoulé',corners:'Dybala\nPellegrini\nAngeliño',arrivals:'Gian Piero Gasperini\nEvan Ferguson',departures:'Da aggiornare',talks:'Monitorare il dualismo tra Ferguson e Dovbyk e la gestione fisica di Dybala.',recommended:'Paulo Dybala\nMile Svilar\nAngeliño',bets:'Matías Soulé\nEvan Ferguson\nDevyne Rensch',young:'Matías Soulé\nTommaso Baldanzi\nDevyne Rensch',reliable:'Mile Svilar\nGianluca Mancini\nManu Koné',watch:'Paulo Dybala\nEvan Ferguson\nArtem Dovbyk',avoid:'',notes:'Roma ad alto potenziale con Gasperini. Prezzi e gerarchie offensive da verificare.',updated:'Aggiornata 3 agosto 2026',source:'Lotto contenuti RC25 • rosa Roma pre-season'
  },
  Sassuolo:{
    coach:'Fabio Grosso',module:'4-3-3',
    formation:'Turati; Toljan, Romagna, Muharemović, Doig; Boloca, Thorstvedt, Volpato; Berardi, Pinamonti, Laurienté',
    lineup:[{name:'Stefano Turati',short:'Turati',pos:'POR'},{name:'Jeremy Toljan',short:'Toljan',pos:'TD'},{name:'Filippo Romagna',short:'Romagna',pos:'DC'},{name:'Tarik Muharemović',short:'Muharemović',pos:'DC'},{name:'Josh Doig',short:'Doig',pos:'TS'},{name:'Daniel Boloca',short:'Boloca',pos:'CC'},{name:'Kristian Thorstvedt',short:'Thorstvedt',pos:'CC'},{name:'Cristian Volpato',short:'Volpato',pos:'CC'},{name:'Domenico Berardi',short:'Berardi',pos:'AD'},{name:'Andrea Pinamonti',short:'Pinamonti',pos:'PC'},{name:'Armand Laurienté',short:'Laurienté',pos:'AS'}],
    roster:[{name:'Stefano Turati',role:'Portiere',status:'Titolare',tags:['Affidabile']},{name:'Giacomo Satalino',role:'Portiere',status:'Riserva',tags:['Da seguire']},{name:'Jeremy Toljan',role:'Difensore',status:'Titolare',tags:['Affidabile']},{name:'Filippo Romagna',role:'Difensore',status:'Titolare',tags:['Esperienza']},{name:'Tarik Muharemović',role:'Difensore',status:'Titolare',tags:['Giovane','Scommessa']},{name:'Josh Doig',role:'Difensore',status:'Titolare',tags:['Bonus']},{name:'Daniel Boloca',role:'Centrocampista',status:'Titolare',tags:['Affidabile']},{name:'Kristian Thorstvedt',role:'Centrocampista',status:'Titolare',tags:['Bonus']},{name:'Cristian Volpato',role:'Centrocampista',status:'Titolare',tags:['Scommessa','Giovane']},{name:'Nedim Bajrami',role:'Centrocampista',status:'Ballottaggio',tags:['Piazzati']},{name:'Domenico Berardi',role:'Attaccante',status:'Titolare',tags:['Top assoluto','Rigorista']},{name:'Andrea Pinamonti',role:'Attaccante',status:'Titolare',tags:['Rigorista','Da comprare']},{name:'Armand Laurienté',role:'Attaccante',status:'Titolare',tags:['Bonus','Da seguire']},{name:'Samuele Mulattieri',role:'Attaccante',status:'Rotazione',tags:['Scommessa']},{name:'Luca Moro',role:'Attaccante',status:'Rotazione',tags:['Giovane']}],
    penalties:'Berardi\nPinamonti\nBajrami',freeKicks:'Berardi\nBajrami\nLaurienté',corners:'Berardi\nBajrami\nLaurienté',arrivals:'Da aggiornare',departures:'Da aggiornare',talks:'Verificare la permanenza dei tre attaccanti principali e il ruolo di Volpato.',recommended:'Domenico Berardi\nAndrea Pinamonti\nKristian Thorstvedt',bets:'Cristian Volpato\nTarik Muharemović\nSamuele Mulattieri',young:'Cristian Volpato\nTarik Muharemović\nLuca Moro',reliable:'Daniel Boloca\nJeremy Toljan\nStefano Turati',watch:'Domenico Berardi\nArmand Laurienté\nAndrea Pinamonti',avoid:'',notes:'Squadra offensiva e interessante per il fantacalcio. Mercato ancora decisivo.',updated:'Aggiornata 3 agosto 2026',source:'Lotto contenuti RC25 • rosa Sassuolo pre-season'
  },
  Torino:{
    coach:'Marco Baroni',module:'4-2-3-1',
    formation:'Israel; Pedersen, Maripán, Coco, Biraghi; Ricci, Casadei; Lazaro, Vlasić, Ngonge; Zapata',
    lineup:[{name:'Franco Israel',short:'Israel',pos:'POR'},{name:'Marcus Pedersen',short:'Pedersen',pos:'TD'},{name:'Guillermo Maripán',short:'Maripán',pos:'DC'},{name:'Saúl Coco',short:'Coco',pos:'DC'},{name:'Cristiano Biraghi',short:'Biraghi',pos:'TS'},{name:'Samuele Ricci',short:'Ricci',pos:'CC'},{name:'Cesare Casadei',short:'Casadei',pos:'CC'},{name:'Valentino Lazaro',short:'Lazaro',pos:'AD'},{name:'Nikola Vlasić',short:'Vlasić',pos:'TRQ'},{name:'Cyril Ngonge',short:'Ngonge',pos:'AS'},{name:'Duván Zapata',short:'Zapata',pos:'PC'}],
    roster:[{name:'Franco Israel',role:'Portiere',status:'Titolare',tags:['Nuovo acquisto','Da seguire']},{name:'Alberto Paleari',role:'Portiere',status:'Riserva',tags:['Affidabile']},{name:'Marcus Pedersen',role:'Difensore',status:'Titolare',tags:['Bonus']},{name:'Guillermo Maripán',role:'Difensore',status:'Titolare',tags:['Affidabile']},{name:'Saúl Coco',role:'Difensore',status:'Titolare',tags:['Top reparto']},{name:'Cristiano Biraghi',role:'Difensore',status:'Titolare',tags:['Piazzati','Bonus']},{name:'Samuele Ricci',role:'Centrocampista',status:'Titolare',tags:['Affidabile']},{name:'Cesare Casadei',role:'Centrocampista',status:'Titolare',tags:['Bonus','Giovane']},{name:'Nikola Vlasić',role:'Centrocampista',status:'Titolare',tags:['Top reparto','Piazzati']},{name:'Valentino Lazaro',role:'Centrocampista',status:'Titolare',tags:['Bonus']},{name:'Cyril Ngonge',role:'Attaccante',status:'Titolare',tags:['Scommessa']},{name:'Duván Zapata',role:'Attaccante',status:'Titolare',tags:['Top','Rigorista']},{name:'Ché Adams',role:'Attaccante',status:'Ballottaggio',tags:['Da comprare']},{name:'Alieu Njie',role:'Attaccante',status:'Rotazione',tags:['Giovane']},{name:'Yann Karamoh',role:'Attaccante',status:'Rotazione',tags:['Jolly']}],
    penalties:'Zapata\nVlasić\nBiraghi',freeKicks:'Biraghi\nVlasić\nLazaro',corners:'Biraghi\nLazaro\nVlasić',arrivals:'Marco Baroni\nFranco Israel\nCyril Ngonge',departures:'Da aggiornare',talks:'Verificare il recupero di Zapata e il ballottaggio con Adams.',recommended:'Nikola Vlasić\nCristiano Biraghi\nDuván Zapata',bets:'Cesare Casadei\nCyril Ngonge\nAlieu Njie',young:'Cesare Casadei\nAlieu Njie',reliable:'Samuele Ricci\nGuillermo Maripán\nSaúl Coco',watch:'Duván Zapata\nChé Adams\nCyril Ngonge',avoid:'',notes:'Torino da valutare dopo il cambio tecnico. Esterni e trequartisti possono crescere.',updated:'Aggiornata 3 agosto 2026',source:'Lotto contenuti RC25 • rosa Torino pre-season'
  },
  Udinese:{
    coach:'Kosta Runjaić',module:'3-5-2',
    formation:'Okoye; Kristensen, Bijol, Solet; Ehizibue, Lovrić, Karlström, Atta, Kamara; Thauvin, Lucca',
    lineup:[{name:'Maduka Okoye',short:'Okoye',pos:'POR'},{name:'Thomas Kristensen',short:'Kristensen',pos:'DC'},{name:'Jaka Bijol',short:'Bijol',pos:'DC'},{name:'Oumar Solet',short:'Solet',pos:'DC'},{name:'Kingsley Ehizibue',short:'Ehizibue',pos:'ED'},{name:'Sandi Lovrić',short:'Lovrić',pos:'CC'},{name:'Jesper Karlström',short:'Karlström',pos:'REG'},{name:'Arthur Atta',short:'Atta',pos:'CC'},{name:'Hassane Kamara',short:'Kamara',pos:'ES'},{name:'Florian Thauvin',short:'Thauvin',pos:'SS'},{name:'Lorenzo Lucca',short:'Lucca',pos:'PC'}],
    roster:[{name:'Maduka Okoye',role:'Portiere',status:'Titolare',tags:['Affidabile']},{name:'Răzvan Sava',role:'Portiere',status:'Ballottaggio',tags:['Da seguire']},{name:'Thomas Kristensen',role:'Difensore',status:'Titolare',tags:['Giovane']},{name:'Jaka Bijol',role:'Difensore',status:'Titolare',tags:['Top reparto']},{name:'Oumar Solet',role:'Difensore',status:'Titolare',tags:['Scommessa']},{name:'Kingsley Ehizibue',role:'Difensore',status:'Titolare',tags:['Bonus']},{name:'Hassane Kamara',role:'Difensore',status:'Titolare',tags:['Bonus']},{name:'Sandi Lovrić',role:'Centrocampista',status:'Titolare',tags:['Piazzati','Bonus']},{name:'Jesper Karlström',role:'Centrocampista',status:'Titolare',tags:['Affidabile']},{name:'Arthur Atta',role:'Centrocampista',status:'Titolare',tags:['Giovane','Scommessa']},{name:'Florian Thauvin',role:'Attaccante',status:'Titolare',tags:['Top','Rigorista']},{name:'Lorenzo Lucca',role:'Attaccante',status:'Titolare',tags:['Top reparto','Rigorista']},{name:'Keinan Davis',role:'Attaccante',status:'Ballottaggio',tags:['Scommessa']},{name:'Iker Bravo',role:'Attaccante',status:'Rotazione',tags:['Giovane']},{name:'Jurgen Ekkelenkamp',role:'Centrocampista',status:'Rotazione',tags:['Bonus']}],
    penalties:'Thauvin\nLucca\nLovrić',freeKicks:'Thauvin\nLovrić\nKamara',corners:'Thauvin\nLovrić\nKamara',arrivals:'Da aggiornare',departures:'Da aggiornare',talks:'Monitorare il futuro di Lucca e Thauvin e la gerarchia dei portieri.',recommended:'Florian Thauvin\nLorenzo Lucca\nJaka Bijol',bets:'Arthur Atta\nOumar Solet\nIker Bravo',young:'Arthur Atta\nIker Bravo\nThomas Kristensen',reliable:'Jaka Bijol\nJesper Karlström\nMaduka Okoye',watch:'Lorenzo Lucca\nFlorian Thauvin\nKeinan Davis',avoid:'',notes:'Udinese fisica e verticale. Attenzione alle cessioni dei profili più appetibili.',updated:'Aggiornata 3 agosto 2026',source:'Lotto contenuti RC25 • rosa Udinese pre-season'
  },
  Venezia:{
    coach:'Eusebio Di Francesco',module:'3-4-2-1',
    formation:'Stanković; Idzes, Svoboda, Sverko; Candela, Nicolussi Caviglia, Busio, Haps; Oristanio, Fila; Pohjanpalo',
    lineup:[{name:'Filip Stanković',short:'Stanković',pos:'POR'},{name:'Jay Idzes',short:'Idzes',pos:'DC'},{name:'Michael Svoboda',short:'Svoboda',pos:'DC'},{name:'Marin Sverko',short:'Sverko',pos:'DC'},{name:'Antonio Candela',short:'Candela',pos:'ED'},{name:'Hans Nicolussi Caviglia',short:'N. Caviglia',pos:'CC'},{name:'Gianluca Busio',short:'Busio',pos:'CC'},{name:'Ridgeciano Haps',short:'Haps',pos:'ES'},{name:'Gaetano Oristanio',short:'Oristanio',pos:'TRQ'},{name:'Daniel Fila',short:'Fila',pos:'TRQ'},{name:'Joel Pohjanpalo',short:'Pohjanpalo',pos:'PC'}],
    roster:[{name:'Filip Stanković',role:'Portiere',status:'Titolare',tags:['Giovane','Da seguire']},{name:'Jesse Joronen',role:'Portiere',status:'Riserva',tags:['Esperienza']},{name:'Jay Idzes',role:'Difensore',status:'Titolare',tags:['Top reparto']},{name:'Michael Svoboda',role:'Difensore',status:'Titolare',tags:['Affidabile']},{name:'Marin Sverko',role:'Difensore',status:'Titolare',tags:['Rotazione']},{name:'Antonio Candela',role:'Difensore',status:'Titolare',tags:['Bonus']},{name:'Ridgeciano Haps',role:'Difensore',status:'Titolare',tags:['Bonus']},{name:'Hans Nicolussi Caviglia',role:'Centrocampista',status:'Titolare',tags:['Piazzati','Bonus']},{name:'Gianluca Busio',role:'Centrocampista',status:'Titolare',tags:['Affidabile']},{name:'Gaetano Oristanio',role:'Attaccante',status:'Titolare',tags:['Scommessa','Bonus']},{name:'Daniel Fila',role:'Attaccante',status:'Titolare',tags:['Giovane','Scommessa']},{name:'Joel Pohjanpalo',role:'Attaccante',status:'Titolare',tags:['Top reparto','Rigorista']},{name:'John Yeboah',role:'Attaccante',status:'Ballottaggio',tags:['Bonus']},{name:'Christian Gytkjær',role:'Attaccante',status:'Rotazione',tags:['Esperienza']},{name:'Issa Doumbia',role:'Centrocampista',status:'Rotazione',tags:['Giovane']}],
    penalties:'Pohjanpalo\nNicolussi Caviglia\nOristanio',freeKicks:'Nicolussi Caviglia\nOristanio\nBusio',corners:'Nicolussi Caviglia\nOristanio\nCandela',arrivals:'Da aggiornare',departures:'Da aggiornare',talks:'Verificare la permanenza di Pohjanpalo, Oristanio e Nicolussi Caviglia.',recommended:'Joel Pohjanpalo\nHans Nicolussi Caviglia\nGaetano Oristanio',bets:'Daniel Fila\nFilip Stanković\nIssa Doumbia',young:'Daniel Fila\nFilip Stanković\nIssa Doumbia',reliable:'Jay Idzes\nGianluca Busio\nMichael Svoboda',watch:'Joel Pohjanpalo\nGaetano Oristanio\nJohn Yeboah',avoid:'',notes:'Scheda pre-asta provvisoria. Mercato determinante per la qualità finale della rosa.',updated:'Aggiornata 3 agosto 2026',source:'Lotto contenuti RC25 • rosa Venezia pre-season'
  }


};
const playerProfiles={
  'Marco Carnesecchi':{price:'18–24',stars:4.5,mv:'6.28',fm:'5.36',apps:34,goals:0,assists:0,risk:'Basso',trend:'In crescita',injury:'Disponibile',condition:'Ottima',starterPct:96,ceiling:'24',stop:'25',timing:'Entrare dopo i primi portieri top',alternatives:['Marco Sportiello'],advice:'Portiere da prima fascia: affidabile, titolare e con margine di crescita.'},
  'Raoul Bellanova':{price:'14–20',stars:4,mv:'6.12',fm:'6.48',apps:33,goals:1,assists:7,risk:'Medio',trend:'Bonus',injury:'Disponibile',condition:'Buona',starterPct:91,ceiling:'20',stop:'21',timing:'Rilanciare con decisione fino alla fascia media',alternatives:['Davide Zappacosta','Giorgio Scalvini'],advice:'Esterno offensivo: da comprare se il prezzo resta sotto la fascia premium.'},
  'Giorgio Scalvini':{price:'12–18',stars:4,mv:'6.18',fm:'6.32',apps:23,goals:2,assists:1,risk:'Medio',trend:'Rilancio',injury:'Da monitorare',condition:'In crescita',starterPct:82,ceiling:'18',stop:'19',timing:'Aspettare che il tavolo valuti il rischio fisico',alternatives:['Isak Hien','Odilon Kossounou'],advice:'Profilo da monitorare: qualità alta, ma va verificata la continuità fisica.'},
  'Isak Hien':{price:'7–10',stars:3.5,mv:'6.10',fm:'6.12',apps:31,goals:1,assists:0,risk:'Basso',trend:'Stabile',advice:'Difensore affidabile, utile per completare il reparto senza spendere troppo.'},
  'Honest Ahanor':{price:'3–7',stars:3,mv:'6.00',fm:'6.08',apps:12,goals:1,assists:0,risk:'Alto',trend:'Scommessa',advice:'Giovane da ultimi slot: investimento interessante, ma minutaggio da confermare.'},
  'Éderson':{price:'28–38',stars:4.5,mv:'6.35',fm:'6.74',apps:34,goals:5,assists:4,risk:'Basso',trend:'Top',injury:'Disponibile',condition:'Ottima',starterPct:97,ceiling:'38',stop:'40',timing:'Profilo da assicurarsi prima dei top assoluti',alternatives:['Mario Pašalić','Gianluca Gaetano'],advice:'Centrocampista completo e continuo: uno dei riferimenti della squadra.'},
  'Gianluca Gaetano':{price:'12–18',stars:3.5,mv:'6.16',fm:'6.62',apps:29,goals:5,assists:3,risk:'Medio',trend:'Scommessa',advice:'Può portare bonus e crescere: da prendere al prezzo giusto, senza sovrapagarlo.'},
  'Mario Pašalić':{price:'20–28',stars:4,mv:'6.18',fm:'7.02',apps:32,goals:8,assists:4,risk:'Medio',trend:'Bonus',advice:'Uno dei migliori per rapporto tra prezzo, inserimenti e bonus potenziali.'},
  'Charles De Ketelaere':{price:'48–65',stars:5,mv:'6.54',fm:'7.58',apps:35,goals:12,assists:10,risk:'Basso',trend:'Top',injury:'Disponibile',condition:'Ottima',starterPct:98,ceiling:'65',stop:'68',timing:'Rilanciare forte ma senza superare il tetto',alternatives:['Gianluca Scamacca','Giacomo Raspadori'],advice:'Top offensivo: da prendere come riferimento, valutando bene il budget.'},
  'Gianluca Scamacca':{price:'42–58',stars:4.5,mv:'6.38',fm:'7.72',apps:27,goals:15,assists:4,risk:'Medio',trend:'Rigorista',injury:'Da monitorare',condition:'Buona',starterPct:89,ceiling:'58',stop:'60',timing:'Sfruttare eventuali dubbi fisici per prenderlo sotto prezzo',alternatives:['Charles De Ketelaere','Nikola Krstović'],advice:'Prima punta da bonus pesanti. Il rischio principale resta la continuità fisica.'},
  'Giacomo Raspadori':{price:'26–38',stars:4,mv:'6.22',fm:'6.86',apps:31,goals:8,assists:5,risk:'Medio',trend:'Piazzati',advice:'Jolly offensivo di qualità: interessante soprattutto se confermato sui piazzati.'}
};
let data=JSON.parse(localStorage.getItem('gac-data')||'null')||base;
const storedVersion=Number(localStorage.getItem('gac-data-version')||0);
for(const t of teams){
  const current=data[t]||{};
  const defaults=editorialDefaults[t]||{};
  const personalFields=['recommended','bets','young','reliable','avoid','watch','notes'];
  const personal=Object.fromEntries(personalFields.map(k=>[k,current[k]||defaults[k]||'']));
  const coreFields=['coach','module','formation','penalties','freeKicks','corners','arrivals','departures','talks'];
  const hasEditorialData=coreFields.some(k=>String(current[k]||'').trim());
  if(Object.keys(defaults).length && (storedVersion<DATA_VERSION || !hasEditorialData)){
    data[t]={...blank(),...defaults,...personal};
  }else{
    data[t]={...blank(),...defaults,...current};
  }
}
localStorage.setItem('gac-data-version',String(DATA_VERSION));
persist();
let auctionList=JSON.parse(localStorage.getItem('gac-auction-list')||'[]');
let conteFavorites=JSON.parse(localStorage.getItem('gac-conte-favorites')||'[]');
let auctionPlan=JSON.parse(localStorage.getItem('gac-auction-plan')||'null')||{budget:500,spent:0,slots:{Portiere:3,Difensore:8,Centrocampista:8,Attaccante:6}};
let updateDiary=JSON.parse(localStorage.getItem('gac-update-diary')||'[]');
let lastScan=JSON.parse(localStorage.getItem('gac-last-scan')||'null');
const saveConteFavorites=()=>localStorage.setItem('gac-conte-favorites',JSON.stringify(conteFavorites));
const saveAuctionList=()=>localStorage.setItem('gac-auction-list',JSON.stringify(auctionList));
const saveAuctionPlan=()=>localStorage.setItem('gac-auction-plan',JSON.stringify(auctionPlan));
let rosterFilter='all';
let rosterStatusFilter='all';
let rosterQuery='';
let teamFilter='all';

const grid=document.querySelector('#teamGrid');
const modal=document.querySelector('#modal');
const view=document.querySelector('#teamView');
const esc=(v='')=>String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const lines=(v='')=>String(v).split('\n').map(x=>x.trim()).filter(Boolean);
function playerListPreview(value,emptyText='Nessun giocatore inserito'){
  const items=lines(value);
  if(!items.length)return `<div class="playerListEmpty">${esc(emptyText)}</div>`;
  return `<div class="playerListPreview">${items.map((name,index)=>`<div class="playerListItem"><span class="playerListNumber">${index+1}</span><strong>${esc(name)}</strong></div>`).join('')}</div>`;
}

function allRosterPlayers(){
  const out=[];
  teams.forEach(team=>(data[team]?.roster||[]).forEach(player=>out.push({...player,team})));
  return out;
}
function hashNumber(text,min,max){
  let h=0;for(const ch of String(text))h=(h*31+ch.charCodeAt(0))>>>0;
  return min+(h%(max-min+1));
}
function profileFor(name){
  if(playerProfiles[name]){
    const p=playerProfiles[name];
    return {...p,score:String(Math.round((p.stars||3)*20)),tier:(p.stars||3)>=4.5?'TOP':(p.stars||3)>=4?'PRIMA FASCIA':(p.stars||3)>=3.5?'TITOLARE':'SCOMMESSA',age:hashNumber(name,19,32),foot:'D',starter:(p.risk==='Basso'?'Alta':p.risk==='Medio'?'Media':'Da verificare'),starterPct:p.starterPct??hashNumber(name+'pct',68,96),injury:p.injury||'Disponibile',condition:p.condition||'Buona',ceiling:p.ceiling||String(p.price).split('–').slice(-1)[0],stop:p.stop||String(Number(String(p.price).split('–').slice(-1)[0]||0)+2),timing:p.timing||'Entrare quando il prezzo resta nella fascia prevista',alternatives:p.alternatives||[],minutes:(p.apps||0)*76,pens:p.goals>8?3:0,yellow:hashNumber(name,1,8),red:0};
  }
  const stars=(hashNumber(name,5,9)/2);
  const apps=hashNumber(name,8,33),goals=hashNumber(name,0,8),assists=hashNumber(name,0,6);
  const mv=(5.7+hashNumber(name+'mv',0,75)/100).toFixed(2);
  const fm=(Number(mv)+goals*.08+assists*.04).toFixed(2);
  return {price:`${hashNumber(name+'p',2,12)}–${hashNumber(name+'p2',13,28)}`,stars,mv,fm,apps,goals,assists,risk:'Da valutare',trend:'Monitorare',advice:'Profilo da verificare durante il precampionato e prima dell’asta.',score:String(Math.round(stars*20)),tier:stars>=4?'PRIMA FASCIA':stars>=3.5?'TITOLARE':'ROTAZIONE',age:hashNumber(name,18,34),foot:hashNumber(name+'f',0,1)?'D':'S',starter:'Da verificare',starterPct:hashNumber(name+'pct',35,88),injury:'Da verificare',condition:'Da valutare',ceiling:String(hashNumber(name+'p2',13,28)),stop:String(hashNumber(name+'p2',13,28)+2),timing:'Entrare solo se il prezzo resta nella fascia prevista',alternatives:[],minutes:apps*68,pens:0,yellow:hashNumber(name,0,7),red:0};
}
function renderPlayerSearch(query=''){
  const box=document.querySelector('#playerSearchResults');if(!box)return;
  const q=String(query).trim().toLowerCase();
  if(q.length<2){box.classList.add('hidden');box.innerHTML='';return;}
  const items=allRosterPlayers().filter(x=>x.name.toLowerCase().includes(q)||x.team.toLowerCase().includes(q)).slice(0,18);
  box.classList.remove('hidden');
  box.innerHTML=items.length?items.map(x=>{const s=profileFor(x.name);const initials=x.name.split(' ').map(v=>v[0]).slice(0,2).join('').toUpperCase();return `<button type="button" class="searchPlayerResult" data-team="${esc(x.team)}" data-player="${esc(x.name)}"><span class="searchAvatar">${esc(initials)}</span><span><b>${esc(x.name)}</b><small>${esc(x.team)} • ${esc(x.role)} • ${esc(x.status)}</small></span><em>${esc(s.score)}<small>/100</small></em></button>`}).join(''):'<div class="searchEmpty">Nessun giocatore trovato</div>';
  box.querySelectorAll('.searchPlayerResult').forEach(btn=>btn.onclick=()=>{box.classList.add('hidden');openPlayer(btn.dataset.team,btn.dataset.player)});
}
function teamReadiness(d){
  const checks=[Boolean(d.coach),Boolean(d.module),Boolean(d.formation),Boolean((d.roster||[]).length),Boolean(d.recommended||d.bets||d.watch),Boolean(d.penalties||d.freeKicks||d.corners)];
  const filled=checks.filter(Boolean).length;
  return {filled,ready:filled>=5,partial:filled<5,hasWatch:Boolean(d.watch)};
}
function renderCoverage(){
  const covered=teams.filter(t=>teamReadiness(data[t]).filled>0).length;
  const ready=teams.filter(t=>teamReadiness(data[t]).ready).length;
  const players=teams.reduce((n,t)=>n+(data[t].roster||[]).length,0);
  document.querySelector('#coverageTeams').textContent=`${covered}/20`;
  document.querySelector('#coveragePlayers').textContent=players;
  document.querySelector('#readyTeams').textContent=ready;
}
function renderTeams(q=''){
  grid.innerHTML='';
  const filtered=teams.filter(t=>{
    const r=teamReadiness(data[t]);
    const filterOk=teamFilter==='all'||(teamFilter==='ready'&&r.ready)||(teamFilter==='partial'&&r.partial)||(teamFilter==='watch'&&r.hasWatch);
    return filterOk&&t.toLowerCase().includes(q.toLowerCase());
  });
  filtered.forEach(t=>{
    const d=data[t],r=teamReadiness(d);
    const b=document.createElement('button');
    b.className=`team ${r.ready?'teamReady':'teamPartial'}`;
    const status=r.ready?'Pronta asta':r.filled?'In lavorazione':'Da compilare';
    b.innerHTML=`<div class="teamTop"><strong>${t}</strong><span class="completion">${r.filled}/6</span></div><small>${esc(d.updated||'Da compilare')}</small><div class="teamProgress"><i style="width:${Math.round(r.filled/6*100)}%"></i></div><div class="teamBadges"><i class="readiness ${r.ready?'ready':'partial'}">${status}</i>${d.arrivals?'<i>Mercato</i>':''}${d.watch?'<i>Obiettivi</i>':''}${d.formation?'<i>Formazione</i>':''}</div>`;
    b.onclick=()=>openTeam(t);grid.appendChild(b);
  });
  if(!filtered.length)grid.innerHTML='<div class="empty"><strong>Nessuna squadra in questo filtro</strong><p>Cambia filtro oppure completa una scheda.</p></div>';
  renderCoverage();
}


function teamDashboardHtml(d){
  const roster=d.roster||[];
  const starters=roster.filter(p=>p.status==='Titolare').length;
  const newPlayers=roster.filter(p=>(p.tags||[]).some(tag=>tag.toLowerCase().includes('nuovo'))).length;
  const young=roster.filter(p=>(p.tags||[]).some(tag=>tag.toLowerCase().includes('giovane'))).length;
  const doubts=roster.filter(p=>['Da valutare','Ballottaggio','Gerarchia aperta'].includes(p.status)).length;
  return `<section class="teamSmartDashboard"><div><small>ROSA</small><b>${roster.length}</b><span>giocatori</span></div><div><small>TITOLARI</small><b>${starters}</b><span>stimati</span></div><div><small>NUOVI</small><b>${newPlayers}</b><span>acquisti</span></div><div><small>GIOVANI</small><b>${young}</b><span>prospetti</span></div><div><small>DA VERIFICARE</small><b>${doubts}</b><span>situazioni</span></div></section>`;
}
function showToast(message){
  let toast=document.querySelector('#appToast');
  if(!toast){toast=document.createElement('div');toast.id='appToast';toast.className='appToast';document.body.appendChild(toast);}
  toast.textContent=message;toast.classList.add('show');
  clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove('show'),1800);
}
function smartUpdateTeam(team){
  const defaults=editorialDefaults[team];
  if(!defaults){showToast('Nessun pacchetto editoriale disponibile per questa squadra.');return;}
  const activeSection=view.querySelector('.teamSectionTab.active')?.dataset.section||'formation';
  const sheet=document.querySelector('.sheet');
  const oldScroll=sheet?.scrollTop||0;
  const personal={};
  ['recommended','bets','young','reliable','avoid','watch','notes'].forEach(k=>personal[k]=data[team][k]||defaults[k]||'');
  data[team]={...blank(),...data[team],...defaults,...personal,updated:'Aggiornata oggi'};
  persist();refreshAll();openTeam(team,activeSection);
  requestAnimationFrame(()=>{const newSheet=document.querySelector('.sheet');if(newSheet)newSheet.scrollTop=oldScroll;});
  showToast(`${team} aggiornata. Note e valutazioni personali conservate.`);
}
function updateAllBuiltInTeams(){
  if(!confirm('Aggiornare tutte le rose con i dati inclusi nella RC29? Note, consigli personali e lista asta resteranno invariati.'))return;
  let changed=0;
  teams.forEach(team=>{
    const defaults=editorialDefaults[team];if(!defaults)return;
    const personal={};
    ['recommended','bets','young','reliable','avoid','watch','notes'].forEach(k=>personal[k]=data[team][k]||defaults[k]||'');
    data[team]={...blank(),...data[team],...defaults,...personal,updated:'Aggiornata oggi'};changed++;
  });
  persist();refreshAll();showToast(`${changed} rose aggiornate con i dati RC29.`);
}
function renderAuctionPlan(){
  const budgetInput=document.querySelector('#auctionBudget'),spentInput=document.querySelector('#auctionSpent');
  if(!budgetInput||!spentInput)return;
  budgetInput.value=auctionPlan.budget;spentInput.value=auctionPlan.spent;
  const remaining=Math.max(0,Number(auctionPlan.budget||0)-Number(auctionPlan.spent||0));
  document.querySelector('#auctionRemaining').textContent=remaining;
  document.querySelector('#auctionObjectives').textContent=auctionList.length;
  const roles=['Portiere','Difensore','Centrocampista','Attaccante'];
  const icons={Portiere:'🧤',Difensore:'🛡️',Centrocampista:'⚙️',Attaccante:'⚽'};
  document.querySelector('#slotSummary').innerHTML=roles.map(role=>{
    const selected=auctionList.filter(x=>x.role===role).length;
    const target=Number(auctionPlan.slots?.[role]||0);
    const left=Math.max(0,target-selected);
    return `<div class="slotCard"><span>${icons[role]} ${role}</span><b>${selected}/${target}</b><small>${left} slot liberi</small></div>`;
  }).join('');
}
function lineupHtml(d){
  if(!d.lineup?.length)return '<div class="emptyMini">Formazione non ancora disponibile</div>';
  const rows=[d.lineup.slice(0,1),d.lineup.slice(1,5),d.lineup.slice(5,8),d.lineup.slice(8,11)];
  return `<div class="pitch">${rows.map((r,i)=>`<div class="pitchRow row${i}">${r.map(p=>`<div class="shirt"><span>${esc(p.short)}</span><small>${esc(p.pos)}</small></div>`).join('')}</div>`).join('')}</div>`;
}
function rosterHtml(d,t){
  if(!d.roster?.length)return '<div class="emptyMini">Rosa non ancora inserita</div>';
  const roles=['Portiere','Difensore','Centrocampista','Attaccante'];
  const icons={Portiere:'🧤',Difensore:'🛡️',Centrocampista:'⚙️',Attaccante:'⚽'};
  const counts=Object.fromEntries(roles.map(r=>[r,d.roster.filter(p=>p.role===r).length]));
  const roleFilters=`<div class="rosterFilters"><button type="button" class="rosterFilter ${rosterFilter==='all'?'active':''}" data-role="all">Tutti <b>${d.roster.length}</b></button>${roles.map(r=>`<button type="button" class="rosterFilter ${rosterFilter===r?'active':''}" data-role="${r}">${icons[r]} <b>${counts[r]}</b></button>`).join('')}</div>`;
  const statusFilters=`<div class="rosterStatusFilters"><button type="button" class="rosterStatusFilter ${rosterStatusFilter==='all'?'active':''}" data-status="all">Tutti</button><button type="button" class="rosterStatusFilter ${rosterStatusFilter==='Titolare'?'active':''}" data-status="Titolare">🟢 Titolari</button><button type="button" class="rosterStatusFilter ${rosterStatusFilter==='Ballottaggio'?'active':''}" data-status="Ballottaggio">🟡 Ballottaggi</button><button type="button" class="rosterStatusFilter ${rosterStatusFilter==='Giovane'?'active':''}" data-status="Giovane">👶 Giovani</button><button type="button" class="rosterStatusFilter ${rosterStatusFilter==='Top'?'active':''}" data-status="Top">⭐ Top</button></div>`;
  const search=`<div class="rosterSearchWrap"><input id="rosterSearch" value="${esc(rosterQuery)}" placeholder="Cerca nella rosa di ${esc(t)}"><button type="button" id="clearRosterSearch" aria-label="Pulisci ricerca">×</button></div>`;
  return search+roleFilters+statusFilters+`<div id="rosterNoResults" class="emptyMini hidden">Nessun giocatore corrisponde ai filtri.</div>`+roles.map(role=>{
    const players=d.roster.filter(p=>p.role===role);
    return `<div class="roleBlock" data-role="${role}"><h4>${icons[role]} ${role}i <span>${players.length}</span></h4>${players.map(p=>{
      const selected=auctionList.some(x=>x.team===t&&x.name===p.name);const st=profileFor(p.name);
      const searchable=[p.name,p.role,p.status,...(p.tags||[])].join(' ').toLowerCase();
      return `<div class="playerCard" data-role="${esc(role)}" data-status="${esc(p.status)}" data-search="${esc(searchable)}" data-tags="${esc((p.tags||[]).join(' ').toLowerCase())}"><button type="button" class="playerMain playerOpen" data-team="${esc(t)}" data-player="${esc(p.name)}"><div class="playerNameLine"><b>${esc(p.name)}</b><span class="miniScore">${esc(st.score)}</span><span class="miniVerdict ${intelligenceFor(st,p).verdictClass}">${intelligenceFor(st,p).verdict}</span></div><small class="playerHint">${st.apps} pres. • ${st.goals} gol • ${st.assists} assist • FM ${esc(st.fm)} • ${esc(st.price)} cr.</small><div class="playerMeta"><span class="statusChip ${esc(p.status).toLowerCase().replaceAll(' ','-')}">${esc(p.status)}</span>${(p.tags||[]).map(tag=>`<span class="tagChip">${esc(tag)}</span>`).join('')}</div></button><button type="button" class="starBtn ${selected?'selected':''}" data-team="${esc(t)}" data-player="${esc(p.name)}" aria-label="${selected?'Rimuovi dalla':'Aggiungi alla'} lista asta">${selected?'★':'☆'}</button></div>`;
    }).join('')}</div>`;
  }).join('');
}
function applyRosterFilters(){
  const q=rosterQuery.trim().toLowerCase();let visibleCount=0;
  view.querySelectorAll('.playerCard').forEach(card=>{
    const roleOk=rosterFilter==='all'||card.dataset.role===rosterFilter;
    const status=card.dataset.status||'',tags=card.dataset.tags||'';
    const statusOk=rosterStatusFilter==='all'||(rosterStatusFilter==='Giovane'?tags.includes('giovane'):rosterStatusFilter==='Top'?tags.includes('top'):status===rosterStatusFilter);
    const queryOk=!q||(card.dataset.search||'').includes(q);
    card.hidden=!(roleOk&&statusOk&&queryOk);if(!card.hidden)visibleCount++;
  });
  view.querySelectorAll('.roleBlock').forEach(block=>{block.hidden=!Array.from(block.querySelectorAll('.playerCard')).some(c=>!c.hidden)});
  const empty=view.querySelector('#rosterNoResults');if(empty)empty.classList.toggle('hidden',visibleCount>0);
}
function toggleAuctionPlayer(team,name){
  const player=(data[team]?.roster||[]).find(p=>p.name===name)||{};
  const i=auctionList.findIndex(x=>x.team===team&&x.name===name);
  const added=i<0;
  if(!added)auctionList.splice(i,1);else auctionList.push({team,name,role:player.role||'',status:player.status||'',tags:player.tags||[]});
  saveAuctionList();renderAuction();refreshAll();
  document.querySelectorAll(`.starBtn[data-team="${CSS.escape(team)}"][data-player="${CSS.escape(name)}"]`).forEach(btn=>{
    btn.classList.toggle('selected',added);btn.textContent=added?'★':'☆';
    btn.setAttribute('aria-label',`${added?'Rimuovi dalla':'Aggiungi alla'} lista asta`);
  });
  document.querySelectorAll('.auctionCount').forEach(el=>el.textContent=`⭐ Lista asta: ${auctionList.length}`);
  showToast(added?`${name} aggiunto alla lista asta.`:`${name} rimosso dalla lista asta.`);
}

function setTeamSection(name){
  view.querySelectorAll('.teamSectionTab').forEach(btn=>btn.classList.toggle('active',btn.dataset.section===name));
  view.querySelectorAll('.teamSection').forEach(section=>section.classList.toggle('active',section.dataset.section===name));
  const sheet=document.querySelector('.sheet');
  if(sheet)sheet.scrollTo({top:0,behavior:'smooth'});
}
function setRosterFilter(role){rosterFilter=role;view.querySelectorAll('.rosterFilter').forEach(btn=>btn.classList.toggle('active',btn.dataset.role===role));applyRosterFilters();}
function setRosterStatusFilter(status){rosterStatusFilter=status;view.querySelectorAll('.rosterStatusFilter').forEach(btn=>btn.classList.toggle('active',btn.dataset.status===status));applyRosterFilters();}
function openTeam(t,section='formation'){
  const d=data[t];
  const teamIndex=teams.indexOf(t);
  const prev=teams[(teamIndex-1+teams.length)%teams.length];
  const next=teams[(teamIndex+1)%teams.length];
  view.innerHTML=`
    <div class="teamTitle compactTeamTitle">
      <small>GUIDA ASTA CONTE • RC29 COMPACT UI</small>
      <div class="teamTitleRow"><button type="button" class="teamStep" data-team="${esc(prev)}" aria-label="Squadra precedente">‹</button><div class="clubIdentity"><span class="clubMark">${esc(t.slice(0,3).toUpperCase())}</span><div class="clubCopy"><h2>${t}</h2><p><span>${esc(d.coach||'Allenatore da definire')}</span><b>${esc(d.module||'Modulo da definire')}</b></p></div></div><button type="button" class="teamStep" data-team="${esc(next)}" aria-label="Squadra successiva">›</button></div>
      ${d.source?`<div class="sourceNote">● ${esc(d.source)} · ${esc(d.updated)}</div>`:''}
      <button type="button" class="smartUpdateBtn" data-smart-update="${esc(t)}">↻ Aggiorna squadra</button>
    </div>
    ${teamDashboardHtml(d)}
    <div class="teamSectionTabs" role="tablist" aria-label="Sezioni scheda squadra">
      <button type="button" class="teamSectionTab" data-section="formation">⚽ Formazione</button>
      <button type="button" class="teamSectionTab" data-section="roster">👥 Rosa</button>
      <button type="button" class="teamSectionTab" data-section="advice">⭐ Consigli</button>
      <button type="button" class="teamSectionTab" data-section="market">💰 Mercato</button>
      <button type="button" class="teamSectionTab" data-section="notes">📝 Note</button>
    </div>
    <div class="fields rc5Fields">
      <div class="teamSection" data-section="formation">
        <section class="formSection lineupSection"><div class="sectionTitleLine"><h3>Probabile formazione titolare</h3><span class="moduleBadge">${esc(d.module||'')}</span></div>${lineupHtml(d)}<div class="lineupNote">Solo gli 11 probabili titolari. Le alternative restano nella rosa completa.</div></section>
        <section class="formSection"><h3>Assetto squadra</h3>
          <div class="row2"><label><span>Allenatore</span><input id="coach" value="${esc(d.coach)}"></label><label><span>Modulo</span><input id="module" value="${esc(d.module)}"></label></div>
          <label><span>Formazione in formato testo / note gerarchie</span><textarea id="formation" rows="4">${esc(d.formation)}</textarea></label>
        </section>
        <section class="formSection"><h3>Piazzati</h3>
          <div class="row3"><label><span>Rigoristi</span><textarea id="penalties">${esc(d.penalties)}</textarea></label><label><span>Punizioni</span><textarea id="freeKicks">${esc(d.freeKicks)}</textarea></label><label><span>Calci d'angolo</span><textarea id="corners">${esc(d.corners)}</textarea></label></div>
        </section>
      </div>
      <div class="teamSection" data-section="roster">
        <section class="formSection rosterSection"><div class="sectionTitleLine"><h3>Rosa completa</h3><span class="auctionCount">⭐ Lista asta: ${auctionList.length}</span></div>${rosterHtml(d,t)}</section>
      </div>
      <div class="teamSection" data-section="advice">
        <section class="formSection"><h3>Valutazioni Conte</h3>
          <div class="row2 adviceGrid"><label class="tagField recommended"><span>⭐ Consigliati</span>${playerListPreview(d.recommended)}<textarea id="recommended" placeholder="Un nome completo per riga">${esc(d.recommended)}</textarea></label><label class="tagField bet"><span>💎 Scommesse</span>${playerListPreview(d.bets)}<textarea id="bets" placeholder="Un nome completo per riga">${esc(d.bets)}</textarea></label></div>
          <div class="row2 adviceGrid"><label class="tagField young"><span>👶 Giovani</span>${playerListPreview(d.young)}<textarea id="young" placeholder="Un nome completo per riga">${esc(d.young)}</textarea></label><label class="tagField reliable"><span>🛡️ Affidabili</span>${playerListPreview(d.reliable)}<textarea id="reliable" placeholder="Un nome completo per riga">${esc(d.reliable)}</textarea></label></div>
          <div class="row2 adviceGrid"><label class="tagField watch"><span>👀 Osservati / obiettivi</span>${playerListPreview(d.watch)}<textarea id="watch" placeholder="Un nome completo per riga">${esc(d.watch)}</textarea></label><label class="tagField avoid"><span>🚫 Da evitare</span>${playerListPreview(d.avoid)}<textarea id="avoid" placeholder="Un nome completo per riga">${esc(d.avoid)}</textarea></label></div>
        </section>
      </div>
      <div class="teamSection" data-section="market">
        <section class="formSection"><h3>Mercato</h3>
          <div class="row2"><label><span>Acquisti ufficiali</span><textarea id="arrivals" placeholder="Un nome per riga">${esc(d.arrivals)}</textarea></label><label><span>Cessioni ufficiali</span><textarea id="departures" placeholder="Un nome per riga">${esc(d.departures)}</textarea></label></div>
          <label><span>Trattative / possibili movimenti</span><textarea id="talks" placeholder="Un nome o una nota per riga">${esc(d.talks)}</textarea></label>
        </section>
      </div>
      <div class="teamSection" data-section="notes">
        <section class="formSection"><h3>Note personali</h3><label><span>Note Conte</span><textarea id="notes" rows="7">${esc(d.notes)}</textarea></label></section>
        ${editorialDefaults[t]?`<button class="restore" type="button">Ripristina dati editoriali ${esc(t)}</button>`:''}
      </div>
      <button class="save compactSave" aria-label="Salva scheda ${t}" title="Salva scheda">✓<span>Salva</span></button>
    </div>`;
  modal.classList.remove('hidden');
  document.body.classList.add('locked');
  view.querySelector('.save').onclick=()=>saveTeam(t);
  view.querySelectorAll('.starBtn').forEach(btn=>btn.onclick=()=>toggleAuctionPlayer(btn.dataset.team,btn.dataset.player));
  const smartUpdate=view.querySelector('[data-smart-update]');if(smartUpdate)smartUpdate.onclick=()=>smartUpdateTeam(smartUpdate.dataset.smartUpdate);
  view.querySelectorAll('.playerOpen').forEach(btn=>btn.onclick=()=>openPlayer(btn.dataset.team,btn.dataset.player));
  view.querySelectorAll('.rosterFilter').forEach(btn=>btn.onclick=()=>setRosterFilter(btn.dataset.role));
  view.querySelectorAll('.rosterStatusFilter').forEach(btn=>btn.onclick=()=>setRosterStatusFilter(btn.dataset.status));
  const rosterSearch=view.querySelector('#rosterSearch');if(rosterSearch)rosterSearch.oninput=e=>{rosterQuery=e.target.value;applyRosterFilters();};
  const clearRosterSearch=view.querySelector('#clearRosterSearch');if(clearRosterSearch)clearRosterSearch.onclick=()=>{rosterQuery='';if(rosterSearch)rosterSearch.value='';applyRosterFilters();};
  view.querySelectorAll('.teamSectionTab').forEach(btn=>btn.onclick=()=>setTeamSection(btn.dataset.section));
  view.querySelectorAll('.teamStep').forEach(btn=>btn.onclick=()=>openTeam(btn.dataset.team,section));
  const restore=view.querySelector('.restore');
  if(restore)restore.onclick=()=>restoreAtalanta();
  setRosterFilter(rosterFilter);
  setRosterStatusFilter(rosterStatusFilter);
  applyRosterFilters();
  setTeamSection(section);
  document.querySelector('.sheet').scrollTop=0;
}


function intelligenceFor(profile,player={}){
  const score=Number(profile.score||0);
  const starterPct=Number(profile.starterPct||0);
  const risk=String(profile.risk||'Da valutare');
  const goals=Number(profile.goals||0),assists=Number(profile.assists||0);
  const bonusExpected=Math.max(0,Math.round(goals*.75+assists*.65+(player.role==='Portiere'?Math.max(0,8-goals):0)));
  let priority='C', verdict='MONITORA', verdictClass='watch', action='Aspetta il prezzo giusto';
  if(score>=88&&starterPct>=85){priority='A';verdict='COMPRA';verdictClass='buy';action='Obiettivo prioritario';}
  else if(score>=76&&starterPct>=70){priority='B';verdict='SEGUI';verdictClass='follow';action='Rilancia entro il tetto';}
  if(risk==='Alto'||score<58){priority='D';verdict='EVITA';verdictClass='avoid';action='Solo a prezzo minimo';}
  const reliability=Math.max(15,Math.min(98,Math.round(starterPct-(risk==='Alto'?22:risk==='Medio'?10:0))));
  return {priority,verdict,verdictClass,action,bonusExpected,reliability};
}

function starsHtml(value){
  const full=Math.floor(value||0), half=(value||0)-full>=.5;
  return '★'.repeat(full)+(half?'◐':'')+'☆'.repeat(Math.max(0,5-full-(half?1:0)));
}
function openPlayer(team,name){
  const p=(data[team]?.roster||[]).find(x=>x.name===name)||{};
  const s=profileFor(name);
  const intel=intelligenceFor(s,p);
  const selected=auctionList.some(x=>x.team===team&&x.name===name);
  const favorite=conteFavorites.some(x=>x.team===team&&x.name===name);
  const initials=name.split(' ').map(x=>x[0]).slice(0,2).join('').toUpperCase();
  const candidates=allRosterPlayers().filter(x=>x.name!==name&&x.role===p.role).slice(0,24);
  const alternatives=(s.alternatives||[]).map(alt=>`<button type="button" class="altPlayer" data-team="${esc(team)}" data-player="${esc(alt)}">${esc(alt)}</button>`).join('')||'<span class="noAlt">Da definire</span>';
  document.querySelector('#playerView').innerHTML=`
    <div class="playerHubLabel">RC29 • TEAM INTELLIGENCE</div>
    <div class="playerHero"><div class="playerAvatar">${esc(initials)}</div><div><span class="playerTeam">${esc(team)} • ${esc(p.role||'Ruolo da definire')}</span><h2>${esc(name)}</h2><div class="playerStars">${starsHtml(s.stars)} <small>${s.stars}/5</small></div></div><div class="conteScore"><b>${esc(s.score)}</b><small>CONTE</small></div></div>
    <div class="playerIdentity"><span>${esc(s.tier)}</span><span>${esc(s.age)} anni</span><span>Piede ${esc(s.foot)}</span><span>${esc(p.status||'Da valutare')}</span></div>
    <section class="decisionCard ${intel.verdictClass}"><div class="decisionMain"><small>DECISIONE CONTE</small><strong>${intel.verdict}</strong><span>${intel.action}</span></div><div class="prioritySeal"><small>PRIORITÀ</small><b>${intel.priority}</b></div></section>
    <section class="intelligenceStrip"><div><small>INDICE CONTE</small><b>${esc(s.score)}/100</b></div><div><small>TITOLARITÀ</small><b>${esc(s.starterPct)}%</b></div><div><small>AFFIDABILITÀ</small><b>${intel.reliability}%</b></div><div><small>BONUS ATTESI</small><b>${intel.bonusExpected}</b></div></section>
    <section class="hubSection situationHub"><div class="hubTitle"><small>SITUAZIONE ATTUALE</small><strong>Disponibilità e gerarchie</strong></div><div class="situationGrid"><div><span>Titolarità</span><b>${esc(s.starterPct)}%</b><i><u style="width:${Math.max(0,Math.min(100,Number(s.starterPct)||0))}%"></u></i></div><div><span>Condizione</span><b>${esc(s.condition)}</b></div><div><span>Infortuni</span><b>${esc(s.injury)}</b></div><div><span>Trend</span><b>${esc(s.trend)}</b></div></div></section>
    <div class="playerPrice"><span>Budget consigliato</span><b>${esc(s.price)}</b><small>crediti su base 500</small></div>
    <div class="playerKpis seven"><div><span>Pres.</span><b>${s.apps}</b></div><div><span>Minuti</span><b>${s.minutes}</b></div><div><span>Gol</span><b>${s.goals}</b></div><div><span>Assist</span><b>${s.assists}</b></div><div><span>MV</span><b>${s.mv}</b></div><div><span>FM</span><b>${s.fm}</b></div><div><span>Rigori</span><b>${s.pens}</b></div></div>
    <div class="discipline"><span>🟨 ${esc(s.yellow)}</span><span>🟥 ${esc(s.red)}</span></div>
    <div class="playerSignals"><span>${esc(p.status||'Da valutare')}</span><span>${esc(s.trend)}</span><span>Rischio ${esc(s.risk)}</span>${(p.tags||[]).slice(0,3).map(tag=>`<span>${esc(tag)}</span>`).join('')}</div>
    <section class="conteAdvice intelligenceReport"><div class="hubTitle"><small>REPORT SCOUT CONTE</small><strong>Lettura rapida</strong></div><p>${esc(s.advice)}</p><div class="reportSignals"><span class="signal trend">📈 ${esc(s.trend)}</span><span class="signal risk">⚠️ Rischio ${esc(s.risk)}</span><span class="signal ceiling">💰 Tetto ${esc(s.stop)} cr.</span></div></section>
    <section class="hubSection auctionPlan"><div class="hubTitle"><small>STRATEGIA D'ASTA</small><strong>Piano operativo</strong></div><div class="planGrid"><div><span>Fascia ideale</span><b>${esc(s.price)} cr.</b></div><div><span>Tetto massimo</span><b>${esc(s.stop)} cr.</b></div><div class="planWide"><span>Quando rilanciare</span><b>${esc(s.timing)}</b></div><div class="planWide"><span>Alternative</span><div class="altPlayers">${alternatives}</div></div></div></section>
    <section class="compareBox"><div><small>CONFRONTO RAPIDO</small><strong>Confronta con un altro ${esc((p.role||'giocatore').toLowerCase())}</strong></div><select id="compareSelect"><option value="">Scegli giocatore</option>${candidates.map(x=>`<option value="${esc(x.team+'|||'+x.name)}">${esc(x.name)} • ${esc(x.team)}</option>`).join('')}</select><div id="compareResult"></div></section>
    <div class="playerHubActions"><button id="playerFavoriteBtn" class="playerFavoriteBtn ${favorite?'selected':''}">${favorite?'♥ Preferito del Conte':'♡ Preferito del Conte'}</button><button id="playerAuctionBtn" class="playerAuctionBtn ${selected?'selected':''}">${selected?'★ Rimuovi dalla lista asta':'☆ Aggiungi alla lista asta'}</button></div>`;
  const pm=document.querySelector('#playerModal');pm.classList.remove('hidden');pm.setAttribute('aria-hidden','false');
  document.querySelector('#playerAuctionBtn').onclick=()=>{toggleAuctionPlayer(team,name);closePlayer();};
  document.querySelector('#playerFavoriteBtn').onclick=()=>{const i=conteFavorites.findIndex(x=>x.team===team&&x.name===name);if(i>=0)conteFavorites.splice(i,1);else conteFavorites.push({team,name,role:p.role||'',score:s.score});saveConteFavorites();openPlayer(team,name);};
  document.querySelector('#compareSelect').onchange=e=>renderComparison(name,e.target.value);
  document.querySelectorAll('.altPlayer').forEach(btn=>btn.onclick=()=>openPlayer(btn.dataset.team,btn.dataset.player));
}
function renderComparison(baseName,value){
  const box=document.querySelector('#compareResult');if(!box)return;
  if(!value){box.innerHTML='';return;}
  const [team,name]=value.split('|||');const a=profileFor(baseName),b=profileFor(name);
  const row=(label,x,y)=>`<div class="compareRow"><span>${label}</span><b>${esc(x)}</b><b>${esc(y)}</b></div>`;
  box.innerHTML=`<div class="compareNames"><span>${esc(baseName.split(' ').slice(-1)[0])}</span><span>${esc(name.split(' ').slice(-1)[0])}</span></div>${row('Conte',a.score,b.score)}${row('Prezzo',a.price,b.price)}${row('FM',a.fm,b.fm)}${row('MV',a.mv,b.mv)}${row('Gol',a.goals,b.goals)}${row('Assist',a.assists,b.assists)}${row('Titolarità',a.starter,b.starter)}<button type="button" class="openCompared" data-team="${esc(team)}" data-player="${esc(name)}">Apri scheda ${esc(name)}</button>`;
  box.querySelector('.openCompared').onclick=e=>openPlayer(e.currentTarget.dataset.team,e.currentTarget.dataset.player);
}
function closePlayer(){const pm=document.querySelector('#playerModal');pm.classList.add('hidden');pm.setAttribute('aria-hidden','true');}

function restoreAtalanta(){
  const personal={};
  ['recommended','bets','young','reliable','avoid','watch','notes'].forEach(k=>personal[k]=data.Atalanta[k]||'');
  data.Atalanta={...blank(),...editorialDefaults.Atalanta,...personal};
  persist();
  openTeam('Atalanta');
  refreshAll();
  alert('Scheda Atalanta ripristinata con i dati editoriali del pacchetto test.');
}
function saveTeam(t){
  ['coach','module','formation','penalties','freeKicks','corners','arrivals','departures','talks','recommended','bets','young','reliable','avoid','watch','notes'].forEach(k=>data[t][k]=document.querySelector('#'+k).value.trim());
  data[t].updated='Aggiornata oggi';
  persist(); closeModal(); refreshAll();
}
function persist(){localStorage.setItem('gac-data',JSON.stringify(data))}
function closeModal(){modal.classList.add('hidden');document.body.classList.remove('locked')}

const categoryMeta={
  recommended:['⭐','Consigliato'],bet:['💎','Scommessa'],young:['👶','Giovane'],reliable:['🛡️','Affidabile'],watch:['👀','Osservato'],avoid:['🚫','Da evitare']
};
function strategyItems(){
  const items=[];
  const map={recommended:'recommended',bets:'bet',young:'young',reliable:'reliable',watch:'watch',avoid:'avoid'};
  teams.forEach(team=>Object.entries(map).forEach(([field,type])=>lines(data[team][field]).forEach(player=>items.push({player,team,type}))));
  return items;
}
function renderStrategy(){
  const box=document.querySelector('#strategyList');
  const filter=document.querySelector('#strategyFilter').value;
  const all=strategyItems();
  const objectiveCount=all.filter(x=>['recommended','bet','young','watch'].includes(x.type)).length;
  document.querySelector('#watchCount').textContent=objectiveCount;
  const items=filter==='all'?all:all.filter(x=>x.type===filter);
  box.innerHTML=items.length?items.map(x=>{const [icon,label]=categoryMeta[x.type];return `<button class="strategyItem" onclick="openTeam('${x.team.replaceAll("'","\\'")}')"><span class="strategyIcon">${icon}</span><span><b>${esc(x.player)}</b><small>${x.team}</small></span><em class="badge ${x.type}">${label}</em></button>`}).join(''):`<div class="empty"><strong>Nessun giocatore in questa categoria</strong><p>Apri una squadra e inserisci i nomi nelle valutazioni personali.</p></div>`;
}

function renderAuction(){
  const box=document.querySelector('#auctionList');
  renderAuctionPlan();
  const filter=document.querySelector('#auctionRoleFilter')?.value||'all';
  document.querySelector('#auctionTabCount').textContent=auctionList.length;
  const enriched=auctionList.map(x=>{
    const p=(data[x.team]?.roster||[]).find(p=>p.name===x.name)||x;
    return {...x,role:p.role||'',status:p.status||'',tags:p.tags||[]};
  });
  const items=filter==='all'?enriched:enriched.filter(x=>x.role===filter);
  const roleIcon={Portiere:'🧤',Difensore:'🛡️',Centrocampista:'⚙️',Attaccante:'⚽'};
  box.innerHTML=items.length?items.map(x=>`<div class="auctionItem"><button class="auctionOpen" onclick="openTeam('${x.team.replaceAll("'","\'")}')"><span class="strategyIcon">${roleIcon[x.role]||'⭐'}</span><span><b>${esc(x.name)}</b><small>${esc(x.team)} • ${esc(x.role||'Ruolo da definire')} • ${esc(x.status||'')}</small></span></button><button class="removeAuction" data-team="${esc(x.team)}" data-player="${esc(x.name)}" aria-label="Rimuovi">×</button></div>`).join(''):`<div class="empty"><strong>La lista asta è vuota</strong><p>Apri la rosa di una squadra e tocca ☆ accanto ai giocatori che vuoi seguire.</p></div>`;
  box.querySelectorAll('.removeAuction').forEach(btn=>btn.onclick=()=>toggleAuctionPlayer(btn.dataset.team,btn.dataset.player));
}

function marketItems(){
  const items=[];
  teams.forEach(team=>{
    lines(data[team].arrivals).forEach(name=>items.push({team,name,type:'arrival',status:'official'}));
    lines(data[team].departures).forEach(name=>items.push({team,name,type:'departure',status:'official'}));
    lines(data[team].talks).forEach(name=>items.push({team,name,type:'talk',status:'talk'}));
  });
  return items;
}
function renderMarket(){
  const box=document.querySelector('#marketList');
  const filter=document.querySelector('#marketFilter').value;
  const all=marketItems();
  document.querySelector('#marketCount').textContent=all.length;
  const items=filter==='all'?all:all.filter(x=>x.status===filter);
  const meta={arrival:['↘','Acquisto'],departure:['↗','Cessione'],talk:['…','Trattativa']};
  box.innerHTML=items.length?items.map(x=>{const [icon,label]=meta[x.type];return `<button class="marketItem" onclick="openTeam('${x.team.replaceAll("'","\\'")}')"><span class="marketIcon ${x.type}">${icon}</span><span><b>${esc(x.name)}</b><small>${x.team} • ${label}</small></span><em class="status ${x.status}">${x.status==='official'?'Ufficiale':'Trattativa'}</em></button>`}).join(''):`<div class="empty"><strong>Nessun movimento inserito</strong><p>Apri una squadra e compila acquisti, cessioni o trattative.</p></div>`;
}


function saveDiary(){localStorage.setItem('gac-update-diary',JSON.stringify(updateDiary));}
function addDiaryEntry(text,type='note',team='Generale'){
  updateDiary.unshift({id:Date.now(),date:new Date().toLocaleString('it-IT'),text,team,type});
  updateDiary=updateDiary.slice(0,80);saveDiary();renderScoutLive();
}
function scoutLiveItems(){
  const items=[];
  marketItems().forEach((x,i)=>items.push({...x,id:`m-${i}`,category:'market',title:x.type==='arrival'?'Nuovo acquisto':x.type==='departure'?'Cessione ufficiale':'Trattativa da seguire',detail:x.name,level:x.status==='official'?'high':'medium'}));
  teams.forEach(team=>{
    const d=data[team], roster=d.roster||[];
    roster.filter(p=>['Ballottaggio','Da valutare','Gerarchia aperta'].includes(p.status)).slice(0,5).forEach((p,i)=>items.push({id:`l-${team}-${i}`,category:'lineup',team,title:'Gerarchia da verificare',detail:`${p.name} • ${p.status}`,level:'medium'}));
  });
  auctionList.forEach((x,i)=>{
    const p=(data[x.team]?.roster||[]).find(p=>p.name===x.name)||x;
    if(['Da valutare','Ballottaggio','Gerarchia aperta'].includes(p.status))items.push({id:`w-${i}`,category:'watch',team:x.team,title:'Obiettivo con situazione aperta',detail:`${x.name} • ${p.status}`,level:'high'});
  });
  return items;
}
function renderScoutLive(){
  const box=document.querySelector('#scoutLiveList');if(!box)return;
  const filter=document.querySelector('#scoutLiveFilter')?.value||'all';
  const all=scoutLiveItems(), items=filter==='all'?all:all.filter(x=>x.category===filter);
  document.querySelector('#alertTabCount').textContent=all.length;
  document.querySelector('#liveAlertCount').textContent=all.filter(x=>x.level==='high').length;
  document.querySelector('#liveChangeCount').textContent=marketItems().length;
  document.querySelector('#liveWatchCount').textContent=auctionList.length;
  const icons={market:'💰',lineup:'⚽',watch:'⭐'};
  box.innerHTML=items.length?items.map(x=>`<button class="liveItem ${x.level}" data-team="${esc(x.team)}"><span class="liveIcon">${icons[x.category]||'🔔'}</span><span><b>${esc(x.title)}</b><small>${esc(x.team)} • ${esc(x.detail)}</small></span><em>${x.level==='high'?'Priorità':'Da seguire'}</em></button>`).join(''):`<div class="empty"><strong>Nessun alert per questo filtro</strong><p>Gli avvisi compariranno quando ci saranno movimenti o gerarchie da controllare.</p></div>`;
  box.querySelectorAll('.liveItem').forEach(btn=>btn.onclick=()=>openTeam(btn.dataset.team,btn.querySelector('small')?.textContent.includes('Gerarchia')?'formation':'market'));
  const diary=document.querySelector('#updateDiary');
  diary.innerHTML=updateDiary.length?updateDiary.map(x=>`<div class="diaryItem"><span>${x.type==='scan'?'↻':'✎'}</span><div><b>${esc(x.text)}</b><small>${esc(x.team)} • ${esc(x.date)}</small></div><button data-id="${x.id}" aria-label="Elimina">×</button></div>`).join(''):`<div class="emptyMini">Nessuna voce nel diario.</div>`;
  diary.querySelectorAll('button[data-id]').forEach(btn=>btn.onclick=()=>{updateDiary=updateDiary.filter(x=>String(x.id)!==btn.dataset.id);saveDiary();renderScoutLive();});
}
function scanScoutChanges(){
  const snapshot={market:marketItems().length,watch:auctionList.length,alerts:scoutLiveItems().length,at:new Date().toISOString()};
  let message='Prima scansione completata: situazione salvata come riferimento.';
  if(lastScan){const parts=[];if(snapshot.market!==lastScan.market)parts.push(`${snapshot.market-lastScan.market>0?'+':''}${snapshot.market-lastScan.market} movimenti mercato`);if(snapshot.watch!==lastScan.watch)parts.push(`${snapshot.watch-lastScan.watch>0?'+':''}${snapshot.watch-lastScan.watch} obiettivi`);if(snapshot.alerts!==lastScan.alerts)parts.push(`${snapshot.alerts-lastScan.alerts>0?'+':''}${snapshot.alerts-lastScan.alerts} alert`);message=parts.length?`Variazioni rilevate: ${parts.join(', ')}.`:'Nessuna variazione rispetto all’ultima scansione.';}
  lastScan=snapshot;localStorage.setItem('gac-last-scan',JSON.stringify(lastScan));addDiaryEntry(message,'scan','Scout Live');alert(message);
}

function refreshAll(){renderTeams(document.querySelector('#search').value);renderStrategy();renderMarket();renderAuction();renderAuctionPlan();renderScoutLive()}

document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.tab,.panel').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');document.querySelector('#'+b.dataset.tab).classList.add('active');
  if(b.dataset.tab==='strategy')renderStrategy();if(b.dataset.tab==='market')renderMarket();if(b.dataset.tab==='auction')renderAuction();if(b.dataset.tab==='scoutlive')renderScoutLive();
});
document.querySelector('.close').onclick=closeModal;
document.querySelector('#playerClose').onclick=closePlayer;
document.querySelector('#playerModal').onclick=e=>{if(e.target.id==='playerModal')closePlayer()};
modal.onclick=e=>{if(e.target===modal)closeModal()};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closePlayer();closeModal()}});
document.querySelector('#search').oninput=e=>renderTeams(e.target.value);
document.querySelectorAll('.teamFilter').forEach(btn=>btn.onclick=()=>{teamFilter=btn.dataset.teamFilter;document.querySelectorAll('.teamFilter').forEach(x=>x.classList.toggle('active',x===btn));renderTeams(document.querySelector('#search').value);});
const playerSearch=document.querySelector('#playerSearch');
if(playerSearch){playerSearch.oninput=e=>renderPlayerSearch(e.target.value);playerSearch.onfocus=e=>renderPlayerSearch(e.target.value);}
document.addEventListener('click',e=>{const results=document.querySelector('#playerSearchResults');if(results&&!e.target.closest('.globalScout'))results.classList.add('hidden');});
document.querySelector('#strategyFilter').onchange=renderStrategy;
document.querySelector('#marketFilter').onchange=renderMarket;
const scoutLiveFilter=document.querySelector('#scoutLiveFilter');if(scoutLiveFilter)scoutLiveFilter.onchange=renderScoutLive;
const scanChangesBtn=document.querySelector('#scanChangesBtn');if(scanChangesBtn)scanChangesBtn.onclick=scanScoutChanges;
const addDiaryBtn=document.querySelector('#addDiaryBtn');if(addDiaryBtn)addDiaryBtn.onclick=()=>{const text=prompt('Scrivi la nota da aggiungere al diario aggiornamenti:');if(text?.trim())addDiaryEntry(text.trim(),'note','Nota Conte');};
const clearDiaryBtn=document.querySelector('#clearDiaryBtn');if(clearDiaryBtn)clearDiaryBtn.onclick=()=>{if(confirm('Svuotare tutto il diario aggiornamenti?')){updateDiary=[];saveDiary();renderScoutLive();}};
document.querySelector('#auctionRoleFilter').onchange=renderAuction;
const auctionBudget=document.querySelector('#auctionBudget'),auctionSpent=document.querySelector('#auctionSpent');
if(auctionBudget)auctionBudget.oninput=e=>{auctionPlan.budget=Math.max(0,Number(e.target.value||0));saveAuctionPlan();renderAuctionPlan();};
if(auctionSpent)auctionSpent.oninput=e=>{auctionPlan.spent=Math.max(0,Number(e.target.value||0));saveAuctionPlan();renderAuctionPlan();};
const resetAuctionPlan=document.querySelector('#resetAuctionPlan');if(resetAuctionPlan)resetAuctionPlan.onclick=()=>{if(confirm('Ripristinare budget 500 e slot standard 3-8-8-6?')){auctionPlan={budget:500,spent:0,slots:{Portiere:3,Difensore:8,Centrocampista:8,Attaccante:6}};saveAuctionPlan();renderAuctionPlan();}};

const fi=document.querySelector('#fileInput');
document.querySelector('#refreshBtn').onclick=updateAllBuiltInTeams;

document.querySelector('#exportBtn').onclick=()=>{
  const payload={app:'Guida Asta Conte',version:'RC29-Compact-UI',exportedAt:new Date().toISOString(),teams:data};
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='Guida-Asta-Conte-backup-RC29.json';a.click();URL.revokeObjectURL(a.href);
};
fi.onchange=async()=>{
  if(!fi.files[0])return;
  try{
    const incoming=JSON.parse(await fi.files[0].text());let changed=0;
    Object.entries(incoming.teams||incoming).forEach(([t,v])=>{
      if(data[t]&&v&&typeof v==='object'){
        const personal={recommended:data[t].recommended,bets:data[t].bets,young:data[t].young,reliable:data[t].reliable,avoid:data[t].avoid,watch:data[t].watch,notes:data[t].notes};
        data[t]={...blank(),...data[t],...v,...personal,updated:'Rosa importata oggi'};changed++;
      }
    });
    persist();refreshAll();alert(`Aggiornate ${changed} squadre. Le tue valutazioni personali sono state conservate.`);
  }catch(e){alert('File non valido. Usa il formato JSON previsto.')}fi.value='';
};

refreshAll();
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js');
