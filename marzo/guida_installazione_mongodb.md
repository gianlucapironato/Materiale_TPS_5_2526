# Guida rapida per l'installazione di MongoDB e Mongosh su Windows

Di seguito le istruzioni per installare MongoDB e la sua shell, Mongosh, su un sistema Windows utilizzando i file zip. I file verranno estratti in `C:\` nelle cartelle `mongodb` e `mongosh`. Successivamente, creeremo due collegamenti sul desktop per un accesso rapido a `mongod.exe` e `mongosh.exe`.

## Prerequisiti

- **Sistema operativo**: Windows 64-bit (8.1 o versioni successive).
- **Permessi**: assicurarsi di avere privilegi di amministratore sul sistema.

## Passaggi per l'installazione

### 1. Installazione di MongoDB

1. **Download di MongoDB**:
    - Visita il [MongoDB Download Center](https://www.mongodb.com/try/download/community).
    - Seleziona la versione desiderata.
    - Nel menu a tendina "Platform", scegli "Windows x64".
    - Nel menu "Package", seleziona "zip".
    - Clicca su "Download".

2. **Estrazione dei file**:
    - Una volta scaricato il file zip, estrailo utilizzando un software di decompressione (come WinRAR o 7-Zip).
    - Sposta la cartella estratta in `C:\` e rinominala in `mongodb`. Il percorso completo dovrebbe essere `C:\mongodb`.

3. **Configurazione della directory dei dati**:
    - MongoDB richiede una cartella per memorizzare i dati.
    - Apri il prompt dei comandi come amministratore.
    - Esegui il comando:
      ```shell
      mkdir C:\data\db
      ```
    - Questo creerà la directory necessaria per i dati di MongoDB.

### 2. Installazione di Mongosh

1. **Download di Mongosh**:
    - Visita il [MongoDB Shell (Mongosh) Download Center](https://www.mongodb.com/try/download/shell).
    - Nel menu a tendina "Platform", seleziona "Windows 64-bit (Zip)".
    - Clicca su "Download".

2. **Estrazione dei file**:
    - Dopo aver scaricato il file zip, estrailo.
    - Sposta la cartella estratta in `C:\` e rinominala in `mongosh`. Il percorso completo dovrebbe essere `C:\mongosh`.

### 3. Creazione dei collegamenti sul desktop

1. **Collegamento per `mongod.exe`**:
    - Naviga fino a `C:\mongodb\bin`.
    - Individua il file `mongod.exe`.
    - Fai clic con il tasto destro su `mongod.exe` e seleziona "Crea collegamento".
    - Sposta il collegamento creato sul desktop.

2. **Collegamento per `mongosh.exe`**:
    - Naviga fino a `C:\mongosh\bin`.
    - Individua il file `mongosh.exe`.
    - Fai clic con il tasto destro su `mongosh.exe` e seleziona "Crea collegamento".
    - Sposta il collegamento creato sul desktop.

## Avvio di MongoDB e Mongosh

1. **Avvio di MongoDB (`mongod.exe`)**:
    - Fai doppio clic sul collegamento `mongod.exe` sul desktop.
    - Si aprirà una finestra del prompt dei comandi che eseguirà il server MongoDB.
    - Lascia questa finestra aperta per mantenere il server in esecuzione.

2. **Avvio di Mongosh (`mongosh.exe`)**:
    - Fai doppio clic sul collegamento `mongosh.exe` sul desktop.
    - Si aprirà una nuova finestra del prompt dei comandi con l'interfaccia shell di MongoDB, pronta per accettare comandi.

Per ulteriori dettagli sull'installazione e la configurazione, consulta la [documentazione ufficiale di MongoDB](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows-zip/) e la [guida all'installazione di Mongosh](https://www.mongodb.com/docs/mongodb-shell/install/).

Inoltre, per una guida visiva all'installazione di MongoDB su Windows, puoi consultare il seguente video:

[Come installare il pacchetto ZIP di MongoDB e iniziare a usarlo](https://www.youtube.com/watch?v=BqppnbosjUY)
