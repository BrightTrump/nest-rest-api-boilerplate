import { ConsoleLogger, Injectable } from '@nestjs/common';
import fs from 'fs';
import path from 'path';
import { promises as fsPromises } from 'fs';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
  private logDir = path.join(process.cwd(), 'logs');
  private logFile = path.join(this.logDir, 'myLogFile.log');

  private async logToFile(entry: string) {
    const formattedEntry = `${Intl.DateTimeFormat('en-US', {
      dateStyle: 'short',
      timeStyle: 'short',
    }).format(new Date())}\t${entry}\n`;

    try {
      if (!fs.existsSync(this.logDir)) {
        await fsPromises.mkdir(this.logDir, { recursive: true });
      }

      await fsPromises.appendFile(this.logFile, formattedEntry);
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  }

  log(message: any, context?: string) {
    const entry = `${context ?? 'App'}\t${message}`;
    this.logToFile(entry);
    super.log(message, context);
  }

  error(message: any, stack?: string, context?: string) {
    const entry = `${context ?? 'App'}\t${message}\t${stack ?? ''}`;
    this.logToFile(entry);
    super.error(message, stack, context);
  }

  warn(message: any, context?: string) {
    const entry = `WARN\t${context ?? 'App'}\t${message}`;
    this.logToFile(entry);
    super.warn(message, context);
  }
}
