export interface ProjectCard {
  title: string;
  description: string;
  tech: string[];
  metric?: string;
}

export const projects: ProjectCard[] = [
  {
    title: "Industrial Modbus-to-MQTT IoT Gateway",
    description:
      "Complete ESP32 firmware architecture using FreeRTOS for industrial Modbus-to-cloud data pipeline with TLS security and offline resilience.",
    tech: ["ESP32", "FreeRTOS", "C", "MQTT", "AWS IoT Core"],
    metric: "70+ devices deployed",
  },
  {
    title: "Multi-Tenant IoT Cloud Platform",
    description:
      "Full cloud backend with multi-tenant isolation, real-time telemetry ingestion, WebSocket alerts, and custom reporting dashboards.",
    tech: ["AWS", "DynamoDB", "Lambda", "Next.js", "WebSocket"],
    metric: "5 industrial customers",
  },
  {
    title: "STM32MP157 Linux BSP Gateway",
    description:
      "Dual-core industrial gateway with Linux BSP bring-up, Device Tree configuration, DRM/KMS display integration, and Yocto custom image.",
    tech: ["STM32MP1", "Linux", "Device Tree", "Yocto", "DRM/KMS"],
    metric: "Dual Cortex-A7/M4",
  },
  {
    title: "Firmware Code-Generation Tool",
    description:
      "Python CLI that auto-generates production-ready C firmware from Modbus register maps, eliminating repetitive per-device changes.",
    tech: ["Python", "C Code Gen", "Excel"],
    metric: "Days → under 1 hour",
  },
  {
    title: "GPIO & EXTI Driver — STM32F4 (Bare-Metal)",
    description:
      "Complete GPIO peripheral driver from scratch — direct register programming without HAL, with NVIC + EXTI interrupt handling.",
    tech: ["C", "ARM Cortex-M4", "Bare-Metal"],
  },
  {
    title: "Embedded Linux Data Logger — STM32MP1",
    description:
      "Linux-based data logger on STM32MP1 with multi-process architecture using Unix Domain Sockets, I2C sensor acquisition, and structured logging with syslog/journald integration.",
    tech: ["C", "STM32MP1", "Linux", "I2C", "Syslog"],
    metric: "Dual Cortex-A7/M4",
  },
];
