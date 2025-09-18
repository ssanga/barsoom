# Barsoom Custom Action

Una custom action de GitHub personalizada desarrollada en Node.js.

## Descripción

Esta action permite ejecutar tareas personalizadas en tus workflows de GitHub con inputs configurables y outputs informativos.

## Inputs

| Input | Descripción | Requerido | Default |
|-------|-------------|-----------|---------|
| `message` | Mensaje a mostrar | Sí | `Hello from Barsoom!` |
| `target` | Entorno objetivo | No | `production` |

## Outputs

| Output | Descripción |
|--------|-------------|
| `result` | Resultado de la ejecución en formato JSON |
| `timestamp` | Timestamp de la ejecución |

## Uso

```yaml
- name: Ejecutar Barsoom Action
  uses: ./
  with:
    message: 'Mi mensaje personalizado'
    target: 'staging'
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Desarrollo

### Instalación

```bash
npm install
```

### Build

```bash
npm run package
```

### Testing

La action incluye un workflow de prueba que se ejecuta automáticamente en push y pull requests.

## Estructura del Proyecto

- `index.js` - Código principal de la action
- `action.yml` - Metadata de la action
- `package.json` - Dependencias y scripts
- `.github/workflows/test.yml` - Workflow de pruebas