# CP2025 Docs - MkDocs Material

Documentación del proyecto CP2025 desplegada con MkDocs Material en Docker.

### 1. Monitoreo
**Iniciar servicio:**
docker compose up -d
**Apagar servicio:**
docker compose down
**Reiniciar servicio:**
docker compose restart


### 2. Monitoreo
**Ver logs en tiempo real:**
docker compose logs -f
**Ver estado de contenedores:**
docker ps

## Despliegue en Otro Servidor
### 1. Instalar Docker Desktop
https://www.docker.com/products/docker-desktop/

### 2. Clonar o copiar archivos del proyecto
# Opción A: Clonar repositorio completo
git clone https://github.com/YECAPP/CPDOCS
cd CPDOCS

### 3. Iniciar el servicio
docker compose up -d

### 4. Verificar despliegue
## URLs de Acceso
Una vez iniciado el servicio, la documentación estará disponible en el host del servicio:
- **Principal:** [http://[NOMBRE_EQUIPO]:8005/CPDOCS/](http://[NOMBRE_EQUIPO]:8005/CPDOCS/)
- **Alternativa:** [http://{IP_EQUIPO}:8005/CPDOCS/](http://{IP_EQUIPO}:8005/CPDOCS/)

## Notas
- El servicio se ejecuta en el puerto **8005** del host
- Los cambios en archivos `.md` se reflejan automáticamente (hot reload)
- La imagen incluye plugins: mkdocs-macros-plugin, mkdocs-glightbox, pymdown-extensions, mkdocs-material
- Se debe estar en la red contaportableDesign
- Se debe tener docker desktop instalado y corriendo para que funcione "Docker compose up -d"

### Archivos mínimos requeridos para despliegue:
- `docker-compose.yml`
- `docs/` (toda la carpeta)
- `mkdocs.yml`# CPDOCS
