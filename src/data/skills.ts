export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["C", "C++", "Python", "Bash/Shell", "JavaScript", "SQL"],
  },
  {
    name: "SOC / Embedded",
    skills: [
      "STM32MP157 (Cortex-A7/M4)",
      "STM32F4 (Cortex-M4)",
      "ESP32",
      "Raspberry Pi",
      "FreeRTOS",
      "ESP-IDF",
    ],
  },
  {
    name: "Linux BSP",
    skills: [
      "Device Tree (DTS/DTSI)",
      "Device Drivers",
      "DRM/KMS",
      "GPIO chardev",
      "Yocto",
      "U-Boot",
      "Cross-compilation",
      "systemd",
    ],
  },
  {
    name: "Hardware Interfaces",
    skills: [
      "UART",
      "SPI",
      "I2C",
      "GPIO",
      "RS-485",
      "Modbus RTU/TCP",
      "ADC",
      "USB",
      "Ethernet",
    ],
  },
  {
    name: "Display / Touch",
    skills: ["MIPI-DSI", "DRM/KMS", "Linux framebuffer", "Capacitive touchscreen", "TFT LCD"],
  },
  {
    name: "Protocols",
    skills: ["MQTT (TLS 1.2)", "TCP/IP", "Modbus RTU/TCP", "HTTP/HTTPS", "WebSocket"],
  },
  {
    name: "Tools & DevOps",
    skills: ["GDB", "JTAG", "Logic Analyser", "Git", "GitLab CI/CD", "Docker", "CMake", "Make", "Jenkins"],
  },
  {
    name: "Cloud / IoT",
    skills: ["AWS IoT Core", "Lambda", "API Gateway", "DynamoDB", "RDS (PostgreSQL)", "S3"],
  },
  {
    name: "Security",
    skills: ["Secure Boot V2", "Flash Encryption", "TLS 1.2", "JWT Authentication"],
  },
];
