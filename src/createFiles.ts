import * as fs from 'fs';
import * as path from 'path';

const BASE_PATH = __dirname;
const FILE_NAMES = ['description.md', 'solution.js'];

// Переменные
const category: string = 'misc';
const folderName: string = 'interview';

/**
 * Создаёт папку и пустые файлы в указанном пути.
 */
function createFiles(): void {
  // Полный путь до папки
  const folderPath = path.join(BASE_PATH, category, folderName);

  // Создание папки, если она не существует
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`Папка создана: ${folderPath}`);
  } else {
    console.log(`Папка уже существует: ${folderPath}`);
  }

  // Создание файлов
  for (const fileName of FILE_NAMES) {
    const filePath = path.join(folderPath, fileName);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '');
      console.log(`Файл создан: ${filePath}`);
    } else {
      console.log(`Файл уже существует: ${filePath}`);
    }
  }
}

createFiles();
