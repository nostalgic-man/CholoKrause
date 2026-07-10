// database.js - Base de datos completa con propiedades para compatibilidad

// database.js - Base de datos completa con propiedades para compatibilidad y stock

const productosDB = {
    procesadores: [
        { id: 1, nombre: "AMD Ryzen 5 5600X", precio: 189900, marca: "AMD", socket: "AM4", nucleos: 6, hilos: 12, frecuencia: "4.6 GHz", tdp: 65, generacion: "Zen 3", descripcion: "Ideal para gaming y productividad", imagen: "cpu_5600x.jpg", stock: 8 },
        { id: 2, nombre: "Intel Core i5-12400F", precio: 159900, marca: "Intel", socket: "LGA1700", nucleos: 6, hilos: 12, frecuencia: "4.4 GHz", tdp: 65, generacion: "Alder Lake", descripcion: "Excelente relación precio-rendimiento", imagen: "cpu_12400f.jpg", stock: 5 },
        { id: 3, nombre: "AMD Ryzen 7 5800X", precio: 279900, marca: "AMD", socket: "AM4", nucleos: 8, hilos: 16, frecuencia: "4.7 GHz", tdp: 105, generacion: "Zen 3", descripcion: "Alto rendimiento para tareas exigentes", imagen: "cpu_5800x.jpg", stock: 3 }
    ],
    placas_video: [
        { id: 4, nombre: "NVIDIA RTX 3060 12GB", precio: 329900, marca: "NVIDIA", vram: "12GB GDDR6", consumo: 170, dlss: true, raytracing: true, descripcion: "Ideal para 1080p ultra", imagen: "rtx3060.jpg", stock: 6 },
        { id: 5, nombre: "NVIDIA RTX 4060 Ti 8GB", precio: 459900, marca: "NVIDIA", vram: "8GB GDDR6", consumo: 160, dlss: true, raytracing: true, descripcion: "DLSS 3, perfecta para 1440p", imagen: "rtx4060ti.jpg", stock: 4 },
        { id: 6, nombre: "AMD Radeon RX 6600 8GB", precio: 249900, marca: "AMD", vram: "8GB GDDR6", consumo: 132, dlss: false, raytracing: true, descripcion: "Buena opción económica para 1080p", imagen: "rx6600.jpg", stock: 2 }
    ],
    coolers: [
        { id: 7, nombre: "Cooler Master Hyper 212", precio: 28900, marca: "Cooler Master", tipo: "Aire", rpm: "650-2000", ruido: "26 dBA", socket_compatible: ["AM4","LGA1700"], descripcion: "Disipador de aire eficiente", imagen: "hyper212.jpg", stock: 10 },
        { id: 8, nombre: "NZXT Kraken X53", precio: 129900, marca: "NZXT", tipo: "Liquido 240mm", rpm: "500-2000", ruido: "36 dBA", socket_compatible: ["AM4","AM5","LGA1700"], descripcion: "Refrigeración líquida RGB", imagen: "krakenx53.jpg", stock: 7 },
        { id: 9, nombre: "Noctua NH-D15", precio: 99900, marca: "Noctua", tipo: "Aire doble torre", rpm: "300-1500", ruido: "24.6 dBA", socket_compatible: ["AM4","AM5","LGA1700"], descripcion: "Silencioso y potente", imagen: "nhd15.jpg", stock: 5 }
    ],
    gabinetes: [
        { id: 10, nombre: "Corsair 4000D Airflow", precio: 89900, marca: "Corsair", tipo: "Mid Tower", ventiladores_incluidos: 2, rgb: false, formato: "ATX", descripcion: "Excelente flujo de aire", imagen: "4000d.jpg", stock: 9 },
        { id: 11, nombre: "Lian Li PC-O11 Dynamic", precio: 149900, marca: "Lian Li", tipo: "Mid Tower", ventiladores_incluidos: 0, rgb: false, formato: "ATX", descripcion: "Panel de vidrio templado", imagen: "o11d.jpg", stock: 4 },
        { id: 12, nombre: "NZXT H510", precio: 69900, marca: "NZXT", tipo: "Mid Tower", ventiladores_incluidos: 2, rgb: false, formato: "ATX", descripcion: "Diseño minimalista", imagen: "h510.jpg", stock: 6 }
    ],
    monitores: [
        { id: 13, nombre: "LG 24GL600F", precio: 189900, marca: "LG", resolucion: "1920x1080", panel: "TN", refresco: "144Hz", tiempo_respuesta: "1ms", descripcion: "Monitor gaming económico", imagen: "lg24.jpg", stock: 3 },
        { id: 14, nombre: "Samsung Odyssey G5", precio: 289900, marca: "Samsung", resolucion: "2560x1440", panel: "VA", refresco: "165Hz", tiempo_respuesta: "1ms", descripcion: "Curvo, 2K", imagen: "odyssey.jpg", stock: 5 },
        { id: 15, nombre: "Dell S2721DGF", precio: 399900, marca: "Dell", resolucion: "2560x1440", panel: "IPS", refresco: "165Hz", tiempo_respuesta: "1ms", descripcion: "Calidad profesional", imagen: "dell27.jpg", stock: 2 }
    ],
    perifericos: [
        { id: 16, nombre: "Logitech G203", precio: 18900, marca: "Logitech", tipo: "Mouse", dpi: 8000, cable: "USB", rgb: true, descripcion: "Mouse gaming económico", imagen: "g203.jpg", stock: 12 },
        { id: 17, nombre: "HyperX Alloy Origins", precio: 45900, marca: "HyperX", tipo: "Teclado", switch: "Red", formato: "TKL", retroiluminacion: "RGB", descripcion: "Teclado mecánico", imagen: "alloy.jpg", stock: 8 },
        { id: 18, nombre: "SteelSeries Arctis 5", precio: 69900, marca: "SteelSeries", tipo: "Auriculares", sonido: "7.1 virtual", conector: "USB", rgb: true, descripcion: "Sonido envolvente", imagen: "arctis5.jpg", stock: 5 }
    ],
    motherboards: [
        { id: 19, nombre: "ASUS TUF B450M-Plus", precio: 78900, marca: "ASUS", socket: "AM4", formato: "Micro-ATX", chipset: "B450", descripcion: "Buena calidad-precio", imagen: "b450m.jpg", tipo_ram: "DDR4", stock: 7 },
        { id: 20, nombre: "MSI B550 Tomahawk", precio: 159900, marca: "MSI", socket: "AM4", formato: "ATX", chipset: "B550", descripcion: "PCIe 4.0, robusta", imagen: "b550.jpg", tipo_ram: "DDR4", stock: 4 },
        { id: 21, nombre: "Gigabyte Z690 UD", precio: 229900, marca: "Gigabyte", socket: "LGA1700", formato: "ATX", chipset: "Z690", descripcion: "Para Intel 12th", imagen: "z690.jpg", tipo_ram: "DDR4", stock: 3 },
        { id: 22, nombre: "ASRock B760M Steel Legend", precio: 189900, marca: "ASRock", socket: "LGA1700", formato: "Micro-ATX", chipset: "B760", descripcion: "DDR5", imagen: "b760.jpg", tipo_ram: "DDR5", stock: 6 }
    ],
    memorias_ram: [
        { id: 23, nombre: "Kingston Fury 8GB DDR4", precio: 28900, marca: "Kingston", capacidad: 8, tipo: "DDR4", velocidad: "3200MHz", latencia: "CL16", descripcion: "Módulo individual", imagen: "ram8.jpg", stock: 10 },
        { id: 24, nombre: "Corsair Vengeance 16GB (2x8) DDR4", precio: 68900, marca: "Corsair", capacidad: 16, tipo: "DDR4", velocidad: "3600MHz", latencia: "CL18", descripcion: "Dual channel RGB", imagen: "ram16.jpg", stock: 8 },
        { id: 25, nombre: "Kingston Fury 32GB (2x16) DDR5", precio: 129900, marca: "Kingston", capacidad: 32, tipo: "DDR5", velocidad: "5200MHz", latencia: "CL40", descripcion: "Alta velocidad", imagen: "ram32.jpg", stock: 5 }
    ],
    almacenamiento: [
        { id: 26, nombre: "SSD WD Green 240GB", precio: 18900, marca: "Western Digital", tipo: "SSD", capacidad: 240, formato: "2.5 pulgadas", interfaz: "SATA III", descripcion: "Básico para sistema", imagen: "ssd240.jpg", stock: 15 },
        { id: 27, nombre: "SSD Kingston NV1 500GB M.2", precio: 38900, marca: "Kingston", tipo: "SSD", capacidad: 500, formato: "M.2 2280", interfaz: "NVMe PCIe", descripcion: "Rápido", imagen: "nv1.jpg", stock: 7 },
        { id: 28, nombre: "HDD Seagate BarraCuda 1TB", precio: 35900, marca: "Seagate", tipo: "HDD", capacidad: 1000, rpm: 7200, formato: "3.5 pulgadas", descripcion: "Almacenamiento masivo", imagen: "hdd1tb.jpg", stock: 9 },
        { id: 29, nombre: "HDD WD Blue 2TB", precio: 58900, marca: "Western Digital", tipo: "HDD", capacidad: 2000, rpm: 5400, formato: "3.5 pulgadas", descripcion: "Para archivos", imagen: "hdd2tb.jpg", stock: 6 }
    ],
    fuentes_poder: [
        { id: 30, nombre: "EVGA 600W 80+ White", precio: 45900, marca: "EVGA", potencia: 600, eficiencia: "80+ White", modular: false, descripcion: "Económica", imagen: "evga600.jpg", stock: 8 },
        { id: 31, nombre: "Corsair CX650M", precio: 78900, marca: "Corsair", potencia: 650, eficiencia: "80+ Bronze", modular: "Semi", descripcion: "Buena calidad", imagen: "cx650.jpg", stock: 5 },
        { id: 32, nombre: "Cooler Master 750W Gold", precio: 129900, marca: "Cooler Master", potencia: 750, eficiencia: "80+ Gold", modular: "Full", descripcion: "Alta eficiencia", imagen: "cm750.jpg", stock: 3 }
    ],
    pc_armadas: [
        { id: 33, nombre: "PC Gamer Ultra", precio: 799900, marca: "Custom PC", descripcion: "Ryzen 7, RTX 4060, 32GB RAM, 1TB SSD", imagen: "pc_ultra.jpg", stock: 2 },
        { id: 34, nombre: "PC Diseño Profesional", precio: 899900, marca: "Workstation", descripcion: "Intel i9, RTX 4070, 64GB RAM, 2TB SSD", imagen: "pc_diseno.jpg", stock: 1 },
        { id: 35, nombre: "PC Oficina Essential", precio: 249900, marca: "Office PC", descripcion: "Intel i3, 8GB RAM, 256GB SSD", imagen: "pc_oficina.jpg", stock: 4 }
    ]
};

function getAllProducts() {
    let all = [];
    for (let cat in productosDB) {
        all = all.concat(productosDB[cat]);
    }
    return all;
}

function getProductById(id) {
    return getAllProducts().find(p => p.id === id);
}
