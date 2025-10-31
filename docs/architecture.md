# System Architecture

## Overview
DevOps Simulator follows a **microservices architecture** designed for **high availability**, **scalability**, and **rapid development iteration**.

This document covers both **Production** and **Development** environments.

---

## 🏭 Production Architecture

### 1. Application Server
- **Technology**: Node.js + Express  
- **Port**: 8080  
- **Scaling**: Horizontal auto-scaling enabled  
- **Deployment Type**: Containerized (Kubernetes)  

### 2. Database Layer
- **Database**: PostgreSQL 14  
- **Configuration**: Master-slave replication  
- **Backup**: Daily automated backups with 30-day retention  

### 3. Monitoring System
- **Tool**: Prometheus + Grafana  
- **Metrics**: CPU, Memory, Disk, Network  
- **Alerts**: Email notifications for critical issues  

### 4. Deployment Strategy
- **Method**: Rolling updates  
- **Zero-downtime**: ✅ Enabled  
- **Rollback**: Automated on failure  

### 5. Security
- SSL/TLS encryption  
- Encrypted database connections  
- Regular security audits and penetration testing  

---

## 💻 Development Architecture

**Version**: Development (v2.0-beta)  
Includes experimental and hot-reload features.

### 1. Application Server
- **Technology**: Node.js + Express (with hot reload)  
- **Port**: 3000  
- **Scaling**: Manual (single instance)  
- **Debug**: Chrome DevTools debugger on port 9229  

### 2. Database Layer
- **Database**: PostgreSQL 14 (local instance)  
- **Configuration**: Single instance (no replication)  
- **Backup**: Manual backups  
- **Seeding**: Auto-seed with sample data on startup  

### 3. Monitoring System
- **Tool**: Console logging + optional Prometheus  
- **Metrics**: CPU, Memory, Disk, Network, Build time  
- **Alerts**: Console warnings only  
- **Dashboard**: Web-based dashboard (in development)  

### 4. Container Orchestration
- **Tool**: Docker Compose  
- **Services**: App, Database, Redis cache  
- **Volume Mounts**: Code directory mounted for hot reload  

### 5. Authentication System (Beta)
- **Method**: OAuth2 + JWT  
- **Providers**: Google, GitHub  
- **Sessions**: Redis-based session storage  

### 6. Development Workflow
1. Make code changes  
2. Auto-reload triggers rebuild  
3. Run unit tests  
4. Check console logs and metrics  
5. Commit when stable  

### 7. Security (Development)
- SSL/TLS disabled (local only)  
- Database credentials in plain text  
- CORS enabled for all origins  
- Debug endpoints exposed  

---

## ⚙️ Experimental Features
> ⚠️ These are under active testing:
- Multi-cloud deployment  
- AI-powered log analysis  
- Automatic rollback on anomaly detection  

---

## Summary
| Environment | Port | Scaling | Monitoring | Deployment | Security |
|--------------|------|----------|-------------|-------------|-----------|
| Production   | 8080 | Auto     | Prometheus + Grafana | Rolling Updates | TLS + Audits |
| Development  | 3000 | Manual   | Console + Prometheus | Docker Compose | Debug + CORS |
