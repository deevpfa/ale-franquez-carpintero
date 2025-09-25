// Image data organized by date and type
export interface WorkImage {
  id: string;
  filename: string;
  date: string;
  year: number;
  category: string;
  title: string;
  description?: string;
}

// Helper function to get image path
export const getImagePath = (filename: string) => {
  return `/src/assets/works/${filename}`;
};

export const worksImagesByYear = {
  2024: [
    {
      id: "img_20240724_122624",
      filename: "IMG_20240724_122624_Original.JPG",
      date: "2024-07-24",
      year: 2024,
      title: "Trabajo de Carpintería",
      category: "Muebles"
    },
    {
      id: "img_20240712_104025",
      filename: "IMG_20240712_104025_Original.JPG", 
      date: "2024-07-12",
      year: 2024,
      title: "Proyecto de Madera",
      category: "Muebles"
    },
    {
      id: "img_20240712_104052",
      filename: "IMG_20240712_104052_Original.JPG",
      date: "2024-07-12",
      year: 2024,
      title: "Detalle de Construcción",
      category: "Muebles"
    },
    {
      id: "img_20240610_160055",
      filename: "IMG_20240610_160055_Original.JPG",
      date: "2024-06-10", 
      year: 2024,
      title: "Carpintería Artesanal",
      category: "Muebles"
    },
    {
      id: "img_20240525_145859",
      filename: "IMG_20240525_145859_Original.JPG",
      date: "2024-05-25",
      year: 2024,
      title: "Trabajo en Madera",
      category: "Muebles" 
    },
    {
      id: "img_20240525_150232",
      filename: "IMG_20240525_150232_Original.JPG",
      date: "2024-05-25",
      year: 2024,
      title: "Proyecto Personalizado",
      category: "Muebles"
    },
    {
      id: "img_20240411_184326", 
      filename: "IMG_20240411_184326_Original.JPG",
      date: "2024-04-11",
      year: 2024,
      title: "Mueble de Cocina",
      category: "Cocina"
    },
    {
      id: "img_20240404_171610",
      filename: "IMG_20240404_171610_Original.JPG", 
      date: "2024-04-04",
      year: 2024,
      title: "Trabajo Artesanal",
      category: "Muebles"
    },
    {
      id: "img_20240307_124404",
      filename: "IMG_20240307_124404_Original.JPG",
      date: "2024-03-07",
      year: 2024,
      title: "Mesa Personalizada",
      category: "Muebles"
    },
    {
      id: "img_20240307_124409",
      filename: "IMG_20240307_124409_Original.JPG", 
      date: "2024-03-07",
      year: 2024,
      title: "Detalle de Mesa",
      category: "Muebles"
    },
    {
      id: "img_20240220_112512",
      filename: "IMG_20240220_112512_Original.JPG",
      date: "2024-02-20",
      year: 2024,
      title: "Proyecto de Carpintería",
      category: "Muebles"
    },
    {
      id: "img_20240117_115021",
      filename: "IMG_20240117_115021_Original.JPG",
      date: "2024-01-17",
      year: 2024,
      title: "Trabajo en Madera",
      category: "Muebles"
    }
  ],
  2023: [
    {
      id: "img_20231218_182842",
      filename: "IMG_20231218_182842_Original.JPG",
      date: "2023-12-18",
      year: 2023,
      title: "Proyecto de Fin de Año",
      category: "Muebles"
    },
    {
      id: "img_20231115_105801", 
      filename: "IMG_20231115_105801_Original.JPG",
      date: "2023-11-15",
      year: 2023,
      title: "Biblioteca Modular",
      category: "Estanterías"
    },
    {
      id: "img_20231115_105821",
      filename: "IMG_20231115_105821_Original.JPG",
      date: "2023-11-15", 
      year: 2023,
      title: "Detalle de Biblioteca",
      category: "Estanterías"
    },
    {
      id: "img_20231115_105911",
      filename: "IMG_20231115_105911_Original.JPG", 
      date: "2023-11-15",
      year: 2023,
      title: "Sistema de Estanterías",
      category: "Estanterías"
    },
    {
      id: "img_20230804_153421",
      filename: "IMG_20230804_153421_Original.JPG",
      date: "2023-08-04",
      year: 2023,
      title: "Trabajo de Verano",
      category: "Muebles"
    },
    {
      id: "img_20230804_153436",
      filename: "IMG_20230804_153436_Original.JPG",
      date: "2023-08-04",
      year: 2023,
      title: "Detalle de Construcción",
      category: "Muebles"
    },
    {
      id: "img_20230715_110218",
      filename: "IMG_20230715_110218_Original.JPG",
      date: "2023-07-15",
      year: 2023,
      title: "Mueble Personalizado",
      category: "Muebles"
    },
    {
      id: "img_20230715_110249",
      filename: "IMG_20230715_110249_Original.JPG",
      date: "2023-07-15",
      year: 2023,
      title: "Vista Lateral",
      category: "Muebles"
    },
    {
      id: "img_20230512_162635",
      filename: "IMG_20230512_162635_Original.JPG",
      date: "2023-05-12",
      year: 2023,
      title: "Trabajo en Proceso",
      category: "Muebles"
    },
    {
      id: "img_20230507_144837",
      filename: "IMG_20230507_144837_Original.JPG",
      date: "2023-05-07",
      year: 2023,
      title: "Silla Artesanal",
      category: "Muebles"
    },
    {
      id: "img_20230507_144847",
      filename: "IMG_20230507_144847_Original.JPG", 
      date: "2023-05-07",
      year: 2023,
      title: "Detalle de Silla",
      category: "Muebles"
    },
    {
      id: "img_20230412_120849",
      filename: "IMG_20230412_120849_Original.JPG",
      date: "2023-04-12",
      year: 2023,
      title: "Mesa de Comedor",
      category: "Muebles"
    },
    {
      id: "img_20230316_194951",
      filename: "IMG_20230316_194951_Original.JPG",
      date: "2023-03-16",
      year: 2023,
      title: "Trabajo Nocturno",
      category: "Muebles"
    },
    {
      id: "img_20230218_122100",
      filename: "IMG_20230218_122100_Original.JPG",
      date: "2023-02-18",
      year: 2023,
      title: "Proyecto de Invierno",
      category: "Muebles"
    },
    {
      id: "img_20230216_113946",
      filename: "IMG_20230216_113946_Original.JPG",
      date: "2023-02-16",
      year: 2023,
      title: "Carpintería Fina",
      category: "Muebles"
    }
  ],
  2022: [
    {
      id: "img_20221105_144652",
      filename: "IMG_20221105_144652_Original.JPG",
      date: "2022-11-05",
      year: 2022,
      title: "Puerta de Entrada",
      category: "Puertas"
    },
    {
      id: "img_20221105_144739",
      filename: "IMG_20221105_144739_Original.JPG",
      date: "2022-11-05",
      year: 2022,
      title: "Detalle de Puerta",
      category: "Puertas"
    },
    {
      id: "img_20221105_144754",
      filename: "IMG_20221105_144754_Original.JPG",
      date: "2022-11-05",
      year: 2022,
      title: "Acabado Final",
      category: "Puertas"
    },
    {
      id: "img_20220615_180450",
      filename: "IMG_20220615_180450_Original.JPG",
      date: "2022-06-15",
      year: 2022,
      title: "Trabajo de Verano",
      category: "Muebles"
    },
    {
      id: "img_20220131_113010",
      filename: "IMG_20220131_113010_Original.JPG",
      date: "2022-01-31",
      year: 2022,
      title: "Gabinete de Cocina",
      category: "Cocina"
    },
    {
      id: "img_20220131_113022",
      filename: "IMG_20220131_113022_Original.JPG",
      date: "2022-01-31",
      year: 2022,
      title: "Vista Interior",
      category: "Cocina"
    },
    {
      id: "img_20220131_113147",
      filename: "IMG_20220131_113147_Original.JPG",
      date: "2022-01-31",
      year: 2022,
      title: "Acabado de Cocina",
      category: "Cocina"
    },
    {
      id: "img_20220119_172317",
      filename: "IMG_20220119_172317_Original.JPG",
      date: "2022-01-19",
      year: 2022,
      title: "Primera Obra",
      category: "Muebles"
    },
    {
      id: "img_20220119_172351",
      filename: "IMG_20220119_172351_Original.JPG",
      date: "2022-01-19",
      year: 2022,
      title: "Detalle de Primera Obra",
      category: "Muebles"
    }
  ],
  // Additional selected images from the collection
  others: [
    {
      id: "img_2620",
      filename: "IMG_2620.JPG",
      date: "2023-01-01",
      year: 2023,
      title: "Trabajo Artesanal",
      category: "Muebles"
    },
    {
      id: "img_3001",
      filename: "IMG_3001.JPG",
      date: "2023-03-01",
      year: 2023,
      title: "Silla Contemporánea",
      category: "Muebles"
    },
    {
      id: "img_3004",
      filename: "IMG_3004.JPG",
      date: "2023-03-01",
      year: 2023,
      title: "Detalle de Silla",
      category: "Muebles"
    },
    {
      id: "img_3152",
      filename: "IMG_3152.JPG",
      date: "2023-04-01",
      year: 2023,
      title: "Mesa de Trabajo",
      category: "Muebles"
    },
    {
      id: "img_4017",
      filename: "IMG_4017.JPG",
      date: "2023-06-01",
      year: 2023,
      title: "Puerta Personalizada",
      category: "Puertas"
    },
    {
      id: "img_4232",
      filename: "IMG_4232.JPG",
      date: "2023-07-01",
      year: 2023,
      title: "Mueble de Cocina",
      category: "Cocina"
    },
    {
      id: "img_4544",
      filename: "IMG_4544.JPG",
      date: "2023-09-01",
      year: 2023,
      title: "Biblioteca Moderna",
      category: "Estanterías"
    },
    {
      id: "img_5042",
      filename: "IMG_5042.JPG",
      date: "2023-11-01",
      year: 2023,
      title: "Trabajo Especializado",
      category: "Muebles"
    },
    // Recent UUID format images
    {
      id: "uuid_49575b6a",
      filename: "49575B6A-FF61-4E76-858D-39423FB52B7D.jpg",
      date: "2024-08-01",
      year: 2024,
      title: "Proyecto Reciente",
      category: "Muebles"
    },
    {
      id: "uuid_ebde62df",
      filename: "EBDE62DF-CA8F-4E9C-893C-8662D56DB596.jpg",
      date: "2024-08-15",
      year: 2024,
      title: "Trabajo Moderno",
      category: "Muebles"
    }
  ]
} as const;

export const getAllImages = (): WorkImage[] => {
  return [
    ...worksImagesByYear[2024],
    ...worksImagesByYear[2023], 
    ...worksImagesByYear[2022],
    ...worksImagesByYear.others
  ];
};

export const getImagesByYear = (year: number): WorkImage[] => {
  return worksImagesByYear[year as keyof typeof worksImagesByYear] || [];
};

export const getImagesByCategory = (category: string): WorkImage[] => {
  return getAllImages().filter(img => img.category === category);
};

export const getRecentImages = (count: number = 10): WorkImage[] => {
  return getAllImages()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};