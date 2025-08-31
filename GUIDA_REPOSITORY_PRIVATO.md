# Guida per Rendere Privato il Repository

## Importante: Limitazioni Tecniche

**Attenzione**: Non è possibile rendere privato un repository GitHub attraverso modifiche al codice o ai file del repository stesso. La visibilità del repository è un'impostazione a livello di repository che deve essere modificata attraverso l'interfaccia web di GitHub o le API di GitHub con i permessi appropriati.

## Come Rendere Privato il Repository

### Passaggi per il Proprietario del Repository:

1. **Accedere a GitHub**
   - Andare su [github.com](https://github.com)
   - Effettuare il login con l'account proprietario del repository

2. **Navigare al Repository**
   - Andare al repository `gianlucapironato/Materiale_TPS_5_2425`

3. **Accedere alle Impostazioni**
   - Cliccare sulla scheda "Settings" nella barra di navigazione del repository
   - Scorrere verso il basso fino alla sezione "Danger Zone"

4. **Cambiare la Visibilità**
   - Cliccare su "Change repository visibility"
   - Selezionare "Make private"
   - Confermare l'azione digitando il nome del repository quando richiesto

### Requisiti e Permessi:
- Solo il proprietario del repository o i collaboratori con permessi di amministratore possono modificare la visibilità
- Per repository di organizzazioni, potrebbero essere necessari permessi specifici dell'organizzazione

## Implicazioni del Rendere Privato il Repository

### Accesso Limitato:
- Solo gli utenti specificamente invitati potranno accedere al repository
- Gli studenti dovranno essere aggiunti come collaboratori per accedere al materiale
- I link pubblici esistenti smetteranno di funzionare per utenti non autorizzati

### Gestione degli Utenti:
Una volta privato, il proprietario dovrà:
1. Invitare singolarmente ogni studente che necessita accesso
2. Gestire i permessi per ogni collaboratore
3. Considerare l'uso di GitHub Classroom per gestire più facilmente gli accessi degli studenti

## Aggiornamenti alla Documentazione

Se il repository diventa privato, sarà necessario aggiornare la sezione "Utilizzo" nel README.md per riflettere le nuove modalità di accesso.

### Modifiche Suggerite al README.md:

La sezione attuale:
```markdown
## Utilizzo

- **Accesso**: è possibile clonare il repository o scaricare i singoli file necessari.
- **Aggiornamenti**: il materiale qui presente è da considerarsi come in costante aggiornamento (sperabilmente con frequenza regolare).
```

Dovrebbe diventare:
```markdown
## Utilizzo

- **Accesso**: il repository è privato. Gli studenti autorizzati possono clonare il repository o scaricare i singoli file necessari previa autorizzazione del docente.
- **Aggiornamenti**: il materiale qui presente è da considerarsi come in costante aggiornamento (sperabilmente con frequenza regolare).
```

## Alternative Consigliate

### GitHub Classroom:
Per un corso scolastico, si consiglia di considerare [GitHub Classroom](https://classroom.github.com/), che offre:
- Gestione automatica degli accessi degli studenti
- Strumenti specifici per l'educazione
- Distribuzione automatica di assignment e materiali
- Raccolta automatica dei compiti

### Repository Template:
Un'altra opzione è creare un repository template che gli studenti possono utilizzare per creare le proprie copie private del materiale.

## Contatti per Assistenza

Per assistenza tecnica nella modifica delle impostazioni del repository, contattare:
- **Email**: gianluca[dot]pironato [at] issgreppi[dot]it

---

**Nota**: Questa guida è stata creata per assistere nella comprensione del processo di modifica della visibilità del repository. Le modifiche effettive devono essere eseguite dal proprietario del repository attraverso l'interfaccia GitHub.