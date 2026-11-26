export interface Project {
  name: string;
  tech: string[];
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  projects: Project[];
}

export const experiences: Experience[] = [
  {
    company: "AMSET Technologies Pvt. Ltd.",
    role: "Embedded Systems Engineer",
    period: "July 2024 — Present",
    location: "Pune, India",
    projects: [
      {
        name: "Industrial Modbus-to-MQTT IoT Gateway",
        tech: ["ESP32", "FreeRTOS", "Modbus RTU", "MQTT/TLS", "C", "AWS IoT Core"],
        highlights: [
          "Designed complete gateway firmware architecture on ESP32 using FreeRTOS — structured as independent tasks communicating via queues and semaphores.",
          "Wrote a custom Modbus RTU master driver in C over UART, handling RS-485 framing, CRC validation, and exception codes.",
          "Implemented MQTT client stack with TLS 1.2 and automatic reconnection logic for stable cloud publishing to AWS IoT Core.",
          "Engineered SD-card offline data logging (16 GB, FAT32) with RTC timestamps as a circular buffer; stress-tested with 20,000+ log files.",
          "Hardened firmware security using ESP32 Secure Boot V2 + Flash Encryption.",
          "Deployed to 70+ industrial field devices for multiple customers — firmware is in active production.",
        ],
      },
      {
        name: "Multi-Tenant IoT Cloud Platform",
        tech: ["AWS IoT Core", "DynamoDB", "PostgreSQL", "Lambda (Python)", "Next.js", "WebSocket"],
        highlights: [
          "Architected full cloud backend from scratch; designed for multi-tenant isolation so each customer accesses only their own devices and dashboards.",
          "Built high-speed telemetry ingestion pipeline: AWS IoT Core Rules → Lambda → DynamoDB with GSIs optimized for time-series queries.",
          "Developed real-time alert system using WebSocket API Gateway + DynamoDB Streams with sub-1-second alert delivery.",
          "Platform currently serving 5 industrial customers with hourly, daily, monthly, and custom-range reporting.",
        ],
      },
      {
        name: "Firmware Code-Generation Tool",
        tech: ["Python", "C Code Generation", "Excel Automation"],
        highlights: [
          "Built a Python CLI tool that reads customer-provided Modbus register maps (Excel) and auto-generates production-ready C source files.",
          "Reduced new-device onboarding time from days to under an hour.",
          "Centralized all configuration in one place, cutting firmware defect rate across all deployed gateways.",
        ],
      },
      {
        name: "STM32MP157 Industrial IoT Gateway — Linux BSP & Application",
        tech: ["C", "STM32MP1", "Linux", "Device Tree", "DRM/KMS", "Yocto", "Modbus", "MQTT"],
        highlights: [
          "Brought up a dual-core STM32MP157F-DK2 (Cortex-A7 Linux + Cortex-M4 FreeRTOS) gateway; configured Device Tree for UART7 (RS-485), GPIO, and peripheral pin-muxing.",
          "Developed Linux GPIO chardev driver interface for RS-485 direction control; implemented UART7 enablement via Device Tree overlays.",
          "Integrated a MIPI-DSI TFT touchscreen display using the DRM/KMS subsystem.",
          "Implemented multi-threaded gateway application in C with pthreads — Modbus polling, MQTT publish, offline SD storage with replay.",
          "Configured Yocto build system for custom Linux image with libmodbus, mosquitto, sqlite3, cJSON, OpenSSL, and libcurl.",
          "Managed Cortex-A7 ↔ Cortex-M4 communication using OpenAMP/RPMsg for dual-core coordination.",
        ],
      },
    ],
  },
  {
    company: "Syrma SGS Technology",
    role: "Software Developer Intern",
    period: "January 2024 — May 2024",
    location: "Pune, India",
    projects: [
      {
        name: "CI/CD Pipeline Analytics & BOM Fault Detection Tools",
        tech: ["Python", "Bash", "GitLab API", "MERN", "Nexar API"],
        highlights: [
          "Automated CI/CD pipeline reporting via Bash scripting + GitLab API, saving 2+ hours/day of manual effort.",
          "Improved pipeline success rate from 80% to 90% by identifying recurring failure stages.",
          "Built a BOM fault detection tool using Nexar API; reduced 3+ hour manual BOM review to minutes.",
        ],
      },
    ],
  },
];
