# PortfoliOS - Cloud Native Portfolio Application

Status: Final Project for "Intelligent Cloud & Data Processing"
URL_1: [Container App](https://portfolio-os.ashyisland-556e7f91.polandcentral.azurecontainerapps.io/)
URL_1: [Cluster](http://huawei-cloud-portfolio-os.austriaeast.cloudapp.azure.com/)


## 📋 Project Description
A single-page portfolio application for an iOS developer. Built with Angular and deployed on Microsoft Azure using containerization and CI/CD practices.

## 🏗 Architecture & Technologies
*   Frontend: Angular (TypeScript), CSS, HTML.
*   Containerization: Docker (Multi-stage build to optimize image size).
*   Cloud: Microsoft Azure Container Apps.
*   CI/CD: GitHub Actions (automatic build and deployment on push to the main branch).
*   Orchestration: Kubernetes Manifests (used for Azure Container App configuration).

## 🚀 Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/Fedor-Hill/PortfoliOS.git
cd PortfoliOS/portfolio-os

# 2. Install dependencies
npm install

# 3. Run locally
ng serve
```
