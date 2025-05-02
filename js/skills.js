// Skills data
const skillsData = {
    'AWS': {
        services: ['Lambda', 'CloudWatch', 'S3', 'EC2', 'ECR', 'RDS', 'ECS', 'SES', 'Route53', 'API Gateway'],
        description: 'Extensive experience in AWS cloud services and infrastructure management.'
    },
    'Azure': {
        services: ['Azure Functions', 'Azure Monitor', 'Blob Storage', 'Virtual Machines', 'Azure DevOps'],
        description: 'Proficient in Azure cloud services and solutions.'
    },
    'Jenkins': {
        services: ['CI/CD Pipelines', 'Pipeline as Code', 'Jenkinsfile', 'Plugins'],
        description: 'Expertise in Jenkins CI/CD implementation and automation.'
    },
    'GitHub Actions': {
        services: ['Workflows', 'Actions', 'Self-hosted Runners', 'Secrets Management'],
        description: 'Experience in GitHub Actions workflow automation.'
    },
    'Azure DevOps': {
        services: ['Pipelines', 'Boards', 'Repos', 'Artifacts'],
        description: 'Proficient in Azure DevOps tools and services.'
    },
    'DevSecOps': {
        services: ['Security Scanning', 'Compliance Automation', 'Vulnerability Management', 'Security Testing', 'Policy as Code'],
        description: 'Strong background in DevSecOps practices and security automation.'
    },
    'Compliance': {
        services: ['SOC 2', 'GDPR', 'HIPAA', 'PCI DSS', 'FERPA'],
        description: 'Experience in implementing and maintaining compliance frameworks.'
    },
    'Security Tools': {
        services: ['SonarQube', 'OWASP ZAP', 'Aqua Security'],
        description: 'Proficient in various security tools and platforms.'
    },
    'Terraform': {
        services: ['Infrastructure as Code', 'Modules', 'State Management', 'Workspaces', 'Providers'],
        description: 'Expertise in Terraform for infrastructure provisioning.'
    },
    'Ansible': {
        services: ['Playbooks', 'Templates'],
        description: 'Experience in Ansible automation and configuration management.'
    },
    'Docker': {
        services: ['Containerization', 'Dockerfile', 'Docker Compose'],
        description: 'Proficient in Docker containerization and orchestration.'
    },
    'Prometheus': {
        services: ['Metrics Collection', 'Alerting', 'Service Discovery', 'Exporters', 'Recording Rules'],
        description: 'Experience in Prometheus monitoring and alerting.'
    },
    'Grafana': {
        services: ['Dashboards', 'Visualization', 'Alerting', 'Plugins', 'Data Sources'],
        description: 'Proficient in Grafana dashboard creation and monitoring.'
    },
    'Dynatrace': {
        services: ['Application Monitoring', 'Infrastructure Monitoring', 'Synthetic Monitoring'],
        description: 'Experience in Dynatrace observability platform.'
    },
    'Kubernetes': {
        services: ['Container Orchestration', 'Deployments', 'Services', 'Ingress', 'Helm'],
        description: 'Expertise in Kubernetes cluster management and operations.'
    },
    'Helm': {
        services: ['Charts', 'Releases', 'Templates', 'Values', 'Repositories'],
        description: 'Proficient in Helm package management for Kubernetes.'
    }
};

// Create modal element
function createModal() {
    const modal = document.createElement('div');
    modal.className = 'skill-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2 class="modal-title"></h2>
            <p class="modal-description"></p>
            <div class="services-container">
                <h3>Services & Technologies</h3>
                <div class="services-grid"></div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    return modal;
}

// Initialize skills interaction
function initSkills() {
    const modal = createModal();
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const skillName = item.querySelector('span').textContent;
            const skillData = skillsData[skillName];
            
            if (skillData) {
                modal.querySelector('.modal-title').textContent = skillName;
                modal.querySelector('.modal-description').textContent = skillData.description;
                
                const servicesGrid = modal.querySelector('.services-grid');
                servicesGrid.innerHTML = '';
                
                skillData.services.forEach(service => {
                    const serviceItem = document.createElement('div');
                    serviceItem.className = 'service-item';
                    serviceItem.textContent = service;
                    servicesGrid.appendChild(serviceItem);
                });

                // Get the clicked item's position and dimensions
                const rect = item.getBoundingClientRect();
                const modalContent = modal.querySelector('.modal-content');
                
                // Get viewport dimensions
                const viewportHeight = window.innerHeight;
                const viewportWidth = window.innerWidth;
                
                // Get modal dimensions
                const modalHeight = modalContent.offsetHeight;
                const modalWidth = modalContent.offsetWidth;
                
                // Calculate initial position (centered horizontally relative to clicked item)
                let top = rect.top;
                let left = rect.left + rect.width / 2;
                
                // Adjust vertical position
                if (top + modalHeight > viewportHeight) {
                    // If modal would go off bottom, position it above the clicked item
                    top = rect.top - modalHeight - 20;
                    // If it would go off top, position it at the top with padding
                    if (top < 20) {
                        top = 20;
                    }
                }
                
                // Adjust horizontal position
                if (left + modalWidth/2 > viewportWidth) {
                    // If modal would go off right, align it with the right edge
                    left = viewportWidth - modalWidth/2 - 20;
                } else if (left - modalWidth/2 < 0) {
                    // If modal would go off left, align it with the left edge
                    left = modalWidth/2 + 20;
                }
                
                // Apply the calculated position
                modalContent.style.top = `${top}px`;
                modalContent.style.left = `${left}px`;
                modalContent.style.transform = 'translateX(-50%)';
                
                // Show the modal
                modal.style.display = 'block';
                
                // Add a small delay to ensure the modal is rendered before checking its position
                setTimeout(() => {
                    const finalRect = modalContent.getBoundingClientRect();
                    
                    // Final check and adjustment if needed
                    if (finalRect.bottom > viewportHeight) {
                        modalContent.style.top = `${viewportHeight - finalRect.height - 20}px`;
                    }
                    if (finalRect.right > viewportWidth) {
                        modalContent.style.left = `${viewportWidth - finalRect.width/2 - 20}px`;
                    }
                    if (finalRect.left < 0) {
                        modalContent.style.left = `${finalRect.width/2 + 20}px`;
                    }
                }, 0);
            }
        });
    });

    // Close modal when clicking the close button
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initSkills); 