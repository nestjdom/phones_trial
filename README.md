# PhoneStore - Tienda de Teléfonos

Una aplicación completa de comercio electrónico para teléfonos móviles construida con **Next.js 15** y **React 19**.

## 🚀 Características Principales

### 📱 Vista Listado de Teléfonos
- ✅ Cuadrícula con los primeros 20 teléfonos de la API
- ✅ Tarjetas con imagen, nombre, marca y precio base
- ✅ Buscador en tiempo real que filtra por nombre o marca
- ✅ Indicador con número de resultados encontrados
- ✅ Barra de navegación con iconos de inicio y carrito
- ✅ Contador de productos en el carrito
- ✅ Carrito persistente con localStorage

### 🔍 Vista Detalle de Teléfono
- ✅ Información completa del teléfono seleccionado
- ✅ Imagen grande que cambia dinámicamente según el color
- ✅ Selectores para almacenamiento y color
- ✅ Actualización de precio en tiempo real
- ✅ Especificaciones técnicas detalladas
- ✅ Botón "Añadir al carrito" (activado solo con selecciones completas)
- ✅ Sección de productos similares

### 🛒 Vista de Carrito
- ✅ Lista de productos añadidos con especificaciones
- ✅ Controles de cantidad para cada producto
- ✅ Botón para eliminar productos individuales
- ✅ Precio total de la compra
- ✅ Botón "Continuar comprando"
- ✅ Persistencia en localStorage

## 🛠️ Tecnologías Utilizadas

- **Next.js 15** - Framework de React con App Router
- **React 19** - Biblioteca de interfaces de usuario
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utilitario
- **ESLint** - Linter de código

## 📦 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clona el repositorio:**
```bash
git clone <repository-url>
cd phone-store
```

2. **Instala las dependencias:**
```bash
npm install
```

3. **Ejecuta el servidor de desarrollo:**
```bash
npm run dev
```

4. **Abre tu navegador en:**
```
http://localhost:3000
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Ejecutar en producción
npm start

# Linter
npm run lint
```

## 🏗️ Estructura del Proyecto

```
phone-store/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── api/               # Rutas API
│   │   │   └── phones/        # Endpoints de teléfonos
│   │   ├── cart/              # Página del carrito
│   │   ├── phone/[id]/        # Página de detalle
│   │   ├── globals.css        # Estilos globales
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx           # Página de inicio
│   ├── components/            # Componentes reutilizables
│   │   ├── Navbar.tsx         # Barra de navegación
│   │   ├── SearchBar.tsx      # Barra de búsqueda
│   │   └── PhoneCard.tsx      # Tarjeta de teléfono
│   ├── context/               # Contextos de React
│   │   └── CartContext.tsx    # Contexto del carrito
│   ├── hooks/                 # Hooks personalizados
│   │   └── useCart.ts         # Hook del carrito
│   ├── types/                 # Definiciones de tipos
│   │   └── phone.ts           # Tipos de teléfonos
│   └── data/                  # Datos mock
│       └── phones.ts          # Datos de teléfonos
├── public/                    # Archivos estáticos
└── package.json              # Dependencias y scripts
```

## 🔧 Configuración

### Modo Desarrollo vs Producción

- **Desarrollo (`npm run dev`)**: Assets sin minimizar, recarga en caliente
- **Producción (`npm run build && npm start`)**: Assets optimizados y concatenados

### Variables de Entorno

El proyecto funciona sin configuración adicional, utilizando datos mock incluidos.

## 📱 Funcionalidades Implementadas

### ✅ Requisitos Cumplidos

1. **Vista Listado**: Cuadrícula de 20 teléfonos con búsqueda en tiempo real
2. **Vista Detalle**: Selección de color/almacenamiento con actualización de precio
3. **Vista Carrito**: Gestión completa de productos con persistencia
4. **Navegación**: Barra con iconos y contador del carrito
5. **API**: Endpoints RESTful para búsqueda y detalles
6. **Persistencia**: localStorage para el carrito
7. **Responsivo**: Diseño adaptable a móviles y desktop

### 🔮 Mejoras Futuras

- Sistema de autenticación
- Pasarela de pago
- Wishlist/favoritos
- Filtros avanzados (precio, marca, características)
- Reviews y calificaciones
- Comparador de productos

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Autor

Desarrollado como prueba técnica para demostrar habilidades en React 19, Next.js 15 y desarrollo frontend moderno.
