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

- **Next.js 15** - Framework de React con App Router y Turbopack
- **React 19** - Biblioteca de interfaces de usuario
- **TypeScript** - Tipado estático para JavaScript
- **SASS/SCSS** - Preprocesador CSS con arquitectura modular
- **ESLint** - Linter de código con configuración de Next.js
- **Playwright** - Framework de testing E2E y testing unitario
- **Docker** - Containerización para desarrollo y producción

## 🎨 Arquitectura de Estilos

El proyecto utiliza **SASS/SCSS** con una arquitectura modular:

```
src/styles/
├── main.scss              # Archivo principal
├── globals.scss           # Variables CSS, reset y utilidades
└── components/            # Estilos por componente
    ├── layout.scss        # Layout y grids
    ├── navbar.scss        # Barra de navegación
    ├── buttons.scss       # Sistema de botones
    ├── cards.scss         # Tarjetas de productos
    ├── cart.scss          # Carrito de compras
    ├── forms.scss         # Formularios
    ├── tables.scss        # Tablas
    └── typography.scss    # Tipografía
```

### Variables CSS Personalizadas

- Sistema de colores completo (grays, blues, states)
- Espaciado consistente con escala
- Tipografía escalable
- Sombras y transiciones

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
# Desarrollo con Turbopack
npm run dev

# Construcción para producción
npm run build

# Construcción para desarrollo
npm run build:dev

# Ejecutar en producción
npm start

# Ejecutar en modo desarrollo
npm run start:dev

# Ejecutar en modo producción
npm run start:prod

# Linter
npm run lint

# Testing E2E con Playwright
npm test

# Testing unitario con Playwright
npm run test-ct

# Docker - Ejecutar aplicación en contenedor
npm run docker:run

# Docker - Detener contenedor
npm run docker:stop
```

## 🧪 Testing

### Testing Unitario (Playwright)

A pesar de que soy un enamorado de React Testing Library, me temo que para server components y React 19 la librería deja mucho que desear. Habría que estar mockeando demasiadas características (incluso componentes dentro del componente) que al final los tests de esta manera perderían gran parte de su valor. Por esta razón se ha decidido implementar testing unitarios con la funcionalidad Test Components de Playwright ([https://playwright.dev/docs/test-components](https://playwright.dev/docs/test-components)).

Como ejemplo de test unitario puedes consultar el fichero [`src/app/phone/(components)/PhoneCard.spec.tsx`](./src/app/phone/(components)/PhoneCard.spec.tsx) en este repositorio. Aunque no todos los componentes están testeados unitariamente debido a limitaciones de tiempo, la configuración está preparada para ello.

- Soporte para TypeScript
- Configuración para Next.js

### Testing E2E (Playwright)

- Tests de navegación y flujo completo
- Soporte para múltiples navegadores. Para desarrollar se ha dejado solo los tests en chromium por motivos de velocidad y para CI se añadirían los más importantes [`./playwright.config.ts`](./playwright.config.ts)

```bash
# Ejecutar tests E2E
npm run test

# Ejecutar tests de componentes
npm run test-ct
```

**Nota:** El archivo `tests/cart.spec.ts` está actualmente vacío y pendiente de implementación.

## 🐳 Docker

El proyecto incluye soporte completo para Docker:

```bash
# Ejecutar en Docker (build + run)
npm run docker:run

# La aplicación estará disponible en http://localhost:3000

# Detener contenedor Docker
npm run docker:stop
```

## 🏗️ Estructura del Proyecto

```
phone-store/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── cart/              # Página del carrito
│   │   ├── phone/             # Página de detalle
│   │   │   ├── (components)/  # Componentes específicos
│   │   │   └── [id]/          # Página dinámica de detalle
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Página de inicio
│   │   ├── loading.tsx        # UI de carga
│   │   └── error.tsx          # UI de errores
│   ├── components/            # Componentes reutilizables
│   │   ├── GoBackButton.tsx   # Botón volver atrás
│   │   └── Navbar.tsx         # Barra de navegación
│   ├── contexts/              # Contextos de React
│   │   └── CartContext.tsx    # Contexto del carrito
│   ├── hooks/                 # Hooks personalizados
│   │   └── useCart.ts         # Hook del carrito
│   ├── services/              # Servicios y API
│   │   └── phoneService.ts    # Servicio de llamada a la API
│   ├── styles/                # Arquitectura SASS
│   │   ├── main.scss          # Archivo principal
│   │   ├── globals.scss       # Variables y base
│   │   └── components/        # Estilos por componente
│   ├── types/                 # Definiciones de tipos
│   │   └── phone.ts           # Tipos de teléfonos
│   └── data/                  # Datos mock
│       └── mocks.ts           # Datos mock de teléfonos
├── tests/                     # Tests E2E con Playwright
│   ├── home.spec.ts          # Tests de la página principal
│   ├── detail.spec.ts        # Tests de detalle
│   ├── cart.spec.ts          # Tests del carrito (pendiente)
│   ├── navigation.spec.ts    # Tests de navegación
│   └── consts.ts             # Constantes para tests
├── Dockerfile                # Configuración Docker
├── jest.config.js            # Configuración Jest
├── playwright.config.ts     # Configuración Playwright
├── playwright-ct.config.ts  # Configuración Playwright para componentes
└── package.json             # Dependencias y scripts
```

## 🔧 Configuración

### Modo Desarrollo vs Producción

- **Desarrollo (`npm run dev`)**:

  - Turbopack para builds ultra-rápidos
  - Hot reload automático
  - Source maps para debugging
- **Producción (`npm run build && npm start`)**:

  - Assets optimizados y minimizados
  - Tree shaking automático
  - Optimizaciones de Next.js

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
8. **Testing**: Cobertura E2E y ejemplo de unitario
9. **Docker**: Containerización completa

## 📝 Notas de Desarrollo

**Priorización de Funcionalidad**: Debido a limitaciones de tiempo, se priorizó la implementación completa de funcionalidades sobre el diseño visual. El enfoque principal fue asegurar que todas las características requeridas funcionaran correctamente, con un diseño funcional que cumpliera con los objetivos del proyecto.

## 👥 Autor

Desarrollado por Néstor Domínguez como prueba técnica para demostrar habilidades en React 19, Next.js 15, SASS/SCSS y desarrollo frontend moderno.
