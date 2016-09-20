(function() {
var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);

app.controller('StoreController', function(){
    this.product = estudios;
  });

var estudios = [
	{  
      perfil:"Ac. Anti-Chlamydia trachomatis IgG e IgM",
      collapse: "colapsar1",
      examenes:[  
        "Ac. Anti-Chlamydia trachomatis IgG",
        "Ac. Anti-Chlamydia trachomatis IgM"
      ]
    },
    {  
      perfil:"Ac. Anti-Dengue IgG e IgM",
      collapse: "colapsar2",
      examenes:[  
        "Ac. Anti-Dengue IgG",
        "Ac. Anti-Dengue IgM"
      ]
    },
	{
	perfil:"Ac. Anti-Fosfolípidos IgG e IgM",
	collapse: "colapsar3",
	examenes:[
		"Ac. Anti-Fosfolípidos IgG ",
		"Ac. Anti-Fosfolípidos IgM"
	  ]
	},
    {
	perfil:"Ac. Anti-Sarampión IgG e IgM",
	collapse: "colapsar4",
	examenes:[
		"Ac. Anti-Sarampión IgG",
		"Ac. Anti-Sarampión IgM"
	  ]
	},
	{
	perfil:"Ac. Anti-Virus Herpes (HSV) Tipo I IgG, IgM",
	collapse: "colapsar5",
	examenes:[
		"Ac. Anti-Virus Herpes (HSV) Tipo I IgG",
		"Ac. Anti-Virus Herpes (HSV) Tipo I IgM"
	  ]
	},
	{
	perfil:"Ac. Anti-Virus Herpes (HSV) Tipo II IgG, IgM",
	collapse: "colapsar6",
	examenes:[
		"Ac. Anti-Virus Herpes (HSV) Tipo II IgG",
		"Ac. Anti-Virus Herpes (HSV) Tipo II IgM"
	  ]
	},
	{
	perfil:"CheckUp Básico",
	collapse: "colapsar7",
	examenes:[
		"Biometría Hemática en Sangre Total",
		"Química Sanguínea de 27 Elementos",
		"Examen General de Orina (EGO)"
	  ]
	},
	{
	perfil:"Check-Up Femenino Completo",
	collapse: "colapsar8",
	examenes:[
		"Biometría Hemática en Sangre Total",
		"Química Sanguínea de 27 Elementos",
		"Examen General de Orina (EGO)",
		"Perfil Ginecologico",
		"Papanicolaou (Citología) Cérvico-Vaginal"
	  ]
	},
	{
	perfil:"Check-up Femenino II",
	collapse: "colapsar9",
	examenes:[
		"Biometría Hemática en Sangre Total",
		"Química Sanguínea de 27 Elementos",
		"Examen General de Orina (EGO)",
		"Papanicolaou (Citología) Cérvico-Vaginal"
	  ]
	},
	{
	perfil:"Check-Up Masculino",
	collapse: "colapsar10",
	examenes:[
		"Biometría Hemática en Sangre Total",
		"Química Sanguínea de 27 Elementos",
		"Examen General de Orina (EGO)",
		"PSA-Total (Antígeno Específico de Próstata Total)"
	  ]
	},
	{
	perfil:"CK Total y CK-MB",
	collapse: "colapsar11",
	examenes:[
		"CK-MB (Creatin Fosfoquinasa Fracción MB)",
		"CK Total (Creatin Fosfoquinasa)"
	  ]
	},
	{
	perfil:"Cuádruple Marcador Materno Prenatal con Interpretación",
	collapse: "colapsar12",
	examenes:[
		"Alfa Fetoproteína (AFP)",
		"HGC Total",
		"Estriol (E3) Libre",
		"Inhibina A",
		"Interpretación"
	  ]
	},
	{
	perfil:"Electrolitos (3 elementos)",
	collapse: "colapsar13",
	examenes:[
		"Sodio (Na)",
		"Potasio (K)",
		"Cloro (Cl)"
	  ]
	},
	{
	perfil:"Electrolitos (4 elementos)",
	collapse: "colapsar14",
	examenes:[
		"Sodio (Na)",
		"Potasio (K)",
		"Cloro (Cl)",
		"Calcio (Ca)",
		"Fósforo (P)",
		"Magnesio (Mg)"
	  ]
	},
	{
	perfil:"Electrolitos (6 elementos)",
	collapse: "colapsar15",
	examenes:[
		"Sodio (Na)",
		"Potasio (K)",
		"Cloro (Cl)",
		"Bióxido de Carbono (CO2)"
	  ]
	},
	{
	perfil:"Electrolitos en Orina de 24 horas (3 Elementos)",
	collapse: "colapsar16",
	examenes:[
		"Sodio (Na)",
		"Potasio (K)",
		"Cloro (Cl)"
	  ]
	},
	{
	perfil:"Fosfatasa Ácida Total y Fracción Prostática",
	collapse: "colapsar17",
	examenes:[
		"Fosfatasa Ácida no Prostatica",
		"Fosfatasa Ácida Total",
		"Fosfatasa Ácida Fracción Prostática"
	  ]
	},
	{
	perfil:"Insulina Basal y Postprandial",
	collapse: "colapsar18",
	examenes:[
		"Insulina Postprandial",
		"Insulina Basal"
	  ]
	},
	{
	perfil:"Perfil Autoinmune I",
	collapse: "colapsar19",
	examenes:[
		"Ac. Anti-DNA de Doble Cadena",
		"Ac. Anti-Nucleares",
		"Factor Reumatoide (FR)",
		"Ac. Anti-Ribonucleoproteínas (RNP)",
		"C3, Componente de Complemento",
		"C4, Componente de Complemento"
	  ]
	},
	{
	perfil:"Perfil Autoinmune II",
	collapse: "colapsar20",
	examenes:[
		"Ac. Anti-DNA de Doble Cadena",
		"Ac. Anti-Mitocondriales (M2a/M2c)",
		"Ac. Anti-Nucleares",
		"Ac. Anti-Smith",
		"Ac. Anti-SSA (Ro)",
		"Ac. Anti-SSB (La)",
		"Ac. Anti-Microsomales (TPO)"
	  ]
	},
	{
	perfil:"Perfil Autoinmune III",
	collapse: "colapsar21",
	examenes:[
		"Ac. Anti-DNA de Doble Cadena",
		"Ac. Anti-Nucleares",
		"C3, Componente del Complemento",
		"C4, Componente del Complemento",
		"Complemento Hemolítico al 50% (CH-50)",
		"Células LE en Sangre Total"
	  ]
	},
	{
	perfil:"Perfil Bioquímico de 35 Elementos - Modificado",
	collapse: "colapsar22",
	examenes:[
		"Potasio",
		"Proteína C Reactiva Ultrasensible",
		"Colesterol de Muy Baja Densidad (VLDL-C)",
		"Bilirrubina Total",
		"Calcio",
		"Cloro",
		"Colesterol Total",
		"Relación BUN / Creatinina",
		"Colesterol no-HDL",
		"Creatinina",
		"Deshidrogenasa Láctica (LDH)",
		"ALP (Fosfatasa Alcalina Total)",
		"Fósforo",
		"Globulinas Totales",
		"Glucosa",
		"Hierro",
		"Índice Aterogénico",
		"IgA (Inmunoglobulina A)",
		"IgG (Inmunoglobulina G)",
		"IgM (Inmunoglobulina M)",
		"Magnesio",
		"Ácido Úrico",
		"Nitrógeno Uréico",
		"Proteínas Totales",
		"Sodio",
		"AST/TGO (Aspartato Amino Transferasa)",
		"ALT/TGP (Alanin Amino Transferasa)",
		"Triglicéridos",
		"Urea",
		"Colesterol de Alta Densidad (HDL-C)",
		"Relación A/G",
		"Bilirrubina Directa",
		"Bilirrubina Indirecta",
		"Albúmina",
		"Gamma Glutamil Transpeptidasa (GGT)",
		"Porcentaje de Saturación de Transferrina",
		"Capacidad de fijación de hierro (TIBC)"
	  ]
	},
	{
	perfil:"Perfil Cardíaco",
	collapse: "colapsar23",
	examenes:[
		"TGO/AST",
		"TGP/ALT",
		"Deshidrogenasa Láctica (LDH)",
		"CK Total (Creatin Fosfoquinasa)",
		"CK-MB (Creatin Fosfoquinasa Fracción MB)"
	  ]
	},
	{
	perfil:"Perfil Cardiovascular",
	collapse: "colapsar24",
	examenes:[
		"Colesterol Total",
		"Colesterol de Alta Densidad (HDL-C)",
		"Colesterol de Baja Densidad (LDL-C)",
		"Colesterol de Muy Baja Densidad (VLDL-C)",
		"Colesterol no-HDL",
		"Triglicéridos",
		"Apolipoproteína A1",
		"Apolipoproteína B",
		"Lipoproteína A"
	  ]
	},
	{
	perfil:"Perfil de Ac. Anti-Citoplasma de Neutrófilos (ANCA)",
	collapse: "colapsar25",
	examenes:[
		"Ac. Anti-Citoplasma de Neutrófilos Citoplasmáticos (c-ANCA)",
		"Ac. Anti-Citoplasma de Neutrófilos Perinucleares (p-ANCA)"
	  ]
	},
	{
	perfil:"Perfil de Ac. Anti-ENA",
	collapse: "colapsar26",
	examenes:[
		"Ac. Anti-SSA (Ro)",
		"Ac. Anti-SSB (La)",
		"Ac. Anti-Smith",
		"Ac. Anti-Ribonucleoproteínas (RNP)"
	  ]
	},
	{
	perfil:"Perfil de Ac. Anti-Fosfolípidos I",
	collapse: "colapsar27",
	examenes:[
		"Ac. Anti-Cardiolipinas IgA",
		"Ac. Anti-Cardiolipinas IgG",
		"Ac. Anti-Cardiolipinas IgM",
		"Anticoagulante Lúpico"
	  ]
	},
	{
	perfil:"Perfil de Ac. Anti-Fosfolípidos II",
	collapse: "colapsar28",
	examenes:[
		"Ac. Anti-Cardiolipinas IgG",
		"Ac. Anti-Cardiolipinas IgM",
		"Ac. Anti-Fosfolípidos IgG",
		"Ac. Anti-Fosfolípidos IgM",
		"Anticoagulante Lúpico"
	  ]
	},
	{
	perfil:"Perfil de Ac. Anti-Fosfolípidos III",
	collapse: "colapsar29",
	examenes:[
		"Ac. Anti-Cardiolipinas IgA",
		"Ac. Anti-Cardiolipinas IgG",
		"Ac. Anti-Cardiolipinas IgM",
		"Anticoagulante Lúpico",
		"Beta 2 Microglobulina"
	  ]
	},
	{
	perfil:"Perfil de Ac. Anti-Tiroideos Cuantitativos",
	collapse: "colapsar30",
	examenes:[
		"Ac. Anti-Tiroglobulina Cuantitativos",
		"Ac. Anti-Microsomales (TPO) Cuantitativos"
	  ]
	},
	{
	perfil:"Perfil de Alergia Alimenticia",
	collapse: "colapsar31",
	examenes:[
		"Pollo",
		"Cerdo",
		"Pavo",
		"Carne de res",
		"Caseína",
		"Leche",
		"Queso",
		"Clara de huevo",
		"Queso",
		"Yema de huevo",
		"Coles (mezcla)",
		"Zanahoria",
		"Chícharo",
		"Pimiento verde",
		"Calabaza (mezcla)",
		"Tomate",
		"Papa",
		"Soya, Camarón",
		"Atún",
		"Judía blanca (alubia)",
		"Levadura",
		"Avena",
		"Trigo",
		"Maíz",
		"Arroz",
		"Aguacate",
		"Manzana",
		"Plátano",
		"Cítricos (mezcla)",
		"Durazno (melocotón)",
		"Fresa",
		"Almendra",
		"Cacahuate",
		"Nuez",
		"Chocolate, Mariscos (mezcla)"
	  ]
	},
	{
	perfil:"Perfil de Alergia Inhalatoria ",
	collapse: "colapsar32",
	examenes:[
		"Abedul Blanco",
		"Acaica",
		"Aligustre",
		"Fresno Blanco",
		"Mezquite",
		"Populus deltoides",
		"Encino Blanco",
		"Ballico",
		"Pasto Bermuda",
		"Pasto Timothy",
		"Polen Avena",
		"Sorgo",
		"Amaranthus",
		"Ambrosia",
		"Artemisa",
		"Atriplex confertifolia",
		"Cenigo",
		"Diente de León",
		"Franseria acanthicarpa",
		"Mezcla de Rumex",
		"Salsola (Cardo Ruso)",
		"Alternaria",
		"Aspergilus",
		"Candida",
		"Cladosporium",
		"Epicoccum",
		"Mucor",
		"Penicillum",
		"Rhizopus",
		"Gato",
		"Perro",
		"Mezcla de plumas (Perico, Pato y Ganso)",
		"Cucaracha",
		"Polvo casero",
		"Dermatophagoides farinae",
		"Dermatophagoides pterenysinnus"
	  ]
	},
	{
	perfil:"Perfil de Andrógenos I",
	collapse: "colapsar33",
	examenes:[
		"Androstenediona",
		"17 Alfa Hidroxiprogesterona",
		"Cortisol Matutino",
		"Dehidroepiandrosterona (DHEA)",
		"Testosterona Total"
	  ]
	},
	{
	perfil:"Perfil de Andrógenos II",
	collapse: "colapsar34",
	examenes:[
		"Androstenediona",
		"17 Alfa Hidroxiprogesterona",
		"Cortisol Matutino",
		"Dehidroepiandrosterona (DHEA)",
		"Dehidroepiandrosterona Sulfato (DHEA-SO4)",
		"Testosterona Total",
		"Testosterona Libre"
	  ]
	},
	{
	perfil:"Perfil de Andrógenos III",
	collapse: "colapsar35",
	examenes:[
		"Androstenediona",
		"Dehidroepiandrosterona Sulfato (DHEA-SO4)",
		"Testosterona Total"
	  ]
	},
	{
	perfil:"Perfil de Andrógenos IV",
	collapse: "colapsar36",
	examenes:[
		"Androstenediona",
		"Dehidroepiandrosterona Sulfato (DHEA-SO4) ",
		"Testosterona Total",
		"Testosterona Libre"
	  ]
	},
	{
	perfil:"Perfil de Andrógenos V",
	collapse: "colapsar37",
	examenes:[
		"Cortisol Matutino (7:30 a 10:00h)",
		"Androstenediona",
		"17 Alfa Hidroxiprogesterona",
		"Dehidroepiandrosterona (DHEA)",
		"Dehidroepiandrosterona Sulfato (DHEA-SO4)",
		"Testosterona Total"
	  ]
	},
	{
	perfil:"Perfil de Andrógenos VI",
	collapse: "colapsar38",
	examenes:[
		"Hormona Estimulante de Tiroides (TSH)",
		"Androstenediona",
		"Estradiol (E2)",
		"Dehidroepiandrosterona Sulfato (DHEA-SO4)",
		"Hormona Estimulante del Folículo (FSH)",
		"Hormona Luteinizante",
		"Prolactina",
		"Testosterona Total"
	  ]
	},
	{
	perfil:"Perfil de Andrógenos VII",
	collapse: "colapsar39",
	examenes:[
		"Androstenediona",
		"Cortisol Matutino",
		"Dehidroepiandrosterona (DHEA)",
		"Dehidroepiandrosterona Sulfato (DHEA-SO4)",
		"Testosterona Libre",
		"Hemoglobina Glicosilada (HBA1c)",
		"Insulina",
		"Insulina Post-Prandial"
	  ]
	},
	{
	perfil:"Perfil de Anemia",
	collapse: "colapsar40",
	examenes:[
		"Vitamina B-12 (Cianocobalamina)",
		"Ácido Fólico (Folato)",
		"Hierro",
		"Capacidad de Fijación",
		"Porcentaje de Saturación de Transferrina",
		"Transferrina",
		"Ferritina"
	  ]
	},
	{
	perfil:"Perfil de Climaterio I",
	collapse: "colapsar41",
	examenes:[
		"Hormona Luteinizante",
		"Hormona Estimulante del Folículo (FSH)",
		"Estradiol (E2)",
		"Estrona "
	  ]
	},
	{
	perfil:"Perfil de Climaterio II",
	collapse: "colapsar42",
	examenes:[
		"Hormona Luteinizante",
		"Hormona Estimulante del Folículo (FSH)",
		"Estradiol (E2)"
	  ]
	},
	{
	perfil:"Perfil de Coagulación",
	collapse: "colapsar43",
	examenes:[
		"Biometría Hemática en Sangre Total",
		"Tiempo de Protrombina (TP) + INR en Plasma",
		"Tiempo de Tromboplastina Parcial (TTP) en Plasma"
	  ]
	},
	{
	perfil:"Perfil de Coagulación II",
	collapse: "colapsar44",
	examenes:[
		"Tiempo de Protrombina (TP) + INR en Plasma",
		"Tiempo de Tromboplastina Parcial (TTP) en Plasma",
		"Tiempo de Trombina (TT)",
		"Fibrinogeno",
		"Tiempo de sangrado"
	  ]
	},
	{
	perfil:"Perfil de Colesterol",
	collapse: "colapsar45",
	examenes:[
		"Colesterol Total",
		"Colesterol de Alta Densidad (HDL-C)",
		"Colesterol de Baja Densidad (LDL-C)",
		"Colesterol de Muy Baja Densidad (VLDL-C)",
		"Aspecto del Suero"
	  ]
	},
	{
	perfil:"Perfil de Diabetes (Control)",
	collapse: "colapsar46",
	examenes:[
		"Insulina",
		"Péptido-C",
		" Hemoglobina Glicosilada (HBA1c) en Sangre Total",
		"Glucosa",
		"Microalbúmina en Orina de 24 horas"
	  ]
	},
	{
	perfil:"Perfil de Diabetes I",
	collapse: "colapsar47",
	examenes:[
		"Glucosa",
		"Colesterol Total",
		"Trigliceridos",
		"Examen General de Orina (EGO)"
	  ]
	},
	{
	perfil:"Perfil de Diabetes II",
	collapse: "colapsar48",
	examenes:[
		"Colesterol Total",
		"Creatinina",
		"Glucosa",
		"Nitrógeno Uréico",
		"Urea"
	  ]
	},
	{
	perfil:"Perfil de Diabetes III",
	collapse: "colapsar49",
	examenes:[
		"Glucosa",
		"Perfil de Lipidos",
		"Exámen General de Orina",
		"Hemoglobina glucosilada"
	  ]
	},
	{
	perfil:"Perfil de Diabetes IV",
	collapse: "colapsar50",
	examenes:[
		"Glucosa, Perfil de Lipidos",
		"Exámen General de Orina",
		"Hemoglobina glucosilada",
		"Microalbuminuria en orina ocasional"
	  ]
	},
	{
	perfil:"Perfil Nutricion (Sobrepeso, Obesidad, Hipertensión)",
	collapse: "colapsar51",
	examenes:[
		"Quimica de 27 elementos",
		"Biometria hematica",
		"Examen general de orina",
		"Hemoglobina glicosilada"
	  ]
	},
	{
	perfil:"Perfil de Nutrición Prediabético",
	collapse: "colapsar52",
	examenes:[
		"Curva de tolreancia a la Glucosa de 2 horas",
		"Trigliceridos",
		"Exámen General de Orina"
	  ]
	},
	{
	perfil:"Perfil de Nutrición Diabetes Mellitus 1 y 2",
	collapse: "colapsar53",
	examenes:[
		"Glucosa",
		"Urea, BUN",
		"Creatinina",
		"Colesterol Total",
		"Hemoglobina glicosilada"
	  ]
	},
	{
	perfil:"Perfil de Nutrición Check up básico",
	collapse: "colapsar54",
	examenes:[
		"Biometría Hemática en Sangre Total",
		"Química sanguínea de 6 elementos",
		"Exámen General de Orina",
		"Coproparasitoscópico de 1 muestra"
	  ]
	},
	{
	perfil:"Perfil de Nutrición Bajo Peso, Anémia y Control Prenatal",
	collapse: "colapsar55",
	examenes:[
		"Biometría Hemática en Sangre Total",
		"Exámen General de Orina"
	  ]
	},
	{
	perfil:"Perfil de Nutrición Litiasis Renal",
	collapse: "colapsar56",
	examenes:[
		"Bilirrubina Total",
		"Bilirrubina Indirecta",
		"Bilirrubina Directa", 
		"AST",
		"ALT",
		"Fosfatasa alcalina"
	  ]
	},
	{
	perfil:"Perfil de Nutrición Hígado Graso",
	collapse: "colapsar57",
	examenes:[
		"Bilirrubina Total",
		"Bilirrubina Indirecta",
		"Bilirrubina Directa",
		"AST",
		"ALT" ,
		"Fosfatasa alcalina",
		"Proteínas Totales", 
		"Albumina",
		"Globulinas Totales",
		"A/G",
		"Deshidrogenasa Láctica (LDH)"
	  ]
	},
	{
	perfil:"Perfil de Nutrición Gástricos",
	collapse: "colapsar58",
	examenes:[
		"Helicobacter pylori prueba de aliento"
	  ]
	},
	{
	perfil:"Perfil de Nutrición infantiles",
	collapse: "colapsar59",
	examenes:[
		"Coproparasitoscópico de 3 muestras"
	  ]
	},
	{
	perfil:"Perfil de Drogas de Abuso I",
	collapse: "colapsar60",
	examenes:[
		"Anfetaminas en Orina Ocasional",
		"Canabinoides (THC) en Orina Ocasional",
		"Cocaína en Orina Ocasional"
	  ]
	},
	{
	perfil:"Perfil de Drogas de Abuso II",
	collapse: "colapsar61",
	examenes:[
		"Anfetaminas en Orina Ocasional",
		"Canabinoides (THC) en Orina Ocasional",
		"Cocaína en Orina Ocasional",
		"Benzodiacepinas en Orina Ocasional"
	  ]
	},
	{
	perfil:"Perfil de Drogas de Abuso III",
	collapse: "colapsar62",
	examenes:[
		"Anfetaminas en Orina Ocasional",
		"Benzodiacepinas en Orina Ocasional",
		"Canabinoides (THC) en Orina Ocasional",
		"Cocaína en Orina Ocasional",
		"Morfina (Opiáceos) en Orina Ocasional"
	  ]
	},
	{
	perfil:"Perfil de Drogas de Abuso IV",
	collapse: "colapsar63",
	examenes:[
		"Anfetaminas en Orina Ocasional",
		"Canabinoides (THC) en Orina Ocasional",
		"Cocaína en Orina Ocasional",
		"Benzodiacepinas en Orina Ocasional",
		"Opiáceos (Morfina) en Orina Ocasional",
		"Barbituratos en Orina Ocasional"
	  ]
	},
	{
	perfil:"Perfil de Drogas de Abuso V",
	collapse: "colapsar64",
	examenes:[
		"Anfetaminas en Orina Ocasional",
		"Canabinoides (THC) en Orina Ocasional",
		"Cocaína en Orina Ocasional",
		"Benzodiacepinas en Orina Ocasional",
		"Opiáceos (Morfina) en Orina Ocasional",
		"Barbituratos en Orina Ocasional",
		"Alcohol en Orina Ocasional"
	  ]
	},
	{
	perfil:"Perfil de Drogas de Abuso VI",
	collapse: "colapsar65",
	examenes:[
		"Canabinoides (THC) en Orina Ocasional",
		"Cocaína en Orina Ocasional"
	  ]
	},
	{
	perfil:"Perfil de Drogas de Abuso VII",
	collapse: "colapsar66",
	examenes:[
		"Anfetaminas en Orina Ocasional",
		"Canabinoides (THC) en Orina Ocasional",
		"Cocaína en Orina Ocasional",
		"Benzodiacepinas en Orina Ocasional",
		"Barbituratos en Orina Ocasional"
	  ]
	},
	{
	perfil:"Perfil de Enfermedades de Transmisión Sexual por PCR",
	collapse: "colapsar67",
	examenes:[
		"Detección de Neisseria gonorrhoeae por PCR Cualitativa",
		"Detección de Gardnerella spp por PCR Cualitativa",
		"Detección de Trichomonas vaginalis por PCR Cualitativa",
		"Detección de Ureaplasma urealyticum / Ureaplasma parvum",
		"Detección de Mycoplasma hominis",
		"Detección de Mycoplasma genitalium",
		"Detección de Chlamydia trachomatis por PCR Cualitativa"
	  ]
	},
	{
	perfil:"Perfil de Epstein Barr IgG e IgM",
	collapse: "colapsar68",
	examenes:[
		"Ac. Anti-Antígeno Cápside Epstein Barr (VCA) IgG",
		"Ac. Anti-Antígeno Cápside Epstein Barr IgM",
		"Ac. Anti-Antígeno Nuclear de Epstein Barr (EBNA) IgG",
		"Ac. Anti-Antígeno Temprano Epstein Barr (EBV-EA) IgG"
	  ]
	},
	{
	perfil:"Perfil de Estrógenos",
	collapse: "colapsar69",
	examenes:[
		"Estrona",
		"Estradiol (E2)",
		"Estriol Libre"
	  ]
	},
	{
	perfil:"Perfil de Funcionamiento Renal",
	collapse: "colapsar70",
	examenes:[
		"Depuración de Creatinina",
		"Microalbúmina en Orina de 24 horas",
		"Nitrógeno Ureico en Orina de 24 horas",
		"Proteínas Totales en Orina de 24 horas"
	  ]
	},
	{
	perfil:"Perfil de Funcionamiento Renal II",
	collapse: "colapsar71",
	examenes:[
		"Colesterol Total",
		"Creatinina",
		"Glucosa"
	  ]
	},
	{
	perfil:"Perfil de Funcionamiento Renal III",
	collapse: "colapsar72",
	examenes:[
		"Depuración de Creatinina",
		"Nitrógeno ureico",
		"Exámen General de Orina"
	  ]
	},
	{
	perfil:"Perfil de Hepatitis I",
	collapse: "colapsar73",
	examenes:[
		"Ac. Anti-Antígeno Virus Hepatitis A Totales",
		"Ac. Anti-Antígeno Virus Hepatitis A IgM",
		"Antígeno de Superficie Virus Hepatitis B (HBsAg)", 
		"Ac. Anti-Antígeno de Superficie Virus Hepatitis B (Ac. Anti-HBsAg)", 
		"Ac. Anti-Antígeno Central Virus Hepatitis B (Ac. Anti-HBcAg) Totales"
	  ]
	},
	{
	perfil:"Perfil de Hepatitis II",
	collapse: "colapsar74",
	examenes:[
		"Ac. Anti-Antígeno Virus Hepatitis A Totales", 
		"Ac. Anti-Antígeno Virus Hepatitis A IgM",
		"Ac. Anti-Antígeno de Superficie Virus Hepatitis B (Ac. Anti-HBsAg)",
		"Ac. Anti-Antígeno Central Virus Hepatitis B (Ac. Anti-HBcAg) Totales", 
		"Ac. Anti-Antígeno Virus Hepatitis C Totales",
		"Ac. Anti-Antígeno Virus Hepatitis D Totales"
	  ]
	},
	{
	perfil:"Perfil de Hierro I",
	collapse: "colapsar75",
	examenes:[
		"Hierro",
		"Capacidad de Fijación",
		"Porcentaje de Saturación"
	  ]
	},
	{
	perfil:"Perfil de Hierro II",
	collapse: "colapsar76",
	examenes:[
		"Hierro",
		"Capacidad de Fijación",
		"% de Saturación",
		"Transferrina"
	  ]
	},
	{
	perfil:"Perfil de Hierro III",
	collapse: "colapsar77",
	examenes:[
		"Hierro",
		"Capacidad de Fijación",
		"% de Saturación",
		"Transferrina",
		"Ferritina"
	  ]
	},
	{
	perfil:"Perfil de Hierro IV",
	collapse: "colapsar78",
	examenes:[
		"Ferritina",
		"Hierro",
		"Transferrina",
		"Porcentaje de Saturación de Transferrina",
		"Capacidad de fijación de hierro (TIBC)"
	  ]
	},
	{
	perfil:"Perfil de Hipertensión Básico",
	collapse: "colapsar79",
	examenes:[
		"Colesterol Total",
		"Colesterol de Alta Densidad (HDL-C)",
		"Colesterol de Baja Densidad (LDL-C)",
		"Colesterol de Muy Baja Densidad (VLDL-C)",
		"Aspecto del Suero",
		"Triglicéridos",
		"Fosfolípidos",
		"Aldosterona",
		"Cortisol Matutino",
		"Renina en Plasma"
	  ]
	},
	{
	perfil:"Perfil de Hipertensión Básico II",
	collapse: "colapsar80",
	examenes:[
		"Ácido Vanilmandélico",
		"Aldosterona",
		"Cortisol Matutino",
		"Renina"
	  ]
	},
	{
	perfil:"Perfil de Hirsutismo",
	collapse: "colapsar81",
	examenes:[
		"Androstenediona",
		"Cortisol Matutino",
		"Dehidroepiandrosterona Sulfato (DHEA-SO4)",
		"Hormona Luteinizante",
		"Testosterona Total"
	  ]
	},
	{
	perfil:"Perfil de Inmunoglobulinas",
	collapse: "colapsar82",
	examenes:[
		"IgA (Inmunoglobulina A)",
		"IgG (Inmunoglobulina G)",
		"IgE (Inmunoglobulina E)",
		"IgM (Inmunoglobulina M)"
	  ]
	},
	{
	perfil:"Perfil de Lípidos Básico",
	collapse: "colapsar83",
	examenes:[
		"Colesterol Total",
		"Colesterol de Alta Densidad (HDL-C)",
		"Colesterol de Baja Densidad (LDL-C)",
		"Colesterol de Muy Baja Densidad (VLDL-C)",
		"Triglicéridos",
		"Aspecto del Suero",
		"Índice Aterogénico"
	  ]
	},
	{
	perfil:"Perfil de Lípidos II",
	collapse: "colapsar84",
	examenes:[
		"Colesterol Total",
		"Fosfolípidos, Lípidos Totales",
		"Índice Aterogénico",
		"Triglicéridos",
		"Colesterol de Alta Densidad (HDL-C)",
		"Colesterol de Baja Densidad (LDL-C)",
		"Aspecto del Suero"
	  ]
	},
	{
	perfil:"Perfil de Lípidos III",
	collapse: "colapsar85",
	examenes:[
		"Colesterol de Muy Baja Densidad (VLDL-C)",
		"Colesterol Total",
		"Fosfolípidos",
		"Triglicéridos",
		"Colesterol de Alta Densidad (HDL-C)",
		"Colesterol de Baja Densidad (LDL-C)"
	  ]
	},
	{
	perfil:"Perfil de Lupus I",
	collapse: "colapsar86",
	examenes:[
		"Ac. Anti-Nucleares",
		"Ac. Anti-Ácido Desoxirribonucleico de Doble Cadena",
		"Ac. Anti-Cardiolipinas IgG e IgM",
		"Ac. Anti-Ribonucleoproteínas (RNP)"
	  ]
	},
	{
	perfil:"Perfil de Lupus II",
	collapse: "colapsar87",
	examenes:[
		"Complemento C3 y C4",
		"Células LE",
		"Ac. Anti-Nucleares",
		"Complemento Hemolítico al 50% (CH-50)"
	  ]
	},
	{
	perfil:"Perfil de Lupus III",
	collapse: "colapsar88",
	examenes:[
		"Complemento C3 y C4",
		"Células LE",
		"Ac. Anti-Nucleares",
		"Complemento Hemolítico al 50% (CH-50)",
		"Ac. Anti-DNA de Doble Cadena",
		"Ac. Anti-Smith"
	  ]
	},
	{
	perfil:"Perfil de Lupus IV",
	collapse: "colapsar89",
	examenes:[
		"Ac. Anti-ADN de Doble Cadena (Nativo)",
		"Ac. Anti-Fosfolípidos IgG e IgM",
		"Ac. Anti-Nucleares"
	  ]
	},
	{
	perfil:"Perfil de Marcadores de Hepatitis A y B",
	collapse: "colapsar90",
	examenes:[
		"Ac. Anti-Antígeno Virus Hepatitis A Totales",
		"Ac. Anti-Antígeno Virus Hepatitis A IgM",
		"Ac. Anti-Antígeno de Superficie Virus Hepatitis B (Ac. Anti-HBsAg)",
		"Ac. Anti-Antígeno Central Virus Hepatitis B (Ac. Anti-HBcAg) Totales",
		"Ac. Anti-Antígeno Central Virus Hepatitis B (Ac. Anti-HBcAg) IgM",
		"Ac. Anti-Antígeno e Virus Hepatitis B (Ac. Anti-HBeAg)",
		"Antígeno de Superficie Virus Hepatitis B (HBsAg)",
		"Antígeno e Virus Hepatitis B (HBeAg)"
	  ]
	},
	{
	perfil:"Perfil de Marcadores de Hepatitis A, B y C",
	collapse: "colapsar91",
	examenes:[
		"Ac. Anti-Antígeno Virus Hepatitis A Totales",
		"Ac. Anti-Antígeno Virus Hepatitis A IgM",
		"Ac. Anti-Antígeno de Superficie Virus Hepatitis B (Ac. Anti-HBsAg)",
		"Ac. Anti-Antígeno Central Virus Hepatitis B (Ac. Anti-HBcAg) Totales",
		"Ac. Anti-Antígeno Central Virus Hepatitis B (Ac. Anti-HBcAg) IgM",
		"Ac. Anti-Antígeno e Virus Hepatitis B (Ac. Anti-HBeAg)",
		"Antígeno de Superficie Virus Hepatitis B (HBsAg)",
		"Antígeno e Virus Hepatitis B (HBeAg)",
		"Ac. Anti-Antígeno Virus Hepatitis C Totales"
	  ]
	},
	{
	perfil:"Perfil de Marcadores de Hepatitis A, B, C y D",
	collapse: "colapsar92",
	examenes:[
		"Ac. Anti-Antígeno Virus Hepatitis A Totales",
		"Ac. Anti-Antígeno Virus Hepatitis A IgM",
		"Ac. Anti-Antígeno de Superficie Virus Hepatitis B (Ac. Anti-HBsAg)",
		"Ac. Anti-Antígeno Central Virus Hepatitis B (Ac. Anti-HBcAg) Totales",
		"Ac. Anti-Antígeno Central Virus Hepatitis B (Ac. Anti-HBcAg) IgM",
		"Ac. Anti-Antígeno e Virus Hepatitis B (Ac. Anti-HBeAg)",
		"Antígeno de Superficie Virus Hepatitis B (HBsAg)",
		"Antígeno e Virus Hepatitis B (HBeAg)",
		"Ac. Anti-Antígeno Virus Hepatitis C Totales",
		"Ac. Anti-Antígeno Virus Hepatitis D Totales"
	  ]
	},
	{
	perfil:"Perfil de Marcadores de Hepatitis B",
	collapse: "colapsar93",
	examenes:[
		"Ac. Anti-Antígeno de Superficie Virus Hepatitis B (Ac. Anti-HBsAg)",
		"Ac. Anti-Antígeno Central Virus Hepatitis B (Ac. Anti-HBcAg) Totales",
		"Ac. Anti-Antígeno Central Virus Hepatitis B (Ac. Anti-HBcAg) IgM",
		"Ac. Anti-Antígeno E Virus Hepatitis B (Ac. Anti-HBeAg)",
		"Antígeno de Superficie Virus Hepatitis B (HBsAg)",
		"Antígeno E Virus Hepatitis B (HBeAg)"
	  ]
	},
	{
	perfil:"Perfil de Marcadores Tumorales de Colon/Ovario/Hígado",
	collapse: "colapsar94",
	examenes:[
		"Alfa Fetoproteína (AFP)",
		"CA 125 (Ovario)",
		"CA 19-9 (Páncreas)",
		"Antígeno Carcinoembrionario (CEA)",
		"Fosfatasa Ácida Total"
	  ]
	},
	{
	perfil:"Perfil de Marcadores Tumorales de Estómago",
	collapse: "colapsar95",
	examenes:[
		"CA 72-4",
		"Antígeno Carcinoembrionario (CEA)",
		"CA 19-9 (Páncreas)"
	  ]
	},
	{
	perfil:"Perfil de Marcadores Tumorales de Mama",
	collapse: "colapsar96",
	examenes:[
		"CA 15-3 (Mama)",
		"Antígeno Carcinoembrionario (CEA)"
	  ]
	},
	{
	perfil:"Perfil de Marcadores Tumorales de Ovario",
	collapse: "colapsar97",
	examenes:[
		"CA-125 (Ovario)",
		"Antígeno Carcinoembrionario (CEA)",
		"Alfa Fetoproteína (AFP)"
	  ]
	},
	{
	perfil:"Perfil de Marcadores Tumorales de Ovario II",
	collapse: "colapsar98",
	examenes:[
		"CA 125 (Ovario)",
		"Antígeno Carcinoembrionario (CEA)",
		"Fracción Beta de HGC",
		"Alfa Fetoproteína (AFP)"
	  ]
	},
	{
	perfil:"Perfil de Marcadores Tumorales de Testículo II",
	collapse: "colapsar99",
	examenes:[
		"Alfa Fetoproteína (AFP)",
		"Fracción Beta de Gonadotrofina Coriónica Humana",
		"Fracción Beta de HGC (Cuantitativa por RIA)"
	  ]
	},
	{
	perfil:"Perfil de Osteoporosis I",
	collapse: "colapsar100",
	examenes:[
		"Hormona Estimulante del Folículo (FSH)",
		"Hormona Luteinizante (HL)",
		"Estradiol (E2)",
		"Desoxipiridolina (Pyrilinks-D)",
		"Vitamina D, 25 Hidroxi",
		"Hormona Paratiroidea Intacta (PTH-I)",
		"Osteocalcina"
	  ]
	},
	{
	perfil:"Perfil Escolar",
	collapse: "colapsar101",
	examenes:[
		"Biometría Hemática en Sangre Total",
		"Examen General de Orina (EGO)",
		"Coproparasitoscópico 3 Muestras",
		"Grupo Sanguíneo y Factor Rh en Sangre Total"
	  ]
	},
	{
	perfil:"Perfil Ginecológico I",
	collapse: "colapsar102",
	examenes:[
		"Hormona Luteinizante (HL)",
		"Hormona Estimulante del Folículo (FSH)",
		"Prolactina",
		"Estradiol (E2)",
		"Progesterona",
		"Testosterona Total"
	  ]
	},
	{
	perfil:"Perfil Ginecológico II",
	collapse: "colapsar103",
	examenes:[
		"Hormona Luteinizante (HL)",
		"Hormona Estimulante del Folículo (FSH)",
		"Progesterona",
		"Prolactina",
		"Testosterona Total",
		"Estrógenos Totales"
	  ]
	},
	{
	perfil:"Perfil Hepático I",
	collapse: "colapsar104",
	examenes:[
		"Bilirrubina Total",
		"Bilirrubina Directa",
		"Bilirrubina Indirecta",
		"TGO/AST",
		"TGP/ALT",
		"Fosfatasa Alcalina Total (ALP)"
	  ]
	},
	{
	perfil:"Perfil Hepático II",
	collapse: "colapsar105",
	examenes:[
		"AST/TGO (Aspartato Amino Transferasa)",
		"ALT/TGP (Alanin Amino Transferasa)",
		"Deshidrogenasa Láctica (LDH)",
		"Bilirrubina Total",
		"Bilirrubina Directa",
		"Bilirrubina Indirecta",
		"Fosfatasa Alcalina Total (ALP)",
		"Proteínas Totales",
		"Albúmina",
		"Globulinas Totales",
		"Relación A/G"
	  ]
	},
	{
	perfil:"Perfil Hipofisiario",
	collapse: "colapsar106",
	examenes:[
		"Hormona Adrenocorticotrofica (ACTH) en Plasma",
		"Hormona del Crecimiento",
		"Hormona Estimulante de Tiroides (TSH)",
		"Hormona Estimulante del Folículo (FSH)",
		"Hormona Luteinizante (HL)",
		"Prolactina"
	  ]
	},
	{
	perfil:"Perfil Hormonal Femenino I (con Ac. Anti-Tiroideos)",
	collapse: "colapsar107",
	examenes:[
		"Hormona Estimulante del Folículo (FSH)",
		"Hormona Luteinizante (HL)",
		"Progesterona y Prolactina",
		"Estradiol (E2)",
		"Testosterona Total",
		"Cortisol Matutino",
		"Hormona del Crecimiento",
		"TSH (Hormona Estimulante de Tiroides)",
		"T3-Total (Triyodotironina Total)",
		"T4-Total (Tiroxina Total)",
		"T-Uptake (Captación Tiroidea)",
		"Índice de Tiroxina Libre",
		"Yodo Proteico",
		"Ac. Anti-Tiroglobulina Cuantitativos",
		"Ac. Anti-Microsomales (TPO) Cuantitativos"
	  ]
	},
	{
	perfil:"Perfil Hormonal Femenino II",
	collapse: "colapsar108",
	examenes:[
		"Hormona Luteinizante (HL)",
		"Hormona Estimulante del Folículo (FSH)",
		"Prolactina, Progesterona",
		"Estradiol (E2)",
		"Testosterona Total",
		"Hormona del Crecimiento",
		"T4-Total (Tiroxina Total) y T4-Libre (Tiroxina Libre)",
		"T3-Total (Triyodotironina Total)",
		"T3-Libre (Triyodotironina Libre)",
		"TSH (Hormona Estimulante de Tiroides)"
	  ]
	},
	{
	perfil:"Perfil Hormonal Masculino I (con Ac. Anti-Tiroideos)",
	collapse: "colapsar109",
	examenes:[
		"Hormona Estimulante del Folículo (FSH)",
		"Hormona Luteinizante (HL)",
		"Prolactina",
		"Testosterona Total",
		"Cortisol Matutino", 
		"Hormona del Crecimiento", 
		"TSH (Hormona Estimulante de Tiroides)",
		"T3-Total (Triyodotironina Total)",
		"T4-Total (Tiroxina Total)",
		"T-Uptake (Captación Tiroidea)",
		"Índice de Tiroxina Libre",
		"Yodo Proteico",
		"Ac. Anti-Tiroglobulina Cuantitativos",
		"Ac. Anti-Microsomales (TPO) Cuantitativos"
	  ]
	},
	{
	perfil:"Perfil Hormonal Masculino II",
	collapse: "colapsar110",
	examenes:[
		"Hormona Estimulante del Folículo (FSH)",
		"Hormona Luteinizante (HL)",
		"Prolactina y Testosterona Total",
		"Cortisol Matutino",
		"Hormona del Crecimiento",
		"TSH (Hormona Estimulante de Tiroides)",
		"T3-Total (Triyodotironina Total)",
		"T3-Libre (Triyodotironina Libre)",
		"T4-Total (Tiroxina Total) y T4-Libre (Tiroxina Libre)"
	  ]
	},
	{
	perfil:"Perfil Metabólico de Calcio",
	collapse: "colapsar111",
	examenes:[
		"Creatinina en Orina de 24 horas",
		"Fósforo en Orina de 24 Horas",
		"Calcio en Orina de 24 horas",
		"Calcio y Fósforo",
		"Creatinina",
		"ALP (Fosfatasa Alcalina Total)"
	  ]
	},
	{
	perfil:"Perfil Paratiroideo",
	collapse: "colapsar112",
	examenes:[
		"Calcio y Fósforo",
		"Calcitonina",
		"Hormona Paratiroidea Intacta (PTH-I)"
	  ]
	},
	{
	perfil:"Perfil Prenatal",
	collapse: "colapsar113",
	examenes:[
		"Biometría Hemática en Sangre Total",
		"Examen General de Orina (EGO)",
		"Glucosa",
		"Nitrógeno Ureico y Creatinina",
		"Grupo Sanguíneo y Factor Rh en Sangre Total",
		"VDRL"
	  ]
	},
	{
	perfil:"Perfil Prenatal II",
	collapse: "colapsar114",
	examenes:[
		"Biometría Hemática",
		"Examen General de Orina",
		"Grupo Sanguíneo y Factor Rh (D)",
		"VDRL",
		"Creatinina",
		"Glucosa",
		"Nitrógeno Uréico y Urea"
	  ]
	},
	{
	perfil:"Perfil Preoperatorio",
	collapse: "colapsar115",
	examenes:[
		"Biometría Hemática en Sangre Total",
		"Glucosa",
		"Nitrógeno Ureico",
		"Creatinina",
		"Ácido Úrico",
		"Grupo Sanguíneo y Factor Rh en Sangre Total",
		"Examen General de Orina (EGO)",
		"Tiempo de Protrombina (TP) + INR en Plasma",
		"Tiempo de Tromboplastina Parcial (TTP) en Plasma"
	  ]
	},
	{
	perfil:"Perfil Prostático I",
	collapse: "colapsar116",
	examenes:[
		"Antígeno Específico de Próstata (APE-T, PSA-T)", 
		"Antígeno Específico de Próstata Libre (APE-L, PSA-L)", 
		"% PSA Libre (PSAL/PSAT)",
		"Fosfatasa Ácida Total",
		"Fosfatasa Ácida Fracción Prostática"
	  ]
	},
	{
	perfil:"Perfil Prostático II",
	collapse: "colapsar117",
	examenes:[
		"Fosfatasa Ácida no Prostatica",
		"Antígeno Específico de Próstata Total",
		"% PSA Libre (PSAL/PSAT)",
		"Fosfatasa Ácida Total",
		"ALP (Fosfatasa Alcalina Total)",
		"Fosfatasa Ácida Fracción Prostática",
		"Antígeno Específico de Próstata Fracción Libre"
	  ]
	},
	{
	perfil:"Perfil Prostático III",
	collapse: "colapsar118",
	examenes:[
		"Antígeno Específico de Próstata (APE-T, PSA-T)",
		"Antígeno Específico de Próstata Libre (APE-L, PSA-L)",
		"% PSA Libre (PSAL/PSAT)"
	  ]
	},
	{
	perfil:"Perfil Reumático II",
	collapse: "colapsar119",
	examenes:[
		"Proteína C Reactiva", 
		"Antiestreptolisinas",
		"Factor Reumatoide (FR)",
		"Ácido Úrico",
		"Velocidad de Sedimentación Globular"
	  ]
	},
	{
	perfil:"Perfil Reumático III",
	collapse: "colapsar120",
	examenes:[
		"Proteína C Reactiva",
		"Antiestreptolisinas",
		"Factor Reumatoide (FR)", 
		"Ácido Úrico",
		"Velocidad de Sedimentación Globular",
		"Cultivo de Exudado Faríngeo"
	  ]
	},
	{
	perfil:"Perfil Suprarrenal",
	collapse: "colapsar121",
	examenes:[
		"Aldosterona y Cortisol Matutino", 
		"17 Alfa Hidroxiprogesterona", 
		"Hormona Adrenocorticotrofica (ACTH) en Plasma"
	  ]
	},
	{
	perfil:"Perfil Suprarrenal II",
	collapse: "colapsar122",
	examenes:[
		"Hormona Adrenocorticotrofica (ACTH)", 
		"Cortisol Matutino",
		"Aldosterona y 17 Cetoesteroides", 
		"17 Hidroxicorticosteroides en Orina de 24 horas",
		"Perfil de Catecolaminas  en Orina de 24 horas"
	  ]
	},
	{
	perfil:"Perfil Testicular",
	collapse: "colapsar123",
	examenes:[
		"Hormona Estimulante del Folículo (FSH)", 
		"Hormona Luteinizante (HL)", 
		"Prolactina", 
		"Testosterona Total"
	  ]
	},
	{
	perfil:"Perfil Tiroideo con Ac. Anti-Tiroideos",
	collapse: "colapsar124",
	examenes:[
		"TSH (Hormona Estimulante de Tiroides)", 
		"T3-Total (Triyodotironina Total)", 
		"T4-Total (Tiroxina Total)", 
		"T-Uptake (Captación Tiroidea)",
		"Índice de Tiroxina Libre, Yodo Proteico",
		"Ac. Anti-Tiroglobulina Cuantitativos", 
		"Ac. Anti-Microsomales (TPO) Cuantitativos"
	  ]
	},
	{
	perfil:"Perfil Tiroideo I",
	collapse: "colapsar125",
	examenes:[
		"TSH (Hormona Estimulante de Tiroides)",
		"T3-Total (Triyodotironina Total)", 
		"T3-Libre (Triyodotironina Libre)", 
		"T4-Total (Tiroxina Total)", 
		"T4-Libre (Tiroxina Libre)", 
		"T-Uptake (Captación Tiroidea)",
		"Índice de Tiroxina Libre",
		"Yodo Proteico"
	  ]
	},
	{
	perfil:"Perfil Torch IgG",
	collapse: "colapsar126",
	examenes:[
		"Ac. Anti-Toxoplasma IgG", 
		"Ac. Anti-Rubeola IgG", 
		"Ac. Anti-Citomegalovirus (CMV) IgG", 
		"Ac. Anti-Virus Herpes (HSV) Tipo II IgG"
	  ]
	},
	{
	perfil:"Perfil Torch IgG e IgM",
	collapse: "colapsar127",
	examenes:[
		"Ac. Anti-Toxoplasma IgG", 
		"Ac. Anti-Toxoplasma IgM", 
		"Ac. Anti-Rubeola IgG", 
		"Ac. Anti-Rubeola IgM", 
		"Ac. Anti-Citomegalovirus (CMV) IgG", 
		"Ac. Anti-Citomegalovirus (CMV) IgM", 
		"Ac. Anti-Virus Herpes (HSV) Tipo I y II IgM", 
		"Ac. Anti-Virus Herpes (HSV) Tipo I IgG", 
		"Ac. Anti-Virus Herpes (HSV) Tipo II IgG", 
		"Ac. Anti-Virus Herpes (HSV) Tipo II IgM"
	  ]
	},
	{
	perfil:"Perfil Torch IgM",
	collapse: "colapsar128",
	examenes:[
		"Ac. Anti-Toxoplasma IgM", 
		"Ac. Anti-Rubeola IgM", 
		"Ac. Anti-Citomegalovirus (CMV) IgM", 
		"Ac. Anti-Virus Herpes (HSV) Tipo I y II IgM", 
		"Ac. Anti-Virus Herpes (HSV) Tipo II IgM"
	  ]
	},
	{
	perfil:"Química Sanguínea de 12 Elementos (Perfil Bioquímico)",
	collapse: "colapsar129",
	examenes:[
		"Glucosa", 
		"Nitrógeno Ureico", 
		"Ácido Úrico", 
		"Colesterol Total", 
		"Calcio (Ca)", 
		"Fósforo (P)",
		"Proteínas Totales", 
		"Albúmina",
		"TGO/AST (Transaminasa Glutámico Oxalacética)", 
		"Fosfatasa Alcalina Total (ALP)", 
		"Deshidrogenasa Láctica (LDH)", 
		"Bilirrubina Total"
	  ]
	},
	{
	perfil:"Química Sanguínea de 12 Elementos  - Modificado (Perfil Bioquímico)",
	collapse: "colapsar130",
	examenes:[
		"Glucosa", 
		"Nitrógeno Ureico", 
		"Ácido Úrico", 
		"Colesterol Total", 
		"Triglicéridos", 
		"Proteínas Totales", 
		"Albúmina", 
		"TGO/AST (Transaminasa Glutámico Oxalacética)", 
		"Bilirrubina Total", 
		"Bilirrubina Directa", 
		"Deshidrogenasa Láctica (LDH)", 
		"Fosfatasa Alcalina Total (ALP)"
	  ]
	},
	{
	perfil:"Química Sanguínea de 2 Elementos (Perfil Bioquímico de 2 elementos)",
	collapse: "colapsar131",
	examenes:[
		"Glucosa", 
		"Colesterol"
	  ]
	},
	{
	perfil:"Química Sanguínea de 24 Elementos (Perfil Bioquímico)",
	collapse: "colapsar132",
	examenes:[
		"Glucosa", 
		"Nitrógeno Ureico", 
		"Creatinina", 
		"Ácido Úrico", 
		"Colesterol Total", 
		"Colesterol de Alta Densidad", 
		"Colesterol de Baja Densidad", 
		"Triglicéridos", 
		"Índice Aterogénico",
		"Calcio (Ca)",
		"Fósforo (P)",
		"Proteínas Totales y Albumina",
		"Globulinas Totales", 
		"Relación A/G",
		"AST/TGO (Aspartato Amino Transferasa)", 
		"ALT/TGP (Alanin Amino Transferasa)", 
		"Fosfatasa Alcalina Total (ALP)",
		"Gamma Glutamil Transpeptidasa (GGT) GGT",
		"Deshidrogenasa Láctica (LDH)", 
		"Amilasa", 
		"Bilirrubina Total", 
		"Bilirrubina Directa", 
		"Bilirrubina Indirecta"
	  ]
	},
	{
	perfil:"Química Sanguínea de 27 Elementos (Perfil Bioquímico)",
	collapse: "colapsar133",
	examenes:[
		"Glucosa", 
		"Nitrógeno Ureico", 
		"Creatinina", 
		"Ácido Úrico", 
		"Colesterol Total", 
		"Colesterol de Alta Densidad", 
		"Colesterol de Baja Densidad", 
		"Triglicéridos", 
		"Índice Aterogénico",
		"Calcio (Ca)", 
		"Fósforo (P)", 
		"Urea", 
		"Colesterol de Muy Baja Densidad (VLDL)",
		"Amilasa",
		"Proteínas Totales", 
		"Albúmina", 
		"Globulinas Totales", 
		"Relación A/G",
		"TGO/AST", 
		"TGP/ALT", 
		"Fosfatasa Alcalina Total (ALP)", 
		"GGT", 
		"Deshidrogenasa Láctica (LDH)", 
		"Amilasa", 
		"Bilirrubina Total", 
		"Bilirrubina Directa", 
		"Bilirrubina Indirecta "
	  ]
	},
	{
	perfil:"Química Sanguínea de 28 Elementos (Perfil Bioquímico)",
	collapse: "colapsar134",
	examenes:[
		"Glucosa",
		"Nitrógeno Ureico", 
		"Creatinina", 
		"Ácido Úrico", 
		"Colesterol Total", 
		"Colesterol de Alta Densidad", 
		"Colesterol de Baja Densidad", 
		"Triglicéridos", 
		"Índice Aterogénico",
		"Calcio (Ca)", 
		"Fósforo (P)", 
		"Urea",
		"Colesterol de Muy Baja Densidad (VLDL)",
		"Amilasa",
		"Proteínas Totales", 
		"Albúmina", 
		"Globulinas Totales", 
		"Relación A/G",
		"TGO/AST", 
		"TGP/ALT", 
		"Fosfatasa Alcalina Total (ALP)", 
		"GGT", 
		"Deshidrogenasa Láctica (LDH)", 
		"Amilasa", 
		"Bilirrubina Total", 
		"Bilirrubina Directa", 
		"Bilirrubina Indirecta", 
		"Lipasa"
	  ]
	},
	{
	perfil:"Química Sanguínea de 3 Elementos - Modificada - (Perfil Bioquímico)",
	collapse: "colapsar135",
	examenes:[
		"Glucosa", 
		"Colesterol", 
		"Triglicéridos"
	  ]
	},
	{
	perfil:"Química Sanguínea de 3 Elementos (Perfil Bioquímico)",
	collapse: "colapsar136",
	examenes:[
		"Glucosa", 
		"Urea", 
		"Creatinina"
	  ]
	},
	{
	perfil:"Química Sanguínea de 31 Elementos (Perfil Bioquímico)",
	collapse: "colapsar137",
	examenes:[
		"Glucosa", 
		"Nitrógeno Ureico", 
		"Creatinina", 
		"Ácido Úrico", 
		"Colesterol Total", 
		"Colesterol de Alta Densidad", 
		"Colesterol de Baja Densidad", 
		"Triglicéridos", 
		"Índice Aterogénico",
		"Calcio (Ca)", 
		"Fósforo (P)", 
		"Urea", 
		"Colesterol de Muy Baja Densidad (VLDL)",
		"Amilasa",   
		"Potasio", 
		"Cloro",
		"Proteínas Totales", 
		"Albúmina", 
		"Globulinas Totales", 
		"Relación A/G",
		"TGO/AST", 
		"TGP/ALT", 
		"Fosfatasa Alcalina Total (ALP)",
		"GGT", 
		"Deshidrogenasa Láctica (LDH)", 
		"Amilasa", 
		"Bilirrubina Total", 
		"Bilirrubina Directa", 
		"Bilirrubina Indirecta", 
		"Lipasa", 
		"Sodio"
	  ]
	},
	{
	perfil:"Química Sanguínea de 35 Elementos (Perfil Bioquímico)",
	collapse: "colapsar138",
	examenes:[
		"Glucosa", 
		"Nitrógeno Ureico", 
		"Creatinina", 
		"Ácido Úrico", 
		"Colesterol Total", 
		"Colesterol de Alta Densidad", 
		"Colesterol de Baja Densidad", 
		"Triglicéridos", 
		"Índice Aterogénico",
		"Calcio (Ca)", 
		"Fósforo (P)",
		"Urea",
		"Colesterol de Muy Baja Densidad (VLDL)",
		"Amilasa",   
		"Potasio", 
		"Cloro", 
		"CK",
		"CK-MB",
		"Proteínas Totales", 
		"Albúmina", 
		"Globulinas Totales", 
		"Relación A/G",
		"TGO/AST", 
		"TGP/ALT", 
		"Fosfatasa Alcalina Total (ALP)", 
		"GGT", 
		"Deshidrogenasa Láctica (LDH)", 
		"Amilasa", 
		"Bilirrubina Total", 
		"Bilirrubina Directa", 
		"Bilirrubina Indirecta", 
		"Lipasa", 
		"Sodio", 
		"Anión GAP", 
		"Amonio"
	  ]
	},
	{
	perfil:"Química Sanguínea de 4 Elementos (Perfil Bioquímico de 4 elementos)",
	collapse: "colapsar139",
	examenes:[
		"Glucosa", 
		"Urea", 
		"Creatinina", 
		"Ácido Úrico"
	  ]
	},
	{
	perfil:"Química Sanguínea de 5 Elementos (Perfil Bioquímico de 5 elementos)",
	collapse: "colapsar140",
	examenes:[
		"Glucosa", 
		"Urea", 
		"Creatinina", 
		"Ácido Úrico", 
		"Colesterol"
	  ]
	},
	{
	perfil:"Química Sanguínea de 6 Elementos (Perfil Bioquímico de 6 elementos)",
	collapse: "colapsar141",
	examenes:[
		"Glucosa", 
		"Urea", 
		"Creatinina", 
		"Ácido Úrico", 
		"Colesterol", 
		"Triglicéridos"
	  ]
	},
	{
	perfil:"Reacciones Febriles ",
	collapse: "colapsar142",
	examenes:[
		"Antígeno de Salmonella parathypi AH",
		"Antígeno de Salmonella parathypi BH",
		"Antígeno O de Salmonella thypi",
		"Antígeno H de Salmonella thypi",
		"Antígeno de Brucella abortus",
		"Antígeno de Proteus Ox19"
	  ]
	},
	{
	perfil:"Tamiz Metabólico Neonatal Ampliado I",
	collapse: "colapsar143",
	examenes:[
		"TSH Neonatal",
		"T4 Neonatal",
		"17 Alfa Hidroxiprogesterona Neonatal", 
		"Tripsina Inmunoreactiva Neonatal (IRT)",
		"Galactosa Uridil Transferasa (UT)",
		"Glucosa 6 Fosfato Deshidrogenasa Neonatal",
		"Biotinidasa Neonatal",
		"Fenilalanina Neonatal (PKU)",
		"Aminoácidos",
		"Metionina",
		"Valina",
		"Leucina",
		"Isoleucina",
		"Ácido Glutámico",
		"Tirosina",
		"Alanina",
		"Ácido Aspártico",
		"Glutamina",
		"Citrulina",
		"Arginina",
		"Ornitina",
		"Lisina",
		"Treonina",
		"Glicina",
		"Serina",
		"Histidina"
	  ]
	},
	{
	perfil:"Tamiz Metabólico Neonatal Básico",
	collapse: "colapsar144",
	examenes:[
		"TSH Neonatal",
		"Fenilalanina Neonatal (PKU)",
		"Aminoácidos",
		"Metionina",
		"Valina",
		"Leucina",
		"IsoleucinaÁcido Glutámico",
		"Tirosina",
		"Alanina",
		"Ácido Aspártico",
		"Glutamina",
		"Citrulina",
		"Arginina",
		"Ornitina",
		"Lisina",
		"Treonina",
		"Glicina",
		"Serina",
		"Histidina"
	  ]
	}
];

})();