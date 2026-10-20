import type { AlertItem, FileItem } from "../types";

const API_BASE = "http://127.0.0.1:8000";

export async function listFiles(): Promise<FileItem[]> {
  const response = await fetch(`${API_BASE}/files`, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Не удалось загрузить данные");
  }
  return response.json() as Promise<FileItem[]>;
}

export async function listAlerts(): Promise<AlertItem[]> {
  const response = await fetch(`${API_BASE}/alerts`, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Не удалось загрузить данные");
  }
  return response.json() as Promise<AlertItem[]>;
}

export async function uploadFile(title: string, file: File): Promise<void> {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("file", file);

  const response = await fetch(`${API_BASE}/files`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Не удалось загрузить файл");
  }
}

export function getDownloadUrl(fileId: string): string {
  return `${API_BASE}/files/${fileId}/download`;
}
