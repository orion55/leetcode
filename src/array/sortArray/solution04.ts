import * as fs from 'fs';
import * as readline from 'readline';

// Split and sort large file
async function splitAndSortFile(filePath: string, chunkSize: number): Promise<string[]> {
  const tempFiles: string[] = [];
  const lines: string[] = [];

  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({ input: fileStream });

  let lineCount = 0;
  for await (const line of rl) {
    lines.push(line);
    lineCount++;

    if (lineCount >= chunkSize) {
      lines.sort();
      const tempFilePath = `temp_${tempFiles.length}.txt`;
      fs.writeFileSync(tempFilePath, lines.join('\n'));
      tempFiles.push(tempFilePath);
      lines.length = 0;
      lineCount = 0;
    }
  }

  if (lines.length > 0) {
    lines.sort();
    const tempFilePath = `temp_${tempFiles.length}.txt`;
    fs.writeFileSync(tempFilePath, lines.join('\n'));
    tempFiles.push(tempFilePath);
  }

  return tempFiles;
}

// Merge sorted temporary files
async function mergeFiles(tempFiles: string[], outputFilePath: string): Promise<void> {
  const streams = tempFiles.map((file) => fs.createReadStream(file));
  const readers = streams.map((stream) => readline.createInterface({ input: stream }));
  const currentLines: (string | null)[] = [];

  for (const reader of readers) {
    const line = await new Promise<string | null>((resolve) => {
      reader.once('line', resolve);
      reader.once('close', () => resolve(null));
    });
    currentLines.push(line);
  }
  const outputStream = fs.createWriteStream(outputFilePath);

  while (currentLines.some((line) => line !== null)) {
    let minIndex = -1;
    let minValue: string | null = null;

    for (let i = 0; i < currentLines.length; i++) {
      if (currentLines[i] !== null && (minValue === null || currentLines[i]! < minValue)) {
        minValue = currentLines[i];
        minIndex = i;
      }
    }

    if (minIndex === -1) break;

    outputStream.write(minValue + '\n');

    const newLine = await new Promise<string | null>((resolve) => {
      readers[minIndex].once('line', resolve);
      readers[minIndex].once('close', () => resolve(null));
    });

    currentLines[minIndex] = newLine as string | null;
  }

  outputStream.close();
  streams.forEach((stream) => stream.close());

  // Cleanup temporary files
  for (const tempFile of tempFiles) {
    fs.unlinkSync(tempFile);
  }
}

// Main function to sort a large file
async function sortLargeFile(filePath: string, outputFilePath: string, chunkSize: number = 10000): Promise<void> {
  console.log('Splitting and sorting file...');
  const tempFiles = await splitAndSortFile(filePath, chunkSize);
  console.log('Merging sorted files...');
  await mergeFiles(tempFiles, outputFilePath);
  console.log('Sorting complete.');
}

// Example usage
const inputFilePath = 'large_file.txt';
const outputFilePath = 'sorted_large_file.txt';
sortLargeFile(inputFilePath, outputFilePath).catch(console.error);
